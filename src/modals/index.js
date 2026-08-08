'use strict';

var SessionManagerModal = require('./session-manager-modal');
var ConfirmModal = require('./confirm-modal');
var RenameModal = require('./rename-modal');
var UnsavedSwitchModal = require('./unsaved-switch-modal');
var HistoryModal = require('./history-modal');
var HistoryEntryModal = require('./history-entry-modal');
var TabSwitcherModal = require('./tab-switcher-modal');

module.exports = {
    SessionManagerModal: SessionManagerModal,
    ConfirmModal: ConfirmModal,
    RenameModal: RenameModal,
    UnsavedSwitchModal: UnsavedSwitchModal,
    HistoryModal: HistoryModal,
    HistoryEntryModal: HistoryEntryModal,
    DeleteOrArchiveModal: require('./delete-or-archive-modal'),
    TabSwitcherModal: TabSwitcherModal,
};
