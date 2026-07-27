'use strict';

var obsidian = require('obsidian');
var i18n = require('../i18n');

function isWorkspaceLeaf(node) {
    return !!(node && typeof node.getViewState === 'function' && node.view);
}

function isRootLeaf(app, leaf) {
    if (!leaf || typeof leaf.getRoot !== 'function') return false;
    return leaf.getRoot() === app.workspace.rootSplit;
}

function getActiveLeaf(app) {
    var active = app.workspace.activeLeaf;
    if (!active && typeof app.workspace.getMostRecentLeaf === 'function') {
        active = app.workspace.getMostRecentLeaf();
    }
    return active || null;
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

function collectGroupLeaves(app) {
    var leaves = [];
    var active = getActiveLeaf(app);
    var parent = active && active.parent;

    if (parent && Array.isArray(parent.children) && isRootLeaf(app, active)) {
        for (var i = 0; i < parent.children.length; i++) {
            var child = parent.children[i];
            if (isWorkspaceLeaf(child)) leaves.push(child);
        }
        return { group: parent, leaves: leaves, active: active };
    }

    if (typeof app.workspace.iterateRootLeaves === 'function') {
        app.workspace.iterateRootLeaves(function (leaf) {
            if (isWorkspaceLeaf(leaf)) leaves.push(leaf);
        });
    } else {
        app.workspace.iterateAllLeaves(function (leaf) {
            if (isWorkspaceLeaf(leaf) && isRootLeaf(app, leaf)) leaves.push(leaf);
        });
    }

    return {
        group: (active && active.parent) || null,
        leaves: leaves,
        active: active,
    };
}

function getDoc() {
    return (typeof activeDocument !== 'undefined' && activeDocument) || document;
}

// ============================================================
// Tab Switcher — centered overlay with live page previews
// ============================================================
var TabSwitcherModal = /** @class */ (function () {
    function TabSwitcherModal(app, plugin) {
        this.app = app;
        this.plugin = plugin;
        this.leaves = [];
        this.placements = [];
        this.cardEls = [];
        this.focusedIndex = 0;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
        this._onBackdropClick = this._onBackdropClick.bind(this);
        this._onPanelClick = this._onPanelClick.bind(this);
        this._onPanelMove = this._onPanelMove.bind(this);
    }

    TabSwitcherModal.prototype.open = function () {
        if (getDoc().body.classList.contains('wpp-mission-control-open')) {
            this.close();
            return;
        }

        var collected = collectGroupLeaves(this.app);
        this.leaves = collected.leaves.slice();
        this.activeLeaf = collected.active;

        if (this.leaves.length === 0) {
            new obsidian.Notice(i18n.L.tabSwitcherEmpty);
            return;
        }

        var activeIndex = this.leaves.indexOf(this.activeLeaf);
        if (activeIndex < 0) activeIndex = 0;
        this.focusedIndex = this.leaves.length <= 1
            ? 0
            : (activeIndex + 1) % this.leaves.length;

        var doc = getDoc();
        doc.body.addClass('wpp-mission-control-open');

        this.backdropEl = doc.body.createDiv({ cls: 'wpp-tab-switcher-backdrop' });
        this.backdropEl.addEventListener('click', this._onBackdropClick);

        this.panelEl = doc.body.createDiv({
            cls: 'wpp-tab-switcher-panel',
            attr: { role: 'dialog', 'aria-modal': 'true', 'aria-label': i18n.L.tabSwitcherTitle },
        });
        this.gridEl = this.panelEl.createDiv({ cls: 'wpp-tab-switcher-grid' });

        this.hintEl = doc.body.createDiv({ cls: 'wpp-tab-switcher-floating-hint' });
        this.hintEl.setText(i18n.L.tabSwitcherHint);

        this.placements = [];
        this.cardEls = [];

        for (var i = 0; i < this.leaves.length; i++) {
            this.mountLeafCard(this.leaves[i], i);
        }

        this.panelEl.addEventListener('click', this._onPanelClick);
        this.panelEl.addEventListener('mousemove', this._onPanelMove);
        doc.addEventListener('keydown', this._onKeyDown, true);

        this.updateFocus(true);
    };

    TabSwitcherModal.prototype.mountLeafCard = function (leaf, index) {
        var self = this;
        if (leaf && typeof leaf.loadIfDeferred === 'function') {
            try { leaf.loadIfDeferred(); } catch (err) { /* ignore */ }
        }

        var card = this.gridEl.createDiv({
            cls: 'wpp-tab-switcher-card' + (leaf === this.activeLeaf ? ' is-active-tab' : ''),
            attr: {
                role: 'option',
                'data-index': String(index),
                'aria-selected': 'false',
            },
        });

        var viewport = card.createDiv({ cls: 'wpp-tab-switcher-viewport' });
        var scale = viewport.createDiv({ cls: 'wpp-tab-switcher-scale' });

        var leafEl = leaf.containerEl;
        if (leafEl && leafEl.parentElement) {
            this.placements.push({
                leaf: leaf,
                parent: leafEl.parentElement,
                nextSibling: leafEl.nextSibling,
            });
            scale.appendChild(leafEl);
            leafEl.addClass('wpp-mc-leaf');
        } else {
            var fallback = scale.createDiv({ cls: 'wpp-tab-switcher-fallback' });
            fallback.setText(getLeafTitle(leaf));
        }

        var meta = card.createDiv({ cls: 'wpp-tab-switcher-meta' });
        meta.createDiv({
            cls: 'wpp-tab-switcher-title',
            text: getLeafTitle(leaf),
            attr: { title: getLeafTitle(leaf) },
        });

        card.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            self.focusedIndex = index;
            self.activateFocused();
        });

        this.cardEls.push(card);
    };

    TabSwitcherModal.prototype.restoreLeaves = function () {
        // Restore in original order
        for (var i = 0; i < this.placements.length; i++) {
            var item = this.placements[i];
            var leafEl = item.leaf && item.leaf.containerEl;
            if (!leafEl || !item.parent) continue;
            leafEl.removeClass('wpp-mc-leaf');
            leafEl.removeClass('wpp-mc-focused');
            try {
                if (item.nextSibling && item.nextSibling.parentElement === item.parent) {
                    item.parent.insertBefore(leafEl, item.nextSibling);
                } else {
                    item.parent.appendChild(leafEl);
                }
            } catch (err) {
                try { item.parent.appendChild(leafEl); } catch (e2) { /* ignore */ }
            }
        }
        this.placements = [];
    };

    TabSwitcherModal.prototype._onBackdropClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.close();
    };

    TabSwitcherModal.prototype._onPanelClick = function (e) {
        // Clicks on empty panel chrome (not a card) dismiss
        if (e.target === this.panelEl || e.target === this.gridEl) {
            e.preventDefault();
            e.stopPropagation();
            this.close();
        }
    };

    TabSwitcherModal.prototype._onPanelMove = function (e) {
        var card = e.target && e.target.closest && e.target.closest('.wpp-tab-switcher-card');
        if (!card) return;
        var index = parseInt(card.getAttribute('data-index'), 10);
        if (isNaN(index) || index === this.focusedIndex) return;
        this.focusedIndex = index;
        this.updateFocus(false);
    };

    TabSwitcherModal.prototype._onKeyDown = function (e) {
        if (e.isComposing) return;
        var key = e.key;
        if (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'ArrowUp' || key === 'ArrowDown') {
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
            var leaf = self.leaves[i];
            if (leaf && leaf.containerEl) {
                leaf.containerEl.classList.toggle('wpp-mc-focused', focused);
            }
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
        var doc = getDoc();
        doc.removeEventListener('keydown', this._onKeyDown, true);

        if (this.panelEl) {
            this.panelEl.removeEventListener('click', this._onPanelClick);
            this.panelEl.removeEventListener('mousemove', this._onPanelMove);
        }

        this.restoreLeaves();

        if (this.panelEl) {
            this.panelEl.remove();
            this.panelEl = null;
        }
        this.gridEl = null;

        if (this.backdropEl) {
            this.backdropEl.removeEventListener('click', this._onBackdropClick);
            this.backdropEl.remove();
            this.backdropEl = null;
        }
        if (this.hintEl) {
            this.hintEl.remove();
            this.hintEl = null;
        }

        doc.body.removeClass('wpp-mission-control-open');
        this.leaves = [];
        this.cardEls = [];
        this.focusedIndex = 0;
    };

    return TabSwitcherModal;
})();

module.exports = TabSwitcherModal;
