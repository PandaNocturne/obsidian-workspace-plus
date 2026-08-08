'use strict';

var layoutUtils = require('../../layout-utils');

function attachLayoutRestoreMethods(WorkspacePlusPlus) {
    WorkspacePlusPlus.prototype.isSidebarRestoreEnabled = function () {
        return this.data.restoreSidebars !== false;
    };

    WorkspacePlusPlus.prototype.isRestoreTabsByFilenameEnabled = function () {
        return this.data.restoreTabsByFilename !== false;
    };

    WorkspacePlusPlus.prototype.getNoteUidPropertyName = function () {
        if (this.data.noteUidProperty === undefined || this.data.noteUidProperty === null) {
            return 'uid';
        }
        return String(this.data.noteUidProperty).trim();
    };

    WorkspacePlusPlus.prototype.isNoteUidBindingEnabled = function () {
        return !!this.getNoteUidPropertyName();
    };

    WorkspacePlusPlus.prototype.getWorkspaceRestoreScope = function () {
        return this.isSidebarRestoreEnabled() ? 'full' : 'main-only';
    };

    WorkspacePlusPlus.prototype.buildLayoutForRestore = function (layout) {
        if (!layout) return layout;
        if (this.isSidebarRestoreEnabled()) {
            return layoutUtils.cloneLayout(layout);
        }

        // Use the live workspace layout (not UID-annotated) so sidebar leaf ids
        // match what Obsidian currently has when changeLayout runs.
        var currentLayout = null;
        try {
            currentLayout = this.app.workspace.getLayout();
        } catch (e) {
            currentLayout = null;
        }
        return layoutUtils.mergeMainLayoutIntoCurrent(layout, currentLayout);
    };

    WorkspacePlusPlus.prototype.readNoteUidForPath = function (filePath) {
        if (!this.isNoteUidBindingEnabled() || !filePath) return '';
        var prop = this.getNoteUidPropertyName();
        if (!prop) return '';
        var vault = this.app && this.app.vault;
        var metadataCache = this.app && this.app.metadataCache;
        if (!vault || typeof vault.getAbstractFileByPath !== 'function') return '';
        if (!metadataCache || typeof metadataCache.getFileCache !== 'function') return '';
        try {
            var file = vault.getAbstractFileByPath(filePath);
            if (!file) return '';
            var cache = metadataCache.getFileCache(file);
            var fm = cache && cache.frontmatter;
            if (!fm || fm[prop] == null) return '';
            return layoutUtils.normalizeUidValue(fm[prop]);
        } catch (e) {
            return '';
        }
    };

    WorkspacePlusPlus.prototype.createLayoutPathVaultApi = function () {
        var self = this;
        var vault = this.app && this.app.vault;
        var uidIndex = null;

        function getFiles() {
            if (!vault || typeof vault.getFiles !== 'function') return [];
            try {
                return vault.getFiles() || [];
            } catch (e) {
                return [];
            }
        }

        function getFileUid(filePath) {
            return self.readNoteUidForPath(filePath);
        }

        function findPathByUid(uid) {
            var target = layoutUtils.normalizeUidValue(uid);
            if (!target) return null;
            if (!uidIndex) {
                uidIndex = {};
                var files = getFiles();
                for (var i = 0; i < files.length; i++) {
                    var entry = files[i];
                    var path = typeof entry === 'string' ? entry : (entry && entry.path);
                    if (!path) continue;
                    var fileUid = getFileUid(path);
                    if (fileUid && uidIndex[fileUid] === undefined) {
                        uidIndex[fileUid] = path;
                    }
                }
            }
            return uidIndex[target] || null;
        }

        return {
            pathExists: function (filePath) {
                if (!vault || typeof vault.getAbstractFileByPath !== 'function') return false;
                try {
                    return !!vault.getAbstractFileByPath(filePath);
                } catch (e) {
                    return false;
                }
            },
            getFiles: getFiles,
            getFileUid: getFileUid,
            findPathByUid: findPathByUid,
        };
    };

    WorkspacePlusPlus.prototype.annotateLayoutNoteUids = function (layout, options) {
        options = options || {};
        if (!layout) return layout;
        if (!this.isNoteUidBindingEnabled()) {
            return options.inPlace ? layout : layoutUtils.cloneLayout(layout);
        }
        return layoutUtils.annotateLayoutNoteUids(
            layout,
            this.createLayoutPathVaultApi(),
            { inPlace: !!options.inPlace }
        ).layout;
    };

    /**
     * If layout references missing/moved notes, remap paths by UID then basename.
     * Mutates `layout` in place when remaps are found so session/history storage updates.
     *
     * options.scope: 'full' | 'main-only' (defaults to getWorkspaceRestoreScope())
     */
    WorkspacePlusPlus.prototype.remapMissingLayoutPaths = function (layout, options) {
        options = options || {};
        if (!layout) {
            return { layout: layout, changed: false, remaps: [] };
        }
        var scope = options.scope || this.getWorkspaceRestoreScope();
        return layoutUtils.remapMissingLayoutFilePaths(
            layout,
            this.createLayoutPathVaultApi(),
            {
                inPlace: true,
                restoreByFilename: this.isRestoreTabsByFilenameEnabled(),
                restoreByUid: this.isNoteUidBindingEnabled(),
                scope: scope === 'main-only' ? 'main-only' : 'full',
            }
        );
    };

    /**
     * Re-copy live sidebars onto a layout right before apply, so main-only restore
     * never carries remapped or stale left/right/floating branches.
     */
    WorkspacePlusPlus.prototype.preserveLiveSidebarsOnLayout = function (layout) {
        if (!layout || typeof layout !== 'object') return layout;
        var live = null;
        try {
            live = this.app.workspace.getLayout();
        } catch (e) {
            live = null;
        }
        if (!live || typeof live !== 'object') return layout;

        layout.left = live.left !== undefined ? layoutUtils.cloneLayout(live.left) : layout.left;
        layout.right = live.right !== undefined ? layoutUtils.cloneLayout(live.right) : layout.right;
        if (Object.prototype.hasOwnProperty.call(live, 'floating')) {
            layout.floating = layoutUtils.cloneLayout(live.floating);
        }
        return layout;
    };

    WorkspacePlusPlus.prototype.applyWorkspaceLayout = function (layout, options) {
        options = options || {};
        if (!layout) return Promise.resolve();
        var scope = this.getWorkspaceRestoreScope();
        var nextLayout = this.buildLayoutForRestore(layout);
        var remapResult = this.remapMissingLayoutPaths(nextLayout, { scope: scope });
        nextLayout = remapResult.layout || nextLayout;

        // Keep stored session/history layout paths in sync when files were relocated.
        // Use the same scope so main-only restore never rewrites saved sidebar paths.
        if (remapResult.changed && layout && layout !== nextLayout) {
            this.remapMissingLayoutPaths(layout, { scope: scope });
        }

        if (scope === 'main-only') {
            this.preserveLiveSidebarsOnLayout(nextLayout);
        }

        var layoutToApply = layoutUtils.stripLayoutNoteUids(nextLayout);
        var apply = Promise.resolve(this.app.workspace.changeLayout(layoutToApply));
        if (options.catchErrors === false) return apply;
        return apply.catch(function () {});
    };
}

module.exports = attachLayoutRestoreMethods;
