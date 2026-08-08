'use strict';

var i18n = require('../../i18n');
var DEFAULT_DATA = require('../default-data');

function persistIfNeeded(plugin, options) {
    options = options || {};
    if (options.persist === false) return Promise.resolve(true);
    return plugin.persistData();
}

function numberOrFallback(value, fallback) {
    var parsed = Number(value);
    return parsed || fallback;
}

function attachSettingsStateMethods(WorkspacePlusPlus) {
    WorkspacePlusPlus.prototype.normalizeLanguageSetting = function () {
        var current = this.data && this.data.language;
        if (!current || current === 'auto') {
            this.data.language = current || 'auto';
            return this.data.language;
        }
        if (!i18n.LANG_OPTIONS || !i18n.LANG_OPTIONS[current]) {
            this.data.language = 'auto';
        }
        return this.data.language;
    };

    WorkspacePlusPlus.prototype.setLanguageSetting = function (value, options) {
        var next = value || 'auto';
        if (next !== 'auto' && (!i18n.LANG_OPTIONS || !i18n.LANG_OPTIONS[next])) {
            next = 'auto';
        }
        this.data.language = next;
        i18n.resolveLocale(this.data.language);
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarAction = function (slotKey, actionId, options) {
        if (!this.data.statusBarActions) {
            this.data.statusBarActions = Object.assign({}, DEFAULT_DATA.statusBarActions);
        }
        this.data.statusBarActions[slotKey] = actionId;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.migrateRemovedStatusBarActions = function () {
        var removedActionMap = {
            quickSwitcher: 'sessionManager',
            previousSession: 'none',
            nextSession: 'none',
        };
        var actions = this.data.statusBarActions || {};
        var slotKeys = Object.keys(actions);
        for (var i = 0; i < slotKeys.length; i++) {
            var slotKey = slotKeys[i];
            var mapped = removedActionMap[actions[slotKey]];
            if (mapped) actions[slotKey] = mapped;
        }
    };

    WorkspacePlusPlus.prototype.setWarnOnUnsavedSwitch = function (enabled, options) {
        this.data.warnOnUnsavedSwitch = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setUnsavedStatusBarHighlight = function (enabled, options) {
        this.data.highlightUnsavedSessionChanges = !!enabled;
        this.updateStatusBar();
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setConfirmQuickActions = function (enabled, options) {
        this.data.confirmQuickActions = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setRestoreSidebars = function (enabled, options) {
        this.data.restoreSidebars = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setRestoreTabsByFilename = function (enabled, options) {
        this.data.restoreTabsByFilename = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setNoteUidPropertyName = function (value, options) {
        this.data.noteUidProperty = String(value == null ? '' : value).trim();
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.getTaskViewThumbnailRatio = function () {
        var value = String(this.data.taskViewThumbnailRatio || DEFAULT_DATA.taskViewThumbnailRatio || '4:3');
        var allowed = { '16:9': 1, '4:3': 1, '3:2': 1, '1:1': 1 };
        return allowed[value] ? value : '4:3';
    };

    WorkspacePlusPlus.prototype.getTaskViewThumbnailSourceSize = function () {
        var ratio = this.getTaskViewThumbnailRatio();
        var width = 650;
        var parts = ratio.split(':');
        var w = Number(parts[0]);
        var h = Number(parts[1]);
        if (!isFinite(w) || !isFinite(h) || w <= 0 || h <= 0) {
            return { width: width, height: 488 };
        }
        return {
            width: width,
            height: Math.max(200, Math.round(width * h / w)),
        };
    };

    WorkspacePlusPlus.prototype.setTaskViewThumbnailRatio = function (value, options) {
        var next = String(value || '');
        var allowed = { '16:9': 1, '4:3': 1, '3:2': 1, '1:1': 1 };
        this.data.taskViewThumbnailRatio = allowed[next] ? next : DEFAULT_DATA.taskViewThumbnailRatio;
        return persistIfNeeded(this, options);
    };

    /** Task view preview content zoom — same idea as colorful-stickynotes view-content zoom. */
    WorkspacePlusPlus.prototype.getTaskViewContentZoom = function () {
        var zoom = Number(this.data.taskViewContentZoom);
        if (!isFinite(zoom)) zoom = DEFAULT_DATA.taskViewContentZoom;
        if (zoom < 0.1) zoom = 0.1;
        if (zoom > 1) zoom = 1;
        return Math.round(zoom * 100) / 100;
    };

    WorkspacePlusPlus.prototype.setTaskViewContentZoom = function (value, options) {
        var zoom = Number(value);
        if (!isFinite(zoom)) zoom = DEFAULT_DATA.taskViewContentZoom;
        if (zoom < 0.1) zoom = 0.1;
        if (zoom > 1) zoom = 1;
        this.data.taskViewContentZoom = Math.round(zoom * 100) / 100;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.isTaskViewHintsEnabled = function () {
        return this.data.showTaskViewHints !== false;
    };

    WorkspacePlusPlus.prototype.setShowTaskViewHints = function (enabled, options) {
        this.data.showTaskViewHints = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarModScrollSwitch = function (enabled, options) {
        this.data.statusBarModScrollSwitch = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarScrollPreset = function (value, options) {
        this.data.statusBarScrollPreset = value || 'trackpad';
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarScrollModifierMode = function (value, options) {
        this.data.statusBarScrollModifierMode = value || 'none';
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarScrollThreshold = function (value, options) {
        this.data.statusBarScrollThreshold = numberOrFallback(value, 30);
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarScrollCooldownMs = function (value, options) {
        this.data.statusBarScrollCooldownMs = numberOrFallback(value, 500);
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarScrollResetMs = function (value, options) {
        this.data.statusBarScrollResetMs = numberOrFallback(value, 250);
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setStatusBarScrollInvert = function (enabled, options) {
        this.data.statusBarScrollInvert = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setShowActiveSwitchCommand = function (enabled, options) {
        this.data.showActiveSwitchCommand = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setNumberedSwitchCommands = function (enabled, options) {
        this.data.numberedSwitchCommands = !!enabled;
        this.syncSessionCommands();
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setSwitchPreviewEnabled = function (enabled, options) {
        this.data.previewNext = !!enabled;
        this.data.previewPrevious = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setPreviewNext = function (enabled, options) {
        this.data.previewNext = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setPreviewPrevious = function (enabled, options) {
        this.data.previewPrevious = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setShowFilterInput = function (enabled, options) {
        this.data.showFilterInput = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setOverlayDefaultFocus = function (value, options) {
        this.data.overlayDefaultFocus = value || 'current-session';
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setConfirmDeleteByHotkey = function (enabled, options) {
        this.data.confirmDeleteByHotkey = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setVersionHistoryEnabled = function (enabled, options) {
        this.data.versionHistoryEnabled = !!enabled;
        if (this.data.versionHistoryEnabled) {
            this.startHistorySnapshotTimer();
        } else {
            this.stopHistorySnapshotTimer();
        }
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setVersionHistorySnapshotInterval = function (value, options) {
        this.data.versionHistorySnapshotInterval = parseInt(value, 10);
        this.startHistorySnapshotTimer();
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.setVersionHistoryConfirmRestore = function (enabled, options) {
        this.data.versionHistoryConfirmRestore = !!enabled;
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.resolveSessionManagerPanelState = function () {
        var panelMode = this.data.sessionManagerPanelMode === 'archive' ? 'archive' : 'sessions';
        var viewGroupId = null;
        if (this.isGroupFeatureEnabled()) {
            var rawGroupId = this.data.sessionManagerViewGroupId || null;
            if (rawGroupId === '__ungrouped__') {
                viewGroupId = '__ungrouped__';
            } else if (rawGroupId && (this.data.groups || {})[rawGroupId]) {
                viewGroupId = rawGroupId;
            }
        }
        return {
            panelMode: panelMode,
            viewGroupId: viewGroupId,
        };
    };

    WorkspacePlusPlus.prototype.setSessionManagerPanelState = function (state, options) {
        state = state || {};
        var nextMode = state.panelMode === 'archive' ? 'archive' : 'sessions';
        var nextGroupId = null;
        if (state.viewGroupId === '__ungrouped__') {
            nextGroupId = '__ungrouped__';
        } else if (state.viewGroupId && (this.data.groups || {})[state.viewGroupId]) {
            nextGroupId = state.viewGroupId;
        }

        var prevMode = this.data.sessionManagerPanelMode === 'archive' ? 'archive' : 'sessions';
        var prevGroupId = this.data.sessionManagerViewGroupId || null;
        var changed = prevMode !== nextMode || prevGroupId !== nextGroupId;

        this.data.sessionManagerPanelMode = nextMode;
        this.data.sessionManagerViewGroupId = nextGroupId;

        if (!changed) return Promise.resolve(false);
        return persistIfNeeded(this, options);
    };
}

module.exports = attachSettingsStateMethods;
