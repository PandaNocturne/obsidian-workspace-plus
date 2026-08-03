'use strict';

var obsidian = require('obsidian');
var i18n = require('../i18n');

function isWorkspaceLeaf(node) {
    return !!(node && typeof node.getViewState === 'function' && node.view);
}

function getActiveLeaf(app) {
    var active = app.workspace.activeLeaf;
    if (!active && typeof app.workspace.getMostRecentLeaf === 'function') {
        active = app.workspace.getMostRecentLeaf();
    }
    return active || null;
}

/** Prefer the leaf's own document (popout window) over the main app document. */
function getLeafDocument(leaf) {
    try {
        var el = (leaf && leaf.containerEl)
            || (leaf && leaf.view && leaf.view.containerEl);
        if (el && el.ownerDocument) return el.ownerDocument;
    } catch (err) { /* ignore */ }
    return (typeof activeDocument !== 'undefined' && activeDocument) || document;
}

function getDoc(leaf) {
    if (leaf) return getLeafDocument(leaf);
    return (typeof activeDocument !== 'undefined' && activeDocument) || document;
}

/**
 * Resolve the tab group (WorkspaceTabs) that owns this leaf.
 * Walks up in case the immediate parent is an unexpected wrapper.
 */
function getTabGroup(leaf) {
    var node = leaf && leaf.parent;
    var depth = 0;
    while (node && depth < 6) {
        if (Array.isArray(node.children)
            && (typeof node.selectTab === 'function'
                || typeof node.selectTabIndex === 'function'
                || node.type === 'tabs')) {
            return node;
        }
        // Fallback: parent whose children are mostly workspace leaves
        if (Array.isArray(node.children) && node.children.length > 0) {
            var leafCount = 0;
            for (var i = 0; i < node.children.length; i++) {
                if (isWorkspaceLeaf(node.children[i])) leafCount += 1;
            }
            if (leafCount > 0 && leafCount === node.children.length) return node;
        }
        node = node.parent;
        depth += 1;
    }
    return (leaf && leaf.parent) || null;
}

function collectLeavesFromGroup(group) {
    var leaves = [];
    if (!group || !Array.isArray(group.children)) return leaves;
    for (var i = 0; i < group.children.length; i++) {
        var child = group.children[i];
        if (isWorkspaceLeaf(child)) leaves.push(child);
    }
    return leaves;
}

function getLeafTitle(leaf) {
    if (!leaf) return '';
    if (typeof leaf.getDisplayText === 'function') {
        var text = leaf.getDisplayText();
        if (text) return text;
    }
    if (leaf.view && typeof leaf.view.getDisplayText === 'function') {
        var viewText = leaf.view.getDisplayText();
        if (viewText) return viewText;
    }
    return (leaf.view && leaf.view.getViewType && leaf.view.getViewType()) || 'Tab';
}

function getLeafIcon(leaf) {
    if (leaf && leaf.view && typeof leaf.view.getIcon === 'function') {
        var icon = leaf.view.getIcon();
        if (icon) return icon;
    }
    return 'file-text';
}

function getLeafPreviewText(leaf) {
    var view = leaf && leaf.view;
    if (!view) return '';
    try {
        if (view.editor && typeof view.editor.getValue === 'function') {
            return String(view.editor.getValue() || '').trim();
        }
        if (typeof view.data === 'string') {
            return view.data.trim();
        }
        if (view.file && view.file.path) {
            return view.file.path;
        }
    } catch (err) { /* ignore */ }
    return '';
}

function getCloneSourceEl(leaf) {
    var root = (leaf && leaf.view && leaf.view.containerEl) || (leaf && leaf.containerEl);
    if (!root) return null;
    return root.querySelector('.view-content')
        || root.querySelector('.workspace-leaf-content')
        || root;
}

function sanitizeClone(clone) {
    if (!clone) return clone;
    try {
        clone.removeAttribute('id');
        // Drop split-pane layout geometry so clones cannot bleed across cards
        if (clone.style) {
            clone.style.removeProperty('position');
            clone.style.removeProperty('top');
            clone.style.removeProperty('left');
            clone.style.removeProperty('right');
            clone.style.removeProperty('bottom');
            clone.style.removeProperty('width');
            clone.style.removeProperty('height');
            clone.style.removeProperty('inset');
            clone.style.removeProperty('transform');
        }
        var withIds = clone.querySelectorAll('[id]');
        for (var i = 0; i < withIds.length; i++) {
            withIds[i].removeAttribute('id');
        }
        var editables = clone.querySelectorAll('[contenteditable]');
        for (var j = 0; j < editables.length; j++) {
            editables[j].setAttribute('contenteditable', 'false');
            editables[j].setAttribute('tabindex', '-1');
        }
        var media = clone.querySelectorAll('video, audio');
        for (var m = 0; m < media.length; m++) {
            try { media[m].pause && media[m].pause(); } catch (e) { /* ignore */ }
            media[m].removeAttribute('autoplay');
        }
    } catch (err) { /* ignore */ }
    return clone;
}

function cloneLooksEmpty(clone) {
    if (!clone) return true;
    var text = String(clone.textContent || '').replace(/\s+/g, ' ').trim();
    if (text.length >= 8) return false;
    if (clone.querySelector('img, canvas, iframe, video')) return false;
    var preview = clone.querySelector('.markdown-preview-view, .markdown-rendered');
    if (preview && String(preview.textContent || '').replace(/\s+/g, ' ').trim().length >= 2) {
        return false;
    }
    var cmContent = clone.querySelector('.cm-content');
    if (cmContent && String(cmContent.textContent || '').replace(/\s+/g, ' ').trim().length >= 2) {
        return false;
    }
    // Empty .cm-editor shells must NOT count as content
    return true;
}

/** Reject Canvas / Excalidraw JSON / markdown-source dumps shown as "preview". */
function cloneLooksLikeSourceCode(clone) {
    if (!clone) return true;
    if (clone.querySelector(
        '.canvas-wrapper, .canvas-node, .excalidraw, .excalidraw-wrapper, .layer-ui__wrapper, canvas'
    )) {
        return false;
    }
    var text = String(clone.textContent || '').replace(/\s+/g, ' ').trim();
    if (!text) return false;
    if (text.charAt(0) === '{' && (
        text.indexOf('"nodes"') >= 0
        || text.indexOf('"elements"') >= 0
        || text.indexOf('"type"') >= 0
        || text.indexOf('excalidraw') >= 0
    )) {
        return true;
    }
    if (clone.querySelector('.cm-editor, .cm-content, .markdown-source-view, .mod-cm6')) {
        if (text.charAt(0) === '{' || text.indexOf('"elements"') >= 0 || text.indexOf('"nodes"') >= 0) {
            return true;
        }
    }
    return false;
}

function getLeafViewType(leaf) {
    try {
        if (leaf && leaf.view && typeof leaf.view.getViewType === 'function') {
            var type = leaf.view.getViewType();
            if (type) return type;
        }
        var vs = leaf && typeof leaf.getViewState === 'function' ? leaf.getViewState() : null;
        if (vs && typeof vs.type === 'string') return vs.type;
    } catch (err) { /* ignore */ }
    return '';
}

function isCanvasFile(file) {
    return !!(file && file.extension === 'canvas');
}

