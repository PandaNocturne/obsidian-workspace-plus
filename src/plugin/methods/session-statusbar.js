'use strict';

var obsidian = require('obsidian');
var i18n = require('../../i18n');

function persistIfNeeded(plugin, options) {
    options = options || {};
    if (options.persist === false) return Promise.resolve(true);
    return plugin.persistData();
}

function attachSessionStatusBarMethods(WorkspacePlusPlus) {
    WorkspacePlusPlus.prototype.isStatusBarWorkspaceEnabled = function () {
        return this.data.showStatusBarWorkspace !== false;
    };

    WorkspacePlusPlus.prototype.applyStatusBarWorkspaceVisibility = function () {
        if (!this.statusBarEl) return;
        var show = this.isStatusBarWorkspaceEnabled();
        this.statusBarEl.toggleClass('wpp-status-bar-hidden', !show);
        this.statusBarEl.style.display = show ? '' : 'none';
    };

    WorkspacePlusPlus.prototype.setShowStatusBarWorkspace = function (enabled, options) {
        this.data.showStatusBarWorkspace = !!enabled;
        this.applyStatusBarWorkspaceVisibility();
        if (enabled) this.updateStatusBar();
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.updateStatusBar = function () {
        var L = i18n.L;
        var session = this.getActiveSession();
        if (!this.statusBarEl) return;

        this.applyStatusBarWorkspaceVisibility();
        if (!this.isStatusBarWorkspaceEnabled()) return;

        var showUnsavedHighlight = this.shouldShowUnsavedStatusBarHighlight();

        this.statusBarEl.removeClass('wpp-status-bar-unsaved');
        if (showUnsavedHighlight) {
            this.statusBarEl.addClass('wpp-status-bar-unsaved');
        }

        this.statusBarEl.empty();
        var icon = this.statusBarEl.createSpan({ cls: 'wpp-status-icon' });
        obsidian.setIcon(icon, 'panels-top-left');

        // Show group name if a group is active
        var activeGroup = this.getActiveGroup();
        if (activeGroup) {
            this.statusBarEl.createSpan({
                text: activeGroup.name,
                cls: 'wpp-status-group',
            });
            this.statusBarEl.createSpan({
                text: ' / ',
                cls: 'wpp-status-separator',
            });
        }

        this.statusBarEl.createSpan({
            text: session ? session.name : L.noSession,
            cls: 'wpp-status-name',
        });
    };
}

module.exports = attachSessionStatusBarMethods;
