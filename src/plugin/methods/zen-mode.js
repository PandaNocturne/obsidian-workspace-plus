'use strict';

var obsidian = require('obsidian');
var i18n = require('../../i18n');

function getWorkspaceBody(app) {
    try {
        var el = app && app.workspace && app.workspace.containerEl;
        if (el && el.ownerDocument && el.ownerDocument.body) return el.ownerDocument.body;
    } catch (err) { /* ignore */ }
    return document.body;
}

function clearZenActiveFlags(body) {
    if (!body) return;
    var marked = body.querySelectorAll('.wpp-zen-active');
    for (var i = 0; i < marked.length; i++) {
        marked[i].classList.remove('wpp-zen-active');
    }
}

function lockZenFocus(app) {
    var body = getWorkspaceBody(app);
    clearZenActiveFlags(body);

    var leaf = app && app.workspace && app.workspace.activeLeaf;
    if (!leaf || typeof leaf.getRoot !== 'function') return;
    try {
        if (leaf.getRoot() !== app.workspace.rootSplit) return;
    } catch (err) {
        return;
    }

    var parent = leaf.parent;
    if (parent && parent.containerEl) {
        parent.containerEl.classList.add('wpp-zen-active');
    }
}

function persistIfNeeded(plugin, options) {
    options = options || {};
    if (options.persist === false) return Promise.resolve(true);
    return plugin.persistData();
}

function attachZenModeMethods(WorkspacePlusPlus) {
    WorkspacePlusPlus.prototype.isZenModeEnabled = function () {
        return !!this.data.zenMode;
    };

    WorkspacePlusPlus.prototype.isZenHideInactiveTabsEnabled = function () {
        return this.data.zenHideInactiveTabs !== false;
    };

    WorkspacePlusPlus.prototype.applyZenModeClasses = function () {
        var body = getWorkspaceBody(this.app);
        var enabled = this.isZenModeEnabled();
        body.classList.toggle('wpp-zen-mode', enabled);
        body.classList.toggle(
            'wpp-zen-hide-inactive-tabs',
            enabled && this.isZenHideInactiveTabsEnabled()
        );
        if (enabled) lockZenFocus(this.app);
        else clearZenActiveFlags(body);
    };

    WorkspacePlusPlus.prototype.clearZenModeClasses = function () {
        var body = getWorkspaceBody(this.app);
        body.classList.remove('wpp-zen-mode');
        body.classList.remove('wpp-zen-hide-inactive-tabs');
        clearZenActiveFlags(body);
    };

    WorkspacePlusPlus.prototype.setZenMode = function (enabled, options) {
        options = options || {};
        this.data.zenMode = !!enabled;
        this.applyZenModeClasses();
        if (options.notify) {
            new obsidian.Notice(
                enabled ? i18n.L.zenModeEnabled : i18n.L.zenModeDisabled
            );
        }
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.toggleZenMode = function (options) {
        return this.setZenMode(!this.isZenModeEnabled(), options);
    };

    WorkspacePlusPlus.prototype.setZenHideInactiveTabs = function (enabled, options) {
        this.data.zenHideInactiveTabs = !!enabled;
        this.applyZenModeClasses();
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.refreshZenModeFocus = function () {
        if (!this.isZenModeEnabled()) return;
        lockZenFocus(this.app);
    };
}

module.exports = attachZenModeMethods;