function isExcalidrawFile(app, file) {
    if (!file) return false;
    if (file.extension === 'excalidraw') return true;
    var name = file.name || '';
    if (/\.excalidraw\.md$/i.test(name)) return true;
    if (file.extension !== 'md') return false;
    try {
        var cache = app && app.metadataCache && app.metadataCache.getFileCache(file);
        var fm = cache && cache.frontmatter;
        if (fm && (fm['excalidraw-plugin'] != null || fm.excalidraw != null)) return true;
    } catch (err) { /* ignore */ }
    return false;
}

function isCanvasOrExcalidrawLeaf(app, leaf) {
    var type = getLeafViewType(leaf);
    if (type === 'canvas' || type === 'excalidraw') return true;
    var file = getLeafFile(app, leaf);
    return isCanvasFile(file) || isExcalidrawFile(app, file);
}

function isAppDarkTheme() {
    try {
        var doc = (typeof activeDocument !== 'undefined' && activeDocument) || document;
        return !!(doc && doc.body && doc.body.classList.contains('theme-dark'));
    } catch (err) {
        return false;
    }
}

/** Match Excalidraw plugin getIMGFilename: strip last ext, append export type. */
function getExcalidrawExportPath(filePath, exportType) {
    if (!filePath || !exportType) return '';
    var lastDot = filePath.lastIndexOf('.');
    if (lastDot < 0) return filePath + '.' + exportType;
    return filePath.substring(0, lastDot) + '.' + exportType;
}

/**
 * Prefer Excalidraw auto-export siblings (cheap static assets).
 * Types mirror Excalidraw EXPORT_TYPES: svg / dark.svg / light.svg / png / …
 */
function findExcalidrawExportFile(app, file) {
    if (!app || !app.vault || !file || !file.path) return null;
    var preferDark = isAppDarkTheme();
    var types = preferDark
        ? ['dark.svg', 'dark.png', 'svg', 'png', 'light.svg', 'light.png']
        : ['light.svg', 'light.png', 'svg', 'png', 'dark.svg', 'dark.png'];

    for (var i = 0; i < types.length; i++) {
        var path = getExcalidrawExportPath(file.path, types[i]);
        if (!path) continue;
        try {
            var af = app.vault.getAbstractFileByPath(path);
            if (isTFile(af)) return af;
        } catch (err) { /* ignore */ }
    }
    return null;
}

function fillStaticImagePreview(host, src) {
    if (!host || !src) return false;
    host.empty();
    var wrap = host.createDiv({ cls: 'wpp-tab-switcher-clone wpp-tab-switcher-static-preview' });
    wrap.createEl('img', {
        attr: {
            src: src,
            alt: '',
            draggable: 'false',
        },
    });
    return true;
}

/** Snapshot the largest canvas already painted in a live leaf (no new Excalidraw mount). */
function captureLeafCanvasPreview(leaf) {
    var source = getCloneSourceEl(leaf);
    if (!source || typeof source.querySelectorAll !== 'function') return null;
    var canvases = source.querySelectorAll('canvas');
    var best = null;
    var bestArea = 0;
    for (var i = 0; i < canvases.length; i++) {
        var canvas = canvases[i];
        var area = (canvas.width || 0) * (canvas.height || 0);
        if (area > bestArea) {
            bestArea = area;
            best = canvas;
        }
    }
    if (!best || bestArea < 64) return null;
    try {
        return best.toDataURL('image/jpeg', 0.55);
    } catch (err) {
        try {
            return best.toDataURL('image/png');
        } catch (err2) {
            return null;
        }
    }
}

/** Deep-clone a tab's view DOM for thumbnail preview (does not touch the live leaf). */
function buildLeafViewClone(leaf, options) {
    var source = getCloneSourceEl(leaf);
    if (!source) return null;
    try {
        var clone = source.cloneNode(true);
        sanitizeClone(clone);
        clone.classList.add('wpp-tab-switcher-clone');
        if (cloneLooksEmpty(clone)) return null;
        if (options && options.rejectSource && cloneLooksLikeSourceCode(clone)) return null;
        return clone;
    } catch (err) {
        return null;
    }
}

function leafHasVisualPreview(leaf) {
    var source = getCloneSourceEl(leaf);
    if (!source) return false;
    return !!source.querySelector(
        'canvas, .canvas-wrapper, .canvas-node, .excalidraw, .excalidraw-wrapper, .layer-ui__wrapper'
    );
}

function waitForVisualPreview(leaf, maxAttempts) {
    var attempts = Math.max(1, maxAttempts || 10);
    return new Promise(function (resolve) {
        function tick() {
            if (leafHasVisualPreview(leaf) || attempts <= 1) {
                resolve();
                return;
            }
            attempts -= 1;
            if (typeof requestAnimationFrame === 'function') {
                requestAnimationFrame(function () {
                    setTimeout(tick, 40);
                });
            } else {
                setTimeout(tick, 50);
            }
        }
        tick();
    });
}

function isTFile(file) {
    return !!(file
        && typeof file.path === 'string'
        && typeof file.extension === 'string'
        && !file.children);
}

function getLeafFile(app, leaf) {
    if (!app || !leaf) return null;

    if (leaf.view && isTFile(leaf.view.file)) return leaf.view.file;

    try {
        if (leaf.view && typeof leaf.view.getState === 'function') {
            var viewState = leaf.view.getState();
            if (viewState && typeof viewState.file === 'string') {
                var fromView = app.vault.getAbstractFileByPath(viewState.file);
                if (isTFile(fromView)) return fromView;
            }
        }
    } catch (err) { /* ignore */ }

    try {
        var vs = typeof leaf.getViewState === 'function' ? leaf.getViewState() : null;
        var path = vs && vs.state && (vs.state.file || vs.state.path);
        if (!path && vs && typeof vs.file === 'string') path = vs.file;
        if (typeof path === 'string') {
            var fromLeaf = app.vault.getAbstractFileByPath(path);
            if (isTFile(fromLeaf)) return fromLeaf;
        }
    } catch (err2) { /* ignore */ }

    return null;
}

function waitFrames(count) {
    return new Promise(function (resolve) {
        var left = Math.max(1, count || 1);
        function step() {
            left -= 1;
            if (left <= 0) resolve();
            else requestAnimationFrame(step);
        }
        if (typeof requestAnimationFrame === 'function') requestAnimationFrame(step);
        else setTimeout(resolve, 32);
    });
}

function ensureLeafLoaded(leaf) {
    if (!leaf) return Promise.resolve();
    try {
        if (typeof leaf.loadIfDeferred === 'function') {
            return Promise.resolve(leaf.loadIfDeferred()).catch(function () { /* ignore */ });
        }
    } catch (err) { /* ignore */ }
    return Promise.resolve();
}

function fillIconOnly(host, leaf) {
    host.empty();
    var iconWrap = host.createDiv({ cls: 'wpp-tab-switcher-preview-icon' });
    obsidian.setIcon(iconWrap, getLeafIcon(leaf));
}

function fillTextOrIcon(host, leaf) {
    var previewText = getLeafPreviewText(leaf);
    if (previewText) {
        host.createEl('pre', {
            cls: 'wpp-tab-switcher-preview-text',
            text: previewText.slice(0, 1200),
        });
        return;
    }
    fillIconOnly(host, leaf);
}

