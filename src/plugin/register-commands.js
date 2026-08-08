'use strict';

var obsidian = require('obsidian');
var i18n = require('../i18n');
var modals = require('../modals');

function registerCommands(plugin) {
    var L = i18n.L;

    function addCommand(command) {
        plugin.addCommand(command);
    }

    function addSimpleCommand(id, name, callback) {
        addCommand({
            id: id,
            name: name,
            callback: callback,
        });
    }

    addSimpleCommand('manage-sessions', L.cmdManage, function () {
        new modals.SessionManagerModal(plugin.app, plugin).open();
    });

    addSimpleCommand('switch-tabs', L.cmdTabSwitcher, function () {
        if (!plugin.tabSwitcherModal) {
            plugin.tabSwitcherModal = new modals.TabSwitcherModal(plugin.app, plugin);
        }
        plugin.tabSwitcherModal.open();
    });

    addSimpleCommand('toggle-zen-mode', L.cmdToggleZenMode, function () {
        plugin.toggleZenMode({ notify: true });
    });

    addSimpleCommand('save-current-session', L.cmdSaveCurrent, function () {
        plugin.saveActiveSession();
    });

    addSimpleCommand('toggle-auto-save-on-switch', L.cmdToggleAutoSave, function () {
        plugin.toggleAutoSaveOnSwitch({ notify: true });
    });

    addCommand({
        id: 'enable-auto-save-on-switch',
        name: L.cmdEnableAutoSave,
        checkCallback: function (checking) {
            var canRun = !plugin.isAutoSaveOnSwitchEnabled();
            if (!canRun) return false;
            if (!checking) plugin.setAutoSaveOnSwitch(true, { notify: true });
            return true;
        },
    });

    addCommand({
        id: 'disable-auto-save-on-switch',
        name: L.cmdDisableAutoSave,
        checkCallback: function (checking) {
            var canRun = plugin.isAutoSaveOnSwitchEnabled();
            if (!canRun) return false;
            if (!checking) plugin.setAutoSaveOnSwitch(false, { notify: true });
            return true;
        },
    });

    addCommand({
        id: 'version-history',
        name: L.cmdVersionHistory,
        checkCallback: function (checking) {
            if (!plugin.isVersionHistoryEnabled()) return false;
            var session = plugin.getActiveSession();
            if (!session) return false;
            if (!checking) {
                new modals.HistoryModal(plugin.app, plugin, session).open();
            }
            return true;
        },
    });
}

module.exports = registerCommands;
