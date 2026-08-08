'use strict';

var obsidian = require('obsidian');
var i18n = require('./i18n');
var modals = require('./modals');
var settings = require('./settings');
var DEFAULT_DATA = require('./plugin/default-data');
var registerCommands = require('./plugin/register-commands');
var attachPluginMethods = require('./plugin/methods');
var statusBarController = require('./statusbar-controller');

i18n.resolveLocale();

// ============================================================
// Main Plugin
// ============================================================
var WorkspacePlusPlus = /** @class */ (function (_super) {
    function WorkspacePlusPlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }

    WorkspacePlusPlus.prototype = Object.create(_super.prototype);
    WorkspacePlusPlus.prototype.constructor = WorkspacePlusPlus;

    WorkspacePlusPlus.prototype.onload = function () {
        var self = this;

        return this.loadWithBackup().then(function (saved) {
            self.data = Object.assign({}, DEFAULT_DATA, saved || {});
            if (!self.data.sessions) self.data.sessions = {};
            if (!self.data.sessionOrder) self.data.sessionOrder = [];

            self.normalizeGroupFeatureState();
            self.migrateZenModeToSessions();
            if (typeof self.migrateRemovedStatusBarActions === 'function') {
                self.migrateRemovedStatusBarActions();
            }
            self.isSwitchingSession = false;
            self.pendingSwitchRequest = null;
            self.switchLockAt = 0;
            self.startupSettleStartedAt = 0;
            self.startupSettleUntil = 0;
            self.startupSettleTimer = null;
            self.startupFlushTimer = null;
            self.statusBarScrollDelta = 0;
            self.statusBarScrollEventAt = 0;
            self.statusBarScrollSwitchAt = 0;
            self.sessionSwitchNotice = null;
            self.syncSessionOrder();
            self.registerSessionStorageListeners();
            if (typeof self.normalizeLanguageSetting === 'function') {
                self.normalizeLanguageSetting();
            }
            i18n.resolveLocale(self.data.language);
            var L = i18n.L;

            // Ribbon icon (left sidebar)
            self.addRibbonIcon('panels-top-left', L.ribbonTooltip, function () {
                new modals.SessionManagerModal(self.app, self).open();
            });

            statusBarController.setupStatusBar(self);

            // Commands
            registerCommands(self);

            // Settings tab
            self.settingTab = new settings.WorkspacePlusPlusSettingTab(self.app, self);
            self.addSettingTab(self.settingTab);

            self.registerEvent(self.app.workspace.on('layout-change', function () {
                self.noteStartupLayoutChange();
                self.updateStatusBar();
                self.refreshZenModeFocus();
            }));
            self.registerEvent(self.app.workspace.on('active-leaf-change', function () {
                if (self.isSwitchingSession) return;
                self.refreshZenModeFocus();
                if (typeof self.rememberZenFocusFromWorkspace === 'function') {
                    self.rememberZenFocusFromWorkspace();
                }
                setTimeout(function () {
                    self.updateStatusBar();
                }, 0);
            }));

            // Startup: ensure default session exists, then flush
            self.app.workspace.onLayoutReady(function () {
                self.startStartupSettleWindow();
                self.ensureDefaultSession();
                self.syncSessionCommands();
                self.scheduleStartupFlush();
                self.startHistorySnapshotTimer();
                self.initRotationBackupTimestamp();
                self.scheduleStartupSessionStorageChecks();
                if (typeof self.restoreZenFocusLeaf === 'function') {
                    self.restoreZenFocusLeaf();
                }
                self.applyZenModeClasses();
                // Cold start: activeLeaf / tab headers often settle a beat later
                self.scheduleZenModeRefresh(50);
                self.scheduleZenModeRefresh(400);
            });
        });
    };

    WorkspacePlusPlus.prototype.onunload = function () {
        if (typeof this.clearZenModeRefreshTimers === 'function') {
            this.clearZenModeRefreshTimers();
        }
        this.clearZenModeClasses();
        this.stopHistorySnapshotTimer();
        this.hideSwitchOverlay();
        this.hideSearchOverlay();
        this.clearSessionSwitchNotice();
        this.pendingSwitchRequest = null;
        this.isSwitchingSession = false;
        this.statusBarScrollDelta = 0;
        this.statusBarScrollEventAt = 0;
        this.statusBarScrollSwitchAt = 0;
        this.startupSettleStartedAt = 0;
        if (this.startupSettleTimer) {
            clearTimeout(this.startupSettleTimer);
            this.startupSettleTimer = null;
        }
        if (this.startupFlushTimer) {
            clearTimeout(this.startupFlushTimer);
            this.startupFlushTimer = null;
        }
        this.clearSessionStorageSyncTimers();
        this.startupSettleUntil = 0;
        return this.flushPendingPersistence();
    };

    return WorkspacePlusPlus;
})(obsidian.Plugin);

attachPluginMethods(WorkspacePlusPlus);

module.exports = WorkspacePlusPlus;