function renderMarkdownInto(app, plugin, host, file, markdown) {
    host.empty();
    host.addClass('wpp-tab-switcher-clone');
    host.addClass('wpp-tab-switcher-md-fallback');

    var renderer = obsidian.MarkdownRenderer;
    if (!renderer) return Promise.resolve(false);

    var source = String(markdown || '').slice(0, 5000);
    var path = (file && file.path) || '';

    // Prefer modern API; fall back to deprecated renderMarkdown
    if (typeof renderer.render === 'function') {
        return Promise.resolve(renderer.render(app, source, host, path, plugin))
            .then(function () { return true; })
            .catch(function () { return false; });
    }
    if (typeof renderer.renderMarkdown === 'function') {
        try {
            renderer.renderMarkdown(source, host, path, plugin);
            return Promise.resolve(true);
        } catch (err) {
            return Promise.resolve(false);
        }
    }
    return Promise.resolve(false);
}

/** Build Obsidian wiki-embed markdown for a vault file (![[path]]). */
function buildWikiEmbedMarkdown(file) {
    if (!file || typeof file.path !== 'string' || !file.path) return '';
    // Escape pipe so display-text separators cannot break the link target
    var path = file.path.replace(/\|/g, '\\|');
    return '![[' + path + ']]';
}

function embedLooksReady(host) {
    if (!host) return false;
    return !!host.querySelector(
        '.internal-embed, .markdown-embed, .media-embed, .canvas-wrapper, .canvas-node,'
        + ' .excalidraw, .excalidraw-wrapper, .layer-ui__wrapper, canvas, img, iframe, svg'
    );
}

function waitForEmbedReady(host, maxAttempts) {
    var attempts = Math.max(1, maxAttempts || 16);
    return new Promise(function (resolve) {
        function tick() {
            if (embedLooksReady(host) || attempts <= 1) {
                resolve(embedLooksReady(host));
                return;
            }
            attempts -= 1;
            if (typeof requestAnimationFrame === 'function') {
                requestAnimationFrame(function () {
                    setTimeout(tick, 40);
                });
            } else {
                setTimeout(tick, 50);
            }
        }
        tick();
    });
}

/** Render a file as an Obsidian document embed (used for Canvas; Excalidraw uses static path). */
function renderFileEmbedInto(app, plugin, host, file) {
    var md = buildWikiEmbedMarkdown(file);
    if (!md) return Promise.resolve(false);

    host.empty();
    host.addClass('wpp-tab-switcher-clone');
    host.addClass('wpp-tab-switcher-embed');

    var renderer = obsidian.MarkdownRenderer;
    if (!renderer) return Promise.resolve(false);

    var path = file.path || '';
    var renderPromise;
    if (typeof renderer.render === 'function') {
        renderPromise = Promise.resolve(renderer.render(app, md, host, path, plugin));
    } else if (typeof renderer.renderMarkdown === 'function') {
        try {
            renderer.renderMarkdown(md, host, path, plugin);
            renderPromise = Promise.resolve();
        } catch (err) {
            return Promise.resolve(false);
        }
    } else {
        return Promise.resolve(false);
    }

    return renderPromise
        .then(function () { return waitForEmbedReady(host, 20); })
        .catch(function () { return false; });
}

function collectGroupLeaves(app) {
    var active = getActiveLeaf(app);
    if (!active) {
        return { group: null, leaves: [], active: null };
    }

    // Always scope to the current pane's tab group — never flatten all split panes.
    var group = getTabGroup(active);
    var leaves = collectLeavesFromGroup(group);

    if (leaves.length === 0) {
        leaves = [active];
    }

    return { group: group, leaves: leaves, active: active };
}

function isTabGroupNode(node) {
    return !!(node
        && Array.isArray(node.children)
        && (typeof node.selectTab === 'function'
            || typeof node.selectTabIndex === 'function'
            || node.type === 'tabs'));
}

/** All editor tab groups under rootSplit (left-to-right / tree order). */
function collectRootTabGroups(app) {
    var groups = [];
    var root = app && app.workspace && app.workspace.rootSplit;
    if (!root) return groups;

    function walk(node) {
        if (!node) return;
        if (isTabGroupNode(node)) {
            groups.push(node);
            return;
        }
        if (!Array.isArray(node.children)) return;
        for (var i = 0; i < node.children.length; i++) {
            walk(node.children[i]);
        }
    }

    walk(root);
    return groups;
}

function pickLeafInGroup(app, group, preferred) {
    var leaves = collectLeavesFromGroup(group);
    if (!leaves.length) return null;
    if (preferred && leaves.indexOf(preferred) >= 0) return preferred;

    var active = getActiveLeaf(app);
    if (active && leaves.indexOf(active) >= 0) return active;

    try {
        if (group && typeof group.currentTab === 'number' && group.children) {
            var cur = group.children[group.currentTab];
            if (isWorkspaceLeaf(cur)) return cur;
        }
    } catch (err) { /* ignore */ }

    return leaves[0] || null;
}

function isLeafPinned(leaf) {
    if (!leaf) return false;
    if (typeof leaf.pinned === 'boolean') return leaf.pinned;
    try {
        var vs = typeof leaf.getViewState === 'function' ? leaf.getViewState() : null;
        return !!(vs && vs.pinned);
    } catch (err) {
        return false;
    }
}

function moveLeafInParent(parent, fromIndex, toIndex) {
    if (!parent || !Array.isArray(parent.children)) return false;
    if (fromIndex === toIndex || fromIndex < 0 || toIndex < 0) return false;
    if (fromIndex >= parent.children.length || toIndex >= parent.children.length) return false;

    var leaf = parent.children[fromIndex];
    if (!leaf) return false;

    // Final-index semantics: leaf should end at toIndex after the move.
    try {
        if (typeof parent.removeChild === 'function' && typeof parent.insertChild === 'function') {
            parent.removeChild(leaf);
            parent.insertChild(toIndex, leaf);
        } else {
            parent.children.splice(fromIndex, 1);
            parent.children.splice(toIndex, 0, leaf);
            if (typeof leaf.setParent === 'function') leaf.setParent(parent);
            if (typeof parent.recomputeChildrenDimensions === 'function') {
                parent.recomputeChildrenDimensions();
            }
        }
        if (typeof parent.selectTab === 'function') parent.selectTab(leaf);
        else if (typeof parent.selectTabIndex === 'function') parent.selectTabIndex(toIndex);
        return true;
    } catch (err) {
        try {
            var idx = parent.children.indexOf(leaf);
            if (idx >= 0) parent.children.splice(idx, 1);
            parent.children.splice(toIndex, 0, leaf);
            if (typeof parent.recomputeChildrenDimensions === 'function') {
                parent.recomputeChildrenDimensions();
            }
            return true;
        } catch (err2) {
            return false;
        }
    }
}

