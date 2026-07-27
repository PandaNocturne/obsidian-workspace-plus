'use strict';

var layoutUtils = require('../../layout-utils');

function attachLayoutRestoreMethods(WorkspacePlusPlus) {
    WorkspacePlusPlus.prototype.isSidebarRestoreEnabled = function () {
        return this.data.restoreSidebars !== false;
    };

    WorkspacePlusPlus.prototype.getWorkspaceRestoreScope = function () {
        return this.isSidebarRestoreEnabled() ? 'full' : 'main-only';
    };

    WorkspacePlusPlus.prototype.buildLayoutForRestore = function (layout) {
        if (!layout) return layout;
        if (this.isSidebarRestoreEnabled()) {
            return layoutUtils.cloneLayout(layout);
        }

        var currentLayout = null;
        try {
            currentLayout = this.getCurrentWorkspaceLayout();
        } catch (e) {
            currentLayout = null;
        }
        return layoutUtils.mergeMainLayoutIntoCurrent(layout, currentLayout);
    };

    WorkspacePlusPlus.prototype.createLayoutPathVaultApi = function () {
        var vault = this.app && this.app.vault;
        return {
            pathExists: function (filePath) {
                if (!vault || typeof vault.getAbstractFileByPath !== 'function') return false;
                try {
                    return !!vault.getAbstractFileByPath(filePath);
                } catch (e) {
                    return false;
                }
            },
            getFiles: function () {
                if (!vault || typeof vault.getFiles !== 'function') return [];
                try {
                    return vault.getFiles() || [];
                } catch (e) {
                    return [];
                }
            },
        };
    };

    /**
     * If layout references missing notes, remap paths by basename match in the vault.
     * Mutates `layout` in place when remaps are found so session/history storage updates.
     */
    WorkspacePlusPlus.prototype.remapMissingLayoutPaths = function (layout) {
        if (!layout) {
            return { layout: layout, changed: false, remaps: [] };
        }
        return layoutUtils.remapMissingLayoutFilePaths(
            layout,
            this.createLayoutPathVaultApi(),
            { inPlace: true }
        );
    };

    WorkspacePlusPlus.prototype.applyWorkspaceLayout = function (layout, options) {
        options = options || {};
        if (!layout) return Promise.resolve();
        var nextLayout = this.buildLayoutForRestore(layout);
        var remapResult = this.remapMissingLayoutPaths(nextLayout);
        nextLayout = remapResult.layout || nextLayout;

        // Keep stored session/history layout paths in sync when files were relocated.
        if (remapResult.changed && layout && layout !== nextLayout) {
            this.remapMissingLayoutPaths(layout);
        }

        var apply = Promise.resolve(this.app.workspace.changeLayout(nextLayout));
        if (options.catchErrors === false) return apply;
        return apply.catch(function () {});
    };
}

module.exports = attachLayoutRestoreMethods;