function removeOverlayDom(doc) {
    if (!doc || !doc.body) return;
    var nodes = doc.body.querySelectorAll(
        '.wpp-tab-switcher-backdrop, .wpp-tab-switcher-panel, .wpp-tab-switcher-floating-hint, .wpp-tab-switcher-toolbar, .wpp-tab-switcher-drag-clone'
    );
    for (var i = 0; i < nodes.length; i++) {
        try { nodes[i].remove(); } catch (err) { /* ignore */ }
    }
    try {
        doc.body.style.removeProperty('--wpp-mc-source-width');
        doc.body.style.removeProperty('--wpp-mc-source-height');
        doc.body.style.removeProperty('--wpp-mc-content-zoom');
        doc.body.style.removeProperty('--wpp-mc-zoom');
    } catch (err2) { /* ignore */ }
    doc.body.removeClass('wpp-mission-control-open');
    doc.body.classList.remove('wpp-tab-switcher-dragging');
}

// ============================================================
// Tab Switcher — overlay only (workspace tabs stay as-is underneath)
// ============================================================
var TabSwitcherModal = /** @class */ (function () {
    function TabSwitcherModal(app, plugin) {
        this.app = app;
        this.plugin = plugin;
        this.leaves = [];
        this.group = null;
        this.groups = [];
        this.groupIndex = 0;
        this.cardEls = [];
        this.focusedIndex = 0;
        // Stagger heavy embeds (Canvas) so opening task view does not mount them all at once
        this._previewQueue = [];
        this._previewActive = 0;
        this._previewConcurrency = 1;
        this._previewGeneration = 0;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onWheel = this._onWheel.bind(this);
        this._onBackdropClick = this._onBackdropClick.bind(this);
        this._onPanelClick = this._onPanelClick.bind(this);
        this._onPanelMove = this._onPanelMove.bind(this);
        this._wheelAcc = 0;
        this._wheelLastAt = 0;
    }

    TabSwitcherModal.prototype.enqueuePreview = function (task) {
        var self = this;
        var generation = this._previewGeneration;
        return new Promise(function (resolve) {
            self._previewQueue.push(function () {
                if (generation !== self._previewGeneration) {
                    resolve();
                    return;
                }
                return Promise.resolve()
                    .then(task)
                    .then(resolve, function () { resolve(); });
            });
            self.pumpPreviewQueue();
        });
    };

    TabSwitcherModal.prototype.pumpPreviewQueue = function () {
        var self = this;
        var concurrency = Math.max(1, this._previewConcurrency || 1);
        while (this._previewActive < concurrency && this._previewQueue.length > 0) {
            var job = this._previewQueue.shift();
            this._previewActive += 1;
            Promise.resolve()
                .then(job)
                .then(function () { /* ok */ }, function () { /* ignore */ })
                .then(function () {
                    self._previewActive = Math.max(0, self._previewActive - 1);
                    self.pumpPreviewQueue();
                });
        }
    };

    TabSwitcherModal.prototype.cancelPreviewQueue = function () {
        this._previewGeneration += 1;
        this._previewQueue = [];
        this._previewActive = 0;
    };

    TabSwitcherModal.prototype.open = function () {
        var collected = collectGroupLeaves(this.app);
        var doc = getDoc(collected.active);

        // Toggle close / purge any orphaned overlay from a previous instance
        if (doc.body.classList.contains('wpp-mission-control-open')
            || doc.body.querySelector('.wpp-tab-switcher-backdrop')) {
            this.close();
            return;
        }

        this.groups = collectRootTabGroups(this.app);
        if (!this.groups.length && collected.group) {
            this.groups = [collected.group];
        }
        this.groupIndex = collected.group ? this.groups.indexOf(collected.group) : 0;
        if (this.groupIndex < 0) this.groupIndex = 0;

        this.group = this.groups[this.groupIndex] || collected.group;
        this.leaves = collectLeavesFromGroup(this.group);
        if (!this.leaves.length) this.leaves = collected.leaves.slice();
        this.activeLeaf = pickLeafInGroup(this.app, this.group, collected.active) || collected.active;
        this._overlayDoc = doc;

        if (this.leaves.length === 0) {
            new obsidian.Notice(i18n.L.tabSwitcherEmpty);
            return;
        }

        var activeIndex = this.leaves.indexOf(this.activeLeaf);
        if (activeIndex < 0) activeIndex = 0;
        this.focusedIndex = activeIndex;

        doc.body.addClass('wpp-mission-control-open');
        try {
            if (this.plugin && typeof this.plugin.getTaskViewThumbnailSourceSize === 'function') {
                var size = this.plugin.getTaskViewThumbnailSourceSize();
                if (size && size.width && size.height) {
                    doc.body.style.setProperty('--wpp-mc-source-width', size.width + 'px');
                    doc.body.style.setProperty('--wpp-mc-source-height', size.height + 'px');
                }
            }
            if (this.plugin && typeof this.plugin.getTaskViewContentZoom === 'function') {
                doc.body.style.setProperty(
                    '--wpp-mc-content-zoom',
                    String(this.plugin.getTaskViewContentZoom())
                );
            }
        } catch (err) { /* ignore */ }

        this.backdropEl = doc.body.createDiv({ cls: 'wpp-tab-switcher-backdrop' });
        this.backdropEl.addEventListener('click', this._onBackdropClick);

        this.panelEl = doc.body.createDiv({
            cls: 'wpp-tab-switcher-panel',
            attr: {
                role: 'dialog',
                'aria-modal': 'true',
                'aria-label': i18n.L.tabSwitcherTitle,
            },
        });
        this.gridEl = this.panelEl.createDiv({ cls: 'wpp-tab-switcher-grid' });

        this.mountSplitToolbar(doc);

        this.hintEl = doc.body.createDiv({ cls: 'wpp-tab-switcher-floating-hint' });
        this.hintEl.setText(this.getHintText());

        this.cardEls = [];
        this.renderCards();
        this.updateSplitToolbar();

        this.panelEl.addEventListener('click', this._onPanelClick);
        this.panelEl.addEventListener('mousemove', this._onPanelMove);
        doc.addEventListener('keydown', this._onKeyDown, true);
        doc.addEventListener('wheel', this._onWheel, { capture: true, passive: false });

        this.updateFocus(true);
    };

    TabSwitcherModal.prototype.getHintText = function () {
        var base = i18n.L.tabSwitcherHint || '';
        if (this.groups && this.groups.length > 1 && i18n.L.tabSwitcherHintSplit) {
            return base + ' · ' + i18n.L.tabSwitcherHintSplit;
        }
        return base;
    };

    TabSwitcherModal.prototype.mountSplitToolbar = function (doc) {
        var self = this;
        var L = i18n.L;
        this.toolbarEl = doc.body.createDiv({ cls: 'wpp-tab-switcher-toolbar' });

        this.prevSplitBtn = this.toolbarEl.createDiv({
            cls: 'wpp-tab-switcher-split-btn',
            attr: {
                role: 'button',
                tabindex: '-1',
                'aria-label': L.tabSwitcherPrevSplit || 'Previous split',
            },
        });
        this.prevSplitBtn.setText('‹');
        this.prevSplitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            self.shiftSplitGroup(-1);
        });

        this.splitPagesEl = this.toolbarEl.createDiv({
            cls: 'wpp-tab-switcher-split-pages',
            attr: { role: 'tablist', 'aria-label': L.tabSwitcherTitle || 'Splits' },
        });

        this.nextSplitBtn = this.toolbarEl.createDiv({
            cls: 'wpp-tab-switcher-split-btn',
            attr: {
                role: 'button',
                tabindex: '-1',
                'aria-label': L.tabSwitcherNextSplit || 'Next split',
            },
        });
        this.nextSplitBtn.setText('›');
        this.nextSplitBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            self.shiftSplitGroup(1);
        });
    };

    TabSwitcherModal.prototype.updateSplitToolbar = function () {
        if (!this.toolbarEl) return;
        var self = this;
        var count = this.groups ? this.groups.length : 0;
        var show = count > 1;
        this.toolbarEl.classList.toggle('is-hidden', !show);
        this.toolbarEl.style.display = show ? '' : 'none';
        if (!show) return;

        var previewIndex = this.groupIndex || 0;
        var workspaceActive = getActiveLeaf(this.app);
        var workspaceSplitIndex = -1;
        if (workspaceActive) {
            for (var g = 0; g < count; g++) {
                var groupLeaves = collectLeavesFromGroup(this.groups[g]);
                if (groupLeaves.indexOf(workspaceActive) >= 0) {
                    workspaceSplitIndex = g;
                    break;
                }
            }
        }

        if (this.splitPagesEl) {
            this.splitPagesEl.empty();
            for (var i = 0; i < count; i++) {
                (function (pageIndex) {
                    var isPreview = pageIndex === previewIndex;
                    var isWorkspace = pageIndex === workspaceSplitIndex;
                    var page = self.splitPagesEl.createDiv({
                        cls: 'wpp-tab-switcher-split-page'
                            + (isPreview ? ' is-active' : '')
                            + (isWorkspace ? ' is-workspace-split' : ''),
                        attr: {
                            role: 'tab',
                            tabindex: '-1',
                            'aria-selected': isPreview ? 'true' : 'false',
                            'aria-current': isWorkspace ? 'true' : 'false',
                            'aria-label': typeof i18n.L.tabSwitcherSplitLabel === 'function'
                                ? i18n.L.tabSwitcherSplitLabel(pageIndex + 1, count)
                                : String(pageIndex + 1),
                            'data-split-index': String(pageIndex),
                        },
                    });
                    page.setText(String(pageIndex + 1));
                    page.addEventListener('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        self.goToSplitGroup(pageIndex);
                    });
                })(i);
            }
        }

        if (this.hintEl) this.hintEl.setText(this.getHintText());
    };

    /**
     * Jump to a root split by index and show its tabs in task view.
     * Also focuses that pane so zen mode tracks the selected split.
     */
    TabSwitcherModal.prototype.goToSplitGroup = function (index) {
        this.groups = collectRootTabGroups(this.app);
        if (!this.groups.length) return;

        var len = this.groups.length;
        if (len === 1) {
            this.groupIndex = 0;
            this.updateSplitToolbar();
            return;
        }

        var target = ((index % len) + len) % len;
        if (target === this.groupIndex
            && this.group === this.groups[target]
            && this.leaves
            && this.leaves.length > 0) {
            this.updateSplitToolbar();
            return;
        }

        var leaves = collectLeavesFromGroup(this.groups[target]);
        if (leaves.length === 0) {
            // Prefer nearest non-empty neighbor
            var dir = target >= (this.groupIndex || 0) ? 1 : -1;
            var next = target;
            var attempts = 0;
            do {
                next = (next + dir + len) % len;
                leaves = collectLeavesFromGroup(this.groups[next]);
                attempts += 1;
            } while (leaves.length === 0 && attempts < len);
            if (leaves.length === 0) return;
            target = next;
        }

        this.groupIndex = target;
        this.group = this.groups[target];
        this.leaves = leaves;
        // Preview-only: do not change the live workspace active split / zen focus.
        this.activeLeaf = pickLeafInGroup(this.app, this.group, null);

        var activeIndex = this.leaves.indexOf(this.activeLeaf);
        this.focusedIndex = activeIndex >= 0 ? activeIndex : 0;
        this.renderCards();
        this.updateFocus(true);
        this.updateSplitToolbar();
    };

    TabSwitcherModal.prototype.shiftSplitGroup = function (delta) {
        this.groups = collectRootTabGroups(this.app);
        if (!this.groups.length) return;
        var start = this.groupIndex || 0;
        var len = this.groups.length;
        if (len <= 1) {
            this.groupIndex = 0;
            this.updateSplitToolbar();
            return;
        }

        var next = start;
        var attempts = 0;
        var leaves = [];
        do {
            next = (next + delta + len) % len;
            leaves = collectLeavesFromGroup(this.groups[next]);
            attempts += 1;
        } while (leaves.length === 0 && attempts < len);

        if (leaves.length === 0) return;
        this.goToSplitGroup(next);
    };

    TabSwitcherModal.prototype.renderCards = function () {
        if (!this.gridEl) return;
        this.cancelPreviewQueue();
        this.gridEl.empty();
        this.cardEls = [];

        for (var i = 0; i < this.leaves.length; i++) {
            this.mountCard(this.leaves[i], i);
        }
    };

    TabSwitcherModal.prototype.mountCard = function (leaf, index) {
        var self = this;
        var workspaceActive = getActiveLeaf(this.app);
        var isActive = leaf === workspaceActive;
        var pinned = isLeafPinned(leaf);
        var L = i18n.L;

        var card = this.gridEl.createDiv({
            cls: 'wpp-tab-switcher-card'
                + (isActive ? ' is-active-tab' : '')
                + (pinned ? ' is-pinned' : ''),
            attr: {
                role: 'option',
                'data-index': String(index),
                'aria-selected': 'false',
                'aria-current': isActive ? 'true' : 'false',
            },
        });

        // Header: icon + title + pin + close (drag via header)
        var header = card.createDiv({ cls: 'wpp-tab-switcher-header' });

        var iconEl = header.createDiv({ cls: 'wpp-tab-switcher-icon' });
        obsidian.setIcon(iconEl, getLeafIcon(leaf));

        header.createDiv({
            cls: 'wpp-tab-switcher-title',
            text: getLeafTitle(leaf),
            attr: { title: getLeafTitle(leaf) },
        });

        var actions = header.createDiv({ cls: 'wpp-tab-switcher-actions' });

        var pinBtn = actions.createDiv({
            cls: 'wpp-tab-switcher-pin' + (pinned ? ' is-active' : ''),
            attr: {
                role: 'button',
                tabindex: '-1',
                'aria-label': pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab,
            },
        });
        obsidian.setIcon(pinBtn, 'pin');
        if (typeof obsidian.setTooltip === 'function') {
            obsidian.setTooltip(pinBtn, pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab, { delay: 250 });
        }
        pinBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            self.togglePin(leaf, pinBtn, card);
        });
        pinBtn.addEventListener('mousedown', function (e) {
            e.stopPropagation();
        });

        var closeBtn = actions.createDiv({
            cls: 'wpp-tab-switcher-close',
            attr: {
                role: 'button',
                tabindex: '-1',
                'aria-label': L.tabSwitcherCloseTab,
            },
        });
        obsidian.setIcon(closeBtn, 'x');
        if (typeof obsidian.setTooltip === 'function') {
            obsidian.setTooltip(closeBtn, L.tabSwitcherCloseTab, { delay: 250 });
        }
        closeBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var currentIndex = self.cardEls.indexOf(card);
            if (currentIndex < 0) return;
            self.closeLeafAt(currentIndex);
        });
        closeBtn.addEventListener('mousedown', function (e) {
            e.stopPropagation();
        });

        var viewport = card.createDiv({ cls: 'wpp-tab-switcher-viewport' });
        var scale = viewport.createDiv({ cls: 'wpp-tab-switcher-scale' });
        var loading = scale.createDiv({ cls: 'wpp-tab-switcher-loading' });
        loading.createDiv({ cls: 'wpp-tab-switcher-loading-spinner' });

        // Preview click → switch; header is for controls / drag
        viewport.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var currentIndex = self.cardEls.indexOf(card);
            if (currentIndex < 0) currentIndex = index;
            self.focusedIndex = currentIndex;
            self.activateFocused();
        });

        header.addEventListener('mousedown', function (e) {
            if (e.button !== 0) return;
            if (e.target && e.target.closest && e.target.closest('.wpp-tab-switcher-actions')) {
                return;
            }
            self.beginCardDrag(e, card);
        });

        this.cardEls.push(card);
        this.fillCardPreview(leaf, scale);
    };

    TabSwitcherModal.prototype.togglePin = function (leaf, pinBtn, card) {
        var L = i18n.L;
        var next = !isLeafPinned(leaf);
        try {
            if (typeof leaf.setPinned === 'function') leaf.setPinned(next);
            else if (typeof leaf.togglePinned === 'function') leaf.togglePinned();
        } catch (err) { /* ignore */ }

        var pinned = isLeafPinned(leaf);
        pinBtn.classList.toggle('is-active', pinned);
        pinBtn.setAttribute('aria-label', pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab);
        pinBtn.empty();
        obsidian.setIcon(pinBtn, 'pin');
        if (typeof obsidian.setTooltip === 'function') {
            obsidian.setTooltip(pinBtn, pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab, { delay: 250 });
        }
        if (card) card.classList.toggle('is-pinned', pinned);
    };

    TabSwitcherModal.prototype.beginCardDrag = function (e, card) {
        var self = this;
        var doc = this._overlayDoc || getDoc(this.activeLeaf);
        var startX = e.clientX;
        var startY = e.clientY;
        var dragStarted = false;
        var cloneEl = null;
        var fromIndex = this.cardEls.indexOf(card);
        if (fromIndex < 0) return;

        e.preventDefault();
        e.stopPropagation();

        function startDrag(ev) {
            dragStarted = true;
            doc.body.classList.add('wpp-tab-switcher-dragging');
            var rect = card.getBoundingClientRect();
            var offsetX = startX - rect.left;
            var offsetY = startY - rect.top;

            cloneEl = card.cloneNode(true);
            cloneEl.classList.add('wpp-tab-switcher-drag-clone');
            cloneEl.style.position = 'fixed';
            cloneEl.style.width = rect.width + 'px';
            cloneEl.style.top = (ev.clientY - offsetY) + 'px';
            cloneEl.style.left = (ev.clientX - offsetX) + 'px';
            cloneEl.style.zIndex = '10050';
            cloneEl.style.pointerEvents = 'none';
            doc.body.appendChild(cloneEl);
            cloneEl._offsetX = offsetX;
            cloneEl._offsetY = offsetY;

            card.classList.add('is-dragging');
        }

        function onMouseMove(ev) {
            if (!dragStarted) {
                if (Math.abs(ev.clientX - startX) + Math.abs(ev.clientY - startY) < 5) return;
                startDrag(ev);
            }
            if (!cloneEl) return;
            cloneEl.style.top = (ev.clientY - cloneEl._offsetY) + 'px';
            cloneEl.style.left = (ev.clientX - cloneEl._offsetX) + 'px';

            var overIndex = self.getCardIndexAtPoint(ev.clientX, ev.clientY);
            self.cardEls.forEach(function (el, i) {
                el.classList.toggle('is-drop-target', overIndex === i && i !== fromIndex);
            });
        }

        function onMouseUp(ev) {
            doc.removeEventListener('mousemove', onMouseMove, true);
            doc.removeEventListener('mouseup', onMouseUp, true);
            doc.body.classList.remove('wpp-tab-switcher-dragging');

            var toIndex = self.getCardIndexAtPoint(ev.clientX, ev.clientY);
            self.cardEls.forEach(function (el) {
                el.classList.remove('is-drop-target');
                el.classList.remove('is-dragging');
            });
            if (cloneEl) {
                cloneEl.remove();
                cloneEl = null;
            }

            if (!dragStarted) {
                // Treat as focus select on header (do not switch)
                self.focusedIndex = fromIndex;
                self.updateFocus(false);
                return;
            }

            if (toIndex < 0 || toIndex === fromIndex) return;
            self.reorderLeaves(fromIndex, toIndex);
        }

        doc.addEventListener('mousemove', onMouseMove, true);
        doc.addEventListener('mouseup', onMouseUp, true);
    };

    TabSwitcherModal.prototype.getCardIndexAtPoint = function (x, y) {
        for (var i = 0; i < this.cardEls.length; i++) {
            var rect = this.cardEls[i].getBoundingClientRect();
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
                return i;
            }
        }
        return -1;
    };

    TabSwitcherModal.prototype.reorderLeaves = function (fromIndex, toIndex) {
        var moved = this.leaves[fromIndex];
        var target = this.leaves[toIndex];
        var parent = (moved && moved.parent) || this.group;
        if (!parent || !moved || !target) return;

        var realFrom = parent.children.indexOf(moved);
        var realTo = parent.children.indexOf(target);
        if (realFrom < 0 || realTo < 0) return;

        if (!moveLeafInParent(parent, realFrom, realTo)) return;

        try {
            if (typeof this.app.workspace.requestSaveLayout === 'function') {
                this.app.workspace.requestSaveLayout();
            }
            if (typeof this.app.workspace.requestResize === 'function') {
                this.app.workspace.requestResize();
            }
        } catch (err) { /* ignore */ }

        this.syncLeavesFromGroup();
        var newIndex = this.leaves.indexOf(moved);
        this.focusedIndex = newIndex >= 0 ? newIndex : Math.min(toIndex, this.leaves.length - 1);
        this.renderCards();
        this.updateFocus(false);
    };

    TabSwitcherModal.prototype.fillCardPreview = function (leaf, scaleEl) {
        var file = getLeafFile(this.app, leaf);
        var isExcali = getLeafViewType(leaf) === 'excalidraw'
            || isExcalidrawFile(this.app, file);
        var isCanvas = getLeafViewType(leaf) === 'canvas' || isCanvasFile(file);

        // Excalidraw: never mount interactive embeds in task view (major jank source).
        if (isExcali) {
            return this.fillCardPreviewExcalidraw(leaf, scaleEl, file);
        }

        // Markdown / Canvas: wiki-embed (![[path]]), Canvas embeds are staggered via queue
        if (file && (file.extension === 'md' || isCanvas)) {
            return this.fillCardPreviewEmbed(leaf, scaleEl, file, {
                visualOnlyFallback: isCanvas,
                staggered: isCanvas,
            });
        }

        if (isCanvas) {
            return this.fillCardPreviewFromLeaf(leaf, scaleEl, { visualOnly: true });
        }

        return this.fillCardPreviewFromLeaf(leaf, scaleEl);
    };

    /**
     * Lightweight Excalidraw thumbnail:
     * 1) auto-export SVG/PNG sibling  2) live canvas snapshot  3) icon
     * Avoids spawning a full Excalidraw React app per card.
     */
    TabSwitcherModal.prototype.fillCardPreviewExcalidraw = function (leaf, scaleEl, file) {
        if (!scaleEl || !scaleEl.isConnected) return Promise.resolve();

        var exportFile = findExcalidrawExportFile(this.app, file);
        if (exportFile) {
            try {
                var src = this.app.vault.getResourcePath(exportFile);
                if (src && fillStaticImagePreview(scaleEl, src)) {
                    return Promise.resolve();
                }
            } catch (err) { /* ignore */ }
        }

        var dataUrl = captureLeafCanvasPreview(leaf);
        if (dataUrl && fillStaticImagePreview(scaleEl, dataUrl)) {
            return Promise.resolve();
        }

        fillIconOnly(scaleEl, leaf);
        return Promise.resolve();
    };

    /**
     * Preview via wiki-embed (![[file]]) for Markdown / Canvas.
     * Falls back to DOM clone (visualOnly for canvas-like) or markdown render.
     */
    TabSwitcherModal.prototype.fillCardPreviewEmbed = function (leaf, scaleEl, file, options) {
        var self = this;
        var visualOnlyFallback = !!(options && options.visualOnlyFallback);
        var staggered = !!(options && options.staggered);
        if (!file) {
            return this.fillCardPreviewFromLeaf(leaf, scaleEl, { visualOnly: visualOnlyFallback });
        }

        if (!scaleEl || !scaleEl.isConnected) return Promise.resolve();

        function runEmbed() {
            if (!scaleEl.isConnected) return Promise.resolve();
            scaleEl.empty();
            var host = scaleEl.createDiv();

            return renderFileEmbedInto(self.app, self.plugin, host, file).then(function (ok) {
                if (!scaleEl.isConnected) return;
                if (ok) return;

                if (visualOnlyFallback) {
                    return self.fillCardPreviewFromLeaf(leaf, scaleEl, { visualOnly: true });
                }

                // Markdown fallback: render file body directly
                if (file.extension === 'md' && !isExcalidrawFile(self.app, file)) {
                    return self.app.vault.cachedRead(file).then(function (md) {
                        if (!scaleEl.isConnected) return;
                        scaleEl.empty();
                        var mdHost = scaleEl.createDiv();
                        return renderMarkdownInto(self.app, self.plugin, mdHost, file, md).then(function (rendered) {
                            if (rendered || !scaleEl.isConnected) return;
                            scaleEl.empty();
                            fillTextOrIcon(scaleEl, leaf);
                        });
                    }).catch(function () {
                        if (!scaleEl.isConnected) return;
                        return self.fillCardPreviewFromLeaf(leaf, scaleEl);
                    });
                }

                return self.fillCardPreviewFromLeaf(leaf, scaleEl);
            }).catch(function () {
                if (!scaleEl || !scaleEl.isConnected) return;
                if (visualOnlyFallback) {
                    return self.fillCardPreviewFromLeaf(leaf, scaleEl, { visualOnly: true });
                }
                return self.fillCardPreviewFromLeaf(leaf, scaleEl);
            });
        }

        if (staggered) return this.enqueuePreview(runEmbed);
        return runEmbed();
    };

    TabSwitcherModal.prototype.fillCardPreviewFromLeaf = function (leaf, scaleEl, options) {
        var self = this;
        var visualOnly = !!(options && options.visualOnly);
        return ensureLeafLoaded(leaf)
            .then(function () {
                if (visualOnly) {
                    return waitFrames(3).then(function () {
                        return waitForVisualPreview(leaf, 12);
                    });
                }
                return waitFrames(3);
            })
            .then(function () {
                if (!scaleEl || !scaleEl.isConnected) return;

                var clone = buildLeafViewClone(leaf, { rejectSource: visualOnly });
                if (clone) {
                    scaleEl.empty();
                    scaleEl.appendChild(clone);
                    return;
                }

                if (visualOnly) {
                    scaleEl.empty();
                    fillIconOnly(scaleEl, leaf);
                    return;
                }

                // After load, file may now be available
                var file = getLeafFile(self.app, leaf);
                if (file && file.extension === 'md' && !isExcalidrawFile(self.app, file)) {
                    return self.app.vault.cachedRead(file).then(function (md) {
                        if (!scaleEl.isConnected) return;
                        scaleEl.empty();
                        var host = scaleEl.createDiv();
                        return renderMarkdownInto(self.app, self.plugin, host, file, md).then(function (ok) {
                            if (ok || !scaleEl.isConnected) return;
                            scaleEl.empty();
                            fillTextOrIcon(scaleEl, leaf);
                        });
                    });
                }

                scaleEl.empty();
                fillTextOrIcon(scaleEl, leaf);
            })
            .catch(function () {
                if (!scaleEl || !scaleEl.isConnected) return;
                scaleEl.empty();
                if (visualOnly) fillIconOnly(scaleEl, leaf);
                else fillTextOrIcon(scaleEl, leaf);
            });
    };

    TabSwitcherModal.prototype.syncLeavesFromGroup = function () {
        this.groups = collectRootTabGroups(this.app);
        if (!this.groups.length) {
            var collected = collectGroupLeaves(this.app);
            this.groups = collected.group ? [collected.group] : [];
            this.group = collected.group;
            this.groupIndex = 0;
            this.leaves = collected.leaves.slice();
            this.activeLeaf = collected.active;
            this.updateSplitToolbar();
            return this.leaves;
        }

        if (this.group) {
            var kept = this.groups.indexOf(this.group);
            if (kept >= 0) this.groupIndex = kept;
        }
        if (this.groupIndex >= this.groups.length) {
            this.groupIndex = Math.max(0, this.groups.length - 1);
        }

        this.group = this.groups[this.groupIndex] || null;
        this.leaves = collectLeavesFromGroup(this.group);
        this.activeLeaf = pickLeafInGroup(this.app, this.group, getActiveLeaf(this.app));
        this.updateSplitToolbar();
        return this.leaves;
    };

    TabSwitcherModal.prototype.closeLeafAt = function (index) {
        if (index < 0 || index >= this.leaves.length) return;
        var leaf = this.leaves[index];

        // Leaf stays in the real workspace tree — safe to detach.
        try {
            if (leaf && typeof leaf.detach === 'function') leaf.detach();
        } catch (err) { /* ignore */ }

        this.syncLeavesFromGroup();
        if (this.leaves.length === 0) {
            // Current split emptied — try another split, else close
            if (this.groups && this.groups.length > 1) {
                this.shiftSplitGroup(1);
                if (this.leaves.length > 0) return;
            }
            this.close();
            return;
        }

        if (this.focusedIndex >= this.leaves.length) {
            this.focusedIndex = this.leaves.length - 1;
        } else if (this.focusedIndex > index) {
            this.focusedIndex -= 1;
        }

        this.renderCards();
        this.updateFocus(false);
    };

    TabSwitcherModal.prototype._onBackdropClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.close();
    };

    TabSwitcherModal.prototype._onPanelClick = function (e) {
        if (e.target === this.panelEl || e.target === this.gridEl) {
            e.preventDefault();
            e.stopPropagation();
            this.close();
        }
    };

    TabSwitcherModal.prototype._onPanelMove = function (e) {
        var doc = this._overlayDoc || getDoc(this.activeLeaf);
        if (doc.body.classList.contains('wpp-tab-switcher-dragging')) return;
        var card = e.target && e.target.closest && e.target.closest('.wpp-tab-switcher-card');
        if (!card) return;
        var index = parseInt(card.getAttribute('data-index'), 10);
        if (isNaN(index) || index === this.focusedIndex) return;
        this.focusedIndex = index;
        this.updateFocus(false);
    };

    /**
     * Wheel on mask/toolbar (outside the card grid) → cycle split preview.
     * Scrolling inside the grid is left alone so the panel can scroll normally.
     */
    TabSwitcherModal.prototype._onWheel = function (e) {
        var doc = this._overlayDoc || getDoc(this.activeLeaf);
        if (!doc || !doc.body || !doc.body.classList.contains('wpp-mission-control-open')) return;
        if (doc.body.classList.contains('wpp-tab-switcher-dragging')) return;
        if (!this.groups || this.groups.length <= 1) return;

        var target = e.target;
        if (!target || typeof target.closest !== 'function') return;

        // Grid: do not hijack wheel (no tab cycling)
        if (target.closest('.wpp-tab-switcher-grid')) return;

        var onMask = target.closest(
            '.wpp-tab-switcher-backdrop, .wpp-tab-switcher-panel, .wpp-tab-switcher-toolbar, .wpp-tab-switcher-floating-hint'
        );
        if (!onMask) return;

        e.preventDefault();
        e.stopPropagation();

        var delta = e.deltaY !== 0 ? e.deltaY : e.deltaX;
        if (!delta) return;
        if (e.deltaMode === 1) delta *= 16;
        else if (e.deltaMode === 2) delta *= 48;

        var now = Date.now();
        if (now - (this._wheelLastAt || 0) < 90) {
            this._wheelAcc = (this._wheelAcc || 0) + delta;
        } else {
            this._wheelAcc = delta;
        }

        if (Math.abs(this._wheelAcc) < 28) return;

        var dir = this._wheelAcc > 0 ? 1 : -1;
        this._wheelAcc = 0;
        this._wheelLastAt = now;
        this.shiftSplitGroup(dir);
    };

    TabSwitcherModal.prototype._onKeyDown = function (e) {
        if (e.isComposing) return;
        var key = e.key;
        if ((key === '[' || key === '<' || (key === 'ArrowLeft' && e.altKey))) {
            e.preventDefault();
            e.stopPropagation();
            this.shiftSplitGroup(-1);
        } else if ((key === ']' || key === '>' || (key === 'ArrowRight' && e.altKey))) {
            e.preventDefault();
            e.stopPropagation();
            this.shiftSplitGroup(1);
        } else if (/^[1-9]$/.test(key)) {
            var page = parseInt(key, 10) - 1;
            if (this.groups && page < this.groups.length) {
                e.preventDefault();
                e.stopPropagation();
                this.goToSplitGroup(page);
            }
        } else if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown') {
            e.preventDefault();
            e.stopPropagation();
            this.moveFocus(key);
        } else if (key === 'Enter' || key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            this.activateFocused();
        } else if (key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            this.close();
        } else if (key === 'Tab') {
            e.preventDefault();
            e.stopPropagation();
            this.moveFocus(e.shiftKey ? 'ArrowLeft' : 'ArrowRight');
        }
    };

    TabSwitcherModal.prototype.getColumnCount = function () {
        if (!this.gridEl || !this.cardEls.length) return 1;
        var first = this.cardEls[0];
        if (!first || !first.offsetWidth) return 1;
        var styles = window.getComputedStyle(this.gridEl);
        var gap = parseFloat(styles.columnGap || styles.gap || '20') || 20;
        return Math.max(1, Math.floor((this.gridEl.clientWidth + gap) / (first.offsetWidth + gap)));
    };

    TabSwitcherModal.prototype.moveFocus = function (key) {
        var count = this.leaves.length;
        if (count <= 0) return;
        var cols = this.getColumnCount();
        var idx = this.focusedIndex;

        if (key === 'ArrowLeft') idx = (idx - 1 + count) % count;
        else if (key === 'ArrowRight') idx = (idx + 1) % count;
        else if (key === 'ArrowUp') idx = (idx - cols + count) % count;
        else if (key === 'ArrowDown') idx = (idx + cols) % count;

        this.focusedIndex = idx;
        this.updateFocus(true);
    };

    TabSwitcherModal.prototype.updateFocus = function (scrollIntoView) {
        var self = this;
        this.cardEls.forEach(function (card, i) {
            var focused = i === self.focusedIndex;
            card.classList.toggle('is-focused', focused);
            card.setAttribute('aria-selected', focused ? 'true' : 'false');
            if (focused && scrollIntoView && typeof card.scrollIntoView === 'function') {
                card.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
            }
        });
    };

    TabSwitcherModal.prototype.activateFocused = function () {
        var leaf = this.leaves[this.focusedIndex];
        this.close();
        if (!leaf) return;
        if (typeof this.app.workspace.setActiveLeaf === 'function') {
            this.app.workspace.setActiveLeaf(leaf, { focus: true });
        }
        if (typeof this.app.workspace.revealLeaf === 'function') {
            this.app.workspace.revealLeaf(leaf);
        }
    };

    TabSwitcherModal.prototype.close = function () {
        var doc = this._overlayDoc || getDoc(this.activeLeaf);

        this.cancelPreviewQueue();

        try {
            doc.removeEventListener('keydown', this._onKeyDown, true);
        } catch (err) { /* ignore */ }
        try {
            doc.removeEventListener('wheel', this._onWheel, { capture: true });
            // Fallback for browsers that ignore options object identity
            doc.removeEventListener('wheel', this._onWheel, true);
        } catch (err2) { /* ignore */ }

        this._wheelAcc = 0;
        this._wheelLastAt = 0;

        if (this.panelEl) {
            this.panelEl.removeEventListener('click', this._onPanelClick);
            this.panelEl.removeEventListener('mousemove', this._onPanelMove);
            this.panelEl.remove();
            this.panelEl = null;
        }
        this.gridEl = null;
        this.cardEls = [];

        if (this.backdropEl) {
            this.backdropEl.removeEventListener('click', this._onBackdropClick);
            this.backdropEl.remove();
            this.backdropEl = null;
        }
        if (this.hintEl) {
            this.hintEl.remove();
            this.hintEl = null;
        }
        if (this.toolbarEl) {
            this.toolbarEl.remove();
            this.toolbarEl = null;
            this.prevSplitBtn = null;
            this.nextSplitBtn = null;
            this.splitPagesEl = null;
        }

        // Ensure no orphaned overlay remains (e.g. from a previous non-singleton instance)
        removeOverlayDom(doc);

        this.leaves = [];
        this.group = null;
        this.groups = [];
        this.groupIndex = 0;
        this.activeLeaf = null;
        this._overlayDoc = null;
        this.focusedIndex = 0;
    };

    return TabSwitcherModal;
})();

module.exports = TabSwitcherModal;
