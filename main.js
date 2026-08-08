"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/i18n.js
var require_i18n = __commonJS({
  "src/i18n.js"(exports2) {
    "use strict";
    function isMacPlatform() {
      return typeof navigator !== "undefined" && typeof navigator.platform === "string" && navigator.platform.indexOf("Mac") !== -1;
    }
    function platformLabel(macText, otherText) {
      return function() {
        return isMacPlatform() ? macText : otherText;
      };
    }
    function modifiedClickLabel(baseText, macKey, otherKey) {
      return function() {
        return (isMacPlatform() ? macKey : otherKey) + " + " + baseText;
      };
    }
    var STRINGS = {
      en: {
        modalTitle: "Workspace Panel",
        savePlaceholder: "New session name...",
        filterPlaceholder: "Filter sessions...",
        settingsShowFilterInput: "Show session filter",
        settingsShowFilterInputDesc: "Display a text filter in the Session Manager to quickly find sessions.",
        settingsOverlayDefaultFocus: "Default overlay focus",
        settingsOverlayDefaultFocusDesc: "Choose which element receives focus when the Session Manager opens.",
        settingsOverlayFocusCurrentSession: "Current session",
        settingsOverlayFocusSessionFilter: "Session filter",
        settingsOverlayFocusSessionCreate: "Session creation",
        settingsSectionSessionManager: "Session list and search",
        settingsSectionSessionListSearch: "Session list and search",
        settingsShowActiveSwitchCommand: "Show active session in command palette",
        settingsShowActiveSwitchCommandDesc: "Show the switch command for the currently active session in the command palette. Hotkeys always work regardless of this setting.",
        settingsNumberedSwitchCommands: "Numbered session switching commands",
        settingsNumberedSwitchCommandsDesc: "Register switch commands with numbered slots (1\u20139) that can be bound to hotkeys. When off, all sessions use name-based commands instead.",
        save: "Create",
        load: "Switch",
        saveInline: "Save",
        active: "ACTIVE",
        modifiedJustNow: "Modified just now",
        modifiedMinutes: function(n) {
          return "Modified " + n + " minute" + (n !== 1 ? "s" : "") + " ago";
        },
        modifiedHours: function(n) {
          return "Modified " + n + " hour" + (n !== 1 ? "s" : "") + " ago";
        },
        modifiedDays: function(n) {
          return "Modified " + n + " day" + (n !== 1 ? "s" : "") + " ago";
        },
        duplicateName: "A session with this name already exists.",
        emptyName: "Session name cannot be empty.",
        created: function(n) {
          return 'Session "' + n + '" created';
        },
        deleted: function(n) {
          return 'Session "' + n + '" deleted';
        },
        loaded: function(n) {
          return 'Switched to "' + n + '"';
        },
        renamed: function(o, n) {
          return 'Renamed "' + o + '" to "' + n + '"';
        },
        confirmDelete: function(n) {
          return 'Delete session "' + n + '"?';
        },
        confirmDeleteActive: function(n) {
          return '"' + n + '" is the active session. Delete anyway?';
        },
        confirmSaveSession: function(n) {
          return 'Save session "' + n + '"?';
        },
        confirmOverwriteSessionWithCurrentLayout: function(n) {
          return 'Overwrite "' + n + '" with the current layout?';
        },
        confirmReloadSession: function(n) {
          return 'Reload session "' + n + '"? Unsaved changes will be lost.';
        },
        renameTitle: "Rename session",
        renamePlaceholder: "New name...",
        noSession: "No session",
        cannotDeleteLast: "The last session cannot be deleted.",
        confirmBulkDelete: function(n) {
          return "Delete " + n + " sessions?";
        },
        bulkDeleted: function(n) {
          return n + " sessions deleted";
        },
        bulkDelete: function(n) {
          return "Delete " + n + " sessions";
        },
        cmdManage: "Manage sessions",
        cmdCreate: "Create new session",
        cmdRename: "Rename current session",
        cmdDelete: "Delete current session",
        cmdNewEmpty: "Create blank session",
        cmdDuplicate: "Duplicate current session",
        duplicated: function(n) {
          return 'Duplicated as "' + n + '"';
        },
        deselect: "Deselect",
        footerDragReorder: "Drag to reorder",
        footerDragToGroup: "Drag to group tab to move",
        defaultLabel: "(default)",
        rename: "Rename",
        delete: "Delete",
        remove: "Remove",
        cancel: "Cancel",
        ribbonTooltip: "Workspace++",
        cmdSwitchTo: function(n, name) {
          return name ? "Switch to session " + n + ": " + name : "Switch to session " + n;
        },
        cmdSwitchToNamed: function(name) {
          return 'Switch to "' + name + '"';
        },
        cmdPrevious: "Previous session",
        cmdNext: "Next session",
        cmdSaveCurrent: "Save current session",
        cmdSaveAs: "Save current session as...",
        cmdSaveCurrentLayoutToSession: "Save current layout to session...",
        cmdReloadCurrentWithoutSaving: "Reload current session (without saving)",
        cmdToggleAutoSave: "Toggle auto-save on switch",
        cmdEnableAutoSave: "Enable auto-save on switch",
        cmdDisableAutoSave: "Disable auto-save on switch",
        cmdSearchOverlay: "Search sessions",
        cmdExportSessions: "Export sessions snapshot",
        cmdImportSessions: "Import latest sessions snapshot",
        switchLeft: "Left",
        switchRight: "Right",
        switchGroup: "Group",
        keyTab: "Tab",
        savedSession: function(n) {
          return 'Saved "' + n + '"';
        },
        savedAs: function(n) {
          return 'Saved as "' + n + '"';
        },
        savedCurrentLayoutToSession: function(n) {
          return 'Saved current layout to "' + n + '"';
        },
        noChanges: "No changes to save",
        reloadedSession: function(n) {
          return 'Reloaded "' + n + '"';
        },
        autoSaveEnabled: "Auto-save on switch enabled.",
        autoSaveDisabled: "Auto-save on switch disabled.",
        confirmUnsavedSwitch: function(n) {
          return 'Current session has unsaved changes. Switch to "' + n + '"?';
        },
        saveAndSwitch: "Save and switch",
        switchWithoutSaving: "Switch without saving",
        defaultSessionName: "default",
        nameSessionTitle: "Save with a session name",
        nameSessionPlaceholder: "Session name...",
        saveWithoutNaming: "Save without naming",
        sessionAutoName: function(n) {
          return "New session " + n;
        },
        noFilteredSessions: "No matching sessions",
        noGroupSessions: "No sessions in this group",
        searchOverlayPlaceholder: "Type to filter sessions...",
        saveCurrentLayoutToSessionPlaceholder: "Select a session to overwrite...",
        searchOverlayHelp: "\u2191\u2193 move  /  Enter switch  /  \u21E7Enter save  /  \u232B delete  /  Esc close",
        backupRestored: "Workspace++: Restored sessions from backup.",
        sessionDataMigrated: "Workspace++: Session data moved to .workspace-plus-plus/sessions.json.",
        sessionDataMigrationFailed: "Workspace++: Failed to migrate session data. Legacy data is still kept.",
        localSettingsEnabled: "Workspace++: Vault-local settings enabled.",
        localSettingsDisabled: "Workspace++: Vault-local settings disabled.",
        localSettingsCopied: "Workspace++: Copied global settings to vault-local settings.",
        localSettingsLoadFailed: "Workspace++: Failed to load vault-local settings. Using global settings.",
        localSettingsOperationFailed: "Workspace++: Failed to update vault-local settings.",
        exportSessionsDone: function(path) {
          return "Workspace++: Exported sessions to " + path;
        },
        exportSessionsFailed: "Workspace++: Failed to export sessions.",
        importSessionsDone: function(path) {
          return "Workspace++: Imported sessions from " + path;
        },
        importSessionsNoFile: "Workspace++: No export file found in .workspace-plus-plus/exports.",
        importSessionsFailed: "Workspace++: Failed to import sessions.",
        settingsLanguage: "Language",
        settingsLanguageDesc: "Plugin UI language. Restart Obsidian to apply to command names.",
        settingsSectionGeneral: "General",
        settingsTabSessions: "Sessions",
        settingsTabGroups: "Groups",
        settingsSectionSwitching: "Session switching",
        settingsSectionSwitchCommands: "Switch commands",
        settingsSectionScrollSwitch: "Scroll switching",
        settingsSectionSwitchPreview: "Preview before switching",
        settingsSubsectionSwitchSaving: "Saving when switching sessions",
        settingsSubsectionAutoSaveMode: "Session auto-save mode",
        settingsSubsectionSwitchCommands: "Session switching commands",
        settingsSubsectionScrollSwitch: "Session switching with scroll",
        settingsSubsectionSwitchPreview: "Preview before switching sessions",
        settingsSectionDeletion: "Deleting sessions",
        settingsSectionAdvanced: "Advanced",
        settingsSectionReset: "Reset",
        settingsStatusBarModScrollSwitch: "Enable session switching from the status bar",
        settingsStatusBarModScrollSwitchDesc: "On the status bar item, scroll vertically while holding the selected modifier key to switch sessions. Thresholding and cooldown reduce accidental trackpad triggers.",
        settingsStatusBarScrollPreset: "Scroll input preset",
        settingsStatusBarScrollPresetDesc: "Choose a preset tuned for your device, or switch to Custom to adjust the numbers yourself.",
        settingsStatusBarScrollPresetTrackpad: "Trackpad",
        settingsStatusBarScrollPresetNotchedWheel: "Notched mouse wheel",
        settingsStatusBarScrollPresetFreeSpinWheel: "Free-spin mouse wheel",
        settingsStatusBarScrollPresetCustom: "Custom",
        settingsStatusBarScrollModifier: "Required modifier",
        settingsStatusBarScrollModifierDesc: "Choose which modifier must be held while scrolling on the status bar item.",
        settingsStatusBarScrollModifierRecommended: function() {
          return typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "Cmd or Option" : "Ctrl or Alt";
        },
        settingsStatusBarScrollModifierNone: "None",
        settingsStatusBarScrollModifierModOnly: function() {
          return typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "Cmd only" : "Ctrl only";
        },
        settingsStatusBarScrollModifierAltOnly: function() {
          return typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "Option only" : "Alt only";
        },
        settingsStatusBarScrollModifierModOrAlt: function() {
          return typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "Cmd or Option" : "Ctrl or Alt";
        },
        settingsStatusBarScrollThreshold: "Sensitivity threshold",
        settingsStatusBarScrollThresholdDesc: "Lower values switch more easily. Used only when the preset is Custom.",
        settingsStatusBarScrollCooldown: "Cooldown",
        settingsStatusBarScrollCooldownDesc: "Minimum time between scroll-triggered session switches. Used only when the preset is Custom.",
        settingsStatusBarScrollResetWindow: "Accumulation reset window",
        settingsStatusBarScrollResetWindowDesc: "How long to keep combining small scroll deltas before resetting. Used only when the preset is Custom.",
        settingsStatusBarScrollInvert: "Invert scroll direction",
        settingsStatusBarScrollInvertDesc: "Reverse the previous/next direction for status bar scroll switching.",
        settingsLangAuto: "Auto (system language)",
        settingsGitHubLink: "GitHub",
        settingsTranslationHelp: "Found a translation error? Please open an issue or pull request on GitHub.",
        settingsPreviewHeading: "Enable preview before switching sessions",
        settingsPreviewDesc: "When switching sessions with a hotkey, the first press shows your current position without switching.",
        settingsPreviewNext: "Next session",
        settingsPreviewPrevious: "Previous session",
        settingsHotkeys: "Hotkeys",
        settingsHotkeysBtn: "Open hotkey settings",
        contextOpenSettings: "Open settings",
        contextCustomizeClicks: "Customize click actions",
        settingsSectionStatusBar: "Status bar click actions",
        statusBarSlotClick: "Click",
        statusBarSlotAltClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2325" : "Alt") + " + Click";
        },
        statusBarSlotModClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2318" : "Ctrl") + " + Click";
        },
        statusBarSlotShiftClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u21E7" : "Shift") + " + Click";
        },
        statusBarSlotMiddleClick: "Middle-click",
        statusBarSlotAltMiddleClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2325" : "Alt") + " + Middle-click";
        },
        statusBarSlotModMiddleClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2318" : "Ctrl") + " + Middle-click";
        },
        statusBarSlotShiftMiddleClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u21E7" : "Shift") + " + Middle-click";
        },
        statusBarSlotRightClick: "Right-click",
        statusBarSlotAltRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2325" : "Alt") + " + Right-click";
        },
        statusBarSlotModRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2318" : "Ctrl") + " + Right-click";
        },
        statusBarSlotShiftRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u21E7" : "Shift") + " + Right-click";
        },
        statusBarActionNone: "Do nothing",
        statusBarActionQuickSwitcher: "Open Quick Switcher",
        statusBarActionSessionManager: "Open Session Manager",
        statusBarActionSaveSession: "Save session",
        statusBarActionReloadWithoutSaving: "Reload without saving",
        statusBarActionVersionHistory: "Show version history",
        statusBarActionRestoreLatestHistory: "Restore latest history",
        statusBarActionSessionMenu: "Session context menu",
        statusBarActionSettingsMenu: "Settings context menu",
        contextResetOverlayPosition: "Reset position and size",
        settingsConfirmDelete: "Confirm before deleting a session",
        settingsConfirmDeleteDesc: "Show a confirmation dialog before deleting a session.",
        settingsConfirmQuickActions: "Confirm save/reload in quick switcher",
        settingsConfirmQuickActionsDesc: "Show a confirmation dialog before saving or reloading a session from the quick switcher overlay.",
        settingsAutoSaveOnSwitch: "Auto-save mode",
        settingsAutoSaveOnSwitchDesc: "Automatically saves the current session when switching (default: ON). When OFF, you can save and reload sessions manually.",
        settingsWarnUnsavedSwitch: "Warn before switching without saving",
        settingsWarnUnsavedSwitchDesc: "When auto-save is off and current session has unsaved changes, show a warning before switching.",
        settingsHighlightUnsavedSessionChanges: "Highlight unsaved session changes",
        settingsHighlightUnsavedSessionChangesDesc: "When auto-save on switch is off, highlight the status bar when the current workspace layout differs from the saved session.",
        settingsStatusBarQuickSwitcher: "Quick switcher on status bar click",
        settingsStatusBarQuickSwitcherDesc: "When enabled, clicking the status bar opens the quick switcher overlay instead of the full session manager.",
        settingsUseLocalSettings: "Use vault-local settings",
        settingsUseLocalSettingsDesc: "Turn this on if you sync .obsidian between vaults (for example, with Settings Profiles) and want Workspace++ settings to stay different per vault.",
        settingsCopyGlobalToLocal: "Copy global settings to this vault",
        settingsCopyGlobalToLocalDesc: "Overwrite vault-local settings with your current global settings.",
        settingsCopyGlobalToLocalBtn: "Copy",
        settingsResetLocalSettings: "Reset vault-local settings",
        settingsResetLocalSettingsDesc: "Reset vault-local settings back to your global settings.",
        settingsResetLocalSettingsBtn: "Reset local",
        settingsAdvancedStorageSubsection: "Storage behavior",
        settingsAdvancedTransferSubsection: "Data transfer",
        settingsDeveloperSection: "Developer tools",
        settingsStorageDiagnostics: "Storage diagnostics",
        settingsStorageDiagnosticsDesc: "Storage details currently used by Workspace++.",
        settingsStorageFieldSessions: "Sessions file",
        settingsStorageFieldSessionsBackup: "Sessions backup",
        settingsStorageFieldLocalSettings: "Local settings file",
        settingsStorageFieldGlobalSettings: "Global settings file",
        settingsStorageFieldSessionCount: "Session count",
        settingsStorageFieldUpdatedAt: "Updated at",
        settingsExportSessions: "Export sessions",
        settingsExportSessionsDesc: "Save a snapshot to .workspace-plus-plus/exports.",
        settingsExportSessionsBtn: "Export",
        settingsImportSessions: "Import sessions",
        settingsImportSessionsDesc: "Import the latest snapshot from .workspace-plus-plus/exports.",
        settingsImportSessionsBtn: "Import latest",
        confirmImportSessions: "Import the latest exported sessions? Current sessions will be replaced.",
        settingsResetSettings: "Reset settings",
        settingsResetSettingsDesc: "Reset Workspace++ settings for the current settings scope.",
        settingsResetSettingsBtn: "Reset settings",
        confirmResetSettings: "Reset Workspace++ settings to defaults?",
        resetSettingsDone: "Workspace++ settings have been reset.",
        resetSettingsFailed: "Failed to reset Workspace++ settings.",
        settingsResetSessions: "Reset sessions",
        settingsResetSessionsDesc: "Delete all saved sessions and keep only a fresh default session from the current layout.",
        settingsResetSessionsBtn: "Reset",
        confirmResetSessions: "Reset all sessions to default? This cannot be undone.",
        resetSessionsHint: "This will remove every saved session and keep only one default session.",
        resetSessionsDone: "Sessions have been reset to default.",
        resetSessionsFailed: "Failed to reset sessions.",
        settingsResetSessionsAndSettings: "Reset sessions and settings",
        settingsResetSessionsAndSettingsDesc: "Reset both saved sessions and Workspace++ settings at once.",
        settingsResetSessionsAndSettingsBtn: "Reset both",
        confirmResetSessionsAndSettings: "Reset both sessions and settings? This cannot be undone.",
        resetSessionsAndSettingsDone: "Sessions and settings have been reset.",
        resetSessionsAndSettingsFailed: "Failed to reset sessions and settings.",
        confirmDeleteSettingsHint: "To disable this confirmation, go to Settings.",
        // --- Groups ---
        groupCreated: function(n) {
          return 'Group "' + n + '" created';
        },
        groupDeleted: function(n) {
          return 'Group "' + n + '" deleted';
        },
        groupRenamed: function(o, n) {
          return 'Group renamed: "' + o + '" \u2192 "' + n + '"';
        },
        groupAll: "All",
        groupDuplicateName: "A group with this name already exists.",
        groupEmptyName: "Group name cannot be empty.",
        cmdSwitchGroup: "Switch group",
        cmdExitGroup: "Show all sessions (exit group)",
        cmdNextGroup: "Next group",
        cmdPreviousGroup: "Previous group",
        searchOverlayHelpWithGroups: "\u2191\u2193 move  /  Tab group  /  Enter switch  /  \u21E7Enter save  /  \u232B delete  /  Esc close",
        settingsSectionGroups: "Session groups",
        contextToggleGroups: "Enable session groups",
        settingsSectionGroupsDesc: "Use groups to organize sessions. Turn this off to hide group tabs and group-switch actions.",
        settingsGroupCreate: "Create group",
        settingsGroupCreateDesc: "Create a new session group.",
        settingsGroupCreatePlaceholder: "Group name...",
        settingsGroupCreateBtn: "Create",
        settingsGroupManageSessions: "Manage sessions",
        settingsGroupManageSessionsDesc: "Add or remove sessions from this group.",
        settingsGroupSessionCount: function(n) {
          return n + " session" + (n !== 1 ? "s" : "");
        },
        settingsGroupDelete: "Delete group",
        settingsGroupDeleteConfirm: function(n) {
          return 'Delete group "' + n + '"? Sessions will not be deleted.';
        },
        confirmDeleteGroup: function(n) {
          return 'Delete group "' + n + '"? Sessions inside this group will NOT be deleted.';
        },
        groupAddedSession: function(s, g) {
          return 'Added "' + s + '" to "' + g + '"';
        },
        groupRemovedSession: function(s, g) {
          return 'Removed "' + s + '" from "' + g + '"';
        },
        groupRemoveFromGroup: "Remove from group",
        groupMoveToGroup: "Move to group",
        groupCreateNew: "New group",
        groupCreatePlaceholder: "Group name...",
        groupContextRename: "Rename group",
        groupContextDelete: "Delete group",
        contextSwitchSession: "Switch to this session",
        contextRenameSession: "Rename this session",
        contextDeleteSession: "Delete this session",
        contextDuplicateSession: "Duplicate this session",
        contextReloadSession: "Reload this session",
        contextSaveSession: "Save this session",
        contextSaveCurrentLayoutToThisSession: "Save current layout to this session",
        groupRemoveAllSessions: "Remove all sessions from this group",
        confirmRemoveAllFromGroup: function(g, n) {
          return "Remove all " + n + ' sessions from "' + g + '"?';
        },
        groupRemovedAllSessions: function(g) {
          return 'Removed all sessions from "' + g + '"';
        },
        contextDeleteAllGroups: "Delete all groups",
        confirmDeleteAllGroups: function(n) {
          return "Delete all " + n + " groups? Sessions will not be deleted.";
        },
        deletedAllGroups: function(n) {
          return n + " groups deleted";
        },
        contextDeleteAllSessions: "Delete all sessions",
        confirmDeleteAllSessions: function(n) {
          return "Delete " + n + " sessions? The active session will be kept.";
        },
        deletedAllSessions: function(n) {
          return n + " sessions deleted";
        },
        contextVersionHistory: "Version history",
        cmdVersionHistory: "View session version history",
        historyTitle: "Version history",
        historyEmpty: "No version history for this session.",
        historyRestore: "Restore",
        historyRestoreConfirm: function(name, time) {
          return 'Restore "' + name + '" layout from ' + time + "?";
        },
        historyRestored: function(name) {
          return 'Restored layout for "' + name + '"';
        },
        historyQuickRestored: function(name) {
          return 'Quick-restored previous layout for "' + name + '"';
        },
        historyNoEntries: "No previous layouts to restore.",
        historyToday: "Today",
        historyYesterday: "Yesterday",
        historyThisWeek: "This week",
        historyFiles: function(n) {
          return n + " file" + (n !== 1 ? "s" : "");
        },
        historyPanes: function(n) {
          return n + " pane" + (n !== 1 ? "s" : "");
        },
        settingsVersionHistoryEnabled: "Enable version history",
        settingsVersionHistoryEnabledDesc: "Keep a history of layout changes for each session.",
        settingsVersionHistoryInterval: "Snapshot interval (minutes)",
        settingsVersionHistoryIntervalDesc: "How often to check for layout changes and save a snapshot.",
        settingsVersionHistoryCtrlRmb: function() {
          return "Quick restore (" + (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "Cmd" : "Ctrl") + " + Right-click)";
        },
        settingsVersionHistoryCtrlRmbDesc: function() {
          return "Right-click the status bar while holding " + (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "Cmd" : "Ctrl") + " to restore the previous layout.";
        },
        settingsVersionHistoryConfirmRestore: "Confirm before restoring",
        settingsVersionHistoryConfirmRestoreDesc: "Show a confirmation dialog before restoring a previous layout.",
        rotationBackupSectionTitle: "Backup",
        rotationBackupCreate: "Create backup",
        rotationBackupCreateBtn: "Backup now",
        rotationBackupCreated: "Backup created.",
        rotationBackupFailed: "Failed to create backup.",
        rotationBackupDesc: "Automatic backups are created on save (hourly, up to 3 generations).",
        rotationBackupRestore: "Restore",
        rotationBackupRestoreConfirm: function(time, count) {
          return "Restore from backup at " + time + " (" + count + " session" + (count !== 1 ? "s" : "") + ")? Current data will be overwritten.";
        },
        rotationBackupRestored: "Restored from backup.",
        rotationBackupRestoreFailed: "Failed to restore from backup.",
        rotationBackupNone: "No backups available.",
        rotationBackupGeneration: function(count) {
          return count + " session" + (count !== 1 ? "s" : "");
        },
        frontmatterSessionNotFound: function(n) {
          return 'Session "' + n + '" not found (workspace-session)';
        },
        frontmatterAlreadyActive: function(n) {
          return 'Session "' + n + '" is already active';
        }
      },
      zh: {
        settingsStatusBarModScrollSwitch: "\u6309\u4F4F Ctrl/Cmd \u5E76\u6EDA\u52A8\u4EE5\u5207\u6362\u4F1A\u8BDD",
        settingsStatusBarModScrollSwitchDesc: "\u5728\u72B6\u6001\u680F\u9879\u76EE\u4E0A\uFF0C\u6309\u4F4F\u6240\u9009\u4FEE\u9970\u952E\u5E76\u5782\u76F4\u6EDA\u52A8\u5373\u53EF\u5207\u6362\u4F1A\u8BDD\u3002\u4F7F\u7528\u9608\u503C\u548C\u51B7\u5374\u65F6\u95F4\u4EE5\u51CF\u5C11\u89E6\u63A7\u677F\u8BEF\u89E6\u3002",
        modalTitle: "\u5DE5\u4F5C\u533A\u9762\u677F",
        savePlaceholder: "\u65B0\u4F1A\u8BDD\u540D\u79F0\u2026",
        filterPlaceholder: "\u7B5B\u9009\u4F1A\u8BDD...",
        settingsShowFilterInput: "\u663E\u793A\u4F1A\u8BDD\u7B5B\u9009",
        settingsShowFilterInputDesc: "\u5728\u4F1A\u8BDD\u7BA1\u7406\u5668\u4E2D\u663E\u793A\u6587\u672C\u7B5B\u9009\u6846\uFF0C\u5FEB\u901F\u67E5\u627E\u4F1A\u8BDD\u3002",
        settingsOverlayDefaultFocus: "\u9ED8\u8BA4\u53E0\u52A0\u5C42\u7126\u70B9",
        settingsOverlayDefaultFocusDesc: "\u9009\u62E9\u4F1A\u8BDD\u7BA1\u7406\u5668\u6253\u5F00\u65F6\u9ED8\u8BA4\u805A\u7126\u7684\u5143\u7D20\u3002",
        settingsOverlayFocusCurrentSession: "\u5F53\u524D\u4F1A\u8BDD",
        settingsOverlayFocusSessionFilter: "\u4F1A\u8BDD\u7B5B\u9009",
        settingsOverlayFocusSessionCreate: "\u521B\u5EFA\u4F1A\u8BDD",
        settingsSectionSessionManager: "\u4F1A\u8BDD\u7BA1\u7406\u5668",
        settingsShowActiveSwitchCommand: "\u5728\u547D\u4EE4\u9762\u677F\u4E2D\u663E\u793A\u5F53\u524D\u4F1A\u8BDD",
        settingsShowActiveSwitchCommandDesc: "\u5728\u547D\u4EE4\u9762\u677F\u4E2D\u663E\u793A\u5F53\u524D\u6D3B\u52A8\u4F1A\u8BDD\u7684\u5207\u6362\u547D\u4EE4\u3002\u65E0\u8BBA\u6B64\u8BBE\u7F6E\u5982\u4F55\uFF0C\u5FEB\u6377\u952E\u59CB\u7EC8\u6709\u6548\u3002",
        settingsNumberedSwitchCommands: "\u7F16\u53F7\u5207\u6362\u547D\u4EE4",
        settingsNumberedSwitchCommandsDesc: "\u6CE8\u518C\u7F16\u53F7\u69FD\u4F4D\uFF081\u20139\uFF09\u7684\u5207\u6362\u547D\u4EE4\uFF0C\u53EF\u7ED1\u5B9A\u5FEB\u6377\u952E\u3002\u5173\u95ED\u540E\uFF0C\u6240\u6709\u4F1A\u8BDD\u6539\u7528\u57FA\u4E8E\u540D\u79F0\u7684\u547D\u4EE4\u3002",
        save: "\u521B\u5EFA",
        load: "\u5207\u6362",
        saveInline: "\u4FDD\u5B58",
        active: "\u4F7F\u7528\u4E2D",
        modifiedJustNow: "\u521A\u521A\u4FEE\u6539",
        modifiedMinutes: function(n) {
          return n + " \u5206\u949F\u524D\u4FEE\u6539";
        },
        modifiedHours: function(n) {
          return n + " \u5C0F\u65F6\u524D\u4FEE\u6539";
        },
        modifiedDays: function(n) {
          return n + " \u5929\u524D\u4FEE\u6539";
        },
        duplicateName: "\u5DF2\u5B58\u5728\u540C\u540D\u4F1A\u8BDD\u3002",
        emptyName: "\u4F1A\u8BDD\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u3002",
        created: function(n) {
          return "\u5DF2\u521B\u5EFA\u4F1A\u8BDD\u201C" + n + "\u201D";
        },
        deleted: function(n) {
          return "\u5DF2\u5220\u9664\u4F1A\u8BDD\u201C" + n + "\u201D";
        },
        loaded: function(n) {
          return "\u5DF2\u5207\u6362\u81F3\u201C" + n + "\u201D";
        },
        renamed: function(o, n) {
          return "\u5DF2\u5C06\u201C" + o + "\u201D\u91CD\u547D\u540D\u4E3A\u201C" + n + "\u201D";
        },
        confirmDelete: function(n) {
          return "\u786E\u5B9A\u5220\u9664\u4F1A\u8BDD\u201C" + n + "\u201D\uFF1F";
        },
        confirmDeleteActive: function(n) {
          return "\u201C" + n + "\u201D\u662F\u5F53\u524D\u6D3B\u52A8\u4F1A\u8BDD\uFF0C\u786E\u5B9A\u5220\u9664\uFF1F";
        },
        confirmSaveSession: function(n) {
          return '\u4FDD\u5B58\u4F1A\u8BDD "' + n + '"\uFF1F';
        },
        confirmReloadSession: function(n) {
          return '\u91CD\u65B0\u52A0\u8F7D\u4F1A\u8BDD "' + n + '"\uFF1F\u672A\u4FDD\u5B58\u7684\u66F4\u6539\u5C06\u4E22\u5931\u3002';
        },
        renameTitle: "\u91CD\u547D\u540D\u4F1A\u8BDD",
        renamePlaceholder: "\u65B0\u540D\u79F0\u2026",
        noSession: "\u65E0\u4F1A\u8BDD",
        cannotDeleteLast: "\u6700\u540E\u4E00\u4E2A\u4F1A\u8BDD\u65E0\u6CD5\u5220\u9664\u3002",
        confirmBulkDelete: function(n) {
          return "\u786E\u5B9A\u5220\u9664 " + n + " \u4E2A\u4F1A\u8BDD\uFF1F";
        },
        bulkDeleted: function(n) {
          return "\u5DF2\u5220\u9664 " + n + " \u4E2A\u4F1A\u8BDD";
        },
        bulkDelete: function(n) {
          return "\u5220\u9664 " + n + " \u4E2A\u4F1A\u8BDD";
        },
        cmdManage: "\u7BA1\u7406\u4F1A\u8BDD",
        cmdCreate: "\u521B\u5EFA\u65B0\u4F1A\u8BDD",
        cmdRename: "\u91CD\u547D\u540D\u5F53\u524D\u4F1A\u8BDD",
        cmdDelete: "\u5220\u9664\u5F53\u524D\u4F1A\u8BDD",
        cmdNewEmpty: "\u521B\u5EFA\u7A7A\u767D\u4F1A\u8BDD",
        cmdDuplicate: "\u590D\u5236\u5F53\u524D\u4F1A\u8BDD",
        duplicated: function(n) {
          return "\u5DF2\u590D\u5236\u4E3A\u201C" + n + "\u201D";
        },
        deselect: "\u53D6\u6D88\u9009\u62E9",
        footerDragReorder: "\u62D6\u62FD\u6392\u5E8F",
        footerDragToGroup: "\u62D6\u62FD\u5230\u5206\u7EC4\u6807\u7B7E\u79FB\u52A8",
        defaultLabel: "\uFF08\u9ED8\u8BA4\uFF09",
        rename: "\u91CD\u547D\u540D",
        delete: "\u5220\u9664",
        remove: "\u79FB\u9664",
        cancel: "\u53D6\u6D88",
        ribbonTooltip: "Workspace++",
        cmdSwitchTo: function(n, name) {
          return name ? "\u5207\u6362\u81F3\u4F1A\u8BDD " + n + ": " + name : "\u5207\u6362\u81F3\u4F1A\u8BDD " + n;
        },
        cmdSwitchToNamed: function(name) {
          return '\u5207\u6362\u81F3 "' + name + '"';
        },
        cmdPrevious: "\u4E0A\u4E00\u4E2A\u4F1A\u8BDD",
        cmdNext: "\u4E0B\u4E00\u4E2A\u4F1A\u8BDD",
        cmdSaveCurrent: "\u4FDD\u5B58\u5F53\u524D\u4F1A\u8BDD",
        cmdSaveAs: "\u5C06\u5F53\u524D\u4F1A\u8BDD\u53E6\u5B58\u4E3A...",
        cmdToggleAutoSave: "\u5207\u6362\u4F1A\u8BDD\u5207\u6362\u65F6\u81EA\u52A8\u4FDD\u5B58",
        cmdEnableAutoSave: "\u542F\u7528\u4F1A\u8BDD\u5207\u6362\u65F6\u81EA\u52A8\u4FDD\u5B58",
        cmdDisableAutoSave: "\u7981\u7528\u4F1A\u8BDD\u5207\u6362\u65F6\u81EA\u52A8\u4FDD\u5B58",
        cmdSearchOverlay: "\u641C\u7D22\u4F1A\u8BDD",
        switchLeft: "\u5DE6",
        switchRight: "\u53F3",
        switchGroup: "\u5206\u7EC4",
        keyTab: "Tab",
        savedSession: function(n) {
          return "\u5DF2\u4FDD\u5B58\u4F1A\u8BDD\u201D" + n + "\u201D";
        },
        savedAs: function(n) {
          return "\u5DF2\u53E6\u5B58\u4E3A\u201D" + n + "\u201D";
        },
        noChanges: "\u6CA1\u6709\u9700\u8981\u4FDD\u5B58\u7684\u66F4\u6539",
        autoSaveEnabled: "\u5DF2\u542F\u7528\u4F1A\u8BDD\u5207\u6362\u65F6\u81EA\u52A8\u4FDD\u5B58\u3002",
        autoSaveDisabled: "\u5DF2\u7981\u7528\u4F1A\u8BDD\u5207\u6362\u65F6\u81EA\u52A8\u4FDD\u5B58\u3002",
        confirmUnsavedSwitch: function(n) {
          return "\u5F53\u524D\u4F1A\u8BDD\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539\u3002\u8981\u5207\u6362\u5230\u201C" + n + "\u201D\u5417\uFF1F";
        },
        saveAndSwitch: "\u4FDD\u5B58\u5E76\u5207\u6362",
        switchWithoutSaving: "\u4E0D\u4FDD\u5B58\u76F4\u63A5\u5207\u6362",
        sessionAutoName: function(n) {
          return "\u65B0\u4F1A\u8BDD " + n;
        },
        noFilteredSessions: "\u6CA1\u6709\u5339\u914D\u7684\u4F1A\u8BDD",
        noGroupSessions: "\u6B64\u5206\u7EC4\u4E2D\u6CA1\u6709\u4F1A\u8BDD",
        searchOverlayPlaceholder: "\u8F93\u5165\u4EE5\u7B5B\u9009\u4F1A\u8BDD...",
        searchOverlayHelp: "\u2191\u2193 \u79FB\u52A8  /  Enter \u5207\u6362  /  \u21E7Enter \u4FDD\u5B58  /  \u232B \u5220\u9664  /  Esc \u5173\u95ED",
        backupRestored: "Workspace++: \u5DF2\u4ECE\u5907\u4EFD\u6062\u590D\u4F1A\u8BDD\u3002",
        settingsLanguage: "\u8BED\u8A00",
        settingsLanguageDesc: "\u63D2\u4EF6\u754C\u9762\u8BED\u8A00\u3002\u91CD\u542F Obsidian \u540E\u547D\u4EE4\u540D\u79F0\u624D\u4F1A\u66F4\u65B0\u3002",
        settingsSectionGeneral: "\u5E38\u89C4",
        settingsTabSessions: "\u4F1A\u8BDD",
        settingsTabGroups: "\u5206\u7EC4",
        settingsSectionSwitching: "\u4F1A\u8BDD\u81EA\u52A8\u4FDD\u5B58",
        settingsSectionSwitchPreview: "\u4F1A\u8BDD\u5207\u6362",
        settingsSectionDeletion: "\u4F1A\u8BDD\u5220\u9664",
        settingsLangAuto: "\u81EA\u52A8\uFF08\u7CFB\u7EDF\u8BED\u8A00\uFF09",
        settingsTranslationHelp: "\u53D1\u73B0\u7FFB\u8BD1\u9519\u8BEF\uFF1F\u8BF7\u5728 GitHub \u4E0A\u63D0\u4EA4 issue \u6216 Pull request\u3002",
        settingsPreviewHeading: "\u5207\u6362\u524D\u663E\u793A\u5F53\u524D\u4F1A\u8BDD",
        settingsPreviewDesc: "\u4F7F\u7528\u5FEB\u6377\u952E\u5207\u6362\u4F1A\u8BDD\u65F6\uFF0C\u7B2C\u4E00\u6B21\u6309\u4E0B\u4EC5\u663E\u793A\u5F53\u524D\u4F4D\u7F6E\uFF0C\u4E0D\u8FDB\u884C\u5207\u6362\u3002",
        settingsPreviewNext: "\u4E0B\u4E00\u4E2A\u4F1A\u8BDD",
        settingsPreviewPrevious: "\u4E0A\u4E00\u4E2A\u4F1A\u8BDD",
        settingsHotkeys: "\u5FEB\u6377\u952E",
        settingsHotkeysBtn: "\u6253\u5F00\u5FEB\u6377\u952E\u8BBE\u7F6E",
        contextOpenSettings: "\u6253\u5F00\u8BBE\u7F6E",
        contextCustomizeClicks: "\u81EA\u5B9A\u4E49\u70B9\u51FB\u64CD\u4F5C",
        settingsSectionStatusBar: "\u72B6\u6001\u680F\u70B9\u51FB\u64CD\u4F5C",
        statusBarSlotClick: "\u70B9\u51FB",
        statusBarSlotAltClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2325" : "Alt") + " + \u70B9\u51FB";
        },
        statusBarSlotModClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2318" : "Ctrl") + " + \u70B9\u51FB";
        },
        statusBarSlotShiftClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u21E7" : "Shift") + " + \u70B9\u51FB";
        },
        statusBarSlotMiddleClick: "\u4E2D\u952E\u70B9\u51FB",
        statusBarSlotAltMiddleClick: modifiedClickLabel("\u4E2D\u952E\u70B9\u51FB", "\u2325", "Alt"),
        statusBarSlotModMiddleClick: modifiedClickLabel("\u4E2D\u952E\u70B9\u51FB", "\u2318", "Ctrl"),
        statusBarSlotShiftMiddleClick: modifiedClickLabel("\u4E2D\u952E\u70B9\u51FB", "\u21E7", "Shift"),
        statusBarSlotRightClick: "\u53F3\u952E",
        statusBarSlotAltRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2325" : "Alt") + " + \u53F3\u952E";
        },
        statusBarSlotModRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2318" : "Ctrl") + " + \u53F3\u952E";
        },
        statusBarSlotShiftRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u21E7" : "Shift") + " + \u53F3\u952E";
        },
        statusBarActionNone: "\u65E0\u64CD\u4F5C",
        statusBarActionQuickSwitcher: "\u6253\u5F00\u5FEB\u901F\u5207\u6362\u5668",
        statusBarActionSessionManager: "\u6253\u5F00\u4F1A\u8BDD\u7BA1\u7406\u5668",
        statusBarActionSaveSession: "\u4FDD\u5B58\u4F1A\u8BDD",
        statusBarActionReloadWithoutSaving: "\u4E0D\u4FDD\u5B58\u91CD\u65B0\u52A0\u8F7D",
        statusBarActionVersionHistory: "\u663E\u793A\u7248\u672C\u5386\u53F2",
        statusBarActionRestoreLatestHistory: "\u6062\u590D\u6700\u65B0\u5386\u53F2",
        statusBarActionSessionMenu: "\u4F1A\u8BDD\u4E0A\u4E0B\u6587\u83DC\u5355",
        statusBarActionSettingsMenu: "\u8BBE\u7F6E\u4E0A\u4E0B\u6587\u83DC\u5355",
        contextResetOverlayPosition: "\u91CD\u7F6E\u4F4D\u7F6E\u548C\u5927\u5C0F",
        settingsConfirmDelete: "\u5220\u9664\u4F1A\u8BDD\u524D\u786E\u8BA4",
        settingsConfirmDeleteDesc: "\u5220\u9664\u4F1A\u8BDD\u524D\u663E\u793A\u786E\u8BA4\u5BF9\u8BDD\u6846\u3002",
        settingsConfirmQuickActions: "\u5FEB\u901F\u5207\u6362\u5668\u4E2D\u4FDD\u5B58/\u91CD\u8F7D\u524D\u786E\u8BA4",
        settingsConfirmQuickActionsDesc: "\u5728\u5FEB\u901F\u5207\u6362\u5668\u4E2D\u4FDD\u5B58\u6216\u91CD\u65B0\u52A0\u8F7D\u4F1A\u8BDD\u524D\u663E\u793A\u786E\u8BA4\u5BF9\u8BDD\u6846\u3002",
        settingsAutoSaveOnSwitch: "\u81EA\u52A8\u4FDD\u5B58\u6A21\u5F0F",
        settingsAutoSaveOnSwitchDesc: "\u5207\u6362\u4F1A\u8BDD\u65F6\u81EA\u52A8\u4FDD\u5B58\u5F53\u524D\u4F1A\u8BDD\uFF08\u9ED8\u8BA4\uFF1A\u5F00\u542F\uFF09\u3002\u5173\u95ED\u540E\u53EF\u624B\u52A8\u63A7\u5236\u4FDD\u5B58\u548C\u91CD\u65B0\u52A0\u8F7D\u3002",
        settingsWarnUnsavedSwitch: "\u672A\u4FDD\u5B58\u65F6\u5207\u6362\u524D\u8B66\u544A",
        settingsWarnUnsavedSwitchDesc: "\u5F53\u81EA\u52A8\u4FDD\u5B58\u5173\u95ED\u4E14\u5F53\u524D\u4F1A\u8BDD\u6709\u672A\u4FDD\u5B58\u66F4\u6539\u65F6\uFF0C\u5207\u6362\u524D\u663E\u793A\u8B66\u544A\u3002",
        settingsHighlightUnsavedSessionChanges: "\u9AD8\u4EAE\u672A\u4FDD\u5B58\u7684\u4F1A\u8BDD\u66F4\u6539",
        settingsHighlightUnsavedSessionChangesDesc: "\u5F53\u81EA\u52A8\u4FDD\u5B58\u5173\u95ED\u4E14\u5F53\u524D\u5DE5\u4F5C\u533A\u5E03\u5C40\u4E0E\u4FDD\u5B58\u7684\u4F1A\u8BDD\u4E0D\u540C\u65F6\uFF0C\u9AD8\u4EAE\u72B6\u6001\u680F\u3002",
        settingsStatusBarQuickSwitcher: "\u72B6\u6001\u680F\u70B9\u51FB\u65F6\u4F7F\u7528\u5FEB\u901F\u5207\u6362\u5668",
        settingsStatusBarQuickSwitcherDesc: "\u542F\u7528\u540E\uFF0C\u70B9\u51FB\u72B6\u6001\u680F\u5C06\u6253\u5F00\u5FEB\u901F\u5207\u6362\u8986\u76D6\u5C42\uFF0C\u800C\u975E\u5B8C\u6574\u7684\u4F1A\u8BDD\u7BA1\u7406\u5668\u3002",
        settingsResetSessions: "\u91CD\u7F6E\u4F1A\u8BDD",
        settingsResetSessionsDesc: "\u5220\u9664\u6240\u6709\u5DF2\u4FDD\u5B58\u4F1A\u8BDD\uFF0C\u5E76\u4EC5\u4FDD\u7559\u57FA\u4E8E\u5F53\u524D\u5E03\u5C40\u7684\u65B0\u9ED8\u8BA4\u4F1A\u8BDD\u3002",
        settingsResetSessionsBtn: "\u91CD\u7F6E",
        confirmResetSessions: "\u8981\u5C06\u6240\u6709\u4F1A\u8BDD\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",
        resetSessionsHint: "\u8FD9\u5C06\u79FB\u9664\u6240\u6709\u5DF2\u4FDD\u5B58\u4F1A\u8BDD\uFF0C\u5E76\u4EC5\u4FDD\u7559\u4E00\u4E2A\u9ED8\u8BA4\u4F1A\u8BDD\u3002",
        resetSessionsDone: "\u4F1A\u8BDD\u5DF2\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u3002",
        resetSessionsFailed: "\u91CD\u7F6E\u4F1A\u8BDD\u5931\u8D25\u3002",
        confirmDeleteSettingsHint: "\u5982\u4E0D\u9700\u8981\u6B64\u786E\u8BA4\uFF0C\u8BF7\u524D\u5F80\u8BBE\u7F6E\u5173\u95ED\u3002",
        // --- Groups ---
        groupCreated: function(n) {
          return "\u5DF2\u521B\u5EFA\u5206\u7EC4\u201C" + n + "\u201D";
        },
        groupDeleted: function(n) {
          return "\u5DF2\u5220\u9664\u5206\u7EC4\u201C" + n + "\u201D";
        },
        groupRenamed: function(o, n) {
          return "\u5206\u7EC4\u5DF2\u91CD\u547D\u540D\uFF1A\u201C" + o + "\u201D \u2192 \u201C" + n + "\u201D";
        },
        groupAll: "\u5168\u90E8",
        groupDuplicateName: "\u5DF2\u5B58\u5728\u540C\u540D\u5206\u7EC4\u3002",
        groupEmptyName: "\u5206\u7EC4\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\u3002",
        cmdSwitchGroup: "\u5207\u6362\u5206\u7EC4",
        cmdExitGroup: "\u663E\u793A\u6240\u6709\u4F1A\u8BDD\uFF08\u9000\u51FA\u5206\u7EC4\uFF09",
        cmdNextGroup: "\u4E0B\u4E00\u4E2A\u5206\u7EC4",
        cmdPreviousGroup: "\u4E0A\u4E00\u4E2A\u5206\u7EC4",
        searchOverlayHelpWithGroups: "\u2191\u2193 \u79FB\u52A8  /  Tab \u5206\u7EC4  /  Enter \u5207\u6362  /  \u21E7Enter \u4FDD\u5B58  /  \u232B \u5220\u9664  /  Esc \u5173\u95ED",
        settingsSectionGroups: "\u4F1A\u8BDD\u5206\u7EC4",
        contextToggleGroups: "\u542F\u7528\u4F1A\u8BDD\u5206\u7EC4",
        settingsSectionGroupsDesc: "\u4F7F\u7528\u5206\u7EC4\u6765\u6574\u7406\u4F1A\u8BDD\u3002\u5173\u95ED\u540E\u5C06\u9690\u85CF\u5206\u7EC4\u6807\u7B7E\u548C\u5206\u7EC4\u5207\u6362\u64CD\u4F5C\u3002",
        settingsGroupCreate: "\u521B\u5EFA\u5206\u7EC4",
        settingsGroupCreateDesc: "\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4F1A\u8BDD\u5206\u7EC4\u3002",
        settingsGroupCreatePlaceholder: "\u5206\u7EC4\u540D\u79F0...",
        settingsGroupCreateBtn: "\u521B\u5EFA",
        settingsGroupManageSessions: "\u7BA1\u7406\u4F1A\u8BDD",
        settingsGroupManageSessionsDesc: "\u6DFB\u52A0\u6216\u79FB\u9664\u6B64\u5206\u7EC4\u4E2D\u7684\u4F1A\u8BDD\u3002",
        settingsGroupSessionCount: function(n) {
          return n + " \u4E2A\u4F1A\u8BDD";
        },
        settingsGroupDelete: "\u5220\u9664\u5206\u7EC4",
        settingsGroupDeleteConfirm: function(n) {
          return "\u786E\u5B9A\u5220\u9664\u5206\u7EC4\u201C" + n + "\u201D\uFF1F\u4F1A\u8BDD\u4E0D\u4F1A\u88AB\u5220\u9664\u3002";
        },
        confirmDeleteGroup: function(n) {
          return "\u786E\u5B9A\u5220\u9664\u5206\u7EC4\u201C" + n + "\u201D\uFF1F\u5206\u7EC4\u5185\u7684\u4F1A\u8BDD\u4E0D\u4F1A\u88AB\u5220\u9664\u3002";
        },
        groupAddedSession: function(s, g) {
          return "\u5DF2\u5C06\u201C" + s + "\u201D\u6DFB\u52A0\u5230\u201C" + g + "\u201D";
        },
        groupRemovedSession: function(s, g) {
          return "\u5DF2\u5C06\u201C" + s + "\u201D\u4ECE\u201C" + g + "\u201D\u4E2D\u79FB\u9664";
        },
        groupRemoveFromGroup: "\u4ECE\u5206\u7EC4\u4E2D\u79FB\u9664",
        groupMoveToGroup: "\u79FB\u52A8\u5230\u5206\u7EC4",
        groupCreateNew: "\u65B0\u5EFA\u5206\u7EC4",
        groupCreatePlaceholder: "\u5206\u7EC4\u540D\u79F0...",
        groupContextRename: "\u91CD\u547D\u540D\u5206\u7EC4",
        groupContextDelete: "\u5220\u9664\u5206\u7EC4",
        contextSwitchSession: "\u5207\u6362\u5230\u6B64\u4F1A\u8BDD",
        contextRenameSession: "\u91CD\u547D\u540D\u6B64\u4F1A\u8BDD",
        contextDeleteSession: "\u5220\u9664\u6B64\u4F1A\u8BDD",
        contextDuplicateSession: "\u590D\u5236\u6B64\u4F1A\u8BDD",
        contextReloadSession: "\u91CD\u65B0\u52A0\u8F7D\u6B64\u4F1A\u8BDD",
        contextSaveSession: "\u4FDD\u5B58\u6B64\u4F1A\u8BDD",
        groupRemoveAllSessions: "\u79FB\u9664\u6B64\u5206\u7EC4\u4E2D\u7684\u6240\u6709\u4F1A\u8BDD",
        confirmRemoveAllFromGroup: function(g, n) {
          return "\u786E\u5B9A\u4ECE\u201C" + g + "\u201D\u4E2D\u79FB\u9664\u5168\u90E8 " + n + " \u4E2A\u4F1A\u8BDD\uFF1F";
        },
        groupRemovedAllSessions: function(g) {
          return "\u5DF2\u4ECE\u201C" + g + "\u201D\u4E2D\u79FB\u9664\u6240\u6709\u4F1A\u8BDD";
        },
        contextDeleteAllGroups: "\u5220\u9664\u6240\u6709\u5206\u7EC4",
        confirmDeleteAllGroups: function(n) {
          return "\u786E\u5B9A\u5220\u9664\u5168\u90E8 " + n + " \u4E2A\u5206\u7EC4\uFF1F\u4F1A\u8BDD\u4E0D\u4F1A\u88AB\u5220\u9664\u3002";
        },
        deletedAllGroups: function(n) {
          return "\u5DF2\u5220\u9664 " + n + " \u4E2A\u5206\u7EC4";
        },
        contextDeleteAllSessions: "\u5220\u9664\u6240\u6709\u4F1A\u8BDD",
        confirmDeleteAllSessions: function(n) {
          return "\u786E\u5B9A\u5220\u9664 " + n + " \u4E2A\u4F1A\u8BDD\uFF1F\u5F53\u524D\u6D3B\u52A8\u4F1A\u8BDD\u5C06\u4FDD\u7559\u3002";
        },
        deletedAllSessions: function(n) {
          return "\u5DF2\u5220\u9664 " + n + " \u4E2A\u4F1A\u8BDD";
        },
        contextVersionHistory: "\u7248\u672C\u5386\u53F2",
        cmdVersionHistory: "\u67E5\u770B\u4F1A\u8BDD\u7248\u672C\u5386\u53F2",
        historyTitle: "\u7248\u672C\u5386\u53F2",
        historyEmpty: "\u6B64\u4F1A\u8BDD\u6682\u65E0\u7248\u672C\u5386\u53F2\u3002",
        historyRestore: "\u6062\u590D",
        historyRestoreConfirm: function(name, time) {
          return "\u5C06\u300C" + name + "\u300D\u7684\u5E03\u5C40\u6062\u590D\u5230 " + time + " \u7684\u72B6\u6001\uFF1F";
        },
        historyRestored: function(name) {
          return "\u5DF2\u6062\u590D\u300C" + name + "\u300D\u7684\u5E03\u5C40";
        },
        historyQuickRestored: function(name) {
          return "\u5DF2\u5FEB\u901F\u6062\u590D\u300C" + name + "\u300D\u7684\u4E0A\u4E00\u4E2A\u5E03\u5C40";
        },
        historyNoEntries: "\u6CA1\u6709\u53EF\u6062\u590D\u7684\u5386\u53F2\u8BB0\u5F55\u3002",
        historyToday: "\u4ECA\u5929",
        historyYesterday: "\u6628\u5929",
        historyThisWeek: "\u672C\u5468",
        historyFiles: function(n) {
          return n + " \u4E2A\u6587\u4EF6";
        },
        historyPanes: function(n) {
          return n + " \u4E2A\u9762\u677F";
        },
        settingsVersionHistoryEnabled: "\u542F\u7528\u7248\u672C\u5386\u53F2",
        settingsVersionHistoryEnabledDesc: "\u4E3A\u6BCF\u4E2A\u4F1A\u8BDD\u4FDD\u7559\u5E03\u5C40\u53D8\u66F4\u7684\u5386\u53F2\u8BB0\u5F55\u3002",
        settingsVersionHistoryInterval: "\u5FEB\u7167\u95F4\u9694\uFF08\u5206\u949F\uFF09",
        settingsVersionHistoryIntervalDesc: "\u68C0\u67E5\u5E03\u5C40\u53D8\u66F4\u5E76\u4FDD\u5B58\u5FEB\u7167\u7684\u9891\u7387\u3002",
        settingsVersionHistoryCtrlRmb: platformLabel("\u5FEB\u901F\u6062\u590D (Cmd + \u53F3\u952E)", "\u5FEB\u901F\u6062\u590D (Ctrl + \u53F3\u952E)"),
        settingsVersionHistoryCtrlRmbDesc: platformLabel("\u6309\u4F4F Cmd \u952E\u53F3\u952E\u70B9\u51FB\u72B6\u6001\u680F\u53EF\u6062\u590D\u4E0A\u4E00\u4E2A\u5E03\u5C40\u3002", "\u6309\u4F4F Ctrl \u952E\u53F3\u952E\u70B9\u51FB\u72B6\u6001\u680F\u53EF\u6062\u590D\u4E0A\u4E00\u4E2A\u5E03\u5C40\u3002"),
        settingsVersionHistoryConfirmRestore: "\u6062\u590D\u524D\u786E\u8BA4",
        settingsVersionHistoryConfirmRestoreDesc: "\u6062\u590D\u5E03\u5C40\u524D\u663E\u793A\u786E\u8BA4\u5BF9\u8BDD\u6846\u3002",
        rotationBackupSectionTitle: "\u5907\u4EFD",
        rotationBackupCreate: "\u521B\u5EFA\u5907\u4EFD",
        rotationBackupCreateBtn: "\u7ACB\u5373\u5907\u4EFD",
        rotationBackupCreated: "\u5907\u4EFD\u5DF2\u521B\u5EFA\u3002",
        rotationBackupFailed: "\u521B\u5EFA\u5907\u4EFD\u5931\u8D25\u3002",
        rotationBackupDesc: "\u4FDD\u5B58\u65F6\u81EA\u52A8\u521B\u5EFA\u5907\u4EFD\uFF08\u6BCF\u5C0F\u65F6\uFF0C\u6700\u591A3\u4E2A\u4E16\u4EE3\uFF09\u3002",
        rotationBackupRestore: "\u6062\u590D",
        rotationBackupRestoreConfirm: function(time, count) {
          return "\u4ECE " + time + " \u7684\u5907\u4EFD\u6062\u590D\uFF08" + count + " \u4E2A\u4F1A\u8BDD\uFF09\uFF1F\u5F53\u524D\u6570\u636E\u5C06\u88AB\u8986\u76D6\u3002";
        },
        rotationBackupRestored: "\u5DF2\u4ECE\u5907\u4EFD\u6062\u590D\u3002",
        rotationBackupRestoreFailed: "\u4ECE\u5907\u4EFD\u6062\u590D\u5931\u8D25\u3002",
        rotationBackupNone: "\u6CA1\u6709\u53EF\u7528\u7684\u5907\u4EFD\u3002",
        rotationBackupGeneration: function(count) {
          return count + " \u4E2A\u4F1A\u8BDD";
        },
        frontmatterSessionNotFound: function(n) {
          return "\u4F1A\u8BDD\u201C" + n + "\u201D\u672A\u627E\u5230\uFF08workspace-session\uFF09";
        },
        frontmatterAlreadyActive: function(n) {
          return "\u4F1A\u8BDD\u201C" + n + "\u201D\u5DF2\u5904\u4E8E\u6D3B\u52A8\u72B6\u6001";
        }
      },
      "zh-TW": {
        settingsStatusBarModScrollSwitch: "\u6309\u4F4F Ctrl/Cmd \u4E26\u6372\u52D5\u4EE5\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5",
        settingsStatusBarModScrollSwitchDesc: "\u5728\u72C0\u614B\u5217\u9805\u76EE\u4E0A\uFF0C\u6309\u4F4F\u6240\u9078\u4FEE\u98FE\u9375\u4E26\u5782\u76F4\u6372\u52D5\u5373\u53EF\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5\u3002\u4F7F\u7528\u95BE\u503C\u8207\u51B7\u537B\u6642\u9593\u4EE5\u6E1B\u5C11\u89F8\u63A7\u677F\u8AA4\u89F8\u3002",
        modalTitle: "\u5DE5\u4F5C\u5340\u9762\u677F",
        savePlaceholder: "\u65B0\u5DE5\u4F5C\u968E\u6BB5\u540D\u7A31\u2026",
        filterPlaceholder: "\u7BE9\u9078\u5DE5\u4F5C\u968E\u6BB5...",
        settingsShowFilterInput: "\u986F\u793A\u5DE5\u4F5C\u968E\u6BB5\u7BE9\u9078",
        settingsShowFilterInputDesc: "\u5728\u5DE5\u4F5C\u968E\u6BB5\u7BA1\u7406\u5668\u4E2D\u986F\u793A\u6587\u5B57\u7BE9\u9078\u6846\uFF0C\u5FEB\u901F\u5C0B\u627E\u5DE5\u4F5C\u968E\u6BB5\u3002",
        settingsOverlayDefaultFocus: "\u9810\u8A2D\u8986\u84CB\u5C64\u7126\u9EDE",
        settingsOverlayDefaultFocusDesc: "\u9078\u64C7\u5DE5\u4F5C\u968E\u6BB5\u7BA1\u7406\u5668\u958B\u555F\u6642\u9810\u8A2D\u805A\u7126\u7684\u5143\u7D20\u3002",
        settingsOverlayFocusCurrentSession: "\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5",
        settingsOverlayFocusSessionFilter: "\u5DE5\u4F5C\u968E\u6BB5\u7BE9\u9078",
        settingsOverlayFocusSessionCreate: "\u5EFA\u7ACB\u5DE5\u4F5C\u968E\u6BB5",
        settingsSectionSessionManager: "\u5DE5\u4F5C\u968E\u6BB5\u7BA1\u7406\u5668",
        settingsShowActiveSwitchCommand: "\u5728\u547D\u4EE4\u9762\u677F\u4E2D\u986F\u793A\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5",
        settingsShowActiveSwitchCommandDesc: "\u5728\u547D\u4EE4\u9762\u677F\u4E2D\u986F\u793A\u76EE\u524D\u6D3B\u52D5\u5DE5\u4F5C\u968E\u6BB5\u7684\u5207\u63DB\u547D\u4EE4\u3002\u7121\u8AD6\u6B64\u8A2D\u5B9A\u5982\u4F55\uFF0C\u5FEB\u6377\u9375\u59CB\u7D42\u6709\u6548\u3002",
        settingsNumberedSwitchCommands: "\u7DE8\u865F\u5207\u63DB\u547D\u4EE4",
        settingsNumberedSwitchCommandsDesc: "\u8A3B\u518A\u7DE8\u865F\u63D2\u69FD\uFF081\u20139\uFF09\u7684\u5207\u63DB\u547D\u4EE4\uFF0C\u53EF\u7D81\u5B9A\u5FEB\u6377\u9375\u3002\u95DC\u9589\u5F8C\uFF0C\u6240\u6709\u5DE5\u4F5C\u968E\u6BB5\u6539\u7528\u57FA\u65BC\u540D\u7A31\u7684\u547D\u4EE4\u3002",
        save: "\u5EFA\u7ACB",
        load: "\u5207\u63DB",
        saveInline: "\u5132\u5B58",
        active: "\u4F7F\u7528\u4E2D",
        modifiedJustNow: "\u525B\u525B\u4FEE\u6539",
        modifiedMinutes: function(n) {
          return n + " \u5206\u9418\u524D\u4FEE\u6539";
        },
        modifiedHours: function(n) {
          return n + " \u5C0F\u6642\u524D\u4FEE\u6539";
        },
        modifiedDays: function(n) {
          return n + " \u5929\u524D\u4FEE\u6539";
        },
        duplicateName: "\u5DF2\u6709\u540C\u540D\u7684\u5DE5\u4F5C\u968E\u6BB5\u3002",
        emptyName: "\u5DE5\u4F5C\u968E\u6BB5\u540D\u7A31\u4E0D\u53EF\u70BA\u7A7A\u3002",
        created: function(n) {
          return "\u5DF2\u5EFA\u7ACB\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D";
        },
        deleted: function(n) {
          return "\u5DF2\u522A\u9664\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D";
        },
        loaded: function(n) {
          return "\u5DF2\u5207\u63DB\u81F3\u300C" + n + "\u300D";
        },
        renamed: function(o, n) {
          return "\u5DF2\u5C07\u300C" + o + "\u300D\u91CD\u65B0\u547D\u540D\u70BA\u300C" + n + "\u300D";
        },
        confirmDelete: function(n) {
          return "\u78BA\u5B9A\u522A\u9664\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D\uFF1F";
        },
        confirmDeleteActive: function(n) {
          return "\u300C" + n + "\u300D\u662F\u76EE\u524D\u4F7F\u7528\u4E2D\u7684\u5DE5\u4F5C\u968E\u6BB5\uFF0C\u78BA\u5B9A\u522A\u9664\uFF1F";
        },
        confirmSaveSession: function(n) {
          return '\u5132\u5B58\u5DE5\u4F5C\u968E\u6BB5 "' + n + '"\uFF1F';
        },
        confirmReloadSession: function(n) {
          return '\u91CD\u65B0\u8F09\u5165\u5DE5\u4F5C\u968E\u6BB5 "' + n + '"\uFF1F\u672A\u5132\u5B58\u7684\u8B8A\u66F4\u5C07\u907A\u5931\u3002';
        },
        renameTitle: "\u91CD\u65B0\u547D\u540D\u5DE5\u4F5C\u968E\u6BB5",
        renamePlaceholder: "\u65B0\u540D\u7A31\u2026",
        noSession: "\u7121\u5DE5\u4F5C\u968E\u6BB5",
        cannotDeleteLast: "\u6700\u5F8C\u4E00\u500B\u5DE5\u4F5C\u968E\u6BB5\u7121\u6CD5\u522A\u9664\u3002",
        confirmBulkDelete: function(n) {
          return "\u78BA\u5B9A\u522A\u9664 " + n + " \u500B\u5DE5\u4F5C\u968E\u6BB5\uFF1F";
        },
        bulkDeleted: function(n) {
          return "\u5DF2\u522A\u9664 " + n + " \u500B\u5DE5\u4F5C\u968E\u6BB5";
        },
        bulkDelete: function(n) {
          return "\u522A\u9664 " + n + " \u500B\u5DE5\u4F5C\u968E\u6BB5";
        },
        cmdManage: "\u7BA1\u7406\u5DE5\u4F5C\u968E\u6BB5",
        cmdCreate: "\u5EFA\u7ACB\u65B0\u5DE5\u4F5C\u968E\u6BB5",
        cmdRename: "\u91CD\u65B0\u547D\u540D\u76EE\u524D\u7684\u5DE5\u4F5C\u968E\u6BB5",
        cmdDelete: "\u522A\u9664\u76EE\u524D\u7684\u5DE5\u4F5C\u968E\u6BB5",
        cmdNewEmpty: "\u5EFA\u7ACB\u7A7A\u767D\u5DE5\u4F5C\u968E\u6BB5",
        cmdDuplicate: "\u8907\u88FD\u76EE\u524D\u7684\u5DE5\u4F5C\u968E\u6BB5",
        duplicated: function(n) {
          return "\u5DF2\u8907\u88FD\u70BA\u300C" + n + "\u300D";
        },
        deselect: "\u53D6\u6D88\u9078\u53D6",
        footerDragReorder: "\u62D6\u66F3\u6392\u5E8F",
        footerDragToGroup: "\u62D6\u66F3\u5230\u7FA4\u7D44\u6A19\u7C64\u79FB\u52D5",
        defaultLabel: "\uFF08\u9810\u8A2D\uFF09",
        rename: "\u91CD\u65B0\u547D\u540D",
        delete: "\u522A\u9664",
        remove: "\u79FB\u9664",
        cancel: "\u53D6\u6D88",
        ribbonTooltip: "Workspace++",
        cmdSwitchTo: function(n, name) {
          return name ? "\u5207\u63DB\u81F3\u5DE5\u4F5C\u968E\u6BB5 " + n + ": " + name : "\u5207\u63DB\u81F3\u5DE5\u4F5C\u968E\u6BB5 " + n;
        },
        cmdSwitchToNamed: function(name) {
          return '\u5207\u63DB\u81F3 "' + name + '"';
        },
        cmdPrevious: "\u4E0A\u4E00\u500B\u5DE5\u4F5C\u968E\u6BB5",
        cmdNext: "\u4E0B\u4E00\u500B\u5DE5\u4F5C\u968E\u6BB5",
        cmdSaveCurrent: "\u5132\u5B58\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5",
        cmdSaveAs: "\u5C07\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5\u53E6\u5B58\u70BA...",
        cmdToggleAutoSave: "\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB\u6642\u81EA\u52D5\u5132\u5B58",
        cmdEnableAutoSave: "\u555F\u7528\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB\u6642\u81EA\u52D5\u5132\u5B58",
        cmdDisableAutoSave: "\u505C\u7528\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB\u6642\u81EA\u52D5\u5132\u5B58",
        cmdSearchOverlay: "\u641C\u5C0B\u5DE5\u4F5C\u968E\u6BB5",
        switchLeft: "\u5DE6",
        switchRight: "\u53F3",
        switchGroup: "\u7FA4\u7D44",
        keyTab: "Tab",
        savedSession: function(n) {
          return "\u5DF2\u5132\u5B58\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D";
        },
        savedAs: function(n) {
          return "\u5DF2\u53E6\u5B58\u70BA\u300C" + n + "\u300D";
        },
        noChanges: "\u6C92\u6709\u9700\u8981\u5132\u5B58\u7684\u8B8A\u66F4",
        autoSaveEnabled: "\u5DF2\u555F\u7528\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB\u6642\u81EA\u52D5\u5132\u5B58\u3002",
        autoSaveDisabled: "\u5DF2\u505C\u7528\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB\u6642\u81EA\u52D5\u5132\u5B58\u3002",
        confirmUnsavedSwitch: function(n) {
          return "\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5\u6709\u672A\u5132\u5B58\u7684\u8B8A\u66F4\u3002\u8981\u5207\u63DB\u5230\u300C" + n + "\u300D\u55CE\uFF1F";
        },
        saveAndSwitch: "\u5132\u5B58\u4E26\u5207\u63DB",
        switchWithoutSaving: "\u4E0D\u5132\u5B58\u76F4\u63A5\u5207\u63DB",
        sessionAutoName: function(n) {
          return "\u65B0\u5DE5\u4F5C\u968E\u6BB5 " + n;
        },
        noFilteredSessions: "\u627E\u4E0D\u5230\u7B26\u5408\u7684\u5DE5\u4F5C\u968E\u6BB5",
        noGroupSessions: "\u6B64\u7FA4\u7D44\u4E2D\u6C92\u6709\u5DE5\u4F5C\u968E\u6BB5",
        searchOverlayPlaceholder: "\u8F38\u5165\u4EE5\u7BE9\u9078\u5DE5\u4F5C\u968E\u6BB5...",
        searchOverlayHelp: "\u2191\u2193 \u79FB\u52D5  /  Enter \u5207\u63DB  /  \u21E7Enter \u5132\u5B58  /  \u232B \u522A\u9664  /  Esc \u95DC\u9589",
        backupRestored: "Workspace++: \u5DF2\u5F9E\u5099\u4EFD\u9084\u539F\u5DE5\u4F5C\u968E\u6BB5\u3002",
        settingsLanguage: "\u8A9E\u8A00",
        settingsLanguageDesc: "\u5916\u639B\u4ECB\u9762\u8A9E\u8A00\u3002\u91CD\u65B0\u555F\u52D5 Obsidian \u5F8C\u547D\u4EE4\u540D\u7A31\u624D\u6703\u66F4\u65B0\u3002",
        settingsSectionGeneral: "\u4E00\u822C",
        settingsTabSessions: "\u5DE5\u4F5C\u968E\u6BB5",
        settingsTabGroups: "\u5206\u7D44",
        settingsSectionSwitching: "\u5DE5\u4F5C\u968E\u6BB5\u81EA\u52D5\u5132\u5B58",
        settingsSectionSwitchPreview: "\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB",
        settingsSectionDeletion: "\u5DE5\u4F5C\u968E\u6BB5\u522A\u9664",
        settingsLangAuto: "\u81EA\u52D5\uFF08\u7CFB\u7D71\u8A9E\u8A00\uFF09",
        settingsTranslationHelp: "\u767C\u73FE\u7FFB\u8B6F\u932F\u8AA4\uFF1F\u8ACB\u5728 GitHub \u4E0A\u63D0\u4EA4 issue \u6216 Pull request\u3002",
        settingsPreviewHeading: "\u5207\u63DB\u524D\u986F\u793A\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5",
        settingsPreviewDesc: "\u4F7F\u7528\u5FEB\u6377\u9375\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5\u6642\uFF0C\u7B2C\u4E00\u6B21\u6309\u4E0B\u50C5\u986F\u793A\u76EE\u524D\u4F4D\u7F6E\uFF0C\u4E0D\u9032\u884C\u5207\u63DB\u3002",
        settingsPreviewNext: "\u4E0B\u4E00\u500B\u5DE5\u4F5C\u968E\u6BB5",
        settingsPreviewPrevious: "\u4E0A\u4E00\u500B\u5DE5\u4F5C\u968E\u6BB5",
        settingsHotkeys: "\u5FEB\u6377\u9375",
        settingsHotkeysBtn: "\u958B\u555F\u5FEB\u6377\u9375\u8A2D\u5B9A",
        contextOpenSettings: "\u958B\u555F\u8A2D\u5B9A",
        contextCustomizeClicks: "\u81EA\u8A02\u9EDE\u64CA\u64CD\u4F5C",
        settingsSectionStatusBar: "\u72C0\u614B\u5217\u9EDE\u64CA\u64CD\u4F5C",
        statusBarSlotClick: "\u9EDE\u64CA",
        statusBarSlotAltClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2325" : "Alt") + " + \u9EDE\u64CA";
        },
        statusBarSlotModClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2318" : "Ctrl") + " + \u9EDE\u64CA";
        },
        statusBarSlotShiftClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u21E7" : "Shift") + " + \u9EDE\u64CA";
        },
        statusBarSlotMiddleClick: "\u4E2D\u9375\u9EDE\u64CA",
        statusBarSlotAltMiddleClick: modifiedClickLabel("\u4E2D\u9375\u9EDE\u64CA", "\u2325", "Alt"),
        statusBarSlotModMiddleClick: modifiedClickLabel("\u4E2D\u9375\u9EDE\u64CA", "\u2318", "Ctrl"),
        statusBarSlotShiftMiddleClick: modifiedClickLabel("\u4E2D\u9375\u9EDE\u64CA", "\u21E7", "Shift"),
        statusBarSlotRightClick: "\u53F3\u9375",
        statusBarSlotAltRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2325" : "Alt") + " + \u53F3\u9375";
        },
        statusBarSlotModRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u2318" : "Ctrl") + " + \u53F3\u9375";
        },
        statusBarSlotShiftRightClick: function() {
          return (typeof navigator !== "undefined" && navigator.platform.indexOf("Mac") !== -1 ? "\u21E7" : "Shift") + " + \u53F3\u9375";
        },
        statusBarActionNone: "\u7121\u64CD\u4F5C",
        statusBarActionQuickSwitcher: "\u958B\u555F\u5FEB\u901F\u5207\u63DB\u5668",
        statusBarActionSessionManager: "\u958B\u555F\u5DE5\u4F5C\u968E\u6BB5\u7BA1\u7406\u5668",
        statusBarActionSaveSession: "\u5132\u5B58\u5DE5\u4F5C\u968E\u6BB5",
        statusBarActionReloadWithoutSaving: "\u4E0D\u5132\u5B58\u91CD\u65B0\u8F09\u5165",
        statusBarActionVersionHistory: "\u986F\u793A\u7248\u672C\u6B77\u53F2",
        statusBarActionRestoreLatestHistory: "\u9084\u539F\u6700\u65B0\u6B77\u53F2",
        statusBarActionSessionMenu: "\u5DE5\u4F5C\u968E\u6BB5\u4E0A\u4E0B\u6587\u9078\u55AE",
        statusBarActionSettingsMenu: "\u8A2D\u5B9A\u4E0A\u4E0B\u6587\u9078\u55AE",
        contextResetOverlayPosition: "\u91CD\u7F6E\u4F4D\u7F6E\u548C\u5927\u5C0F",
        settingsConfirmDelete: "\u522A\u9664\u5DE5\u4F5C\u968E\u6BB5\u524D\u78BA\u8A8D",
        settingsConfirmDeleteDesc: "\u522A\u9664\u5DE5\u4F5C\u968E\u6BB5\u524D\u986F\u793A\u78BA\u8A8D\u5C0D\u8A71\u6846\u3002",
        settingsConfirmQuickActions: "\u5FEB\u901F\u5207\u63DB\u5668\u4E2D\u5132\u5B58/\u91CD\u8F09\u524D\u78BA\u8A8D",
        settingsConfirmQuickActionsDesc: "\u5728\u5FEB\u901F\u5207\u63DB\u5668\u4E2D\u5132\u5B58\u6216\u91CD\u65B0\u8F09\u5165\u5DE5\u4F5C\u968E\u6BB5\u524D\u986F\u793A\u78BA\u8A8D\u5C0D\u8A71\u6846\u3002",
        settingsAutoSaveOnSwitch: "\u81EA\u52D5\u5132\u5B58\u6A21\u5F0F",
        settingsAutoSaveOnSwitchDesc: "\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5\u6642\u81EA\u52D5\u5132\u5B58\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5\uFF08\u9810\u8A2D\uFF1A\u958B\u555F\uFF09\u3002\u95DC\u9589\u5F8C\u53EF\u624B\u52D5\u63A7\u5236\u5132\u5B58\u548C\u91CD\u65B0\u8F09\u5165\u3002",
        settingsWarnUnsavedSwitch: "\u672A\u5132\u5B58\u6642\u5207\u63DB\u524D\u8B66\u544A",
        settingsWarnUnsavedSwitchDesc: "\u7576\u81EA\u52D5\u5132\u5B58\u95DC\u9589\u4E14\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5\u6709\u672A\u5132\u5B58\u8B8A\u66F4\u6642\uFF0C\u5207\u63DB\u524D\u986F\u793A\u8B66\u544A\u3002",
        settingsHighlightUnsavedSessionChanges: "\u9192\u76EE\u63D0\u793A\u672A\u5132\u5B58\u7684\u5DE5\u4F5C\u968E\u6BB5\u8B8A\u66F4",
        settingsHighlightUnsavedSessionChangesDesc: "\u7576\u81EA\u52D5\u5132\u5B58\u95DC\u9589\u4E14\u76EE\u524D\u5DE5\u4F5C\u5340\u914D\u7F6E\u8207\u5DF2\u5132\u5B58\u7684\u5DE5\u4F5C\u968E\u6BB5\u4E0D\u540C\u6642\uFF0C\u9192\u76EE\u63D0\u793A\u72C0\u614B\u5217\u3002",
        settingsStatusBarQuickSwitcher: "\u72C0\u614B\u5217\u9EDE\u64CA\u6642\u4F7F\u7528\u5FEB\u901F\u5207\u63DB\u5668",
        settingsStatusBarQuickSwitcherDesc: "\u555F\u7528\u5F8C\uFF0C\u9EDE\u64CA\u72C0\u614B\u5217\u5C07\u958B\u555F\u5FEB\u901F\u5207\u63DB\u8986\u84CB\u5C64\uFF0C\u800C\u975E\u5B8C\u6574\u7684\u5DE5\u4F5C\u968E\u6BB5\u7BA1\u7406\u5668\u3002",
        settingsResetSessions: "\u91CD\u8A2D\u5DE5\u4F5C\u968E\u6BB5",
        settingsResetSessionsDesc: "\u522A\u9664\u6240\u6709\u5DF2\u5132\u5B58\u7684\u5DE5\u4F5C\u968E\u6BB5\uFF0C\u4E26\u50C5\u4FDD\u7559\u4EE5\u76EE\u524D\u7248\u9762\u914D\u7F6E\u5EFA\u7ACB\u7684\u5168\u65B0\u9810\u8A2D\u5DE5\u4F5C\u968E\u6BB5\u3002",
        settingsResetSessionsBtn: "\u91CD\u8A2D",
        confirmResetSessions: "\u8981\u5C07\u6240\u6709\u5DE5\u4F5C\u968E\u6BB5\u91CD\u8A2D\u70BA\u9810\u8A2D\u55CE\uFF1F\u6B64\u64CD\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002",
        resetSessionsHint: "\u9019\u5C07\u79FB\u9664\u6240\u6709\u5DF2\u5132\u5B58\u7684\u5DE5\u4F5C\u968E\u6BB5\uFF0C\u4E26\u53EA\u4FDD\u7559\u4E00\u500B\u9810\u8A2D\u5DE5\u4F5C\u968E\u6BB5\u3002",
        resetSessionsDone: "\u5DE5\u4F5C\u968E\u6BB5\u5DF2\u91CD\u8A2D\u70BA\u9810\u8A2D\u3002",
        resetSessionsFailed: "\u91CD\u8A2D\u5DE5\u4F5C\u968E\u6BB5\u5931\u6557\u3002",
        confirmDeleteSettingsHint: "\u5982\u4E0D\u9700\u8981\u6B64\u78BA\u8A8D\uFF0C\u8ACB\u524D\u5F80\u8A2D\u5B9A\u95DC\u9589\u3002",
        // --- Groups ---
        groupCreated: function(n) {
          return "\u5DF2\u5EFA\u7ACB\u7FA4\u7D44\u300C" + n + "\u300D";
        },
        groupDeleted: function(n) {
          return "\u5DF2\u522A\u9664\u7FA4\u7D44\u300C" + n + "\u300D";
        },
        groupRenamed: function(o, n) {
          return "\u7FA4\u7D44\u5DF2\u91CD\u65B0\u547D\u540D\uFF1A\u300C" + o + "\u300D\u2192\u300C" + n + "\u300D";
        },
        groupAll: "\u5168\u90E8",
        groupDuplicateName: "\u5DF2\u6709\u540C\u540D\u7684\u7FA4\u7D44\u3002",
        groupEmptyName: "\u7FA4\u7D44\u540D\u7A31\u4E0D\u53EF\u70BA\u7A7A\u3002",
        cmdSwitchGroup: "\u5207\u63DB\u7FA4\u7D44",
        cmdExitGroup: "\u986F\u793A\u6240\u6709\u5DE5\u4F5C\u968E\u6BB5\uFF08\u96E2\u958B\u7FA4\u7D44\uFF09",
        cmdNextGroup: "\u4E0B\u4E00\u500B\u7FA4\u7D44",
        cmdPreviousGroup: "\u4E0A\u4E00\u500B\u7FA4\u7D44",
        searchOverlayHelpWithGroups: "\u2191\u2193 \u79FB\u52D5  /  Tab \u7FA4\u7D44  /  Enter \u5207\u63DB  /  \u21E7Enter \u5132\u5B58  /  \u232B \u522A\u9664  /  Esc \u95DC\u9589",
        settingsSectionGroups: "\u5DE5\u4F5C\u968E\u6BB5\u7FA4\u7D44",
        contextToggleGroups: "\u555F\u7528\u5DE5\u4F5C\u968E\u6BB5\u7FA4\u7D44",
        settingsSectionGroupsDesc: "\u4F7F\u7528\u7FA4\u7D44\u6574\u7406\u5DE5\u4F5C\u968E\u6BB5\u3002\u95DC\u9589\u5F8C\u6703\u96B1\u85CF\u7FA4\u7D44\u5206\u9801\u8207\u7FA4\u7D44\u5207\u63DB\u64CD\u4F5C\u3002",
        settingsGroupCreate: "\u5EFA\u7ACB\u7FA4\u7D44",
        settingsGroupCreateDesc: "\u5EFA\u7ACB\u65B0\u7684\u5DE5\u4F5C\u968E\u6BB5\u7FA4\u7D44\u3002",
        settingsGroupCreatePlaceholder: "\u7FA4\u7D44\u540D\u7A31...",
        settingsGroupCreateBtn: "\u5EFA\u7ACB",
        settingsGroupManageSessions: "\u7BA1\u7406\u5DE5\u4F5C\u968E\u6BB5",
        settingsGroupManageSessionsDesc: "\u65B0\u589E\u6216\u79FB\u9664\u6B64\u7FA4\u7D44\u4E2D\u7684\u5DE5\u4F5C\u968E\u6BB5\u3002",
        settingsGroupSessionCount: function(n) {
          return n + " \u500B\u5DE5\u4F5C\u968E\u6BB5";
        },
        settingsGroupDelete: "\u522A\u9664\u7FA4\u7D44",
        settingsGroupDeleteConfirm: function(n) {
          return "\u78BA\u5B9A\u522A\u9664\u7FA4\u7D44\u300C" + n + "\u300D\uFF1F\u5DE5\u4F5C\u968E\u6BB5\u4E0D\u6703\u88AB\u522A\u9664\u3002";
        },
        confirmDeleteGroup: function(n) {
          return "\u78BA\u5B9A\u522A\u9664\u7FA4\u7D44\u300C" + n + "\u300D\uFF1F\u7FA4\u7D44\u5167\u7684\u5DE5\u4F5C\u968E\u6BB5\u4E0D\u6703\u88AB\u522A\u9664\u3002";
        },
        groupAddedSession: function(s, g) {
          return "\u5DF2\u5C07\u300C" + s + "\u300D\u65B0\u589E\u81F3\u300C" + g + "\u300D";
        },
        groupRemovedSession: function(s, g) {
          return "\u5DF2\u5C07\u300C" + s + "\u300D\u5F9E\u300C" + g + "\u300D\u4E2D\u79FB\u9664";
        },
        groupRemoveFromGroup: "\u5F9E\u7FA4\u7D44\u4E2D\u79FB\u9664",
        groupMoveToGroup: "\u79FB\u52D5\u5230\u7FA4\u7D44",
        groupCreateNew: "\u65B0\u5EFA\u7FA4\u7D44",
        groupCreatePlaceholder: "\u7FA4\u7D44\u540D\u7A31...",
        groupContextRename: "\u91CD\u65B0\u547D\u540D\u7FA4\u7D44",
        groupContextDelete: "\u522A\u9664\u7FA4\u7D44",
        contextSwitchSession: "\u5207\u63DB\u81F3\u6B64\u5DE5\u4F5C\u968E\u6BB5",
        contextRenameSession: "\u91CD\u65B0\u547D\u540D\u6B64\u5DE5\u4F5C\u968E\u6BB5",
        contextDeleteSession: "\u522A\u9664\u6B64\u5DE5\u4F5C\u968E\u6BB5",
        contextDuplicateSession: "\u8907\u88FD\u6B64\u5DE5\u4F5C\u968E\u6BB5",
        contextReloadSession: "\u91CD\u65B0\u8F09\u5165\u6B64\u5DE5\u4F5C\u968E\u6BB5",
        contextSaveSession: "\u5132\u5B58\u6B64\u5DE5\u4F5C\u968E\u6BB5",
        groupRemoveAllSessions: "\u79FB\u9664\u6B64\u7FA4\u7D44\u4E2D\u7684\u6240\u6709\u5DE5\u4F5C\u968E\u6BB5",
        confirmRemoveAllFromGroup: function(g, n) {
          return "\u78BA\u5B9A\u5F9E\u300C" + g + "\u300D\u4E2D\u79FB\u9664\u5168\u90E8 " + n + " \u500B\u5DE5\u4F5C\u968E\u6BB5\uFF1F";
        },
        groupRemovedAllSessions: function(g) {
          return "\u5DF2\u5F9E\u300C" + g + "\u300D\u4E2D\u79FB\u9664\u6240\u6709\u5DE5\u4F5C\u968E\u6BB5";
        },
        contextDeleteAllGroups: "\u522A\u9664\u6240\u6709\u7FA4\u7D44",
        confirmDeleteAllGroups: function(n) {
          return "\u78BA\u5B9A\u522A\u9664\u5168\u90E8 " + n + " \u500B\u7FA4\u7D44\uFF1F\u5DE5\u4F5C\u968E\u6BB5\u4E0D\u6703\u88AB\u522A\u9664\u3002";
        },
        deletedAllGroups: function(n) {
          return "\u5DF2\u522A\u9664 " + n + " \u500B\u7FA4\u7D44";
        },
        contextDeleteAllSessions: "\u522A\u9664\u6240\u6709\u5DE5\u4F5C\u968E\u6BB5",
        confirmDeleteAllSessions: function(n) {
          return "\u78BA\u5B9A\u522A\u9664 " + n + " \u500B\u5DE5\u4F5C\u968E\u6BB5\uFF1F\u76EE\u524D\u7684\u5DE5\u4F5C\u968E\u6BB5\u5C07\u4FDD\u7559\u3002";
        },
        deletedAllSessions: function(n) {
          return "\u5DF2\u522A\u9664 " + n + " \u500B\u5DE5\u4F5C\u968E\u6BB5";
        },
        contextVersionHistory: "\u7248\u672C\u6B77\u53F2",
        cmdVersionHistory: "\u6AA2\u8996\u5DE5\u4F5C\u968E\u6BB5\u7248\u672C\u6B77\u53F2",
        historyTitle: "\u7248\u672C\u6B77\u53F2",
        historyEmpty: "\u6B64\u5DE5\u4F5C\u968E\u6BB5\u66AB\u7121\u7248\u672C\u6B77\u53F2\u3002",
        historyRestore: "\u9084\u539F",
        historyRestoreConfirm: function(name, time) {
          return "\u5C07\u300C" + name + "\u300D\u7684\u4F48\u5C40\u9084\u539F\u5230 " + time + " \u7684\u72C0\u614B\uFF1F";
        },
        historyRestored: function(name) {
          return "\u5DF2\u9084\u539F\u300C" + name + "\u300D\u7684\u4F48\u5C40";
        },
        historyQuickRestored: function(name) {
          return "\u5DF2\u5FEB\u901F\u9084\u539F\u300C" + name + "\u300D\u7684\u4E0A\u4E00\u500B\u4F48\u5C40";
        },
        historyNoEntries: "\u6C92\u6709\u53EF\u9084\u539F\u7684\u6B77\u53F2\u7D00\u9304\u3002",
        historyToday: "\u4ECA\u5929",
        historyYesterday: "\u6628\u5929",
        historyThisWeek: "\u672C\u9031",
        historyFiles: function(n) {
          return n + " \u500B\u6A94\u6848";
        },
        historyPanes: function(n) {
          return n + " \u500B\u9762\u677F";
        },
        settingsVersionHistoryEnabled: "\u555F\u7528\u7248\u672C\u6B77\u53F2",
        settingsVersionHistoryEnabledDesc: "\u70BA\u6BCF\u500B\u5DE5\u4F5C\u968E\u6BB5\u4FDD\u7559\u4F48\u5C40\u8B8A\u66F4\u7684\u6B77\u53F2\u7D00\u9304\u3002",
        settingsVersionHistoryInterval: "\u5FEB\u7167\u9593\u9694\uFF08\u5206\u9418\uFF09",
        settingsVersionHistoryIntervalDesc: "\u6AA2\u67E5\u4F48\u5C40\u8B8A\u66F4\u4E26\u5132\u5B58\u5FEB\u7167\u7684\u983B\u7387\u3002",
        settingsVersionHistoryCtrlRmb: platformLabel("\u5FEB\u901F\u9084\u539F (Cmd + \u53F3\u9375)", "\u5FEB\u901F\u9084\u539F (Ctrl + \u53F3\u9375)"),
        settingsVersionHistoryCtrlRmbDesc: platformLabel("\u6309\u4F4F Cmd \u9375\u53F3\u9375\u9EDE\u64CA\u72C0\u614B\u5217\u53EF\u9084\u539F\u4E0A\u4E00\u500B\u4F48\u5C40\u3002", "\u6309\u4F4F Ctrl \u9375\u53F3\u9375\u9EDE\u64CA\u72C0\u614B\u5217\u53EF\u9084\u539F\u4E0A\u4E00\u500B\u4F48\u5C40\u3002"),
        settingsVersionHistoryConfirmRestore: "\u9084\u539F\u524D\u78BA\u8A8D",
        settingsVersionHistoryConfirmRestoreDesc: "\u9084\u539F\u4F48\u5C40\u524D\u986F\u793A\u78BA\u8A8D\u5C0D\u8A71\u6846\u3002",
        rotationBackupSectionTitle: "\u5099\u4EFD",
        rotationBackupCreate: "\u5EFA\u7ACB\u5099\u4EFD",
        rotationBackupCreateBtn: "\u7ACB\u5373\u5099\u4EFD",
        rotationBackupCreated: "\u5DF2\u5EFA\u7ACB\u5099\u4EFD\u3002",
        rotationBackupFailed: "\u5EFA\u7ACB\u5099\u4EFD\u5931\u6557\u3002",
        rotationBackupDesc: "\u5132\u5B58\u6642\u81EA\u52D5\u5EFA\u7ACB\u5099\u4EFD\uFF08\u6BCF\u5C0F\u6642\uFF0C\u6700\u591A3\u500B\u4E16\u4EE3\uFF09\u3002",
        rotationBackupRestore: "\u9084\u539F",
        rotationBackupRestoreConfirm: function(time, count) {
          return "\u5F9E " + time + " \u7684\u5099\u4EFD\u9084\u539F\uFF08" + count + " \u500B\u5DE5\u4F5C\u968E\u6BB5\uFF09\uFF1F\u76EE\u524D\u7684\u8CC7\u6599\u5C07\u88AB\u8986\u84CB\u3002";
        },
        rotationBackupRestored: "\u5DF2\u5F9E\u5099\u4EFD\u9084\u539F\u3002",
        rotationBackupRestoreFailed: "\u5F9E\u5099\u4EFD\u9084\u539F\u5931\u6557\u3002",
        rotationBackupNone: "\u6C92\u6709\u53EF\u7528\u7684\u5099\u4EFD\u3002",
        rotationBackupGeneration: function(count) {
          return count + " \u500B\u5DE5\u4F5C\u968E\u6BB5";
        },
        frontmatterSessionNotFound: function(n) {
          return "\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D\u672A\u627E\u5230\uFF08workspace-session\uFF09";
        },
        frontmatterAlreadyActive: function(n) {
          return "\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D\u5DF2\u8655\u65BC\u6D3B\u52D5\u72C0\u614B";
        }
      }
    };
    var EXTENDED_STRINGS = {
      zh: {
        confirmOverwriteSessionWithCurrentLayout: function(n) {
          return "\u7528\u5F53\u524D\u5E03\u5C40\u8986\u76D6\u201C" + n + "\u201D\uFF1F";
        },
        cmdSaveCurrentLayoutToSession: "\u5C06\u5F53\u524D\u5E03\u5C40\u4FDD\u5B58\u5230\u4F1A\u8BDD...",
        savedCurrentLayoutToSession: function(n) {
          return "\u5DF2\u5C06\u5F53\u524D\u5E03\u5C40\u4FDD\u5B58\u5230\u201C" + n + "\u201D";
        },
        saveCurrentLayoutToSessionPlaceholder: "\u9009\u62E9\u8981\u8986\u76D6\u7684\u4F1A\u8BDD...",
        contextSaveCurrentLayoutToThisSession: "\u5C06\u5F53\u524D\u5E03\u5C40\u4FDD\u5B58\u5230\u6B64\u4F1A\u8BDD",
        cmdExportSessions: "\u5BFC\u51FA\u4F1A\u8BDD\u5FEB\u7167",
        cmdImportSessions: "\u5BFC\u5165\u6700\u65B0\u4F1A\u8BDD\u5FEB\u7167",
        cmdReloadCurrentWithoutSaving: "\u91CD\u65B0\u52A0\u8F7D\u5F53\u524D\u4F1A\u8BDD\uFF08\u4E0D\u4FDD\u5B58\uFF09",
        reloadedSession: function(n) {
          return "\u5DF2\u91CD\u65B0\u52A0\u8F7D\u4F1A\u8BDD\u201C" + n + "\u201D";
        },
        defaultSessionName: "\u9ED8\u8BA4",
        nameSessionTitle: "\u547D\u540D\u5E76\u4FDD\u5B58\u4F1A\u8BDD",
        nameSessionPlaceholder: "\u4F1A\u8BDD\u540D\u79F0...",
        saveWithoutNaming: "\u4E0D\u547D\u540D\u76F4\u63A5\u4FDD\u5B58",
        sessionDataMigrated: "Workspace++: \u4F1A\u8BDD\u6570\u636E\u5DF2\u8FC1\u79FB\u5230 .workspace-plus-plus/sessions.json\u3002",
        sessionDataMigrationFailed: "Workspace++: \u4F1A\u8BDD\u6570\u636E\u8FC1\u79FB\u5931\u8D25\u3002\u65E7\u7248\u6570\u636E\u5DF2\u4FDD\u7559\u3002",
        localSettingsEnabled: "Workspace++: \u5DF2\u542F\u7528 Vault \u672C\u5730\u8BBE\u7F6E\u3002",
        localSettingsDisabled: "Workspace++: \u5DF2\u7981\u7528 Vault \u672C\u5730\u8BBE\u7F6E\u3002",
        localSettingsCopied: "Workspace++: \u5DF2\u5C06\u5168\u5C40\u8BBE\u7F6E\u590D\u5236\u5230 Vault \u672C\u5730\u8BBE\u7F6E\u3002",
        localSettingsLoadFailed: "Workspace++: \u65E0\u6CD5\u52A0\u8F7D Vault \u672C\u5730\u8BBE\u7F6E\u3002\u5C06\u4F7F\u7528\u5168\u5C40\u8BBE\u7F6E\u3002",
        localSettingsOperationFailed: "Workspace++: \u66F4\u65B0 Vault \u672C\u5730\u8BBE\u7F6E\u5931\u8D25\u3002",
        exportSessionsDone: function(path) {
          return "Workspace++: \u5DF2\u5C06\u4F1A\u8BDD\u5BFC\u51FA\u5230 " + path;
        },
        exportSessionsFailed: "Workspace++: \u5BFC\u51FA\u4F1A\u8BDD\u5931\u8D25\u3002",
        importSessionsDone: function(path) {
          return "Workspace++: \u5DF2\u4ECE " + path + " \u5BFC\u5165\u4F1A\u8BDD\u3002";
        },
        importSessionsNoFile: "Workspace++: \u5728 .workspace-plus-plus/exports \u4E2D\u672A\u627E\u5230\u5BFC\u51FA\u6587\u4EF6\u3002",
        importSessionsFailed: "Workspace++: \u5BFC\u5165\u4F1A\u8BDD\u5931\u8D25\u3002",
        settingsSectionAdvanced: "\u9AD8\u7EA7",
        settingsSectionReset: "\u91CD\u7F6E",
        settingsGitHubLink: "GitHub",
        settingsSectionSessionListSearch: "\u4F1A\u8BDD\u5217\u8868\u4E0E\u641C\u7D22",
        settingsSectionSwitchCommands: "\u5207\u6362\u547D\u4EE4",
        settingsSectionScrollSwitch: "\u6EDA\u52A8\u5207\u6362",
        settingsSubsectionSwitchSaving: "\u5207\u6362\u4F1A\u8BDD\u65F6\u7684\u4FDD\u5B58",
        settingsSubsectionAutoSaveMode: "\u4F1A\u8BDD\u81EA\u52A8\u4FDD\u5B58\u6A21\u5F0F",
        settingsSubsectionSwitchCommands: "\u4F1A\u8BDD\u5207\u6362\u547D\u4EE4",
        settingsSubsectionScrollSwitch: "\u901A\u8FC7\u6EDA\u52A8\u5207\u6362\u4F1A\u8BDD",
        settingsSubsectionSwitchPreview: "\u5207\u6362\u4F1A\u8BDD\u524D\u9884\u89C8",
        settingsStatusBarScrollPreset: "\u6EDA\u52A8\u8F93\u5165\u9884\u8BBE",
        settingsStatusBarScrollPresetDesc: "\u9009\u62E9\u9002\u5408\u4F60\u8BBE\u5907\u7684\u9884\u8BBE\uFF0C\u6216\u5207\u6362\u5230\u201C\u81EA\u5B9A\u4E49\u201D\u81EA\u884C\u8C03\u6574\u6570\u503C\u3002",
        settingsStatusBarScrollPresetTrackpad: "\u89E6\u63A7\u677F",
        settingsStatusBarScrollPresetNotchedWheel: "\u6709\u523B\u5EA6\u9F20\u6807\u6EDA\u8F6E",
        settingsStatusBarScrollPresetFreeSpinWheel: "\u81EA\u7531\u6EDA\u52A8\u9F20\u6807\u6EDA\u8F6E",
        settingsStatusBarScrollPresetCustom: "\u81EA\u5B9A\u4E49",
        settingsStatusBarScrollModifier: "\u6240\u9700\u4FEE\u9970\u952E",
        settingsStatusBarScrollModifierDesc: "\u9009\u62E9\u5728\u72B6\u6001\u680F\u9879\u76EE\u4E0A\u6EDA\u52A8\u65F6\u5FC5\u987B\u6309\u4F4F\u7684\u4FEE\u9970\u952E\u3002",
        settingsStatusBarScrollModifierRecommended: platformLabel("Cmd \u6216 Option", "Ctrl \u6216 Alt"),
        settingsStatusBarScrollModifierNone: "\u65E0",
        settingsStatusBarScrollModifierModOnly: platformLabel("\u4EC5 Cmd", "\u4EC5 Ctrl"),
        settingsStatusBarScrollModifierAltOnly: platformLabel("\u4EC5 Option", "\u4EC5 Alt"),
        settingsStatusBarScrollModifierModOrAlt: platformLabel("Cmd \u6216 Option", "Ctrl \u6216 Alt"),
        settingsStatusBarScrollThreshold: "\u7075\u654F\u5EA6\u9608\u503C",
        settingsStatusBarScrollThresholdDesc: "\u503C\u8D8A\u5C0F\uFF0C\u8D8A\u5BB9\u6613\u89E6\u53D1\u5207\u6362\u3002\u4EC5\u5728\u201C\u81EA\u5B9A\u4E49\u201D\u9884\u8BBE\u4E0B\u4F7F\u7528\u3002",
        settingsStatusBarScrollCooldown: "\u51B7\u5374\u65F6\u95F4",
        settingsStatusBarScrollCooldownDesc: "\u4E24\u6B21\u6EDA\u52A8\u89E6\u53D1\u7684\u4F1A\u8BDD\u5207\u6362\u4E4B\u95F4\u7684\u6700\u77ED\u95F4\u9694\u3002\u4EC5\u5728\u201C\u81EA\u5B9A\u4E49\u201D\u9884\u8BBE\u4E0B\u4F7F\u7528\u3002",
        settingsStatusBarScrollResetWindow: "\u7D2F\u79EF\u91CD\u7F6E\u7A97\u53E3",
        settingsStatusBarScrollResetWindowDesc: "\u5728\u91CD\u7F6E\u524D\uFF0C\u5C06\u8F83\u5C0F\u6EDA\u52A8\u589E\u91CF\u6301\u7EED\u5408\u5E76\u7684\u65F6\u957F\u3002\u4EC5\u5728\u201C\u81EA\u5B9A\u4E49\u201D\u9884\u8BBE\u4E0B\u4F7F\u7528\u3002",
        settingsStatusBarScrollInvert: "\u53CD\u8F6C\u6EDA\u52A8\u65B9\u5411",
        settingsStatusBarScrollInvertDesc: "\u53CD\u8F6C\u72B6\u6001\u680F\u6EDA\u52A8\u5207\u6362\u65F6\u7684\u4E0A\u4E00\u9879/\u4E0B\u4E00\u9879\u65B9\u5411\u3002",
        settingsUseLocalSettings: "\u4F7F\u7528 Vault \u672C\u5730\u8BBE\u7F6E",
        settingsUseLocalSettingsDesc: "\u5982\u679C\u4F60\u5728\u591A\u4E2A Vault \u4E4B\u95F4\u540C\u6B65 .obsidian\uFF08\u4F8B\u5982\u4F7F\u7528 Settings Profiles\uFF09\uFF0C\u5E76\u5E0C\u671B Workspace++ \u8BBE\u7F6E\u6309 Vault \u5206\u5F00\u4FDD\u5B58\uFF0C\u8BF7\u5F00\u542F\u6B64\u9879\u3002",
        settingsCopyGlobalToLocal: "\u5C06\u5168\u5C40\u8BBE\u7F6E\u590D\u5236\u5230\u6B64 Vault",
        settingsCopyGlobalToLocalDesc: "\u7528\u5F53\u524D\u5168\u5C40\u8BBE\u7F6E\u8986\u76D6 Vault \u672C\u5730\u8BBE\u7F6E\u3002",
        settingsCopyGlobalToLocalBtn: "\u590D\u5236",
        settingsResetLocalSettings: "\u91CD\u7F6E Vault \u672C\u5730\u8BBE\u7F6E",
        settingsResetLocalSettingsDesc: "\u5C06 Vault \u672C\u5730\u8BBE\u7F6E\u91CD\u7F6E\u4E3A\u5168\u5C40\u8BBE\u7F6E\u3002",
        settingsResetLocalSettingsBtn: "\u91CD\u7F6E\u672C\u5730",
        settingsAdvancedStorageSubsection: "\u5B58\u50A8\u884C\u4E3A",
        settingsAdvancedTransferSubsection: "\u6570\u636E\u8FC1\u79FB",
        settingsDeveloperSection: "\u5F00\u53D1\u8005\u5DE5\u5177",
        settingsStorageDiagnostics: "\u5B58\u50A8\u8BCA\u65AD",
        settingsStorageDiagnosticsDesc: "Workspace++ \u5F53\u524D\u4F7F\u7528\u7684\u5B58\u50A8\u4FE1\u606F\u3002",
        settingsStorageFieldSessions: "\u4F1A\u8BDD\u6587\u4EF6",
        settingsStorageFieldSessionsBackup: "\u4F1A\u8BDD\u5907\u4EFD",
        settingsStorageFieldLocalSettings: "\u672C\u5730\u8BBE\u7F6E\u6587\u4EF6",
        settingsStorageFieldGlobalSettings: "\u5168\u5C40\u8BBE\u7F6E\u6587\u4EF6",
        settingsStorageFieldSessionCount: "\u4F1A\u8BDD\u6570\u91CF",
        settingsStorageFieldUpdatedAt: "\u66F4\u65B0\u65F6\u95F4",
        settingsExportSessions: "\u5BFC\u51FA\u4F1A\u8BDD",
        settingsExportSessionsDesc: "\u5C06\u5FEB\u7167\u4FDD\u5B58\u5230 .workspace-plus-plus/exports\u3002",
        settingsExportSessionsBtn: "\u5BFC\u51FA",
        settingsImportSessions: "\u5BFC\u5165\u4F1A\u8BDD",
        settingsImportSessionsDesc: "\u4ECE .workspace-plus-plus/exports \u5BFC\u5165\u6700\u65B0\u5FEB\u7167\u3002",
        settingsImportSessionsBtn: "\u5BFC\u5165\u6700\u65B0",
        confirmImportSessions: "\u8981\u5BFC\u5165\u6700\u65B0\u5BFC\u51FA\u7684\u4F1A\u8BDD\u5417\uFF1F\u5F53\u524D\u4F1A\u8BDD\u5C06\u88AB\u66FF\u6362\u3002",
        settingsResetSettings: "\u91CD\u7F6E\u8BBE\u7F6E",
        settingsResetSettingsDesc: "\u5C06\u5F53\u524D\u8BBE\u7F6E\u8303\u56F4\u4E2D\u7684 Workspace++ \u8BBE\u7F6E\u6062\u590D\u4E3A\u9ED8\u8BA4\u503C\u3002",
        settingsResetSettingsBtn: "\u91CD\u7F6E\u8BBE\u7F6E",
        confirmResetSettings: "\u8981\u5C06 Workspace++ \u8BBE\u7F6E\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C\u5417\uFF1F",
        resetSettingsDone: "Workspace++ \u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u3002",
        resetSettingsFailed: "\u91CD\u7F6E Workspace++ \u8BBE\u7F6E\u5931\u8D25\u3002",
        settingsResetSessionsAndSettings: "\u91CD\u7F6E\u4F1A\u8BDD\u548C\u8BBE\u7F6E",
        settingsResetSessionsAndSettingsDesc: "\u4E00\u6B21\u6027\u91CD\u7F6E\u5DF2\u4FDD\u5B58\u4F1A\u8BDD\u548C Workspace++ \u8BBE\u7F6E\u3002",
        settingsResetSessionsAndSettingsBtn: "\u5168\u90E8\u91CD\u7F6E",
        confirmResetSessionsAndSettings: "\u8981\u540C\u65F6\u91CD\u7F6E\u4F1A\u8BDD\u548C\u8BBE\u7F6E\u5417\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",
        resetSessionsAndSettingsDone: "\u4F1A\u8BDD\u548C\u8BBE\u7F6E\u5DF2\u91CD\u7F6E\u3002",
        resetSessionsAndSettingsFailed: "\u91CD\u7F6E\u4F1A\u8BDD\u548C\u8BBE\u7F6E\u5931\u8D25\u3002"
      },
      "zh-TW": {
        confirmOverwriteSessionWithCurrentLayout: function(n) {
          return "\u8981\u7528\u76EE\u524D\u4F48\u5C40\u8986\u5BEB\u300C" + n + "\u300D\u55CE\uFF1F";
        },
        cmdSaveCurrentLayoutToSession: "\u5C07\u76EE\u524D\u4F48\u5C40\u5132\u5B58\u5230\u5DE5\u4F5C\u968E\u6BB5...",
        savedCurrentLayoutToSession: function(n) {
          return "\u5DF2\u5C07\u76EE\u524D\u4F48\u5C40\u5132\u5B58\u5230\u300C" + n + "\u300D";
        },
        saveCurrentLayoutToSessionPlaceholder: "\u9078\u64C7\u8981\u8986\u5BEB\u7684\u5DE5\u4F5C\u968E\u6BB5...",
        contextSaveCurrentLayoutToThisSession: "\u5C07\u76EE\u524D\u4F48\u5C40\u5132\u5B58\u5230\u6B64\u5DE5\u4F5C\u968E\u6BB5",
        cmdExportSessions: "\u532F\u51FA\u5DE5\u4F5C\u968E\u6BB5\u5FEB\u7167",
        cmdImportSessions: "\u532F\u5165\u6700\u65B0\u5DE5\u4F5C\u968E\u6BB5\u5FEB\u7167",
        cmdReloadCurrentWithoutSaving: "\u91CD\u65B0\u8F09\u5165\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5\uFF08\u4E0D\u5132\u5B58\uFF09",
        reloadedSession: function(n) {
          return "\u5DF2\u91CD\u65B0\u8F09\u5165\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D";
        },
        defaultSessionName: "\u9810\u8A2D",
        nameSessionTitle: "\u547D\u540D\u4E26\u5132\u5B58\u5DE5\u4F5C\u968E\u6BB5",
        nameSessionPlaceholder: "\u5DE5\u4F5C\u968E\u6BB5\u540D\u7A31...",
        saveWithoutNaming: "\u4E0D\u547D\u540D\u76F4\u63A5\u5132\u5B58",
        sessionDataMigrated: "Workspace++: \u5DE5\u4F5C\u968E\u6BB5\u8CC7\u6599\u5DF2\u79FB\u81F3 .workspace-plus-plus/sessions.json\u3002",
        sessionDataMigrationFailed: "Workspace++: \u5DE5\u4F5C\u968E\u6BB5\u8CC7\u6599\u79FB\u8F49\u5931\u6557\u3002\u820A\u7248\u8CC7\u6599\u5DF2\u4FDD\u7559\u3002",
        localSettingsEnabled: "Workspace++: \u5DF2\u555F\u7528 Vault \u672C\u6A5F\u8A2D\u5B9A\u3002",
        localSettingsDisabled: "Workspace++: \u5DF2\u505C\u7528 Vault \u672C\u6A5F\u8A2D\u5B9A\u3002",
        localSettingsCopied: "Workspace++: \u5DF2\u5C07\u5168\u57DF\u8A2D\u5B9A\u8907\u88FD\u5230 Vault \u672C\u6A5F\u8A2D\u5B9A\u3002",
        localSettingsLoadFailed: "Workspace++: \u7121\u6CD5\u8F09\u5165 Vault \u672C\u6A5F\u8A2D\u5B9A\u3002\u5C07\u6539\u7528\u5168\u57DF\u8A2D\u5B9A\u3002",
        localSettingsOperationFailed: "Workspace++: \u66F4\u65B0 Vault \u672C\u6A5F\u8A2D\u5B9A\u5931\u6557\u3002",
        exportSessionsDone: function(path) {
          return "Workspace++: \u5DF2\u5C07\u5DE5\u4F5C\u968E\u6BB5\u532F\u51FA\u5230 " + path;
        },
        exportSessionsFailed: "Workspace++: \u532F\u51FA\u5DE5\u4F5C\u968E\u6BB5\u5931\u6557\u3002",
        importSessionsDone: function(path) {
          return "Workspace++: \u5DF2\u5F9E " + path + " \u532F\u5165\u5DE5\u4F5C\u968E\u6BB5\u3002";
        },
        importSessionsNoFile: "Workspace++: \u5728 .workspace-plus-plus/exports \u4E2D\u627E\u4E0D\u5230\u532F\u51FA\u6A94\u6848\u3002",
        importSessionsFailed: "Workspace++: \u532F\u5165\u5DE5\u4F5C\u968E\u6BB5\u5931\u6557\u3002",
        settingsSectionAdvanced: "\u9032\u968E",
        settingsSectionReset: "\u91CD\u8A2D",
        settingsGitHubLink: "GitHub",
        settingsSectionSessionListSearch: "\u5DE5\u4F5C\u968E\u6BB5\u6E05\u55AE\u8207\u641C\u5C0B",
        settingsSectionSwitchCommands: "\u5207\u63DB\u547D\u4EE4",
        settingsSectionScrollSwitch: "\u6EFE\u52D5\u5207\u63DB",
        settingsSubsectionSwitchSaving: "\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5\u6642\u7684\u5132\u5B58",
        settingsSubsectionAutoSaveMode: "\u5DE5\u4F5C\u968E\u6BB5\u81EA\u52D5\u5132\u5B58\u6A21\u5F0F",
        settingsSubsectionSwitchCommands: "\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB\u547D\u4EE4",
        settingsSubsectionScrollSwitch: "\u900F\u904E\u6EFE\u52D5\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5",
        settingsSubsectionSwitchPreview: "\u5207\u63DB\u5DE5\u4F5C\u968E\u6BB5\u524D\u9810\u89BD",
        settingsStatusBarScrollPreset: "\u6EFE\u52D5\u8F38\u5165\u9810\u8A2D",
        settingsStatusBarScrollPresetDesc: "\u9078\u64C7\u9069\u5408\u4F60\u88DD\u7F6E\u7684\u9810\u8A2D\uFF0C\u6216\u5207\u63DB\u5230\u300C\u81EA\u8A02\u300D\u81EA\u884C\u8ABF\u6574\u6578\u503C\u3002",
        settingsStatusBarScrollPresetTrackpad: "\u89F8\u63A7\u677F",
        settingsStatusBarScrollPresetNotchedWheel: "\u6709\u6BB5\u843D\u611F\u7684\u6ED1\u9F20\u6EFE\u8F2A",
        settingsStatusBarScrollPresetFreeSpinWheel: "\u81EA\u7531\u65CB\u8F49\u6ED1\u9F20\u6EFE\u8F2A",
        settingsStatusBarScrollPresetCustom: "\u81EA\u8A02",
        settingsStatusBarScrollModifier: "\u9700\u8981\u7684\u4FEE\u98FE\u9375",
        settingsStatusBarScrollModifierDesc: "\u9078\u64C7\u5728\u72C0\u614B\u5217\u9805\u76EE\u4E0A\u6EFE\u52D5\u6642\u5FC5\u9808\u6309\u4F4F\u7684\u4FEE\u98FE\u9375\u3002",
        settingsStatusBarScrollModifierRecommended: platformLabel("Cmd \u6216 Option", "Ctrl \u6216 Alt"),
        settingsStatusBarScrollModifierNone: "\u7121",
        settingsStatusBarScrollModifierModOnly: platformLabel("\u50C5 Cmd", "\u50C5 Ctrl"),
        settingsStatusBarScrollModifierAltOnly: platformLabel("\u50C5 Option", "\u50C5 Alt"),
        settingsStatusBarScrollModifierModOrAlt: platformLabel("Cmd \u6216 Option", "Ctrl \u6216 Alt"),
        settingsStatusBarScrollThreshold: "\u9748\u654F\u5EA6\u9580\u6ABB",
        settingsStatusBarScrollThresholdDesc: "\u6578\u503C\u8D8A\u5C0F\uFF0C\u8D8A\u5BB9\u6613\u5207\u63DB\u3002\u50C5\u5728\u300C\u81EA\u8A02\u300D\u9810\u8A2D\u6642\u4F7F\u7528\u3002",
        settingsStatusBarScrollCooldown: "\u51B7\u537B\u6642\u9593",
        settingsStatusBarScrollCooldownDesc: "\u5169\u6B21\u7531\u6EFE\u52D5\u89F8\u767C\u7684\u5DE5\u4F5C\u968E\u6BB5\u5207\u63DB\u4E4B\u9593\u7684\u6700\u77ED\u9593\u9694\u3002\u50C5\u5728\u300C\u81EA\u8A02\u300D\u9810\u8A2D\u6642\u4F7F\u7528\u3002",
        settingsStatusBarScrollResetWindow: "\u7D2F\u7A4D\u91CD\u8A2D\u6642\u9593\u7A97",
        settingsStatusBarScrollResetWindowDesc: "\u5728\u91CD\u8A2D\u524D\uFF0C\u6301\u7E8C\u7D2F\u7A4D\u8F03\u5C0F\u6EFE\u52D5\u91CF\u7684\u6642\u9593\u3002\u50C5\u5728\u300C\u81EA\u8A02\u300D\u9810\u8A2D\u6642\u4F7F\u7528\u3002",
        settingsStatusBarScrollInvert: "\u53CD\u8F49\u6EFE\u52D5\u65B9\u5411",
        settingsStatusBarScrollInvertDesc: "\u53CD\u8F49\u72C0\u614B\u5217\u6EFE\u52D5\u5207\u63DB\u6642\u4E0A\u4E00\u500B/\u4E0B\u4E00\u500B\u7684\u65B9\u5411\u3002",
        settingsUseLocalSettings: "\u4F7F\u7528 Vault \u672C\u6A5F\u8A2D\u5B9A",
        settingsUseLocalSettingsDesc: "\u82E5\u4F60\u5728\u591A\u500B Vault \u4E4B\u9593\u540C\u6B65 .obsidian\uFF08\u4F8B\u5982\u4F7F\u7528 Settings Profiles\uFF09\uFF0C\u4E26\u5E0C\u671B Workspace++ \u8A2D\u5B9A\u5728\u5404 Vault \u5206\u958B\u4FDD\u5B58\uFF0C\u8ACB\u555F\u7528\u6B64\u9805\u3002",
        settingsCopyGlobalToLocal: "\u5C07\u5168\u57DF\u8A2D\u5B9A\u8907\u88FD\u5230\u6B64 Vault",
        settingsCopyGlobalToLocalDesc: "\u4EE5\u76EE\u524D\u5168\u57DF\u8A2D\u5B9A\u8986\u5BEB Vault \u672C\u6A5F\u8A2D\u5B9A\u3002",
        settingsCopyGlobalToLocalBtn: "\u8907\u88FD",
        settingsResetLocalSettings: "\u91CD\u8A2D Vault \u672C\u6A5F\u8A2D\u5B9A",
        settingsResetLocalSettingsDesc: "\u5C07 Vault \u672C\u6A5F\u8A2D\u5B9A\u91CD\u8A2D\u56DE\u5168\u57DF\u8A2D\u5B9A\u3002",
        settingsResetLocalSettingsBtn: "\u91CD\u8A2D\u672C\u6A5F",
        settingsAdvancedStorageSubsection: "\u5132\u5B58\u884C\u70BA",
        settingsAdvancedTransferSubsection: "\u8CC7\u6599\u79FB\u8F49",
        settingsDeveloperSection: "\u958B\u767C\u8005\u5DE5\u5177",
        settingsStorageDiagnostics: "\u5132\u5B58\u8A3A\u65B7",
        settingsStorageDiagnosticsDesc: "Workspace++ \u76EE\u524D\u4F7F\u7528\u7684\u5132\u5B58\u8CC7\u8A0A\u3002",
        settingsStorageFieldSessions: "\u5DE5\u4F5C\u968E\u6BB5\u6A94\u6848",
        settingsStorageFieldSessionsBackup: "\u5DE5\u4F5C\u968E\u6BB5\u5099\u4EFD",
        settingsStorageFieldLocalSettings: "\u672C\u6A5F\u8A2D\u5B9A\u6A94\u6848",
        settingsStorageFieldGlobalSettings: "\u5168\u57DF\u8A2D\u5B9A\u6A94\u6848",
        settingsStorageFieldSessionCount: "\u5DE5\u4F5C\u968E\u6BB5\u6578\u91CF",
        settingsStorageFieldUpdatedAt: "\u66F4\u65B0\u6642\u9593",
        settingsExportSessions: "\u532F\u51FA\u5DE5\u4F5C\u968E\u6BB5",
        settingsExportSessionsDesc: "\u5C07\u5FEB\u7167\u5132\u5B58\u81F3 .workspace-plus-plus/exports\u3002",
        settingsExportSessionsBtn: "\u532F\u51FA",
        settingsImportSessions: "\u532F\u5165\u5DE5\u4F5C\u968E\u6BB5",
        settingsImportSessionsDesc: "\u5F9E .workspace-plus-plus/exports \u532F\u5165\u6700\u65B0\u5FEB\u7167\u3002",
        settingsImportSessionsBtn: "\u532F\u5165\u6700\u65B0",
        confirmImportSessions: "\u8981\u532F\u5165\u6700\u65B0\u532F\u51FA\u7684\u5DE5\u4F5C\u968E\u6BB5\u55CE\uFF1F\u76EE\u524D\u5DE5\u4F5C\u968E\u6BB5\u5C07\u88AB\u53D6\u4EE3\u3002",
        settingsResetSettings: "\u91CD\u8A2D\u8A2D\u5B9A",
        settingsResetSettingsDesc: "\u5C07\u76EE\u524D\u8A2D\u5B9A\u7BC4\u570D\u5167\u7684 Workspace++ \u8A2D\u5B9A\u9084\u539F\u70BA\u9810\u8A2D\u503C\u3002",
        settingsResetSettingsBtn: "\u91CD\u8A2D\u8A2D\u5B9A",
        confirmResetSettings: "\u8981\u5C07 Workspace++ \u8A2D\u5B9A\u91CD\u8A2D\u70BA\u9810\u8A2D\u503C\u55CE\uFF1F",
        resetSettingsDone: "Workspace++ \u8A2D\u5B9A\u5DF2\u91CD\u8A2D\u3002",
        resetSettingsFailed: "\u91CD\u8A2D Workspace++ \u8A2D\u5B9A\u5931\u6557\u3002",
        settingsResetSessionsAndSettings: "\u91CD\u8A2D\u5DE5\u4F5C\u968E\u6BB5\u8207\u8A2D\u5B9A",
        settingsResetSessionsAndSettingsDesc: "\u4E00\u6B21\u91CD\u8A2D\u5DF2\u5132\u5B58\u7684\u5DE5\u4F5C\u968E\u6BB5\u8207 Workspace++ \u8A2D\u5B9A\u3002",
        settingsResetSessionsAndSettingsBtn: "\u5168\u90E8\u91CD\u8A2D",
        confirmResetSessionsAndSettings: "\u8981\u540C\u6642\u91CD\u8A2D\u5DE5\u4F5C\u968E\u6BB5\u8207\u8A2D\u5B9A\u55CE\uFF1F\u6B64\u64CD\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002",
        resetSessionsAndSettingsDone: "\u5DE5\u4F5C\u968E\u6BB5\u8207\u8A2D\u5B9A\u5DF2\u91CD\u8A2D\u3002",
        resetSessionsAndSettingsFailed: "\u91CD\u8A2D\u5DE5\u4F5C\u968E\u6BB5\u8207\u8A2D\u5B9A\u5931\u6557\u3002"
      }
    };
    var NOTE_SESSION_STRINGS = {
      en: {
        cmdSaveCurrentNoteNameAsSession: "Save current note name as session",
        noActiveMarkdownFile: "No active Markdown note.",
        savedCurrentNoteNameAsSession: function(n) {
          return 'Saved current note as session "' + n + '"';
        },
        saveCurrentNoteNameAsSessionFailed: "Failed to save current note name as session."
      },
      zh: {
        cmdSaveCurrentNoteNameAsSession: "\u5C06\u5F53\u524D\u7B14\u8BB0\u540D\u4FDD\u5B58\u4E3A\u4F1A\u8BDD",
        noActiveMarkdownFile: "\u6CA1\u6709\u6D3B\u52A8\u7684 Markdown \u7B14\u8BB0\u3002",
        savedCurrentNoteNameAsSession: function(n) {
          return "\u5DF2\u5C06\u5F53\u524D\u7B14\u8BB0\u4FDD\u5B58\u4E3A\u4F1A\u8BDD\u201C" + n + "\u201D";
        },
        saveCurrentNoteNameAsSessionFailed: "\u65E0\u6CD5\u5C06\u5F53\u524D\u7B14\u8BB0\u540D\u4FDD\u5B58\u4E3A\u4F1A\u8BDD\u3002"
      },
      "zh-TW": {
        cmdSaveCurrentNoteNameAsSession: "\u5C07\u76EE\u524D\u7B46\u8A18\u540D\u7A31\u5132\u5B58\u70BA\u5DE5\u4F5C\u968E\u6BB5",
        noActiveMarkdownFile: "\u6C92\u6709\u4F5C\u7528\u4E2D\u7684 Markdown \u7B46\u8A18\u3002",
        savedCurrentNoteNameAsSession: function(n) {
          return "\u5DF2\u5C07\u76EE\u524D\u7B46\u8A18\u5132\u5B58\u70BA\u5DE5\u4F5C\u968E\u6BB5\u300C" + n + "\u300D";
        },
        saveCurrentNoteNameAsSessionFailed: "\u7121\u6CD5\u5C07\u76EE\u524D\u7B46\u8A18\u540D\u7A31\u5132\u5B58\u70BA\u5DE5\u4F5C\u968E\u6BB5\u3002"
      }
    };
    var noteSessionLangs = Object.keys(NOTE_SESSION_STRINGS);
    for (noteSessionLangIndex = 0; noteSessionLangIndex < noteSessionLangs.length; noteSessionLangIndex++) {
      noteSessionLang = noteSessionLangs[noteSessionLangIndex];
      if (!EXTENDED_STRINGS[noteSessionLang]) EXTENDED_STRINGS[noteSessionLang] = {};
      noteSessionKeys = Object.keys(NOTE_SESSION_STRINGS[noteSessionLang]);
      for (noteSessionKeyIndex = 0; noteSessionKeyIndex < noteSessionKeys.length; noteSessionKeyIndex++) {
        noteSessionKey = noteSessionKeys[noteSessionKeyIndex];
        EXTENDED_STRINGS[noteSessionLang][noteSessionKey] = NOTE_SESSION_STRINGS[noteSessionLang][noteSessionKey];
      }
    }
    var noteSessionLang;
    var noteSessionKeys;
    var noteSessionKey;
    var noteSessionKeyIndex;
    var noteSessionLangIndex;
    var extendedLangs = Object.keys(EXTENDED_STRINGS);
    for (extendedLangIndex = 0; extendedLangIndex < extendedLangs.length; extendedLangIndex++) {
      extendedLang = extendedLangs[extendedLangIndex];
      if (!STRINGS[extendedLang]) continue;
      extendedKeys = Object.keys(EXTENDED_STRINGS[extendedLang]);
      for (extendedKeyIndex = 0; extendedKeyIndex < extendedKeys.length; extendedKeyIndex++) {
        extendedKey = extendedKeys[extendedKeyIndex];
        if (STRINGS[extendedLang][extendedKey] === void 0) {
          STRINGS[extendedLang][extendedKey] = EXTENDED_STRINGS[extendedLang][extendedKey];
        }
      }
    }
    var extendedLang;
    var extendedKeys;
    var extendedKey;
    var extendedKeyIndex;
    var extendedLangIndex;
    var RESET_STRINGS = {
      en: {
        settingsResetBackupsAndHistory: "Delete backups and version history",
        settingsResetBackupsAndHistoryDesc: "Delete automatic backup files and saved session version history. Current sessions and settings are kept.",
        settingsResetBackupsAndHistoryBtn: "Delete",
        confirmResetBackupsAndHistory: "Delete all backups and version history? This cannot be undone.",
        resetBackupsAndHistoryHint: "This removes backup files and per-session version history, but keeps current sessions and settings.",
        resetBackupsAndHistoryDone: "Backups and version history have been deleted.",
        resetBackupsAndHistoryFailed: "Failed to delete backups and version history.",
        settingsResetSessionsAndSettings: "Reset all",
        settingsResetSessionsAndSettingsDesc: "Reset settings and sessions, and delete backup files and version history.",
        settingsResetSessionsAndSettingsBtn: "Reset all",
        confirmResetSessionsAndSettings: "Reset all Workspace++ data? Settings and sessions will be reset, and backups and version history will be deleted. This cannot be undone.",
        resetSessionsAndSettingsDone: "Workspace++ data has been reset.",
        resetSessionsAndSettingsFailed: "Failed to reset Workspace++ data."
      },
      zh: {
        settingsResetBackupsAndHistory: "\u5220\u9664\u5907\u4EFD\u548C\u7248\u672C\u5386\u53F2",
        settingsResetBackupsAndHistoryDesc: "\u5220\u9664\u81EA\u52A8\u5907\u4EFD\u6587\u4EF6\u548C\u5DF2\u4FDD\u5B58\u7684\u4F1A\u8BDD\u7248\u672C\u5386\u53F2\u3002\u5F53\u524D\u4F1A\u8BDD\u548C\u8BBE\u7F6E\u4F1A\u4FDD\u7559\u3002",
        settingsResetBackupsAndHistoryBtn: "\u5220\u9664",
        confirmResetBackupsAndHistory: "\u5220\u9664\u6240\u6709\u5907\u4EFD\u548C\u7248\u672C\u5386\u53F2\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",
        resetBackupsAndHistoryHint: "\u8FD9\u4F1A\u79FB\u9664\u5907\u4EFD\u6587\u4EF6\u548C\u6BCF\u4E2A\u4F1A\u8BDD\u7684\u7248\u672C\u5386\u53F2\uFF0C\u4F46\u4FDD\u7559\u5F53\u524D\u4F1A\u8BDD\u548C\u8BBE\u7F6E\u3002",
        resetBackupsAndHistoryDone: "\u5907\u4EFD\u548C\u7248\u672C\u5386\u53F2\u5DF2\u5220\u9664\u3002",
        resetBackupsAndHistoryFailed: "\u5220\u9664\u5907\u4EFD\u548C\u7248\u672C\u5386\u53F2\u5931\u8D25\u3002",
        settingsResetSessionsAndSettings: "\u5168\u90E8\u91CD\u7F6E",
        settingsResetSessionsAndSettingsDesc: "\u91CD\u7F6E\u8BBE\u7F6E\u548C\u4F1A\u8BDD\uFF0C\u5E76\u5220\u9664\u5907\u4EFD\u6587\u4EF6\u548C\u7248\u672C\u5386\u53F2\u3002",
        settingsResetSessionsAndSettingsBtn: "\u5168\u90E8\u91CD\u7F6E",
        confirmResetSessionsAndSettings: "\u91CD\u7F6E\u6240\u6709 Workspace++ \u6570\u636E\uFF1F\u8BBE\u7F6E\u548C\u4F1A\u8BDD\u5C06\u88AB\u91CD\u7F6E\uFF0C\u5907\u4EFD\u548C\u7248\u672C\u5386\u53F2\u5C06\u88AB\u5220\u9664\u3002\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002",
        resetSessionsAndSettingsDone: "Workspace++ \u6570\u636E\u5DF2\u91CD\u7F6E\u3002",
        resetSessionsAndSettingsFailed: "\u91CD\u7F6E Workspace++ \u6570\u636E\u5931\u8D25\u3002"
      },
      "zh-TW": {
        settingsResetBackupsAndHistory: "\u522A\u9664\u5099\u4EFD\u548C\u7248\u672C\u6B77\u53F2",
        settingsResetBackupsAndHistoryDesc: "\u522A\u9664\u81EA\u52D5\u5099\u4EFD\u6A94\u6848\u548C\u5DF2\u5132\u5B58\u7684\u5DE5\u4F5C\u968E\u6BB5\u7248\u672C\u6B77\u53F2\u3002\u76EE\u524D\u7684\u5DE5\u4F5C\u968E\u6BB5\u548C\u8A2D\u5B9A\u6703\u4FDD\u7559\u3002",
        settingsResetBackupsAndHistoryBtn: "\u522A\u9664",
        confirmResetBackupsAndHistory: "\u522A\u9664\u6240\u6709\u5099\u4EFD\u548C\u7248\u672C\u6B77\u53F2\uFF1F\u6B64\u64CD\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002",
        resetBackupsAndHistoryHint: "\u9019\u6703\u79FB\u9664\u5099\u4EFD\u6A94\u6848\u548C\u5404\u5DE5\u4F5C\u968E\u6BB5\u7684\u7248\u672C\u6B77\u53F2\uFF0C\u4F46\u4FDD\u7559\u76EE\u524D\u7684\u5DE5\u4F5C\u968E\u6BB5\u548C\u8A2D\u5B9A\u3002",
        resetBackupsAndHistoryDone: "\u5099\u4EFD\u548C\u7248\u672C\u6B77\u53F2\u5DF2\u522A\u9664\u3002",
        resetBackupsAndHistoryFailed: "\u522A\u9664\u5099\u4EFD\u548C\u7248\u672C\u6B77\u53F2\u5931\u6557\u3002",
        settingsResetSessionsAndSettings: "\u5168\u90E8\u91CD\u8A2D",
        settingsResetSessionsAndSettingsDesc: "\u91CD\u8A2D\u8A2D\u5B9A\u548C\u5DE5\u4F5C\u968E\u6BB5\uFF0C\u4E26\u522A\u9664\u5099\u4EFD\u6A94\u6848\u548C\u7248\u672C\u6B77\u53F2\u3002",
        settingsResetSessionsAndSettingsBtn: "\u5168\u90E8\u91CD\u8A2D",
        confirmResetSessionsAndSettings: "\u91CD\u8A2D\u6240\u6709 Workspace++ \u8CC7\u6599\uFF1F\u8A2D\u5B9A\u548C\u5DE5\u4F5C\u968E\u6BB5\u5C07\u88AB\u91CD\u8A2D\uFF0C\u5099\u4EFD\u548C\u7248\u672C\u6B77\u53F2\u5C07\u88AB\u522A\u9664\u3002\u6B64\u64CD\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002",
        resetSessionsAndSettingsDone: "Workspace++ \u8CC7\u6599\u5DF2\u91CD\u8A2D\u3002",
        resetSessionsAndSettingsFailed: "\u91CD\u8A2D Workspace++ \u8CC7\u6599\u5931\u6557\u3002"
      }
    };
    var RESTORE_STRINGS = {
      en: {
        settingsSubsectionSessionRestore: "Session restore",
        settingsRestoreSidebars: "Restore sidebars",
        settingsRestoreSidebarsDesc: "When off, switching or restoring a session restores only the main editor area and keeps the current left and right sidebars.",
        settingsRestoreTabsByFilename: "Restore tabs by filename",
        settingsRestoreTabsByFilenameDesc: "When a saved note path is missing, try to reopen the tab by matching the filename in the vault.",
        settingsNoteUidProperty: "Note UID property",
        settingsNoteUidPropertyDesc: "Frontmatter property used to identify notes when saving and restoring sessions. If a note has this property, its value is recorded and preferred over path. If missing, the path is used. Leave empty to disable UID binding. The property is never created automatically.",
        settingsNoteUidPropertyPlaceholder: "uid"
      },
      zh: {
        settingsSubsectionSessionRestore: "\u4F1A\u8BDD\u6062\u590D",
        settingsRestoreSidebars: "\u6062\u590D\u4FA7\u8FB9\u680F",
        settingsRestoreSidebarsDesc: "\u5173\u95ED\u540E\uFF0C\u5207\u6362\u6216\u6062\u590D\u4F1A\u8BDD\u65F6\u53EA\u6062\u590D\u4E3B\u7F16\u8F91\u533A\uFF0C\u5E76\u4FDD\u7559\u5F53\u524D\u5DE6\u53F3\u4FA7\u8FB9\u680F\u3002",
        settingsRestoreTabsByFilename: "\u81EA\u52A8\u6839\u636E\u6587\u4EF6\u540D\u6062\u590D\u6807\u7B7E\u9875",
        settingsRestoreTabsByFilenameDesc: "\u5F53\u4F1A\u8BDD\u4E2D\u4FDD\u5B58\u7684\u7B14\u8BB0\u8DEF\u5F84\u4E0D\u5B58\u5728\u65F6\uFF0C\u5C1D\u8BD5\u6309\u6587\u4EF6\u540D\u5728\u5E93\u4E2D\u5339\u914D\u5E76\u91CD\u65B0\u6253\u5F00\u8BE5\u6807\u7B7E\u9875\u3002",
        settingsNoteUidProperty: "\u7ED1\u5B9A\u7B14\u8BB0 UID \u6807\u8BC6",
        settingsNoteUidPropertyDesc: "\u7528\u4E8E\u5728\u4FDD\u5B58/\u6062\u590D\u4F1A\u8BDD\u65F6\u8BC6\u522B\u7B14\u8BB0\u7684 frontmatter \u5C5E\u6027\u540D\u3002\u82E5\u7B14\u8BB0\u5DF2\u6709\u8BE5\u5C5E\u6027\u5219\u8BB0\u5F55\u5176\u503C\u5E76\u4F18\u5148\u7528 UID \u786E\u8BA4\uFF1B\u82E5\u65E0\u5219\u6309\u8DEF\u5F84\u786E\u8BA4\u3002\u7559\u7A7A\u5219\u5173\u95ED\u8BE5\u529F\u80FD\u3002\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\u8BE5\u5C5E\u6027\u3002",
        settingsNoteUidPropertyPlaceholder: "uid"
      },
      "zh-TW": {
        settingsSubsectionSessionRestore: "\u5DE5\u4F5C\u968E\u6BB5\u9084\u539F",
        settingsRestoreSidebars: "\u9084\u539F\u5074\u908A\u6B04",
        settingsRestoreSidebarsDesc: "\u95DC\u9589\u5F8C\uFF0C\u5207\u63DB\u6216\u9084\u539F\u5DE5\u4F5C\u968E\u6BB5\u6642\u53EA\u9084\u539F\u4E3B\u8981\u7DE8\u8F2F\u5340\uFF0C\u4E26\u4FDD\u7559\u76EE\u524D\u5DE6\u53F3\u5074\u908A\u6B04\u3002",
        settingsRestoreTabsByFilename: "\u81EA\u52D5\u4F9D\u6A94\u540D\u9084\u539F\u5206\u9801",
        settingsRestoreTabsByFilenameDesc: "\u7576\u5DE5\u4F5C\u968E\u6BB5\u4E2D\u5132\u5B58\u7684\u7B46\u8A18\u8DEF\u5F91\u4E0D\u5B58\u5728\u6642\uFF0C\u5617\u8A66\u4F9D\u6A94\u540D\u5728\u5EAB\u4E2D\u6BD4\u5C0D\u4E26\u91CD\u65B0\u958B\u555F\u8A72\u5206\u9801\u3002",
        settingsNoteUidProperty: "\u7D81\u5B9A\u7B46\u8A18 UID \u8B58\u5225",
        settingsNoteUidPropertyDesc: "\u7528\u65BC\u5728\u5132\u5B58/\u9084\u539F\u5DE5\u4F5C\u968E\u6BB5\u6642\u8B58\u5225\u7B46\u8A18\u7684 frontmatter \u5C6C\u6027\u540D\u7A31\u3002\u82E5\u7B46\u8A18\u5DF2\u6709\u8A72\u5C6C\u6027\u5247\u8A18\u9304\u5176\u503C\u4E26\u512A\u5148\u4EE5 UID \u78BA\u8A8D\uFF1B\u82E5\u7121\u5247\u4F9D\u8DEF\u5F91\u78BA\u8A8D\u3002\u7559\u7A7A\u5247\u95DC\u9589\u6B64\u529F\u80FD\u3002\u4E0D\u6703\u81EA\u52D5\u5EFA\u7ACB\u8A72\u5C6C\u6027\u3002",
        settingsNoteUidPropertyPlaceholder: "uid"
      }
    };
    var restoreLangs = Object.keys(RESTORE_STRINGS);
    for (restoreLangIndex = 0; restoreLangIndex < restoreLangs.length; restoreLangIndex++) {
      restoreLang = restoreLangs[restoreLangIndex];
      if (!STRINGS[restoreLang]) continue;
      restoreKeys = Object.keys(RESTORE_STRINGS[restoreLang]);
      for (restoreKeyIndex = 0; restoreKeyIndex < restoreKeys.length; restoreKeyIndex++) {
        restoreKey = restoreKeys[restoreKeyIndex];
        STRINGS[restoreLang][restoreKey] = RESTORE_STRINGS[restoreLang][restoreKey];
      }
    }
    var restoreLang;
    var restoreKeys;
    var restoreKey;
    var restoreKeyIndex;
    var restoreLangIndex;
    var resetLangs = Object.keys(RESET_STRINGS);
    for (resetLangIndex = 0; resetLangIndex < resetLangs.length; resetLangIndex++) {
      resetLang = resetLangs[resetLangIndex];
      if (!STRINGS[resetLang]) continue;
      resetKeys = Object.keys(RESET_STRINGS[resetLang]);
      for (resetKeyIndex = 0; resetKeyIndex < resetKeys.length; resetKeyIndex++) {
        resetKey = resetKeys[resetKeyIndex];
        STRINGS[resetLang][resetKey] = RESET_STRINGS[resetLang][resetKey];
      }
    }
    var resetLang;
    var resetKeys;
    var resetKey;
    var resetKeyIndex;
    var resetLangIndex;
    var SESSION_EDIT_STRINGS = {
      en: {
        editSessionTitle: "Edit session",
        saveChanges: "Save",
        sessionNotePlaceholder: "Add a note (optional)...",
        sessionNoteUpdated: function(n) {
          return 'Updated note for "' + n + '"';
        },
        groupDefault: "Default",
        groupMovedToDefault: function(n) {
          return 'Moved "' + n + '" to Default';
        },
        historyTabManual: "Manual",
        historyTabAuto: "Automatic",
        historyManualEmpty: "No manual saves yet.",
        historyAutoEmpty: "No automatic history for this session.",
        historyManualSave: "Manual save",
        historyManualSaveTitle: "Save layout snapshot",
        historyEntryTitlePlaceholder: "Snapshot title...",
        historyTitleRequired: "Please enter a title.",
        historySaveFailed: "Could not save layout snapshot.",
        historyManualSaved: function(t) {
          return 'Saved snapshot "' + t + '"';
        },
        historyEditEntry: "Edit",
        historyEditEntryTitle: "Edit history entry",
        historyUpdateLayoutFromCurrent: "Replace layout with current workspace",
        historyEntryRenamed: function(t) {
          return 'Renamed to "' + t + '"';
        },
        historyEntryUpdated: function(t) {
          return t ? 'Updated "' + t + '"' : "History entry updated";
        },
        historyEntryDeleted: function(t) {
          return 'Deleted "' + t + '"';
        },
        historyDeleteConfirm: function(t) {
          return 'Delete history entry "' + t + '"?';
        },
        historyUntitled: "Untitled",
        archive: "Trash",
        archiveArea: "Trash",
        archiveEmpty: "Trash is empty.",
        archived: function(n) {
          return 'Moved "' + n + '" to trash';
        },
        confirmDeleteOrArchive: function(n) {
          return 'Move "' + n + '" to trash, or permanently delete?';
        },
        restoreFromArchive: "Restore",
        restoredFromArchive: function(n) {
          return 'Restored "' + n + '" from trash';
        },
        deletePermanently: "Delete permanently",
        confirmDeleteArchived: function(n) {
          return 'Permanently delete "' + n + '" from trash? This cannot be undone.';
        },
        backToSessions: "Back to sessions",
        locateCurrentSession: "Locate current workspace"
      },
      zh: {
        editSessionTitle: "\u7F16\u8F91\u4F1A\u8BDD",
        saveChanges: "\u4FDD\u5B58",
        sessionNotePlaceholder: "\u6DFB\u52A0\u5907\u6CE8\uFF08\u53EF\u9009\uFF09\u2026",
        sessionNoteUpdated: function(n) {
          return "\u5DF2\u66F4\u65B0\u201C" + n + "\u201D\u7684\u5907\u6CE8";
        },
        groupDefault: "\u9ED8\u8BA4",
        groupMovedToDefault: function(n) {
          return "\u5DF2\u5C06\u201C" + n + "\u201D\u79FB\u81F3\u9ED8\u8BA4";
        },
        historyTabManual: "\u624B\u52A8\u4FDD\u5B58",
        historyTabAuto: "\u81EA\u52A8\u4FDD\u5B58",
        historyManualEmpty: "\u6682\u65E0\u624B\u52A8\u4FDD\u5B58\u8BB0\u5F55\u3002",
        historyAutoEmpty: "\u6B64\u4F1A\u8BDD\u6682\u65E0\u81EA\u52A8\u5386\u53F2\u3002",
        historyManualSave: "\u624B\u52A8\u4FDD\u5B58",
        historyManualSaveTitle: "\u4FDD\u5B58\u5E03\u5C40\u5FEB\u7167",
        historyEntryTitlePlaceholder: "\u5FEB\u7167\u6807\u9898\u2026",
        historyTitleRequired: "\u8BF7\u8F93\u5165\u6807\u9898\u3002",
        historySaveFailed: "\u65E0\u6CD5\u4FDD\u5B58\u5E03\u5C40\u5FEB\u7167\u3002",
        historyManualSaved: function(t) {
          return "\u5DF2\u4FDD\u5B58\u5FEB\u7167\u201C" + t + "\u201D";
        },
        historyEditEntry: "\u7F16\u8F91",
        historyEditEntryTitle: "\u7F16\u8F91\u5386\u53F2\u8BB0\u5F55",
        historyUpdateLayoutFromCurrent: "\u7528\u5F53\u524D\u5DE5\u4F5C\u533A\u5E03\u5C40\u66FF\u6362",
        historyEntryRenamed: function(t) {
          return "\u5DF2\u91CD\u547D\u540D\u4E3A\u201C" + t + "\u201D";
        },
        historyEntryUpdated: function(t) {
          return t ? "\u5DF2\u66F4\u65B0\u201C" + t + "\u201D" : "\u5386\u53F2\u8BB0\u5F55\u5DF2\u66F4\u65B0";
        },
        historyEntryDeleted: function(t) {
          return "\u5DF2\u5220\u9664\u201C" + t + "\u201D";
        },
        historyDeleteConfirm: function(t) {
          return "\u786E\u5B9A\u5220\u9664\u5386\u53F2\u8BB0\u5F55\u201C" + t + "\u201D\uFF1F";
        },
        historyUntitled: "\u672A\u547D\u540D",
        archive: "\u5783\u573E\u6876",
        archiveArea: "\u5783\u573E\u6876",
        archiveEmpty: "\u5783\u573E\u6876\u4E3A\u7A7A\u3002",
        archived: function(n) {
          return "\u5DF2\u5C06\u201C" + n + "\u201D\u79FB\u5165\u5783\u573E\u6876";
        },
        confirmDeleteOrArchive: function(n) {
          return "\u5C06\u201C" + n + "\u201D\u79FB\u5165\u5783\u573E\u6876\uFF0C\u8FD8\u662F\u6C38\u4E45\u5220\u9664\uFF1F";
        },
        restoreFromArchive: "\u8FD8\u539F",
        restoredFromArchive: function(n) {
          return "\u5DF2\u4ECE\u5783\u573E\u6876\u8FD8\u539F\u201C" + n + "\u201D";
        },
        deletePermanently: "\u6C38\u4E45\u5220\u9664",
        confirmDeleteArchived: function(n) {
          return "\u6C38\u4E45\u5220\u9664\u5783\u573E\u6876\u4E2D\u7684\u201C" + n + "\u201D\uFF1F\u6B64\u64CD\u4F5C\u65E0\u6CD5\u64A4\u9500\u3002";
        },
        backToSessions: "\u8FD4\u56DE\u4F1A\u8BDD\u5217\u8868",
        locateCurrentSession: "\u5B9A\u4F4D\u5F53\u524D\u5DE5\u4F5C\u533A"
      },
      "zh-TW": {
        editSessionTitle: "\u7DE8\u8F2F\u5DE5\u4F5C\u968E\u6BB5",
        saveChanges: "\u5132\u5B58",
        sessionNotePlaceholder: "\u65B0\u589E\u5099\u8A3B\uFF08\u9078\u586B\uFF09\u2026",
        sessionNoteUpdated: function(n) {
          return "\u5DF2\u66F4\u65B0\u300C" + n + "\u300D\u7684\u5099\u8A3B";
        },
        groupDefault: "\u9810\u8A2D",
        groupMovedToDefault: function(n) {
          return "\u5DF2\u5C07\u300C" + n + "\u300D\u79FB\u81F3\u9810\u8A2D";
        },
        historyTabManual: "\u624B\u52D5\u5132\u5B58",
        historyTabAuto: "\u81EA\u52D5\u5132\u5B58",
        historyManualEmpty: "\u5C1A\u7121\u624B\u52D5\u5132\u5B58\u7D00\u9304\u3002",
        historyAutoEmpty: "\u6B64\u5DE5\u4F5C\u968E\u6BB5\u5C1A\u7121\u81EA\u52D5\u6B77\u53F2\u3002",
        historyManualSave: "\u624B\u52D5\u5132\u5B58",
        historyManualSaveTitle: "\u5132\u5B58\u7248\u9762\u5FEB\u7167",
        historyEntryTitlePlaceholder: "\u5FEB\u7167\u6A19\u984C\u2026",
        historyTitleRequired: "\u8ACB\u8F38\u5165\u6A19\u984C\u3002",
        historySaveFailed: "\u7121\u6CD5\u5132\u5B58\u7248\u9762\u5FEB\u7167\u3002",
        historyManualSaved: function(t) {
          return "\u5DF2\u5132\u5B58\u5FEB\u7167\u300C" + t + "\u300D";
        },
        historyEditEntry: "\u7DE8\u8F2F",
        historyEditEntryTitle: "\u7DE8\u8F2F\u6B77\u53F2\u7D00\u9304",
        historyUpdateLayoutFromCurrent: "\u4EE5\u76EE\u524D\u5DE5\u4F5C\u5340\u7248\u9762\u53D6\u4EE3",
        historyEntryRenamed: function(t) {
          return "\u5DF2\u91CD\u65B0\u547D\u540D\u70BA\u300C" + t + "\u300D";
        },
        historyEntryUpdated: function(t) {
          return t ? "\u5DF2\u66F4\u65B0\u300C" + t + "\u300D" : "\u6B77\u53F2\u7D00\u9304\u5DF2\u66F4\u65B0";
        },
        historyEntryDeleted: function(t) {
          return "\u5DF2\u522A\u9664\u300C" + t + "\u300D";
        },
        historyDeleteConfirm: function(t) {
          return "\u78BA\u5B9A\u522A\u9664\u6B77\u53F2\u7D00\u9304\u300C" + t + "\u300D\uFF1F";
        },
        historyUntitled: "\u672A\u547D\u540D",
        archive: "\u5783\u573E\u6876",
        archiveArea: "\u5783\u573E\u6876",
        archiveEmpty: "\u5783\u573E\u6876\u662F\u7A7A\u7684\u3002",
        archived: function(n) {
          return "\u5DF2\u5C07\u300C" + n + "\u300D\u79FB\u5165\u5783\u573E\u6876";
        },
        confirmDeleteOrArchive: function(n) {
          return "\u8981\u5C07\u300C" + n + "\u300D\u79FB\u5165\u5783\u573E\u6876\uFF0C\u9084\u662F\u6C38\u4E45\u522A\u9664\uFF1F";
        },
        restoreFromArchive: "\u9084\u539F",
        restoredFromArchive: function(n) {
          return "\u5DF2\u5F9E\u5783\u573E\u6876\u9084\u539F\u300C" + n + "\u300D";
        },
        deletePermanently: "\u6C38\u4E45\u522A\u9664",
        confirmDeleteArchived: function(n) {
          return "\u6C38\u4E45\u522A\u9664\u5783\u573E\u6876\u4E2D\u7684\u300C" + n + "\u300D\uFF1F\u6B64\u64CD\u4F5C\u7121\u6CD5\u5FA9\u539F\u3002";
        },
        backToSessions: "\u8FD4\u56DE\u5DE5\u4F5C\u968E\u6BB5\u5217\u8868",
        locateCurrentSession: "\u5B9A\u4F4D\u76EE\u524D\u5DE5\u4F5C\u5340"
      }
    };
    var sessionEditLangs = Object.keys(STRINGS);
    for (sessionEditLangIndex = 0; sessionEditLangIndex < sessionEditLangs.length; sessionEditLangIndex++) {
      sessionEditLang = sessionEditLangs[sessionEditLangIndex];
      sessionEditStrings = SESSION_EDIT_STRINGS[sessionEditLang] || SESSION_EDIT_STRINGS.en;
      sessionEditKeys = Object.keys(sessionEditStrings);
      for (sessionEditKeyIndex = 0; sessionEditKeyIndex < sessionEditKeys.length; sessionEditKeyIndex++) {
        sessionEditKey = sessionEditKeys[sessionEditKeyIndex];
        if (STRINGS[sessionEditLang][sessionEditKey] === void 0) {
          STRINGS[sessionEditLang][sessionEditKey] = sessionEditStrings[sessionEditKey];
        }
      }
    }
    var sessionEditLang;
    var sessionEditStrings;
    var sessionEditKeys;
    var sessionEditKey;
    var sessionEditKeyIndex;
    var sessionEditLangIndex;
    var SESSION_STORAGE_STRINGS = {
      en: {
        settingsSessionStorageLocation: "Session storage location",
        settingsSessionStorageLocationDesc: function(path) {
          return "Current session file: " + path;
        },
        settingsMoveSessionsToPluginFolder: "Move sessions to Obsidian plugin folder",
        settingsMoveSessionsToPluginFolderDesc: "Use this if you want Obsidian Sync to sync Workspace++ sessions across devices. Avoid it if you share .obsidian across multiple vaults with Settings Profiles.",
        settingsMoveSessionsToPluginFolderBtn: "Move to .obsidian",
        settingsMoveSessionsToVaultFolder: "Move sessions outside .obsidian",
        settingsMoveSessionsToVaultFolderDesc: "Use this if you share .obsidian across multiple vaults and want each vault to keep separate sessions.",
        settingsMoveSessionsToVaultFolderBtn: "Move outside .obsidian",
        sessionStorageMoved: function(path) {
          return "Workspace++: Session storage moved to " + path;
        },
        sessionStorageMoveFailed: "Workspace++: Failed to move session storage.",
        settingsStorageFieldSessionStorageLocation: "Session storage mode"
      }
    };
    var sessionStorageLangs = Object.keys(STRINGS);
    for (sessionStorageLangIndex = 0; sessionStorageLangIndex < sessionStorageLangs.length; sessionStorageLangIndex++) {
      sessionStorageLang = sessionStorageLangs[sessionStorageLangIndex];
      sessionStorageStrings = SESSION_STORAGE_STRINGS[sessionStorageLang] || SESSION_STORAGE_STRINGS.en;
      sessionStorageKeys = Object.keys(sessionStorageStrings);
      for (sessionStorageKeyIndex = 0; sessionStorageKeyIndex < sessionStorageKeys.length; sessionStorageKeyIndex++) {
        sessionStorageKey = sessionStorageKeys[sessionStorageKeyIndex];
        if (STRINGS[sessionStorageLang][sessionStorageKey] === void 0) {
          STRINGS[sessionStorageLang][sessionStorageKey] = sessionStorageStrings[sessionStorageKey];
        }
      }
    }
    var sessionStorageLang;
    var sessionStorageStrings;
    var sessionStorageKeys;
    var sessionStorageKey;
    var sessionStorageKeyIndex;
    var sessionStorageLangIndex;
    var TAB_SWITCHER_STRINGS = {
      en: {
        cmdTabSwitcher: "Switch tabs (mission control)",
        tabSwitcherTitle: "Switch tab",
        tabSwitcherEmpty: "No open tabs to switch.",
        tabSwitcherHint: "Click preview to switch \xB7 Drag header to reorder \xB7 Click outside to cancel",
        tabSwitcherHintNav: "Scroll mask to switch split \xB7 Number keys to switch split \xB7 Double-click page for focus",
        tabSwitcherHintGrid: "Click preview to switch \xB7 Drag header to reorder \xB7 Click outside to cancel",
        tabSwitcherHintSplit: "Scroll mask / 1\u20139 to switch split",
        tabSwitcherPrevSplit: "Previous split",
        tabSwitcherNextSplit: "Next split",
        tabSwitcherSplitLabel: function(i, n) {
          return "Split " + i + " / " + n;
        },
        tabSwitcherCloseTab: "Close tab",
        tabSwitcherPinTab: "Pin tab",
        tabSwitcherUnpinTab: "Unpin tab",
        settingsTaskViewThumbnailRatio: "Task view thumbnail ratio",
        settingsTaskViewThumbnailRatioDesc: "Aspect ratio of preview thumbnails in the tab switcher.",
        settingsTaskViewContentZoom: "Task view content zoom",
        settingsTaskViewContentZoomDesc: "Zoom of preview content inside task view cards (10%\u2013100%).",
        settingsTaskViewContentZoomReset: "Reset to {value}",
        settingsShowTaskViewHints: "Show task view hints",
        settingsShowTaskViewHintsDesc: "Show usage tips when hovering the split nav or the card grid."
      },
      zh: {
        cmdTabSwitcher: "\u5207\u6362\u6807\u7B7E\u9875\uFF08\u4EFB\u52A1\u89C6\u56FE\uFF09",
        tabSwitcherTitle: "\u5207\u6362\u6807\u7B7E\u9875",
        tabSwitcherEmpty: "\u6CA1\u6709\u53EF\u5207\u6362\u7684\u6807\u7B7E\u9875\u3002",
        tabSwitcherHint: "\u70B9\u51FB\u9884\u89C8\u5207\u6362 \xB7 \u62D6\u52A8\u5934\u90E8\u6392\u5E8F \xB7 \u70B9\u51FB\u5916\u90E8\u53D6\u6D88",
        tabSwitcherHintNav: "\u8499\u7248\u6EDA\u8F6E\u5207\u5206\u680F \xB7 \u6570\u5B57\u952E\u5207\u6362\u5206\u680F \xB7 \u53CC\u51FB\u9875\u7801\u8FDB\u5165\u4E13\u6CE8",
        tabSwitcherHintGrid: "\u70B9\u51FB\u9884\u89C8\u5207\u6362 \xB7 \u62D6\u52A8\u5934\u90E8\u6392\u5E8F \xB7 \u70B9\u51FB\u5916\u90E8\u53D6\u6D88",
        tabSwitcherHintSplit: "\u8499\u7248\u6EDA\u8F6E / \u6570\u5B57\u952E\u5207\u6362\u5206\u680F",
        tabSwitcherPrevSplit: "\u4E0A\u4E00\u4E2A\u5206\u680F",
        tabSwitcherNextSplit: "\u4E0B\u4E00\u4E2A\u5206\u680F",
        tabSwitcherSplitLabel: function(i, n) {
          return "\u5206\u680F " + i + " / " + n;
        },
        tabSwitcherCloseTab: "\u5173\u95ED\u6807\u7B7E\u9875",
        tabSwitcherPinTab: "\u56FA\u5B9A\u6807\u7B7E\u9875",
        tabSwitcherUnpinTab: "\u53D6\u6D88\u56FA\u5B9A",
        settingsTaskViewThumbnailRatio: "\u4EFB\u52A1\u89C6\u56FE\u7F29\u7565\u56FE\u6BD4\u4F8B",
        settingsTaskViewThumbnailRatioDesc: "\u8C03\u6574\u4EFB\u52A1\u89C6\u56FE\u9884\u89C8\u7F29\u7565\u56FE\u7684\u5BBD\u9AD8\u6BD4\u3002",
        settingsTaskViewContentZoom: "\u4EFB\u52A1\u89C6\u56FE\u5185\u5BB9\u7F29\u653E",
        settingsTaskViewContentZoomDesc: "\u8C03\u6574\u4EFB\u52A1\u89C6\u56FE\u9884\u89C8\u5361\u7247\u5185\u6B63\u6587\u7684 zoom \u6BD4\u4F8B\uFF0810%\u2013100%\uFF09\u3002",
        settingsTaskViewContentZoomReset: "\u91CD\u7F6E\u4E3A {value}",
        settingsShowTaskViewHints: "\u663E\u793A\u4EFB\u52A1\u89C6\u56FE\u63D0\u793A",
        settingsShowTaskViewHintsDesc: "\u9F20\u6807\u60AC\u505C\u5206\u680F\u5BFC\u822A\u6216\u7F51\u683C\u65F6\u663E\u793A\u64CD\u4F5C\u63D0\u793A\u3002"
      },
      "zh-TW": {
        cmdTabSwitcher: "\u5207\u63DB\u5206\u9801\uFF08\u4EFB\u52D9\u6AA2\u8996\uFF09",
        tabSwitcherTitle: "\u5207\u63DB\u5206\u9801",
        tabSwitcherEmpty: "\u6C92\u6709\u53EF\u5207\u63DB\u7684\u5206\u9801\u3002",
        tabSwitcherHint: "\u9EDE\u64CA\u9810\u89BD\u5207\u63DB \xB7 \u62D6\u66F3\u6A19\u984C\u5217\u6392\u5E8F \xB7 \u9EDE\u64CA\u5916\u90E8\u53D6\u6D88",
        tabSwitcherHintNav: "\u8499\u7248\u6EFE\u8F2A\u5207\u5206\u6B04 \xB7 \u6578\u5B57\u9375\u5207\u63DB\u5206\u6B04 \xB7 \u96D9\u64CA\u9801\u78BC\u9032\u5165\u5C08\u6CE8",
        tabSwitcherHintGrid: "\u9EDE\u64CA\u9810\u89BD\u5207\u63DB \xB7 \u62D6\u66F3\u6A19\u984C\u5217\u6392\u5E8F \xB7 \u9EDE\u64CA\u5916\u90E8\u53D6\u6D88",
        tabSwitcherHintSplit: "\u8499\u7248\u6EFE\u8F2A / \u6578\u5B57\u9375\u5207\u63DB\u5206\u6B04",
        tabSwitcherPrevSplit: "\u4E0A\u4E00\u500B\u5206\u6B04",
        tabSwitcherNextSplit: "\u4E0B\u4E00\u500B\u5206\u6B04",
        tabSwitcherSplitLabel: function(i, n) {
          return "\u5206\u6B04 " + i + " / " + n;
        },
        tabSwitcherCloseTab: "\u95DC\u9589\u5206\u9801",
        tabSwitcherPinTab: "\u91D8\u9078\u5206\u9801",
        tabSwitcherUnpinTab: "\u53D6\u6D88\u91D8\u9078",
        settingsTaskViewThumbnailRatio: "\u4EFB\u52D9\u6AA2\u8996\u7E2E\u5716\u6BD4\u4F8B",
        settingsTaskViewThumbnailRatioDesc: "\u8ABF\u6574\u4EFB\u52D9\u6AA2\u8996\u9810\u89BD\u7E2E\u5716\u7684\u5BEC\u9AD8\u6BD4\u3002",
        settingsTaskViewContentZoom: "\u4EFB\u52D9\u6AA2\u8996\u5167\u5BB9\u7E2E\u653E",
        settingsTaskViewContentZoomDesc: "\u8ABF\u6574\u4EFB\u52D9\u6AA2\u8996\u9810\u89BD\u5361\u7247\u5167\u6B63\u6587\u7684 zoom \u6BD4\u4F8B\uFF0810%\u2013100%\uFF09\u3002",
        settingsTaskViewContentZoomReset: "\u91CD\u8A2D\u70BA {value}",
        settingsShowTaskViewHints: "\u986F\u793A\u4EFB\u52D9\u6AA2\u8996\u63D0\u793A",
        settingsShowTaskViewHintsDesc: "\u6ED1\u9F20\u61F8\u505C\u5206\u6B04\u5C0E\u822A\u6216\u7DB2\u683C\u6642\u986F\u793A\u64CD\u4F5C\u63D0\u793A\u3002"
      }
    };
    var tabSwitcherLangs = Object.keys(STRINGS);
    for (tabSwitcherLangIndex = 0; tabSwitcherLangIndex < tabSwitcherLangs.length; tabSwitcherLangIndex++) {
      tabSwitcherLang = tabSwitcherLangs[tabSwitcherLangIndex];
      tabSwitcherStrings = TAB_SWITCHER_STRINGS[tabSwitcherLang] || TAB_SWITCHER_STRINGS.en;
      tabSwitcherKeys = Object.keys(tabSwitcherStrings);
      for (tabSwitcherKeyIndex = 0; tabSwitcherKeyIndex < tabSwitcherKeys.length; tabSwitcherKeyIndex++) {
        tabSwitcherKey = tabSwitcherKeys[tabSwitcherKeyIndex];
        if (STRINGS[tabSwitcherLang][tabSwitcherKey] === void 0) {
          STRINGS[tabSwitcherLang][tabSwitcherKey] = tabSwitcherStrings[tabSwitcherKey];
        }
      }
    }
    var tabSwitcherLang;
    var tabSwitcherStrings;
    var tabSwitcherKeys;
    var tabSwitcherKey;
    var tabSwitcherKeyIndex;
    var tabSwitcherLangIndex;
    var FORK_CREDIT_STRINGS = {
      en: {
        settingsForkCreditBefore: "This plugin is a modified fork of ",
        settingsForkCreditAfter: " by s1m4ne. Please support the original plugin.",
        settingsForkCreditLink: "Workspace++",
        cmdToggleZenMode: "Toggle focus tab mode",
        settingsZenMode: "Focus tab mode",
        settingsZenModeDesc: "Per workspace: hide inactive tab groups and maximize the active split (like Vertical Tabs zen mode).",
        settingsZenHideInactiveTabs: "Hide inactive tabs in focus mode",
        settingsZenHideInactiveTabsDesc: "When focus mode is on (hotkey or status bar), only show the active tab header in the current group.",
        zenModeEnabled: "Focus tab mode on",
        zenModeDisabled: "Focus tab mode off",
        settingsShowStatusBarWorkspace: "Show workspace status bar",
        settingsShowStatusBarWorkspaceDesc: "Show the current workspace/session control in the status bar.",
        settingsShowStatusBarZenMode: "Show focus mode status bar",
        settingsShowStatusBarZenModeDesc: "Show a status bar control that toggles focus tab mode. It highlights when focus mode is on.",
        zenStatusBarOn: "Focus",
        zenStatusBarOff: "Focus",
        zenStatusBarEnable: "Enable focus tab mode",
        zenStatusBarDisable: "Disable focus tab mode"
      },
      zh: {
        settingsForkCreditBefore: "\u672C\u63D2\u4EF6\u57FA\u4E8E ",
        settingsForkCreditAfter: "\uFF08\u4F5C\u8005 s1m4ne\uFF09\u9B54\u6539\uFF0C\u8BF7\u652F\u6301\u539F\u63D2\u4EF6\u3002",
        settingsForkCreditLink: "Workspace++",
        cmdToggleZenMode: "\u5207\u6362\u4E13\u6CE8\u6807\u7B7E\u6A21\u5F0F",
        settingsZenMode: "\u4E13\u6CE8\u6807\u7B7E\u6A21\u5F0F",
        settingsZenModeDesc: "\u6309\u5DE5\u4F5C\u533A\u5206\u522B\u8BB0\u5F55\uFF1A\u9690\u85CF\u5176\u4ED6\u5206\u680F\u6807\u7B7E\u7EC4\uFF0C\u653E\u5927\u5F53\u524D\u5206\u680F\uFF08\u53C2\u8003 Vertical Tabs \u7684 Zen mode\uFF09\u3002",
        settingsZenHideInactiveTabs: "\u4E13\u6CE8\u6A21\u5F0F\u4E0B\u9690\u85CF\u975E\u6D3B\u52A8\u6807\u7B7E",
        settingsZenHideInactiveTabsDesc: "\u901A\u8FC7\u5FEB\u6377\u952E\u6216\u72B6\u6001\u680F\u5F00\u542F\u4E13\u6CE8\u6A21\u5F0F\u65F6\uFF0C\u5F53\u524D\u5206\u7EC4\u4EC5\u663E\u793A\u6D3B\u52A8\u6807\u7B7E\u9875\u6807\u9898\u3002",
        zenModeEnabled: "\u5DF2\u5F00\u542F\u4E13\u6CE8\u6807\u7B7E\u6A21\u5F0F",
        zenModeDisabled: "\u5DF2\u5173\u95ED\u4E13\u6CE8\u6807\u7B7E\u6A21\u5F0F",
        settingsShowStatusBarWorkspace: "\u663E\u793A\u72B6\u6001\u680F\u5DE5\u4F5C\u533A\u63A7\u4EF6",
        settingsShowStatusBarWorkspaceDesc: "\u5728\u72B6\u6001\u680F\u663E\u793A\u5F53\u524D\u5DE5\u4F5C\u533A/\u4F1A\u8BDD\u63A7\u4EF6\u3002",
        settingsShowStatusBarZenMode: "\u663E\u793A\u72B6\u6001\u680F\u4E13\u6CE8\u6A21\u5F0F\u63A7\u4EF6",
        settingsShowStatusBarZenModeDesc: "\u5728\u72B6\u6001\u680F\u663E\u793A\u4E13\u6CE8\u6A21\u5F0F\u5F00\u5173\uFF1B\u5F00\u542F\u65F6\u4F1A\u9AD8\u4EAE\u663E\u793A\uFF0C\u70B9\u51FB\u53EF\u5207\u6362\u3002",
        zenStatusBarOn: "\u4E13\u6CE8",
        zenStatusBarOff: "\u4E13\u6CE8",
        zenStatusBarEnable: "\u5F00\u542F\u4E13\u6CE8\u6807\u7B7E\u6A21\u5F0F",
        zenStatusBarDisable: "\u5173\u95ED\u4E13\u6CE8\u6807\u7B7E\u6A21\u5F0F"
      },
      "zh-TW": {
        settingsForkCreditBefore: "\u672C\u5916\u639B\u57FA\u65BC ",
        settingsForkCreditAfter: "\uFF08\u4F5C\u8005 s1m4ne\uFF09\u9B54\u6539\uFF0C\u8ACB\u652F\u6301\u539F\u5916\u639B\u3002",
        settingsForkCreditLink: "Workspace++",
        cmdToggleZenMode: "\u5207\u63DB\u5C08\u6CE8\u5206\u9801\u6A21\u5F0F",
        settingsZenMode: "\u5C08\u6CE8\u5206\u9801\u6A21\u5F0F",
        settingsZenModeDesc: "\u96B1\u85CF\u5176\u4ED6\u5206\u6B04\u5206\u9801\u7D44\uFF0C\u653E\u5927\u76EE\u524D\u5206\u6B04\uFF08\u53C3\u8003 Vertical Tabs \u7684 Zen mode\uFF09\u3002",
        settingsZenHideInactiveTabs: "\u5C08\u6CE8\u6A21\u5F0F\u4E0B\u96B1\u85CF\u975E\u4F7F\u7528\u4E2D\u5206\u9801",
        settingsZenHideInactiveTabsDesc: "\u900F\u904E\u5FEB\u6377\u9375\u6216\u72C0\u614B\u5217\u958B\u555F\u5C08\u6CE8\u6A21\u5F0F\u6642\uFF0C\u76EE\u524D\u5206\u7D44\u50C5\u986F\u793A\u4F7F\u7528\u4E2D\u5206\u9801\u6A19\u984C\u3002",
        zenModeEnabled: "\u5DF2\u958B\u555F\u5C08\u6CE8\u5206\u9801\u6A21\u5F0F",
        zenModeDisabled: "\u5DF2\u95DC\u9589\u5C08\u6CE8\u5206\u9801\u6A21\u5F0F",
        settingsShowStatusBarWorkspace: "\u986F\u793A\u72C0\u614B\u5217\u5DE5\u4F5C\u5340\u63A7\u4EF6",
        settingsShowStatusBarWorkspaceDesc: "\u5728\u72C0\u614B\u5217\u986F\u793A\u76EE\u524D\u5DE5\u4F5C\u5340/\u5DE5\u4F5C\u968E\u6BB5\u63A7\u4EF6\u3002",
        settingsShowStatusBarZenMode: "\u986F\u793A\u72C0\u614B\u5217\u5C08\u6CE8\u6A21\u5F0F\u63A7\u4EF6",
        settingsShowStatusBarZenModeDesc: "\u5728\u72C0\u614B\u5217\u986F\u793A\u5C08\u6CE8\u6A21\u5F0F\u958B\u95DC\uFF1B\u958B\u555F\u6642\u6703\u9192\u76EE\u63D0\u793A\uFF0C\u9EDE\u64CA\u53EF\u5207\u63DB\u3002",
        zenStatusBarOn: "\u5C08\u6CE8",
        zenStatusBarOff: "\u5C08\u6CE8",
        zenStatusBarEnable: "\u958B\u555F\u5C08\u6CE8\u5206\u9801\u6A21\u5F0F",
        zenStatusBarDisable: "\u95DC\u9589\u5C08\u6CE8\u5206\u9801\u6A21\u5F0F"
      }
    };
    var forkCreditLangs = Object.keys(STRINGS);
    for (forkCreditLangIndex = 0; forkCreditLangIndex < forkCreditLangs.length; forkCreditLangIndex++) {
      forkCreditLang = forkCreditLangs[forkCreditLangIndex];
      forkCreditStrings = FORK_CREDIT_STRINGS[forkCreditLang] || FORK_CREDIT_STRINGS.en;
      forkCreditKeys = Object.keys(forkCreditStrings);
      for (forkCreditKeyIndex = 0; forkCreditKeyIndex < forkCreditKeys.length; forkCreditKeyIndex++) {
        forkCreditKey = forkCreditKeys[forkCreditKeyIndex];
        if (STRINGS[forkCreditLang][forkCreditKey] === void 0) {
          STRINGS[forkCreditLang][forkCreditKey] = forkCreditStrings[forkCreditKey];
        }
      }
    }
    var forkCreditLang;
    var forkCreditStrings;
    var forkCreditKeys;
    var forkCreditKey;
    var forkCreditKeyIndex;
    var forkCreditLangIndex;
    var LANG_OPTIONS = {
      en: "English",
      zh: "\u7B80\u4F53\u4E2D\u6587",
      "zh-TW": "\u7E41\u9AD4\u4E2D\u6587"
    };
    var LANG_ORDER = ["en", "zh", "zh-TW"];
    exports2.LANG_OPTIONS = LANG_OPTIONS;
    exports2.LANG_ORDER = LANG_ORDER;
    exports2.resolveLocale = function(override) {
      var lang = override && override !== "auto" ? override : navigator.language || "";
      var key = lang.slice(0, 2);
      if (key === "zh") {
        key = /TW|HK|Hant/i.test(lang) ? "zh-TW" : "zh";
      }
      var L = STRINGS[key] || STRINGS.en;
      if (L !== STRINGS.en) {
        var keys = Object.keys(STRINGS.en);
        for (var i = 0; i < keys.length; i++) {
          if (L[keys[i]] === void 0) L[keys[i]] = STRINGS.en[keys[i]];
        }
      }
      exports2.L = L;
      return L;
    };
  }
});

// src/modals/confirm-modal.js
var require_confirm_modal = __commonJS({
  "src/modals/confirm-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var ConfirmModal = (
      /** @class */
      function(_super) {
        function ConfirmModal2(app, message, onConfirm, options) {
          var _this = _super.call(this, app) || this;
          _this.message = message;
          _this.onConfirm = onConfirm;
          _this.options = options || {};
          return _this;
        }
        ConfirmModal2.prototype = Object.create(_super.prototype);
        ConfirmModal2.prototype.constructor = ConfirmModal2;
        ConfirmModal2.prototype.onOpen = function() {
          var L = i18n2.L;
          this.containerEl.style.zIndex = "10001";
          var contentEl = this.contentEl;
          contentEl.createEl("p", { text: this.message });
          var btns = contentEl.createDiv({ cls: "wpp-confirm-buttons" });
          var self = this;
          var cancelBtn = btns.createEl("button", { text: L.cancel });
          cancelBtn.addEventListener("click", function() {
            self.close();
          });
          var confirmText = this.options.confirmText || L.delete;
          var confirmClass = this.options.confirmClass || "mod-warning";
          var confirmBtn = btns.createEl("button", { text: confirmText, cls: confirmClass });
          confirmBtn.addEventListener("click", function() {
            self.onConfirm();
            self.close();
          });
          if (this.options.hint) {
            var hintEl = contentEl.createDiv({ cls: "wpp-confirm-hint" });
            var hintLink = hintEl.createEl("a", { text: this.options.hint });
            hintLink.addEventListener("click", function(e) {
              e.preventDefault();
              self.close();
              if (self.options.onHintClick) self.options.onHintClick();
            });
          }
          this.buttons = [cancelBtn, confirmBtn];
          this.focusedButtonIndex = 1;
          this.updateButtonFocus();
          this.confirmKeyHandler = function(e) {
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
              e.preventDefault();
              self.focusedButtonIndex = 0;
              self.updateButtonFocus();
            } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              self.focusedButtonIndex = 1;
              self.updateButtonFocus();
            } else if (e.key === "Enter") {
              e.preventDefault();
              if (self.focusedButtonIndex === 0) {
                self.close();
              } else {
                self.onConfirm();
                self.close();
              }
            } else if (e.key === "Escape") {
              e.preventDefault();
              e.stopImmediatePropagation();
              self.close();
            }
          };
          document.addEventListener("keydown", this.confirmKeyHandler, true);
        };
        ConfirmModal2.prototype.updateButtonFocus = function() {
          var self = this;
          this.buttons.forEach(function(btn, i) {
            btn.classList.toggle("wpp-btn-focused", i === self.focusedButtonIndex);
          });
        };
        ConfirmModal2.prototype.onClose = function() {
          if (this.confirmKeyHandler) {
            document.removeEventListener("keydown", this.confirmKeyHandler, true);
            this.confirmKeyHandler = null;
          }
          this.contentEl.empty();
        };
        return ConfirmModal2;
      }(obsidian2.Modal)
    );
    module2.exports = ConfirmModal;
  }
});

// src/modals/history-entry-modal.js
var require_history_entry_modal = __commonJS({
  "src/modals/history-entry-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var HistoryEntryModal = (
      /** @class */
      function(_super) {
        function HistoryEntryModal2(app, options) {
          var _this = _super.call(this, app) || this;
          _this.modalOptions = options || {};
          return _this;
        }
        HistoryEntryModal2.prototype = Object.create(_super.prototype);
        HistoryEntryModal2.prototype.constructor = HistoryEntryModal2;
        HistoryEntryModal2.prototype.onOpen = function() {
          var L = i18n2.L;
          var self = this;
          var opts = this.modalOptions;
          var contentEl = this.contentEl;
          contentEl.empty();
          contentEl.addClass("wpp-modal");
          var isEdit = opts.mode === "edit";
          this.titleEl.setText(opts.title || (isEdit ? L.historyEditEntryTitle : L.historyManualSaveTitle));
          var input = contentEl.createEl("input", {
            type: "text",
            value: opts.initialTitle || "",
            placeholder: opts.placeholder || L.historyEntryTitlePlaceholder,
            cls: "wpp-rename-input"
          });
          input.select();
          var updateLayoutToggle = null;
          if (isEdit && opts.showUpdateLayout !== false) {
            var toggleRow = contentEl.createDiv({ cls: "wpp-history-edit-layout-row" });
            updateLayoutToggle = toggleRow.createEl("input", {
              type: "checkbox",
              attr: { id: "wpp-history-update-layout" }
            });
            toggleRow.createEl("label", {
              text: opts.updateLayoutLabel || L.historyUpdateLayoutFromCurrent,
              attr: { for: "wpp-history-update-layout" }
            });
          }
          var btns = contentEl.createDiv({ cls: "wpp-confirm-buttons" });
          var cancelBtn = btns.createEl("button", { text: L.cancel });
          cancelBtn.addEventListener("click", function() {
            self.close();
          });
          var submitBtn = btns.createEl("button", {
            text: opts.buttonText || (isEdit ? L.saveChanges : L.historyManualSave),
            cls: "mod-cta"
          });
          var doSubmit = function() {
            var title = input.value.trim();
            if (!title) {
              if (opts.emptyNotice) new obsidian2.Notice(opts.emptyNotice);
              else new obsidian2.Notice(L.historyTitleRequired);
              return;
            }
            if (typeof opts.onSubmit === "function") {
              opts.onSubmit(title, {
                updateLayoutFromCurrent: !!(updateLayoutToggle && updateLayoutToggle.checked)
              });
            }
            self.close();
          };
          submitBtn.addEventListener("click", doSubmit);
          this.keyHandler = function(e) {
            if (e.isComposing) return;
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              doSubmit();
            } else if (e.key === "Escape") {
              e.preventDefault();
              e.stopImmediatePropagation();
              self.close();
            }
          };
          document.addEventListener("keydown", this.keyHandler, true);
          setTimeout(function() {
            input.focus();
          }, 50);
        };
        HistoryEntryModal2.prototype.onClose = function() {
          if (this.keyHandler) {
            document.removeEventListener("keydown", this.keyHandler, true);
            this.keyHandler = null;
          }
          this.contentEl.empty();
        };
        return HistoryEntryModal2;
      }(obsidian2.Modal)
    );
    module2.exports = HistoryEntryModal;
  }
});

// src/modals/history-modal.js
var require_history_modal = __commonJS({
  "src/modals/history-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var ConfirmModal = require_confirm_modal();
    var HistoryEntryModal = require_history_entry_modal();
    var DAY = 864e5;
    var HistoryModal = (
      /** @class */
      function(_super) {
        function HistoryModal2(app, plugin, session) {
          var _this = _super.call(this, app) || this;
          _this.plugin = plugin;
          _this.sessionId = session && session.id;
          _this.activeTab = "manual";
          return _this;
        }
        HistoryModal2.prototype = Object.create(_super.prototype);
        HistoryModal2.prototype.constructor = HistoryModal2;
        HistoryModal2.prototype.getSession = function() {
          return (this.plugin.data.sessions || {})[this.sessionId] || null;
        };
        HistoryModal2.prototype.onOpen = function() {
          var session = this.getSession();
          if (!session) {
            this.close();
            return;
          }
          var history = session.history || [];
          var hasManual = history.some(function(e) {
            return e && e.source === "manual";
          });
          var hasAuto = history.some(function(e) {
            return !e || e.source !== "manual";
          });
          if (!hasManual && hasAuto) this.activeTab = "auto";
          else this.activeTab = "manual";
          this.render();
        };
        HistoryModal2.prototype.render = function() {
          var L = i18n2.L;
          var self = this;
          var session = this.getSession();
          var contentEl = this.contentEl;
          contentEl.empty();
          contentEl.addClass("wpp-modal", "wpp-history-modal");
          if (!session) {
            contentEl.createEl("p", { text: L.historyEmpty, cls: "wpp-history-empty" });
            return;
          }
          this.titleEl.setText(L.historyTitle + " \u2014 " + session.name);
          var tabs = contentEl.createDiv({ cls: "wpp-history-tabs" });
          var manualTab = tabs.createEl("button", {
            text: L.historyTabManual,
            cls: "wpp-history-tab" + (this.activeTab === "manual" ? " is-active" : "")
          });
          var autoTab = tabs.createEl("button", {
            text: L.historyTabAuto,
            cls: "wpp-history-tab" + (this.activeTab === "auto" ? " is-active" : "")
          });
          manualTab.addEventListener("click", function() {
            self.activeTab = "manual";
            self.render();
          });
          autoTab.addEventListener("click", function() {
            self.activeTab = "auto";
            self.render();
          });
          var allHistory = session.history || [];
          var indexed = [];
          for (var i = 0; i < allHistory.length; i++) {
            var entry = allHistory[i];
            var isManual = entry && entry.source === "manual";
            if (this.activeTab === "manual" ? isManual : !isManual) {
              indexed.push({ entry, index: i });
            }
          }
          if (indexed.length === 0) {
            var emptyText = this.activeTab === "manual" ? L.historyManualEmpty : L.historyAutoEmpty;
            contentEl.createEl("p", { text: emptyText, cls: "wpp-history-empty" });
            return;
          }
          var entries = indexed.map(function(item) {
            return item.entry;
          });
          var groups = this.groupByDate(entries);
          var listEl = contentEl.createDiv({ cls: "wpp-history-list" });
          for (var gi = 0; gi < groups.length; gi++) {
            var group = groups[gi];
            listEl.createEl("h4", { text: group.label, cls: "wpp-history-date-label" });
            for (var ei = 0; ei < group.entries.length; ei++) {
              var localIndex = group.indices[ei];
              var globalIndex = indexed[localIndex].index;
              this.renderEntry(listEl, group.entries[ei], globalIndex);
            }
          }
        };
        HistoryModal2.prototype.openEditEntry = function(entryIndex) {
          var L = i18n2.L;
          var self = this;
          var session = this.getSession();
          if (!session || !session.history || !session.history[entryIndex]) return;
          var entry = session.history[entryIndex];
          new HistoryEntryModal(this.app, {
            mode: "edit",
            title: L.historyEditEntryTitle,
            initialTitle: entry.title || "",
            placeholder: L.historyEntryTitlePlaceholder,
            buttonText: L.saveChanges,
            showUpdateLayout: true,
            updateLayoutLabel: L.historyUpdateLayoutFromCurrent,
            emptyNotice: L.historyTitleRequired,
            onSubmit: function(title, result) {
              self.plugin.updateHistoryEntry(session.id, entryIndex, {
                title,
                updateLayoutFromCurrent: !!(result && result.updateLayoutFromCurrent)
              }).then(function(ok) {
                if (ok) self.render();
              });
            }
          }).open();
        };
        HistoryModal2.prototype.renderEntry = function(listEl, entry, originalIndex) {
          var L = i18n2.L;
          var self = this;
          var itemEl = listEl.createDiv({ cls: "wpp-history-item" });
          var infoEl = itemEl.createDiv({ cls: "wpp-history-info" });
          var time = new Date(entry.savedAt);
          var timeStr = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
          var titleText = entry.title ? entry.title : timeStr;
          infoEl.createDiv({ text: titleText, cls: "wpp-history-time" });
          var metaParts = [];
          if (entry.title) metaParts.push(timeStr);
          var filePaths = self.plugin.extractFilePathsFromLayout(entry.layout);
          var paneCount = self.plugin.countPanesInLayout(entry.layout);
          var fileNames = filePaths.map(function(p) {
            var parts = p.split("/");
            return parts[parts.length - 1];
          });
          var summary = L.historyPanes(paneCount);
          if (fileNames.length > 0) {
            var displayNames = fileNames.slice(0, 5).join(", ");
            if (fileNames.length > 5) displayNames += " ...";
            summary += " \xB7 " + displayNames;
          }
          metaParts.push(summary);
          infoEl.createDiv({ text: metaParts.join(" \xB7 "), cls: "wpp-history-summary" });
          var actionsEl = itemEl.createDiv({ cls: "wpp-history-item-actions" });
          var editBtn = actionsEl.createDiv({
            cls: "wpp-icon-btn",
            attr: { role: "button", tabindex: "0" }
          });
          obsidian2.setIcon(editBtn, "pencil");
          obsidian2.setTooltip(editBtn, L.historyEditEntry, { delay: 250 });
          editBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            self.openEditEntry(originalIndex);
          });
          var deleteBtn = actionsEl.createDiv({
            cls: "wpp-icon-btn",
            attr: { role: "button", tabindex: "0" }
          });
          obsidian2.setIcon(deleteBtn, "trash-2");
          obsidian2.setTooltip(deleteBtn, L.delete, { delay: 250 });
          deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            var label = entry.title || timeStr;
            new ConfirmModal(
              self.app,
              L.historyDeleteConfirm(label),
              function() {
                return self.plugin.deleteHistoryEntry(self.sessionId, originalIndex).then(function(ok) {
                  if (ok) self.render();
                });
              },
              { confirmText: L.delete, confirmClass: "mod-warning" }
            ).open();
          });
          var btnEl = actionsEl.createEl("button", {
            text: L.historyRestore,
            cls: "wpp-history-restore-btn"
          });
          btnEl.addEventListener("click", function() {
            var doRestore = function() {
              self.plugin.restoreFromHistoryEntry(
                self.sessionId,
                originalIndex
              ).then(function(ok) {
                if (ok) {
                  var session2 = self.getSession();
                  new obsidian2.Notice(L.historyRestored(session2 ? session2.name : ""));
                }
                self.close();
              });
            };
            if (self.plugin.isVersionHistoryConfirmRestoreEnabled()) {
              var session = self.getSession();
              new ConfirmModal(
                self.app,
                L.historyRestoreConfirm(session ? session.name : "", timeStr),
                doRestore,
                { confirmText: L.historyRestore, confirmClass: "mod-cta" }
              ).open();
            } else {
              doRestore();
            }
          });
        };
        HistoryModal2.prototype.groupByDate = function(history) {
          var L = i18n2.L;
          var now = /* @__PURE__ */ new Date();
          var todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
          var yesterdayStart = todayStart - DAY;
          var weekStart = todayStart - 6 * DAY;
          var groups = {};
          var groupOrder = [];
          for (var i = 0; i < history.length; i++) {
            var entry = history[i];
            var t = entry.savedAt;
            var label;
            if (t >= todayStart) {
              label = L.historyToday;
            } else if (t >= yesterdayStart) {
              label = L.historyYesterday;
            } else if (t >= weekStart) {
              label = L.historyThisWeek;
            } else {
              var d = new Date(t);
              label = d.toLocaleDateString();
            }
            if (!groups[label]) {
              groups[label] = { label, entries: [], indices: [] };
              groupOrder.push(label);
            }
            groups[label].entries.push(entry);
            groups[label].indices.push(i);
          }
          return groupOrder.map(function(k) {
            return groups[k];
          });
        };
        HistoryModal2.prototype.onClose = function() {
          this.contentEl.empty();
        };
        return HistoryModal2;
      }(obsidian2.Modal)
    );
    module2.exports = HistoryModal;
  }
});

// src/modals/format-relative-time.js
var require_format_relative_time = __commonJS({
  "src/modals/format-relative-time.js"(exports2, module2) {
    "use strict";
    var i18n2 = require_i18n();
    function formatRelativeTime(timestamp) {
      var L = i18n2.L;
      var diff = Date.now() - timestamp;
      var minutes = Math.floor(diff / 6e4);
      var hours = Math.floor(diff / 36e5);
      var days = Math.floor(diff / 864e5);
      if (minutes < 1) return L.modifiedJustNow;
      if (minutes < 60) return L.modifiedMinutes(minutes);
      if (hours < 24) return L.modifiedHours(hours);
      return L.modifiedDays(days);
    }
    module2.exports = formatRelativeTime;
  }
});

// src/modals/rename-modal.js
var require_rename_modal = __commonJS({
  "src/modals/rename-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var RenameModal = (
      /** @class */
      function(_super) {
        function RenameModal2(app, currentName, onRename, options) {
          var _this = _super.call(this, app) || this;
          _this.currentName = currentName;
          _this.onRename = onRename;
          _this.modalOptions = options || {};
          _this.currentNote = typeof _this.modalOptions.currentNote === "string" ? _this.modalOptions.currentNote : "";
          return _this;
        }
        RenameModal2.prototype = Object.create(_super.prototype);
        RenameModal2.prototype.constructor = RenameModal2;
        RenameModal2.prototype.onOpen = function() {
          var L = i18n2.L;
          var contentEl = this.contentEl;
          var self = this;
          var opts = this.modalOptions;
          var showNote = !!opts.showNote;
          this.titleEl.setText(opts.title || L.renameTitle);
          var input = contentEl.createEl("input", {
            type: "text",
            value: this.currentName,
            placeholder: opts.placeholder || L.renamePlaceholder,
            cls: "wpp-rename-input"
          });
          input.select();
          this.nameInput = input;
          var noteInput = null;
          if (showNote) {
            noteInput = contentEl.createEl("textarea", {
              cls: "wpp-session-note-input",
              attr: {
                rows: "3",
                placeholder: opts.notePlaceholder || L.sessionNotePlaceholder
              }
            });
            noteInput.value = this.currentNote;
            this.noteInput = noteInput;
          }
          var btns = contentEl.createDiv({ cls: "wpp-confirm-buttons" });
          var cancelBtn = btns.createEl("button", { text: L.cancel });
          cancelBtn.addEventListener("click", function() {
            self.close();
          });
          var skipBtn = null;
          if (opts.skipButtonText && opts.onSkip) {
            skipBtn = btns.createEl("button", { text: opts.skipButtonText });
            skipBtn.addEventListener("click", function() {
              opts.onSkip();
              self.close();
            });
          }
          var renameBtn = btns.createEl("button", {
            text: opts.buttonText || (showNote ? L.saveChanges : L.rename),
            cls: "mod-cta"
          });
          var doRename = function() {
            var newName = input.value.trim();
            var nextNote = showNote ? noteInput.value || "" : void 0;
            if (!newName) {
              if (opts.onSkip) {
                opts.onSkip();
                self.close();
                return;
              }
              if (opts.emptyNotice) {
                new obsidian2.Notice(opts.emptyNotice);
              }
              return;
            }
            var noteUnchanged = !showNote || nextNote.trim() === (self.currentNote || "").trim();
            if (newName === self.currentName && noteUnchanged) return;
            if (showNote) {
              self.onRename(newName, nextNote);
            } else {
              self.onRename(newName);
            }
            self.close();
          };
          renameBtn.addEventListener("click", doRename);
          this.buttons = skipBtn ? [cancelBtn, skipBtn, renameBtn] : [cancelBtn, renameBtn];
          var lastBtnIdx = this.buttons.length - 1;
          this.focusedButtonIndex = -1;
          function focusName() {
            self.focusedButtonIndex = -1;
            self.updateRenameBtnFocus();
            input.focus();
          }
          function focusNote() {
            if (!noteInput) {
              focusName();
              return;
            }
            self.focusedButtonIndex = -2;
            self.updateRenameBtnFocus();
            noteInput.focus();
          }
          function focusButtons(index) {
            self.focusedButtonIndex = index;
            self.updateRenameBtnFocus();
            if (input.blur) input.blur();
            if (noteInput && noteInput.blur) noteInput.blur();
          }
          this.renameKeyHandler = function(e) {
            if (e.isComposing) return;
            if (self.focusedButtonIndex === -1) {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                if (showNote) {
                  focusNote();
                } else {
                  focusButtons(lastBtnIdx);
                }
              } else if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                doRename();
              } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopImmediatePropagation();
                self.close();
              }
            } else if (self.focusedButtonIndex === -2) {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                focusButtons(lastBtnIdx);
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                focusName();
              } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopImmediatePropagation();
                self.close();
              }
            } else {
              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (showNote) {
                  focusNote();
                } else {
                  focusName();
                }
              } else if (e.key === "ArrowLeft") {
                e.preventDefault();
                if (self.focusedButtonIndex > 0) {
                  self.focusedButtonIndex--;
                  self.updateRenameBtnFocus();
                } else if (showNote) {
                  focusNote();
                } else {
                  focusName();
                }
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                if (self.focusedButtonIndex < lastBtnIdx) {
                  self.focusedButtonIndex++;
                  self.updateRenameBtnFocus();
                }
              } else if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                self.buttons[self.focusedButtonIndex].click();
              } else if (e.key === "Escape") {
                e.preventDefault();
                e.stopImmediatePropagation();
                self.close();
              }
            }
          };
          document.addEventListener("keydown", this.renameKeyHandler, true);
          if (noteInput) {
            noteInput.addEventListener("focus", function() {
              self.focusedButtonIndex = -2;
              self.updateRenameBtnFocus();
            });
          }
          input.addEventListener("focus", function() {
            self.focusedButtonIndex = -1;
            self.updateRenameBtnFocus();
          });
          setTimeout(function() {
            input.focus();
          }, 50);
        };
        RenameModal2.prototype.updateRenameBtnFocus = function() {
          var self = this;
          this.buttons.forEach(function(btn, i) {
            btn.classList.toggle("wpp-btn-focused", i === self.focusedButtonIndex);
          });
        };
        RenameModal2.prototype.onClose = function() {
          if (this.renameKeyHandler) {
            document.removeEventListener("keydown", this.renameKeyHandler, true);
            this.renameKeyHandler = null;
          }
          this.contentEl.empty();
        };
        return RenameModal2;
      }(obsidian2.Modal)
    );
    module2.exports = RenameModal;
  }
});

// src/group-tab-ui.js
var require_group_tab_ui = __commonJS({
  "src/group-tab-ui.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var ConfirmModal = require_confirm_modal();
    var RenameModal = require_rename_modal();
    function openCreateGroupPrompt(app, plugin, onCreated) {
      var L = i18n2.L;
      new RenameModal(app, "", function(name) {
        plugin.createGroupValidated(name).then(function(created) {
          if (!created) return;
          if (typeof onCreated === "function") onCreated();
        });
      }, {
        title: L.groupCreateNew,
        placeholder: L.groupCreatePlaceholder,
        buttonText: L.save,
        emptyNotice: L.groupEmptyName
      }).open();
    }
    function openRenameGroupPrompt(app, plugin, group, onRenamed) {
      var L = i18n2.L;
      new RenameModal(app, group.name, function(newName) {
        plugin.renameGroupValidated(group.id, newName).then(function(renamed) {
          if (!renamed) return;
          if (typeof onRenamed === "function") onRenamed();
        });
      }, {
        title: L.groupContextRename,
        emptyNotice: L.groupEmptyName
      }).open();
    }
    function attachGroupTabDrag(tabEl, tabsContainerEl, options) {
      options = options || {};
      tabEl.addEventListener("mousedown", function(e) {
        if (e.button !== 0) return;
        if (options.stopPropagationOnMouseDown) {
          e.stopPropagation();
        }
        var startX = e.clientX;
        var dragStarted = false;
        var cloneEl = null;
        function startDrag(ev) {
          dragStarted = true;
          var rect = tabEl.getBoundingClientRect();
          cloneEl = tabEl.cloneNode(true);
          cloneEl.classList.add("wpp-drag-clone");
          cloneEl.style.position = "fixed";
          cloneEl.style.width = rect.width + "px";
          cloneEl.style.height = rect.height + "px";
          cloneEl.style.top = rect.top + "px";
          cloneEl.style.left = ev.clientX - (startX - rect.left) + "px";
          cloneEl.style.zIndex = "10000";
          cloneEl.style.pointerEvents = "none";
          document.body.appendChild(cloneEl);
          tabEl.classList.add("is-dragging");
          cloneEl._offsetX = startX - rect.left;
        }
        function onMove(ev) {
          if (!dragStarted) {
            if (Math.abs(ev.clientX - startX) < 5) return;
            startDrag(ev);
          }
          cloneEl.style.left = ev.clientX - cloneEl._offsetX + "px";
          var tabs = tabsContainerEl.querySelectorAll(".wpp-group-tab");
          var placed = false;
          for (var ti = 0; ti < tabs.length; ti++) {
            var sibling = tabs[ti];
            if (sibling === tabEl) continue;
            var r = sibling.getBoundingClientRect();
            if (ev.clientX < r.left + r.width / 2) {
              tabsContainerEl.insertBefore(tabEl, sibling);
              placed = true;
              break;
            }
          }
          if (!placed) {
            var addBtnEl = tabsContainerEl.querySelector(".wpp-group-add-btn");
            if (addBtnEl) {
              tabsContainerEl.insertBefore(tabEl, addBtnEl);
            } else {
              tabsContainerEl.appendChild(tabEl);
            }
          }
        }
        function onUp() {
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
          if (!dragStarted) return;
          cloneEl.remove();
          tabEl.classList.remove("is-dragging");
          var tabs = tabsContainerEl.querySelectorAll(".wpp-group-tab");
          var newOrder = [];
          for (var ti = 0; ti < tabs.length; ti++) {
            newOrder.push(tabs[ti].dataset.groupId);
          }
          if (typeof options.onCommit === "function") {
            options.onCommit(newOrder);
          }
        }
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });
    }
    function renderGroupTabs(options) {
      var L = i18n2.L;
      options = options || {};
      var plugin = options.plugin;
      var containerEl = options.containerEl;
      if (!plugin || !containerEl) return;
      while (containerEl.firstChild) containerEl.removeChild(containerEl.firstChild);
      containerEl.addClass("wpp-group-tabs-row-inner");
      var app = options.app || plugin.app;
      var groups = options.groups || plugin.data.groups || {};
      var groupOrder = options.groupOrder || plugin.getOrderedGroupTabIds();
      var selectedGroupId = options.selectedGroupId || null;
      var defaultWrap = containerEl.createDiv({ cls: "wpp-group-tabs-default" });
      var groupsWrap = containerEl.createDiv({ cls: "wpp-group-tabs-groups" });
      var allWrap = containerEl.createDiv({ cls: "wpp-group-tabs-all" });
      function setupGroupTabDrag(tabEl) {
        if (!options.onGroupOrderCommit) return;
        attachGroupTabDrag(tabEl, groupsWrap, {
          stopPropagationOnMouseDown: !!options.stopPropagationOnMouseDown,
          onCommit: function(newOrder) {
            var next = ["__all__"].concat(newOrder.filter(function(id) {
              return id && id !== "__all__" && id !== "__ungrouped__";
            }));
            options.onGroupOrderCommit(next);
          }
        });
      }
      var defaultTab = defaultWrap.createDiv({ cls: "wpp-group-tab wpp-group-tab--default" });
      defaultTab.dataset.groupId = "__ungrouped__";
      if (selectedGroupId === "__ungrouped__") defaultTab.classList.add("is-active");
      defaultTab.textContent = L.groupDefault || "Default";
      defaultTab.addEventListener("click", function() {
        if (typeof options.onSelectGroup === "function") {
          options.onSelectGroup("__ungrouped__");
        }
      });
      for (var gi = 0; gi < groupOrder.length; gi++) {
        var gid = groupOrder[gi];
        if (gid === "__all__" || gid === "__ungrouped__") continue;
        var group = groups[gid];
        if (!group) continue;
        (function(currentGroup) {
          var tab = document.createElement("div");
          tab.className = "wpp-group-tab";
          tab.dataset.groupId = currentGroup.id;
          if (selectedGroupId === currentGroup.id) tab.classList.add("is-active");
          tab.textContent = currentGroup.name;
          tab.addEventListener("click", function() {
            if (typeof options.onSelectGroup === "function") {
              options.onSelectGroup(currentGroup.id);
            }
          });
          tab.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            openGroupTabContextMenu({
              app,
              plugin,
              event: e,
              group: currentGroup,
              onDeleteGroup: options.onDeleteGroup,
              onGroupsChanged: options.onGroupsChanged,
              onSessionsChanged: options.onSessionsChanged
            });
          });
          setupGroupTabDrag(tab);
          groupsWrap.appendChild(tab);
        })(group);
      }
      var addBtn = document.createElement("div");
      addBtn.className = "wpp-group-add-btn";
      obsidian2.setIcon(addBtn, "plus");
      if (options.addButtonTooltip) {
        obsidian2.setTooltip(addBtn, options.addButtonTooltip, {
          placement: options.addButtonTooltipPlacement || "bottom",
          delay: options.addButtonTooltipDelay || 250
        });
      }
      addBtn.addEventListener("click", function() {
        if (typeof options.onAddGroupClick === "function") {
          options.onAddGroupClick();
          return;
        }
        openCreateGroupPrompt(app, plugin, options.onGroupsChanged);
      });
      groupsWrap.appendChild(addBtn);
      if (typeof options.onLocateCurrentClick === "function") {
        var locateBtn = allWrap.createDiv({ cls: "wpp-group-locate-btn" });
        obsidian2.setIcon(locateBtn, "locate");
        var locateTooltip = options.locateButtonTooltip || L.locateCurrentSession;
        if (locateTooltip) {
          obsidian2.setTooltip(locateBtn, locateTooltip, {
            placement: options.locateButtonTooltipPlacement || "bottom",
            delay: options.locateButtonTooltipDelay || 250
          });
        }
        locateBtn.addEventListener("click", function(e) {
          if (options.stopPropagationOnMouseDown) e.stopPropagation();
          options.onLocateCurrentClick();
        });
      }
      var allTab = allWrap.createDiv({ cls: "wpp-group-tab wpp-group-tab--all" });
      allTab.dataset.groupId = "__all__";
      if (!selectedGroupId) allTab.classList.add("is-active");
      obsidian2.setIcon(allTab, "layout-list");
      if (L.groupAll) {
        obsidian2.setTooltip(allTab, L.groupAll, {
          placement: "bottom",
          delay: 250
        });
      }
      allTab.addEventListener("click", function() {
        if (typeof options.onSelectGroup === "function") {
          options.onSelectGroup(null);
        }
      });
      allTab.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        openAllGroupsTabContextMenu({
          app,
          plugin,
          event: e,
          onResetViewGroup: options.onResetViewGroup,
          onGroupsChanged: options.onGroupsChanged,
          onSessionsChanged: options.onSessionsChanged
        });
      });
    }
    function openAllGroupsTabContextMenu(options) {
      var L = i18n2.L;
      options = options || {};
      var plugin = options.plugin;
      var app = options.app || (plugin ? plugin.app : null);
      if (!plugin || !app) return;
      var menu = new obsidian2.Menu();
      menu.addItem(function(mi) {
        mi.setTitle(L.groupCreateNew);
        mi.setIcon("plus");
        mi.onClick(function() {
          openCreateGroupPrompt(app, plugin, options.onGroupsChanged);
        });
      });
      var allGroups = plugin.getOrderedGroups();
      if (allGroups.length > 0) {
        menu.addSeparator();
        menu.addItem(function(mi) {
          mi.setTitle(L.contextDeleteAllGroups);
          mi.setIcon("folder-x");
          mi.setSection("danger");
          mi.onClick(function() {
            new ConfirmModal(app, L.confirmDeleteAllGroups(allGroups.length), function() {
              return plugin.clearAllGroups().then(function() {
                if (typeof options.onResetViewGroup === "function") {
                  options.onResetViewGroup();
                }
                new obsidian2.Notice(L.deletedAllGroups(allGroups.length));
                if (typeof options.onGroupsChanged === "function") {
                  options.onGroupsChanged();
                }
                if (typeof options.onSessionsChanged === "function") {
                  options.onSessionsChanged();
                }
              });
            }).open();
          });
        });
      }
      var sessionCount = Object.keys(plugin.data.sessions || {}).length;
      if (sessionCount > 1) {
        if (allGroups.length === 0) menu.addSeparator();
        menu.addItem(function(mi) {
          mi.setTitle(L.contextDeleteAllSessions);
          mi.setIcon("trash-2");
          mi.setSection("danger");
          mi.onClick(function() {
            new ConfirmModal(app, L.confirmDeleteAllSessions(sessionCount - 1), function() {
              return plugin.deleteAllInactiveSessions().then(function(deletedCount) {
                if (typeof options.onGroupsChanged === "function") {
                  options.onGroupsChanged();
                }
                if (typeof options.onSessionsChanged === "function") {
                  options.onSessionsChanged();
                }
                if (deletedCount > 0) {
                  new obsidian2.Notice(L.deletedAllSessions(deletedCount));
                }
              });
            }).open();
          });
        });
      }
      if (options.event) {
        menu.showAtMouseEvent(options.event);
      }
    }
    function openGroupTabContextMenu(options) {
      var L = i18n2.L;
      options = options || {};
      var plugin = options.plugin;
      var app = options.app || (plugin ? plugin.app : null);
      var group = options.group;
      if (!plugin || !app || !group) return;
      var menu = new obsidian2.Menu();
      menu.addItem(function(mi) {
        mi.setTitle(L.groupContextRename);
        mi.setIcon("pencil");
        mi.onClick(function() {
          openRenameGroupPrompt(app, plugin, group, options.onGroupsChanged);
        });
      });
      var groupSessionIds = plugin.getGroupSessionIds(group.id);
      if (groupSessionIds.length > 0) {
        menu.addItem(function(mi) {
          mi.setTitle(L.groupRemoveAllSessions);
          mi.setIcon("log-out");
          mi.onClick(function() {
            new ConfirmModal(app, L.confirmRemoveAllFromGroup(group.name, groupSessionIds.length), function() {
              return plugin.removeAllSessionsFromGroup(group.id).then(function() {
                new obsidian2.Notice(L.groupRemovedAllSessions(group.name));
                if (typeof options.onGroupsChanged === "function") {
                  options.onGroupsChanged();
                }
                if (typeof options.onSessionsChanged === "function") {
                  options.onSessionsChanged();
                }
              });
            }, {
              confirmText: L.remove,
              confirmClass: "mod-cta"
            }).open();
          });
        });
      }
      menu.addSeparator();
      menu.addItem(function(mi) {
        mi.setTitle(L.groupContextDelete);
        mi.setIcon("trash-2");
        mi.setSection("danger");
        mi.onClick(function() {
          new ConfirmModal(app, L.confirmDeleteGroup(group.name), function() {
            return plugin.deleteGroup(group.id).then(function() {
              if (typeof options.onDeleteGroup === "function") {
                options.onDeleteGroup(group.id);
              }
              if (typeof options.onGroupsChanged === "function") {
                options.onGroupsChanged();
              }
              if (typeof options.onSessionsChanged === "function") {
                options.onSessionsChanged();
              }
            });
          }).open();
        });
      });
      if (options.event) {
        menu.showAtMouseEvent(options.event);
      }
    }
    module2.exports = {
      attachGroupTabDrag,
      openAllGroupsTabContextMenu,
      openCreateGroupPrompt,
      openGroupTabContextMenu,
      renderGroupTabs
    };
  }
});

// src/navigation-utils.js
var require_navigation_utils = __commonJS({
  "src/navigation-utils.js"(exports2, module2) {
    "use strict";
    function focusTextInputEnd(inputEl) {
      if (!inputEl || !inputEl.focus) return;
      inputEl.focus();
      if (typeof inputEl.setSelectionRange === "function") {
        var value = typeof inputEl.value === "string" ? inputEl.value : "";
        inputEl.setSelectionRange(value.length, value.length);
      }
    }
    function focusTextInputSelect(inputEl) {
      if (!inputEl || !inputEl.focus) return;
      inputEl.focus();
      if (typeof inputEl.select === "function") {
        inputEl.select();
      }
    }
    function isTextInputCursorAtEnd(inputEl) {
      if (!inputEl) return false;
      if (typeof inputEl.selectionStart !== "number" || typeof inputEl.selectionEnd !== "number") return false;
      var value = typeof inputEl.value === "string" ? inputEl.value : "";
      return inputEl.selectionStart === value.length && inputEl.selectionEnd === value.length;
    }
    function getScopedControlEl(containerEl, activeEl) {
      if (!activeEl || !containerEl || !containerEl.contains(activeEl)) return activeEl;
      if (!activeEl.closest) return activeEl;
      var controlEl = activeEl.closest("button, .wpp-icon-btn, input, select, textarea, a");
      if (controlEl && containerEl.contains(controlEl)) return controlEl;
      return activeEl;
    }
    module2.exports = {
      focusTextInputEnd,
      focusTextInputSelect,
      isTextInputCursorAtEnd,
      getScopedControlEl
    };
  }
});

// src/utils.js
var require_utils = __commonJS({
  "src/utils.js"(exports2) {
    "use strict";
    function generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 11);
    }
    function isMacPlatform() {
      return typeof navigator !== "undefined" && typeof navigator.platform === "string" && navigator.platform.indexOf("Mac") !== -1;
    }
    function isModPressed(e) {
      if (!e) return false;
      return isMacPlatform() ? !!e.metaKey : !!e.ctrlKey;
    }
    function isModShiftPressed(e) {
      return isModPressed(e) && !!(e && e.shiftKey);
    }
    exports2.generateId = generateId;
    exports2.isMacPlatform = isMacPlatform;
    exports2.isModPressed = isModPressed;
    exports2.isModShiftPressed = isModShiftPressed;
  }
});

// src/session-context-menu.js
var require_session_context_menu = __commonJS({
  "src/session-context-menu.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    function openSessionContextMenu(options) {
      var L = i18n2.L;
      options = options || {};
      var plugin = options.plugin;
      var app = options.app || (plugin ? plugin.app : null);
      var session = options.session;
      if (!plugin || !app || !session) return;
      var isActive = !!options.isActive;
      var manualSaveMode = !plugin.isAutoSaveOnSwitchEnabled();
      var showOverwriteWithCurrentLayout = !isActive && manualSaveMode && typeof options.onOverwriteWithCurrentLayout === "function";
      var menu = new obsidian2.Menu();
      var addedSaveGroup = false;
      if (isActive && manualSaveMode) {
        menu.addItem(function(mi) {
          mi.setTitle(L.contextSaveSession);
          mi.setIcon("save");
          mi.onClick(function() {
            if (typeof options.onSave === "function") options.onSave();
          });
        });
        menu.addItem(function(mi) {
          mi.setTitle(L.contextReloadSession);
          mi.setIcon("rotate-ccw");
          mi.onClick(function() {
            if (typeof options.onReload === "function") options.onReload();
          });
        });
        if (options.showSaveAs) {
          menu.addItem(function(mi) {
            mi.setTitle(L.cmdSaveAs);
            mi.setIcon("save-all");
            mi.onClick(function() {
              if (typeof options.onSaveAs === "function") options.onSaveAs();
            });
          });
        }
        addedSaveGroup = true;
      }
      if (addedSaveGroup) {
        menu.addSeparator();
      }
      if (options.showSwitch && !isActive) {
        menu.addItem(function(mi) {
          mi.setTitle(L.contextSwitchSession);
          mi.setIcon("arrow-right");
          mi.onClick(function() {
            if (typeof options.onSwitch === "function") options.onSwitch();
          });
        });
      }
      menu.addItem(function(mi) {
        mi.setTitle(L.contextRenameSession);
        mi.setIcon("pencil");
        mi.onClick(function() {
          if (typeof options.onRename === "function") options.onRename();
        });
      });
      menu.addItem(function(mi) {
        mi.setTitle(L.contextDuplicateSession);
        mi.setIcon("copy");
        mi.onClick(function() {
          if (typeof options.onDuplicate === "function") options.onDuplicate();
        });
      });
      if (plugin.isVersionHistoryEnabled()) {
        menu.addItem(function(mi) {
          mi.setTitle(L.contextVersionHistory);
          mi.setIcon("history");
          mi.onClick(function() {
            if (typeof options.onVersionHistory === "function") options.onVersionHistory();
          });
        });
      }
      if (options.showRemoveFromGroup) {
        menu.addItem(function(mi) {
          mi.setTitle(L.groupRemoveFromGroup);
          mi.setIcon("log-out");
          mi.onClick(function() {
            if (typeof options.onRemoveFromGroup === "function") options.onRemoveFromGroup();
          });
        });
      }
      if (options.showMoveToGroup) {
        menu.addItem(function(mi) {
          mi.setTitle(L.groupMoveToGroup);
          mi.setIcon("folder-input");
          var submenu = mi.setSubmenu();
          var groups = plugin.getOrderedGroups();
          var sessionGroupIds = (plugin.data.sessionGroups || {})[session.id] || [];
          for (var gi = 0; gi < groups.length; gi++) {
            (function(group) {
              submenu.addItem(function(sub) {
                sub.setTitle(group.name);
                if (sessionGroupIds.indexOf(group.id) !== -1) {
                  sub.setChecked(true);
                }
                sub.onClick(function() {
                  if (typeof options.onMoveToGroup === "function") options.onMoveToGroup(group.id);
                });
              });
            })(groups[gi]);
          }
        });
      }
      if (showOverwriteWithCurrentLayout) {
        menu.addSeparator();
        menu.addItem(function(mi) {
          mi.setTitle(L.contextSaveCurrentLayoutToThisSession);
          mi.setIcon("save");
          mi.onClick(function() {
            if (typeof options.onOverwriteWithCurrentLayout === "function") options.onOverwriteWithCurrentLayout();
          });
        });
      }
      if (options.showCustomizeClicks) {
        menu.addSeparator();
        menu.addItem(function(mi) {
          mi.setTitle(L.contextCustomizeClicks);
          mi.setIcon("mouse-pointer-click");
          mi.onClick(function() {
            if (plugin.settingTab) plugin.settingTab.activeTab = "general";
            app.setting.open();
            app.setting.openTabById(plugin.manifest.id);
          });
        });
      }
      if (Object.keys(plugin.data.sessions).length > 1) {
        menu.addSeparator();
        menu.addItem(function(mi) {
          mi.setTitle(L.contextDeleteSession);
          mi.setIcon("trash-2");
          mi.onClick(function() {
            if (typeof options.onDelete === "function") options.onDelete();
          });
        });
      }
      menu.showAtMouseEvent(options.event);
    }
    module2.exports = {
      openSessionContextMenu
    };
  }
});

// src/modals/delete-or-archive-modal.js
var require_delete_or_archive_modal = __commonJS({
  "src/modals/delete-or-archive-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var DeleteOrArchiveModal = (
      /** @class */
      function(_super) {
        function DeleteOrArchiveModal2(app, message, onArchive, onDelete, options) {
          var _this = _super.call(this, app) || this;
          _this.message = message;
          _this.onArchive = onArchive;
          _this.onDelete = onDelete;
          _this.options = options || {};
          return _this;
        }
        DeleteOrArchiveModal2.prototype = Object.create(_super.prototype);
        DeleteOrArchiveModal2.prototype.constructor = DeleteOrArchiveModal2;
        DeleteOrArchiveModal2.prototype.onOpen = function() {
          var L = i18n2.L;
          var self = this;
          this.containerEl.style.zIndex = "10001";
          var contentEl = this.contentEl;
          contentEl.createEl("p", { text: this.message });
          var btns = contentEl.createDiv({ cls: "wpp-confirm-buttons" });
          var cancelBtn = btns.createEl("button", { text: L.cancel });
          cancelBtn.addEventListener("click", function() {
            self.close();
          });
          var archiveBtn = btns.createEl("button", {
            text: this.options.archiveText || L.archive,
            cls: "mod-cta"
          });
          archiveBtn.addEventListener("click", function() {
            if (typeof self.onArchive === "function") self.onArchive();
            self.close();
          });
          var deleteBtn = btns.createEl("button", {
            text: this.options.deleteText || L.delete,
            cls: "mod-warning"
          });
          deleteBtn.addEventListener("click", function() {
            if (typeof self.onDelete === "function") self.onDelete();
            self.close();
          });
          this.buttons = [cancelBtn, archiveBtn, deleteBtn];
          this.focusedButtonIndex = 1;
          this.updateButtonFocus();
          this.keyHandler = function(e) {
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
              e.preventDefault();
              if (self.focusedButtonIndex > 0) self.focusedButtonIndex--;
              self.updateButtonFocus();
            } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              if (self.focusedButtonIndex < self.buttons.length - 1) self.focusedButtonIndex++;
              self.updateButtonFocus();
            } else if (e.key === "Enter") {
              e.preventDefault();
              self.buttons[self.focusedButtonIndex].click();
            } else if (e.key === "Escape") {
              e.preventDefault();
              e.stopImmediatePropagation();
              self.close();
            }
          };
          document.addEventListener("keydown", this.keyHandler, true);
        };
        DeleteOrArchiveModal2.prototype.updateButtonFocus = function() {
          var self = this;
          this.buttons.forEach(function(btn, i) {
            btn.classList.toggle("wpp-btn-focused", i === self.focusedButtonIndex);
          });
        };
        DeleteOrArchiveModal2.prototype.onClose = function() {
          if (this.keyHandler) {
            document.removeEventListener("keydown", this.keyHandler, true);
            this.keyHandler = null;
          }
          this.contentEl.empty();
        };
        return DeleteOrArchiveModal2;
      }(obsidian2.Modal)
    );
    module2.exports = DeleteOrArchiveModal;
  }
});

// src/session-list-actions.js
var require_session_list_actions = __commonJS({
  "src/session-list-actions.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var ConfirmModal = require_confirm_modal();
    var DeleteOrArchiveModal = require_delete_or_archive_modal();
    var RenameModal = require_rename_modal();
    function resolveApp(options) {
      if (options.app) return options.app;
      if (options.plugin && options.plugin.app) return options.plugin.app;
      return null;
    }
    function renameSessionWithPrompt(options) {
      var L = i18n2.L;
      options = options || {};
      var app = resolveApp(options);
      var plugin = options.plugin;
      var session = options.session;
      if (!app || !plugin || !session) return;
      var allowNote = options.showNote !== false;
      var modalOptions = Object.assign({
        emptyNotice: L.emptyName,
        title: allowNote ? L.editSessionTitle : L.renameTitle,
        buttonText: allowNote ? L.saveChanges : L.rename,
        showNote: allowNote,
        currentNote: session.note || "",
        notePlaceholder: L.sessionNotePlaceholder
      }, options.modalOptions || {});
      new RenameModal(app, session.name, function(newName, note) {
        var editPromise = allowNote && typeof plugin.editSessionById === "function" ? plugin.editSessionById(session.id, newName, note) : plugin.renameSessionById(session.id, newName);
        editPromise.then(function(updated) {
          if (!updated) return;
          if (typeof options.onRenamed === "function") {
            options.onRenamed(session, newName);
          }
        });
      }, modalOptions).open();
    }
    function getDeleteConfirmMessage(session, options) {
      var L = i18n2.L;
      if (options && options.confirmMessage) return options.confirmMessage;
      var isActive = !!(options && options.isActive);
      return isActive ? L.confirmDeleteActive(session.name) : L.confirmDelete(session.name);
    }
    function deleteSessionWithPrompt(options) {
      var L = i18n2.L;
      options = options || {};
      var app = resolveApp(options);
      var plugin = options.plugin;
      var session = options.session;
      if (!app || !plugin || !session) return Promise.resolve(false);
      if (Object.keys(plugin.data.sessions || {}).length <= 1) {
        if (options.notifyCannotDelete !== false) {
          new obsidian2.Notice(L.cannotDeleteLast);
        }
        return Promise.resolve(false);
      }
      var doDelete = function() {
        return plugin.deleteSession(session.id).then(function(deleted) {
          if (!deleted) return false;
          if (options.notifyDeleted !== false) {
            new obsidian2.Notice(L.deleted(session.name));
          }
          if (typeof options.onDeleted === "function") {
            options.onDeleted(session);
          }
          return true;
        });
      };
      var doArchive = function() {
        return plugin.archiveSession(session.id).then(function(archived) {
          if (!archived) {
            if (options.notifyCannotDelete !== false) {
              new obsidian2.Notice(L.cannotDeleteLast);
            }
            return false;
          }
          if (options.notifyArchived !== false) {
            new obsidian2.Notice(L.archived(session.name));
          }
          if (typeof options.onArchived === "function") {
            options.onArchived(session);
          } else if (typeof options.onDeleted === "function") {
            options.onDeleted(session);
          }
          return true;
        });
      };
      var allowArchive = options.allowArchive !== false && typeof plugin.archiveSession === "function";
      var shouldConfirm = !!options.forceConfirm || plugin.data.confirmDeleteByHotkey !== false;
      if (shouldConfirm && allowArchive) {
        new DeleteOrArchiveModal(
          app,
          options.archiveConfirmMessage || L.confirmDeleteOrArchive(session.name),
          doArchive,
          doDelete,
          options.confirmOptions || {}
        ).open();
        return Promise.resolve(true);
      }
      if (shouldConfirm) {
        new ConfirmModal(
          app,
          getDeleteConfirmMessage(session, options),
          doDelete,
          options.confirmOptions || {}
        ).open();
        return Promise.resolve(true);
      }
      return doDelete();
    }
    module2.exports = {
      renameSessionWithPrompt,
      deleteSessionWithPrompt
    };
  }
});

// src/session-context-actions.js
var require_session_context_actions = __commonJS({
  "src/session-context-actions.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var HistoryModal = require_history_modal();
    var sessionContextMenu = require_session_context_menu();
    var sessionListActions = require_session_list_actions();
    function hasOwn(options, key) {
      return Object.prototype.hasOwnProperty.call(options, key);
    }
    function optionOrDefault(options, key, fallback) {
      return hasOwn(options, key) ? options[key] : fallback;
    }
    function call(fn) {
      if (typeof fn === "function") fn();
    }
    function callAfter(promise, fn) {
      if (promise && typeof promise.then === "function") {
        return promise.then(function(value) {
          call(fn);
          return value;
        });
      }
      call(fn);
      return promise;
    }
    function getGroupName(plugin, groupId) {
      return ((plugin.data.groups || {})[groupId] || {}).name || "";
    }
    function shouldShowMoveToGroup(plugin) {
      return !!(plugin && plugin.isGroupFeatureEnabled && plugin.isGroupFeatureEnabled() && plugin.getOrderedGroups && plugin.getOrderedGroups().length > 0);
    }
    function refreshSessions(options) {
      call(options.onSessionsChanged);
    }
    function refreshGroups(options) {
      call(options.onGroupsChanged);
    }
    function refreshGroupsAndSessions(options) {
      refreshGroups(options);
      refreshSessions(options);
    }
    function createSessionContextMenuOptions(options) {
      var L = i18n2.L;
      options = options || {};
      var plugin = options.plugin;
      var app = options.app || (plugin ? plugin.app : null);
      var session = options.session;
      if (!plugin || !app || !session) return null;
      var isActive = hasOwn(options, "isActive") ? !!options.isActive : session.id === plugin.data.activeSessionId;
      var getViewGroupId = typeof options.getViewGroupId === "function" ? options.getViewGroupId : function() {
        return null;
      };
      function defaultSave() {
        return callAfter(plugin.saveActiveSession(), function() {
          refreshSessions(options);
        });
      }
      function defaultReload() {
        return plugin.reloadCurrentSessionWithoutSaving();
      }
      function defaultSaveAs() {
        return callAfter(plugin.saveAsSession(), function() {
          refreshSessions(options);
        });
      }
      function defaultOverwriteWithCurrentLayout() {
        return plugin.confirmOverwriteSessionWithCurrentLayout(session.id, {
          onSaved: function() {
            refreshSessions(options);
          }
        });
      }
      function defaultRename() {
        return sessionListActions.renameSessionWithPrompt({
          app,
          plugin,
          session,
          onRenamed: function() {
            refreshSessions(options);
          }
        });
      }
      function defaultDuplicate() {
        return callAfter(plugin.duplicateSession(session.id), function() {
          refreshSessions(options);
        });
      }
      function defaultRemoveFromGroup() {
        var groupId = getViewGroupId();
        if (!groupId) return;
        var groupName = getGroupName(plugin, groupId);
        return plugin.removeSessionFromGroup(session.id, groupId).then(function() {
          new obsidian2.Notice(L.groupRemovedSession(session.name, groupName));
          refreshGroupsAndSessions(options);
        });
      }
      function defaultMoveToGroup(groupId) {
        var groupName = getGroupName(plugin, groupId);
        return plugin.moveSessionToGroupExclusive(session.id, groupId).then(function(moved) {
          if (!moved) return false;
          new obsidian2.Notice(L.groupAddedSession(session.name, groupName));
          refreshGroupsAndSessions(options);
          return true;
        });
      }
      function defaultDelete() {
        var confirmMessage = hasOwn(options, "deleteConfirmMessage") ? options.deleteConfirmMessage : isActive ? L.confirmDeleteActive(session.name) : L.confirmDelete(session.name);
        return sessionListActions.deleteSessionWithPrompt({
          app,
          plugin,
          session,
          isActive,
          confirmMessage,
          forceConfirm: !!options.forceDeleteConfirm,
          notifyDeleted: options.notifyDeleted,
          confirmOptions: options.deleteConfirmOptions,
          onDeleted: function() {
            refreshSessions(options);
          }
        });
      }
      function defaultVersionHistory() {
        return new HistoryModal(app, plugin, session).open();
      }
      return {
        plugin,
        app,
        session,
        isActive,
        event: options.event,
        showSaveAs: !!options.showSaveAs,
        showSwitch: !!options.showSwitch,
        showRemoveFromGroup: optionOrDefault(options, "showRemoveFromGroup", !!getViewGroupId()),
        showMoveToGroup: optionOrDefault(options, "showMoveToGroup", shouldShowMoveToGroup(plugin)),
        showCustomizeClicks: !!options.showCustomizeClicks,
        onSave: options.onSave || defaultSave,
        onReload: options.onReload || defaultReload,
        onSaveAs: options.onSaveAs || defaultSaveAs,
        onOverwriteWithCurrentLayout: options.onOverwriteWithCurrentLayout || defaultOverwriteWithCurrentLayout,
        onSwitch: options.onSwitch,
        onRename: options.onRename || defaultRename,
        onDuplicate: options.onDuplicate || defaultDuplicate,
        onDelete: options.onDelete || defaultDelete,
        onRemoveFromGroup: options.onRemoveFromGroup || defaultRemoveFromGroup,
        onMoveToGroup: options.onMoveToGroup || defaultMoveToGroup,
        onVersionHistory: options.onVersionHistory || defaultVersionHistory
      };
    }
    function openSessionContextMenu(options) {
      var menuOptions = createSessionContextMenuOptions(options);
      if (!menuOptions) return;
      sessionContextMenu.openSessionContextMenu(menuOptions);
    }
    module2.exports = {
      createSessionContextMenuOptions,
      openSessionContextMenu
    };
  }
});

// src/settings-context-menu.js
var require_settings_context_menu = __commonJS({
  "src/settings-context-menu.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    function openSettingsContextMenu(options) {
      var L = i18n2.L;
      options = options || {};
      var plugin = options.plugin;
      var app = options.app || (plugin ? plugin.app : null);
      if (!plugin || !app) return;
      var menu = new obsidian2.Menu();
      var autoSaveOn = plugin.isAutoSaveOnSwitchEnabled();
      menu.addItem(function(mi) {
        mi.setTitle(L.settingsAutoSaveOnSwitch);
        mi.setIcon("save");
        if (autoSaveOn) mi.setChecked(true);
        mi.onClick(function() {
          plugin.setAutoSaveOnSwitch(!autoSaveOn, { notify: true }).then(function() {
            if (typeof options.onChanged === "function") options.onChanged();
          });
        });
      });
      if (!autoSaveOn) {
        menu.addItem(function(mi) {
          mi.setTitle(L.settingsWarnUnsavedSwitch);
          mi.setIcon("alert-triangle");
          if (plugin.isWarnOnUnsavedSwitchEnabled()) mi.setChecked(true);
          mi.onClick(function() {
            plugin.setWarnOnUnsavedSwitch(!plugin.isWarnOnUnsavedSwitchEnabled()).then(function() {
              if (typeof options.onChanged === "function") options.onChanged();
            });
          });
        });
        menu.addItem(function(mi) {
          mi.setTitle(L.settingsConfirmQuickActions);
          mi.setIcon("check-circle");
          if (plugin.data.confirmQuickActions) mi.setChecked(true);
          mi.onClick(function() {
            plugin.setConfirmQuickActions(!plugin.data.confirmQuickActions).then(function() {
              if (typeof options.onChanged === "function") options.onChanged();
            });
          });
        });
      }
      menu.addItem(function(mi) {
        mi.setTitle(L.settingsConfirmDelete);
        mi.setIcon("shield");
        if (plugin.data.confirmDeleteByHotkey !== false) mi.setChecked(true);
        mi.onClick(function() {
          plugin.setConfirmDeleteByHotkey(!(plugin.data.confirmDeleteByHotkey !== false)).then(function() {
            if (typeof options.onChanged === "function") options.onChanged();
          });
        });
      });
      menu.addSeparator();
      menu.addItem(function(mi) {
        mi.setTitle(L.settingsVersionHistoryEnabled);
        mi.setIcon("history");
        if (plugin.isVersionHistoryEnabled()) mi.setChecked(true);
        mi.onClick(function() {
          var next = !plugin.isVersionHistoryEnabled();
          plugin.setVersionHistoryEnabled(next).then(function() {
            if (typeof options.onChanged === "function") options.onChanged();
          });
        });
      });
      menu.addItem(function(mi) {
        mi.setTitle(L.contextToggleGroups);
        mi.setIcon("folder");
        if (plugin.isGroupFeatureEnabled()) mi.setChecked(true);
        mi.onClick(function() {
          plugin.setGroupFeatureEnabled(!plugin.isGroupFeatureEnabled()).then(function() {
            if (typeof options.onChanged === "function") options.onChanged();
          });
        });
      });
      menu.addItem(function(mi) {
        mi.setTitle(L.settingsShowFilterInput);
        mi.setIcon("search");
        if (plugin.data.showFilterInput) mi.setChecked(true);
        mi.onClick(function() {
          plugin.setShowFilterInput(!plugin.data.showFilterInput).then(function() {
            if (typeof options.onChanged === "function") options.onChanged();
          });
        });
      });
      menu.addSeparator();
      menu.addItem(function(mi) {
        mi.setTitle(L.rotationBackupCreate);
        mi.setIcon("archive");
        mi.onClick(function() {
          var sessionData = plugin.extractSessionData(plugin.data);
          sessionData._wppSavedAt = Date.now();
          var backupData = plugin.prepareRotationBackupData(sessionData);
          plugin.ensureDir(plugin.getBackupsDirPath()).then(function() {
            return plugin.copyFileIfExists(
              plugin.getRotationBackupPath(2),
              plugin.getRotationBackupPath(3)
            );
          }).then(function() {
            return plugin.copyFileIfExists(
              plugin.getRotationBackupPath(1),
              plugin.getRotationBackupPath(2)
            );
          }).then(function() {
            return plugin.writeJson(
              plugin.getRotationBackupPath(1),
              backupData
            );
          }).then(function() {
            plugin._lastRotationBackupAt = Date.now();
            new obsidian2.Notice(L.rotationBackupCreated);
          }).catch(function() {
            new obsidian2.Notice(L.rotationBackupFailed);
          });
        });
      });
      menu.addItem(function(mi) {
        mi.setTitle(L.settingsHotkeysBtn);
        mi.setIcon("keyboard");
        mi.onClick(function() {
          app.setting.open();
          app.setting.openTabById("hotkeys");
          var sc = app.setting.activeTab.searchComponent;
          var pluginName = plugin.manifest && plugin.manifest.name ? plugin.manifest.name : "Workspace++";
          sc.setValue(pluginName);
          sc.inputEl.dispatchEvent(new Event("input"));
        });
      });
      menu.addItem(function(mi) {
        mi.setTitle(L.contextCustomizeClicks);
        mi.setIcon("mouse-pointer-click");
        mi.onClick(function() {
          if (plugin.settingTab) plugin.settingTab.activeTab = "general";
          app.setting.open();
          app.setting.openTabById(plugin.manifest.id);
        });
      });
      menu.addItem(function(mi) {
        mi.setTitle(L.contextOpenSettings);
        mi.setIcon("settings");
        mi.onClick(function() {
          app.setting.open();
          app.setting.openTabById(plugin.manifest.id);
        });
      });
      if (options.showResetOverlay) {
        menu.addSeparator();
        menu.addItem(function(mi) {
          mi.setTitle(L.contextResetOverlayPosition);
          mi.setIcon("rotate-ccw");
          mi.onClick(function() {
            if (typeof options.onResetOverlay === "function") options.onResetOverlay();
          });
        });
      }
      menu.showAtMouseEvent(options.event);
    }
    module2.exports = {
      openSettingsContextMenu
    };
  }
});

// src/modals/session-manager-modal.js
var require_session_manager_modal = __commonJS({
  "src/modals/session-manager-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var ConfirmModal = require_confirm_modal();
    var HistoryModal = require_history_modal();
    var HistoryEntryModal = require_history_entry_modal();
    var formatRelativeTime = require_format_relative_time();
    var groupTabUi = require_group_tab_ui();
    var navigationUtils = require_navigation_utils();
    var utils = require_utils();
    var sessionContextActions = require_session_context_actions();
    var settingsContextMenu = require_settings_context_menu();
    var sessionListActions = require_session_list_actions();
    function isElementVisible(el) {
      if (!el) return false;
      if (el.offsetParent !== null) return true;
      var rects = el.getClientRects ? el.getClientRects() : [];
      return rects && rects.length > 0;
    }
    var SessionManagerModal = (
      /** @class */
      function(_super) {
        function SessionManagerModal2(app, plugin) {
          var _this = _super.call(this, app) || this;
          _this.plugin = plugin;
          return _this;
        }
        SessionManagerModal2.prototype = Object.create(_super.prototype);
        SessionManagerModal2.prototype.constructor = SessionManagerModal2;
        SessionManagerModal2.prototype.onOpen = function() {
          var L = i18n2.L;
          var contentEl = this.contentEl;
          contentEl.empty();
          contentEl.addClass("wpp-modal");
          this.modalEl.addClass("wpp-session-manager-modal");
          this.modalEl.style.setProperty("width", "min(80vw, 800px)", "important");
          this.modalEl.style.setProperty("max-width", "min(80vw, 800px)", "important");
          this.modalEl.style.setProperty("height", "min(60vh, 600px)", "important");
          this.modalEl.style.setProperty("max-height", "min(60vh, 600px)", "important");
          this.titleEl.setText(L.modalTitle);
          var savedPanel = this.plugin.resolveSessionManagerPanelState ? this.plugin.resolveSessionManagerPanelState() : { panelMode: "sessions", viewGroupId: null };
          this.panelMode = savedPanel.panelMode || "sessions";
          this.openingSessionId = null;
          var saveContainer = contentEl.createDiv({ cls: "wpp-save-container" });
          this.saveContainerEl = saveContainer;
          this.nameInput = saveContainer.createEl("input", {
            type: "text",
            placeholder: L.savePlaceholder,
            cls: "wpp-save-input"
          });
          var saveBtn = saveContainer.createEl("button", {
            text: L.save,
            cls: "wpp-save-btn"
          });
          this.saveBtn = saveBtn;
          this.filterInput = null;
          if (this.plugin.data.showFilterInput) {
            var filterContainer = contentEl.createDiv({ cls: "wpp-filter-container" });
            this.filterInput = filterContainer.createEl("input", {
              type: "text",
              placeholder: L.filterPlaceholder,
              cls: "wpp-filter-input"
            });
          }
          var self = this;
          this.modalGroupId = this.plugin.isGroupFeatureEnabled() ? savedPanel.viewGroupId || null : null;
          saveBtn.addEventListener("click", function() {
            self.onSave();
          });
          saveBtn.addEventListener("focus", function() {
            self.setKeyboardTarget({ zone: "create-button" });
          });
          this.nameInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter" && !e.isComposing) self.onSave();
          });
          this.nameInput.addEventListener("focus", function() {
            self.setKeyboardTarget({ zone: "create-input" });
          });
          this.filterQuery = "";
          if (this.filterInput) {
            this.filterInput.addEventListener("focus", function() {
              self.setKeyboardTarget({ zone: "filter" });
            });
            this.filterInput.addEventListener("input", function() {
              self.filterQuery = self.filterInput.value || "";
              self.setKeyboardTarget({ zone: "filter" });
              self.renderList();
            });
          }
          this.groupTabsRow = contentEl.createDiv({ cls: "wpp-group-tabs-row" });
          this.keyboardTarget = { zone: "none", rowIndex: null, actionKey: null };
          this.focusedIndex = -1;
          this.selectedIds = /* @__PURE__ */ new Set();
          this.bulkActionsEl = contentEl.createDiv({ cls: "wpp-bulk-actions" });
          this.bulkActionsEl.style.display = "none";
          this.bulkDeleteBtn = this.bulkActionsEl.createEl("button", { cls: "mod-warning" });
          this.bulkDeleteBtn.addEventListener("click", function() {
            self.onBulkDelete();
          });
          var deselectBtn = this.bulkActionsEl.createEl("button", { text: L.deselect, cls: "wpp-deselect-btn" });
          deselectBtn.addEventListener("click", function() {
            self.selectedIds.clear();
            self.updateSelectionUI();
          });
          this.listEl = contentEl.createDiv({ cls: "wpp-session-list" });
          this.contentFocusHandler = function(e) {
            self.syncKeyboardTargetFromElement(e.target);
          };
          contentEl.addEventListener("focusin", this.contentFocusHandler, true);
          var footer = contentEl.createDiv({ cls: "wpp-modal-footer wpp-modal-footer-bar" });
          var footerLeft = footer.createDiv({ cls: "wpp-modal-footer-left" });
          this.settingsBtn = footerLeft.createDiv({
            cls: "wpp-icon-btn wpp-settings-btn",
            attr: { role: "button", tabindex: "0" }
          });
          obsidian2.setIcon(this.settingsBtn, "settings");
          obsidian2.setTooltip(this.settingsBtn, L.contextOpenSettings, { delay: 250 });
          this.settingsBtn.addEventListener("click", function() {
            self.app.setting.open();
            self.app.setting.openTabById(self.plugin.manifest.id);
          });
          var footerHints = footer.createDiv({ cls: "wpp-modal-footer-hints" });
          this.footerHintsEl = footerHints;
          footerHints.createDiv({ text: L.footerDragReorder });
          if (this.plugin.getOrderedGroups().length > 0) {
            footerHints.createDiv({ text: L.footerDragToGroup });
          }
          var archiveBtnWrap = footer.createDiv({ cls: "wpp-archive-btn-wrap" });
          this.archiveBtn = archiveBtnWrap.createDiv({
            cls: "wpp-icon-btn wpp-archive-btn",
            attr: { role: "button", tabindex: "0" }
          });
          this.archiveBadge = archiveBtnWrap.createSpan({ cls: "wpp-archive-badge" });
          this.archiveBtn.addEventListener("click", function() {
            self.toggleArchiveMode();
          });
          this.syncPanelModeChrome();
          this.renderGroupTabs();
          this.renderList();
          this.updateArchiveBadge();
          this.setKeyboardTarget(this.getDefaultSessionTarget());
          contentEl.addEventListener("contextmenu", function(e) {
            if (e.target.closest(".wpp-session-item")) return;
            if (e.target.closest(".wpp-save-container")) return;
            if (e.target.closest(".wpp-filter-container")) return;
            if (e.target.closest(".wpp-bulk-actions")) return;
            if (e.target.closest(".wpp-group-tab")) return;
            e.preventDefault();
            settingsContextMenu.openSettingsContextMenu({
              plugin: self.plugin,
              app: self.app,
              event: e,
              onChanged: function() {
                self.renderGroupTabs();
                self.renderList();
              }
            });
          });
          this.modalKeyHandler = function(e) {
            if (document.querySelector(".wpp-confirm-buttons")) return;
            if (document.querySelector(".wpp-switch-overlay")) return;
            var activeEl = document.activeElement;
            if (activeEl && activeEl !== document.body && !self.contentEl.contains(activeEl)) return;
            var controlEl = navigationUtils.getScopedControlEl(self.contentEl, activeEl);
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
              self.handleHorizontalArrowKey(e, controlEl);
              return;
            }
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              self.handleVerticalArrowKey(e, activeEl, controlEl);
              return;
            }
            if (e.key !== "Enter") return;
            self.handleEnterKey(e, controlEl);
          };
          document.addEventListener("keydown", this.modalKeyHandler, true);
          var focusTarget = this.plugin.data.overlayDefaultFocus || "current-session";
          if (focusTarget !== "session-create") {
            var modalSelf = this;
            setTimeout(function() {
              if (focusTarget === "session-filter" && modalSelf.filterInput) {
                modalSelf.focusFilterInput();
              } else {
                modalSelf.focusSessionTarget(modalSelf.getDefaultSessionTarget());
              }
            }, 50);
          }
        };
        SessionManagerModal2.prototype.getVisibleSessions = function() {
          if (this.panelMode === "archive") {
            var archived = this.plugin.getArchivedSessions ? this.plugin.getArchivedSessions() : [];
            var archiveQuery = (this.filterQuery || "").trim().toLowerCase();
            if (!archiveQuery) return archived;
            return archived.filter(function(s) {
              var name = (s.name || "").toLowerCase();
              var note = (s.note || "").toLowerCase();
              return name.indexOf(archiveQuery) !== -1 || note.indexOf(archiveQuery) !== -1;
            });
          }
          var sessions = this.plugin.getOrderedSessionsForGroup(this.getModalGroupId());
          var query = (this.filterQuery || "").trim().toLowerCase();
          if (!query) return sessions;
          return sessions.filter(function(s) {
            var name = (s.name || "").toLowerCase();
            var note = (s.note || "").toLowerCase();
            return name.indexOf(query) !== -1 || note.indexOf(query) !== -1;
          });
        };
        SessionManagerModal2.prototype.updateArchiveBadge = function() {
          if (!this.archiveBadge) return;
          var count = this.plugin.getArchivedCount ? this.plugin.getArchivedCount() : 0;
          if (count > 0) {
            this.archiveBadge.textContent = String(count);
            this.archiveBadge.style.display = "";
          } else {
            this.archiveBadge.textContent = "";
            this.archiveBadge.style.display = "none";
          }
        };
        SessionManagerModal2.prototype.persistPanelState = function() {
          if (!this.plugin.setSessionManagerPanelState) return;
          this.plugin.setSessionManagerPanelState({
            panelMode: this.panelMode === "archive" ? "archive" : "sessions",
            viewGroupId: this.modalGroupId || null
          });
        };
        SessionManagerModal2.prototype.syncPanelModeChrome = function() {
          var L = i18n2.L;
          if (this.panelMode === "archive") {
            this.titleEl.setText(L.archiveArea);
            if (this.saveContainerEl) this.saveContainerEl.style.display = "none";
            if (this.groupTabsRow) this.groupTabsRow.style.display = "none";
            if (this.footerHintsEl) this.footerHintsEl.style.display = "none";
            if (this.archiveBtn) {
              obsidian2.setIcon(this.archiveBtn, "arrow-left");
              obsidian2.setTooltip(this.archiveBtn, L.backToSessions, { delay: 250 });
            }
          } else {
            this.titleEl.setText(L.modalTitle);
            if (this.saveContainerEl) this.saveContainerEl.style.display = "";
            if (this.groupTabsRow) {
              this.groupTabsRow.style.display = this.plugin.isGroupFeatureEnabled() ? "" : "none";
            }
            if (this.footerHintsEl) this.footerHintsEl.style.display = "";
            if (this.archiveBtn) {
              obsidian2.setIcon(this.archiveBtn, "trash-2");
              obsidian2.setTooltip(this.archiveBtn, L.archiveArea, { delay: 250 });
            }
          }
        };
        SessionManagerModal2.prototype.toggleArchiveMode = function() {
          this.panelMode = this.panelMode === "archive" ? "sessions" : "archive";
          this.selectedIds.clear();
          this.syncPanelModeChrome();
          if (this.panelMode !== "archive") {
            this.renderGroupTabs();
          }
          this.persistPanelState();
          this.updateArchiveBadge();
          this.renderList();
        };
        SessionManagerModal2.prototype.getModalGroupId = function() {
          if (!this.plugin.isGroupFeatureEnabled()) {
            this.modalGroupId = null;
            return null;
          }
          if (this.modalGroupId === "__ungrouped__") {
            return "__ungrouped__";
          }
          var groups = this.plugin.data.groups || {};
          if (this.modalGroupId && !groups[this.modalGroupId]) {
            this.modalGroupId = this.plugin.data.activeGroupId || null;
            if (this.modalGroupId && !groups[this.modalGroupId]) {
              this.modalGroupId = null;
            }
          }
          return this.modalGroupId || null;
        };
        SessionManagerModal2.prototype.selectGroup = function(groupId) {
          if (!this.plugin.isGroupFeatureEnabled()) {
            this.modalGroupId = null;
            this.persistPanelState();
            this.renderGroupTabs();
            this.renderList();
            return Promise.resolve(false);
          }
          var self = this;
          var nextGroupId = groupId || null;
          return this.plugin.resolveGroupViewSelection(nextGroupId).then(function(result) {
            self.modalGroupId = result.resolvedGroupId || null;
            self.persistPanelState();
            self.renderGroupTabs();
            self.renderList();
            return result.switched;
          });
        };
        SessionManagerModal2.prototype.resolveLocateGroupId = function(sessionId) {
          if (!this.plugin.isGroupFeatureEnabled()) return null;
          if (typeof this.plugin.chooseSessionGroupForView !== "function") return null;
          var preferred = this.plugin.chooseSessionGroupForView(sessionId);
          if (preferred === null) return "__ungrouped__";
          if (preferred) return preferred;
          return null;
        };
        SessionManagerModal2.prototype.locateCurrentSession = function() {
          var self = this;
          var activeId = this.plugin.data.activeSessionId;
          if (!activeId || !this.plugin.data.sessions[activeId]) {
            return Promise.resolve(false);
          }
          if (this.panelMode === "archive") {
            this.panelMode = "sessions";
            this.selectedIds.clear();
            this.syncPanelModeChrome();
            this.renderGroupTabs();
            this.persistPanelState();
          }
          if (this.filterInput && (this.filterQuery || "").trim()) {
            this.filterQuery = "";
            this.filterInput.value = "";
          }
          var finish = function() {
            self.focusSessionTarget(self.getDefaultSessionTarget());
            return true;
          };
          var targetGroupId = this.resolveLocateGroupId(activeId);
          if (!this.plugin.isGroupFeatureEnabled() || this.getModalGroupId() === targetGroupId) {
            this.renderList();
            return Promise.resolve(finish());
          }
          return this.selectGroup(targetGroupId).then(function() {
            return finish();
          });
        };
        SessionManagerModal2.prototype.getNavigationSessions = function() {
          return this.getVisibleSessions();
        };
        SessionManagerModal2.prototype.getArrowNavigables = function() {
          var selector = [
            "button:not([disabled])",
            'input:not([disabled]):not([type="hidden"])',
            "select:not([disabled])",
            "textarea:not([disabled])",
            "a[href]",
            '[tabindex]:not([tabindex="-1"])',
            '.wpp-icon-btn[tabindex="-1"]'
          ].join(",");
          return Array.from(this.contentEl.querySelectorAll(selector)).filter(function(el) {
            if (!isElementVisible(el)) return false;
            if (el.getAttribute("aria-hidden") === "true") return false;
            if (el.tabIndex < 0 && !el.classList.contains("wpp-icon-btn")) return false;
            return true;
          });
        };
        SessionManagerModal2.prototype.getVisibleRowElements = function() {
          return Array.from(this.listEl.querySelectorAll(".wpp-session-item")).filter(function(rowEl) {
            return isElementVisible(rowEl);
          });
        };
        SessionManagerModal2.prototype.getVisibleRowIndex = function(rowEl) {
          if (!rowEl) return -1;
          return this.getVisibleRowElements().indexOf(rowEl);
        };
        SessionManagerModal2.prototype.getRowActionTarget = function(rowEl, actionKey) {
          if (!rowEl) return null;
          var target = null;
          var desiredKey = actionKey || "load";
          if (desiredKey === "primary") desiredKey = "load";
          if (desiredKey) {
            target = rowEl.querySelector('.wpp-session-actions [data-action-key="' + desiredKey + '"]');
          }
          if ((!target || !isElementVisible(target)) && desiredKey === "load") {
            if (rowEl.getAttribute("data-action-key") === "load") return rowEl;
          }
          if ((!target || !isElementVisible(target)) && desiredKey !== "load") {
            target = rowEl.querySelector('.wpp-session-actions [data-action-key="load"]');
            if (!target && rowEl.getAttribute("data-action-key") === "load") return rowEl;
          }
          if (target && isElementVisible(target)) return target;
          var rowControls = Array.from(rowEl.querySelectorAll(".wpp-session-actions button, .wpp-session-actions .wpp-icon-btn"));
          for (var i = 0; i < rowControls.length; i++) {
            if (isElementVisible(rowControls[i])) return rowControls[i];
          }
          if (rowEl.getAttribute("data-action-key") === "load") return rowEl;
          return null;
        };
        SessionManagerModal2.prototype.getDefaultSessionTarget = function() {
          var sessions = this.getNavigationSessions();
          if (sessions.length === 0) return { zone: this.filterInput ? "filter" : "create-input" };
          var activeIdx = this.plugin.findActiveSessionIndex(sessions);
          return {
            zone: "session-action",
            rowIndex: activeIdx !== -1 ? activeIdx : 0,
            actionKey: "load"
          };
        };
        SessionManagerModal2.prototype.getEdgeSessionTarget = function(which, actionKey) {
          var rows = this.getVisibleRowElements();
          if (!rows.length) return null;
          return {
            zone: "session-action",
            rowIndex: which === "last" ? rows.length - 1 : 0,
            actionKey: actionKey || "load"
          };
        };
        SessionManagerModal2.prototype.setKeyboardTarget = function(target) {
          var nextTarget = target || { zone: "none", rowIndex: null, actionKey: null };
          if (nextTarget.zone === "session-action") {
            var sessions = this.getNavigationSessions();
            var nextIndex = typeof nextTarget.rowIndex === "number" ? nextTarget.rowIndex : -1;
            if (nextIndex >= sessions.length) nextIndex = sessions.length - 1;
            if (nextIndex < 0 && sessions.length > 0) nextIndex = 0;
            nextTarget = {
              zone: "session-action",
              rowIndex: nextIndex >= 0 ? nextIndex : null,
              actionKey: nextTarget.actionKey || "load"
            };
          } else {
            nextTarget = {
              zone: nextTarget.zone || "none",
              rowIndex: null,
              actionKey: null
            };
          }
          this.keyboardTarget = nextTarget;
          this.updateFocusUI();
        };
        SessionManagerModal2.prototype.syncKeyboardTargetFromElement = function(el) {
          if (!el || !this.contentEl.contains(el)) return;
          if (el.classList && el.classList.contains("wpp-session-item") && el.getAttribute("data-action-key") === "load") {
            this.setKeyboardTarget({
              zone: "session-action",
              rowIndex: this.getVisibleRowIndex(el),
              actionKey: "load"
            });
            return;
          }
          var rowAction = el.closest ? el.closest(".wpp-session-actions") : null;
          if (rowAction && this.contentEl.contains(rowAction)) {
            var rowEl = el.closest(".wpp-session-item");
            var rowIndex = this.getVisibleRowIndex(rowEl);
            this.setKeyboardTarget({
              zone: "session-action",
              rowIndex,
              actionKey: el.getAttribute && el.getAttribute("data-action-key") || "load"
            });
            return;
          }
          if (el === this.filterInput) {
            this.setKeyboardTarget({ zone: "filter" });
            return;
          }
          if (el === this.nameInput) {
            this.setKeyboardTarget({ zone: "create-input" });
            return;
          }
          if (el === this.saveBtn) {
            this.setKeyboardTarget({ zone: "create-button" });
          }
        };
        SessionManagerModal2.prototype.focusCreateInput = function() {
          this.setKeyboardTarget({ zone: "create-input" });
          navigationUtils.focusTextInputEnd(this.nameInput);
        };
        SessionManagerModal2.prototype.focusFilterInput = function() {
          if (!this.filterInput) return false;
          this.setKeyboardTarget({ zone: "filter" });
          navigationUtils.focusTextInputSelect(this.filterInput);
          return true;
        };
        SessionManagerModal2.prototype.handleHorizontalArrowKey = function(e, controlEl) {
          if (e.isComposing) return;
          if (controlEl === this.nameInput && e.key === "ArrowRight") {
            if (navigationUtils.isTextInputCursorAtEnd(this.nameInput)) {
              e.preventDefault();
              e.stopPropagation();
              this.saveBtn.focus();
            }
            return;
          }
          if (controlEl === this.saveBtn && e.key === "ArrowLeft") {
            e.preventDefault();
            e.stopPropagation();
            this.focusCreateInput();
            return;
          }
          if (!controlEl) return;
          if (controlEl.classList && controlEl.classList.contains("wpp-session-item") && controlEl.getAttribute("data-action-key") === "load") {
            var rowActionBar = controlEl.querySelector(".wpp-session-actions");
            if (!rowActionBar) return;
            var firstControls = Array.from(rowActionBar.querySelectorAll("button, .wpp-icon-btn")).filter(function(el) {
              return isElementVisible(el);
            });
            if (e.key === "ArrowRight" && firstControls.length > 0) {
              e.preventDefault();
              e.stopPropagation();
              firstControls[0].focus();
            }
            return;
          }
          var actionRow = controlEl.closest(".wpp-session-actions");
          if (!actionRow || !this.contentEl.contains(actionRow)) return;
          var rowControls = Array.from(actionRow.querySelectorAll("button, .wpp-icon-btn")).filter(function(el) {
            return isElementVisible(el);
          });
          if (rowControls.length === 0) return;
          var rowIndex = rowControls.indexOf(controlEl);
          if (rowIndex === -1) return;
          var nextRowIndex = rowIndex + (e.key === "ArrowRight" ? 1 : -1);
          if (nextRowIndex < 0) {
            var parentRow = actionRow.closest(".wpp-session-item");
            if (parentRow && parentRow.getAttribute("data-action-key") === "load") {
              e.preventDefault();
              e.stopPropagation();
              parentRow.focus();
            }
            return;
          }
          if (nextRowIndex >= rowControls.length) return;
          e.preventDefault();
          e.stopPropagation();
          rowControls[nextRowIndex].focus();
        };
        SessionManagerModal2.prototype.handleVerticalArrowKey = function(e, activeEl, controlEl) {
          if (e.isComposing) return;
          var isTextInput = !!(activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA"));
          if (isTextInput && activeEl.tagName === "TEXTAREA") return;
          if (activeEl && activeEl.tagName === "SELECT") return;
          var dir = e.key === "ArrowUp" ? -1 : 1;
          if (controlEl === this.filterInput) {
            e.preventDefault();
            e.stopPropagation();
            if (e.key === "ArrowDown") {
              this.focusSessionTarget(this.getEdgeSessionTarget("first", "load"));
            } else {
              this.focusCreateInput();
            }
            return;
          }
          if (this.keyboardTarget.zone === "session-action" && this.keyboardTarget.rowIndex >= 0) {
            var activeActionRow = controlEl && controlEl.closest ? controlEl.closest(".wpp-session-actions") : null;
            var rows = this.getVisibleRowElements();
            var currentRowIndex = this.keyboardTarget.rowIndex;
            var actionKey = this.keyboardTarget.actionKey || "load";
            if (activeActionRow && this.contentEl.contains(activeActionRow) && controlEl && controlEl.getAttribute) {
              actionKey = controlEl.getAttribute("data-action-key") || actionKey;
            }
            var verticalActionKey = actionKey === "save-inline" ? "load" : actionKey || "load";
            if (rows.length === 0) return;
            e.preventDefault();
            e.stopPropagation();
            var nextRowIndex = currentRowIndex + dir;
            if (nextRowIndex >= 0 && nextRowIndex < rows.length && this.focusSessionTarget({ zone: "session-action", rowIndex: nextRowIndex, actionKey: verticalActionKey })) {
              return;
            }
            if (e.key === "ArrowUp") {
              if (this.filterInput) {
                this.focusFilterInput();
              } else {
                this.focusCreateInput();
              }
            } else {
              this.focusCreateInput();
            }
            return;
          }
          if (controlEl === this.nameInput || controlEl === this.saveBtn) {
            e.preventDefault();
            e.stopPropagation();
            if (e.key === "ArrowDown") {
              if (this.filterInput) {
                this.focusFilterInput();
              } else {
                this.focusSessionTarget(this.getEdgeSessionTarget("first", "load"));
              }
            } else {
              this.focusSessionTarget(this.getEdgeSessionTarget("last", "load"));
            }
            return;
          }
          var navigables = this.getArrowNavigables();
          if (navigables.length === 0) return;
          var currentIndex = navigables.indexOf(controlEl);
          var nextEl = null;
          if (currentIndex === -1) {
            nextEl = e.key === "ArrowUp" ? navigables[navigables.length - 1] : navigables[0];
          } else {
            var fallbackIndex = currentIndex + dir;
            if (fallbackIndex < 0) fallbackIndex = navigables.length - 1;
            if (fallbackIndex >= navigables.length) fallbackIndex = 0;
            nextEl = navigables[fallbackIndex];
          }
          e.preventDefault();
          e.stopPropagation();
          if (nextEl && nextEl.focus) {
            nextEl.focus();
          }
        };
        SessionManagerModal2.prototype.handleEnterKey = function(e, controlEl) {
          if (controlEl === this.filterInput && !e.isComposing) {
            var filtered = this.getNavigationSessions();
            if (filtered.length === 1) {
              e.preventDefault();
              this.onLoad(filtered[0].id);
            }
            return;
          }
          if (controlEl && controlEl.classList && controlEl.classList.contains("wpp-icon-btn") && this.contentEl.contains(controlEl)) {
            e.preventDefault();
            e.stopPropagation();
            controlEl.click();
            return;
          }
          if (controlEl && controlEl.tagName === "BUTTON" && this.contentEl.contains(controlEl)) {
            e.preventDefault();
            e.stopPropagation();
            if (controlEl.classList.contains("wpp-load-btn")) {
              var row = controlEl.closest(".wpp-session-item");
              if (row && row.dataset && row.dataset.sessionId) {
                this.onLoad(row.dataset.sessionId);
                return;
              }
            }
            controlEl.click();
            return;
          }
          if (controlEl && (controlEl.tagName === "INPUT" || controlEl.tagName === "TEXTAREA" || controlEl.tagName === "SELECT" || controlEl.tagName === "A")) {
            return;
          }
          if (this.keyboardTarget.zone === "session-action" && this.keyboardTarget.rowIndex >= 0) {
            e.preventDefault();
            this.onFocusedLoad();
          }
        };
        SessionManagerModal2.prototype.focusSessionTarget = function(target) {
          if (!target || target.zone !== "session-action") return false;
          var rows = this.getVisibleRowElements();
          var rowIndex = typeof target.rowIndex === "number" ? target.rowIndex : -1;
          if (rowIndex < 0 || rowIndex >= rows.length) return false;
          var actionTarget = this.getRowActionTarget(rows[rowIndex], target.actionKey);
          if (!actionTarget || !actionTarget.focus) return false;
          this.setKeyboardTarget({
            zone: "session-action",
            rowIndex,
            actionKey: actionTarget.getAttribute("data-action-key") || target.actionKey || "load"
          });
          actionTarget.focus();
          return true;
        };
        SessionManagerModal2.prototype.normalizeKeyboardTargetAfterRender = function(sessions) {
          if (this.keyboardTarget.zone !== "session-action") return;
          if (!sessions.length) {
            this.keyboardTarget = { zone: this.filterInput ? "filter" : "create-input", rowIndex: null, actionKey: null };
            return;
          }
          if (this.keyboardTarget.rowIndex >= sessions.length) {
            this.keyboardTarget.rowIndex = sessions.length - 1;
          } else if (this.keyboardTarget.rowIndex == null || this.keyboardTarget.rowIndex < 0) {
            this.keyboardTarget.rowIndex = 0;
          }
        };
        SessionManagerModal2.prototype.blurFocusedControl = function() {
          var activeEl = document.activeElement;
          if (activeEl && this.contentEl.contains(activeEl) && activeEl.blur) {
            activeEl.blur();
          }
        };
        SessionManagerModal2.prototype.renderList = function() {
          var L = i18n2.L;
          this.listEl.empty();
          var cardLayout = true;
          this.listEl.toggleClass("wpp-session-list--cards", cardLayout);
          this.listEl.toggleClass("wpp-session-list--archive", this.panelMode === "archive");
          var sessions = this.getVisibleSessions();
          if (this.panelMode === "archive") {
            for (var ai = 0; ai < sessions.length; ai++) {
              this.renderArchivedItem(sessions[ai], ai);
            }
            if (sessions.length === 0) {
              this.listEl.createDiv({ text: L.archiveEmpty, cls: "wpp-empty-state" });
            }
            this.updateFocusUI();
            this.updateSelectionUI();
            this.updateArchiveBadge();
            return;
          }
          var selectedGroupId = this.getModalGroupId();
          var ordered = this.plugin.getOrderedSessionsForGroup(selectedGroupId);
          var orderIndex = {};
          for (var oi = 0; oi < ordered.length; oi++) {
            orderIndex[ordered[oi].id] = oi;
          }
          for (var i = 0; i < sessions.length; i++) {
            this.renderSessionItem(sessions[i], i, orderIndex[sessions[i].id]);
          }
          if (sessions.length === 0) {
            var isGroupEmpty = !!selectedGroupId && ordered.length === 0;
            var emptyMsg = isGroupEmpty ? L.noGroupSessions : L.noFilteredSessions;
            var emptyEl = this.listEl.createDiv({ text: emptyMsg, cls: "wpp-empty-state" });
            if (isGroupEmpty) emptyEl.addClass("wpp-empty-state-group");
          } else {
            this.setupDragAndDrop();
          }
          this.normalizeKeyboardTargetAfterRender(sessions);
          var validIds = {};
          sessions.forEach(function(s) {
            validIds[s.id] = true;
          });
          var self = this;
          this.selectedIds.forEach(function(id) {
            if (!validIds[id]) self.selectedIds.delete(id);
          });
          this.updateFocusUI();
          this.updateSelectionUI();
          this.updateArchiveBadge();
        };
        SessionManagerModal2.prototype.renderSessionItem = function(session, index, orderIndex) {
          var L = i18n2.L;
          var isActive = session.id === this.plugin.data.activeSessionId;
          var isOpening = this.openingSessionId === session.id;
          var cardLayout = true;
          var self = this;
          var item = this.listEl.createDiv({ cls: "wpp-session-item" });
          item.dataset.sessionId = session.id;
          item.setAttribute("tabindex", "-1");
          item.setAttribute("data-action-key", "load");
          if (isActive) item.addClass("is-active");
          if (isOpening) item.addClass("is-opening");
          if (cardLayout) item.addClass("wpp-session-item--card");
          var dragHandle = item.createDiv({
            cls: "wpp-session-item-drag",
            attr: { "aria-label": L.footerDragReorder }
          });
          obsidian2.setIcon(dragHandle, "move");
          dragHandle.addEventListener("click", function(e) {
            e.stopPropagation();
          });
          if (isOpening) {
            var loadingBadge = item.createSpan({
              cls: "wpp-session-badge wpp-session-badge--loading"
            });
            loadingBadge.createSpan({ cls: "wpp-session-badge-spinner" });
          } else if (isActive && cardLayout) {
            var activeBadge = item.createSpan({
              cls: "wpp-session-badge wpp-session-badge--active"
            });
            obsidian2.setIcon(activeBadge, "check");
          }
          item.addEventListener("click", function(e) {
            self.setKeyboardTarget({ zone: "session-action", rowIndex: index, actionKey: "load" });
            if (e.target.closest("button, .wpp-icon-btn, .wpp-session-item-drag")) return;
            self.blurFocusedControl();
            var cmdKey = utils.isModPressed(e);
            if (cmdKey) {
              if (self.selectedIds.has(session.id)) {
                self.selectedIds.delete(session.id);
              } else {
                self.selectedIds.add(session.id);
              }
              self.updateSelectionUI();
            } else if (!isActive && !isOpening) {
              self.selectedIds.clear();
              self.updateSelectionUI();
              self.onLoad(session.id);
            } else if (!cmdKey) {
              self.selectedIds.clear();
              self.updateSelectionUI();
            }
          });
          item.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            var selectedGroupId = self.getModalGroupId();
            sessionContextActions.openSessionContextMenu({
              plugin: self.plugin,
              app: self.app,
              session,
              isActive,
              event: e,
              showSwitch: true,
              showRemoveFromGroup: !!selectedGroupId && selectedGroupId !== "__ungrouped__",
              getViewGroupId: function() {
                return self.getModalGroupId();
              },
              onSwitch: function() {
                self.onLoad(session.id);
              },
              showMoveToGroup: self.plugin.isGroupFeatureEnabled() && self.plugin.getOrderedGroups().length > 0,
              forceDeleteConfirm: true,
              onGroupsChanged: function() {
                self.renderGroupTabs();
              },
              onSessionsChanged: function() {
                self.renderList();
              }
            });
          });
          var hintIndex = typeof orderIndex === "number" ? orderIndex : index;
          item.createSpan({ text: String(hintIndex + 1), cls: "wpp-session-index" });
          var info = item.createDiv({ cls: "wpp-session-info" });
          var nameRow = info.createDiv({ cls: "wpp-session-name-row" });
          nameRow.createSpan({ text: session.name, cls: "wpp-session-name" });
          if (session.isDefault && session.name !== this.plugin.getDefaultSessionName()) {
            nameRow.createSpan({ text: L.defaultLabel, cls: "wpp-default-label" });
          }
          if (session.note && String(session.note).trim()) {
            info.createDiv({ text: session.note, cls: "wpp-session-note" });
          }
          var footer = item.createDiv({ cls: "wpp-session-item-footer" });
          var footLeft = footer.createDiv({ cls: "wpp-session-item-footer-left" });
          footLeft.createDiv({ text: formatRelativeTime(session.modified), cls: "wpp-session-modified" });
          var actions = footer.createDiv({ cls: "wpp-session-actions" });
          if (isActive && !self.plugin.isAutoSaveOnSwitchEnabled()) {
            var saveCurrentBtn = actions.createDiv({
              cls: "wpp-icon-btn",
              attr: { role: "button", tabindex: "-1", "data-action-key": "save-inline" }
            });
            obsidian2.setIcon(saveCurrentBtn, "hard-drive");
            obsidian2.setTooltip(saveCurrentBtn, L.saveInline, { delay: 250 });
            saveCurrentBtn.addEventListener("click", function(e) {
              e.stopPropagation();
              self.plugin.saveActiveSession().then(function() {
                self.renderList();
              });
            });
          }
          if (self.plugin.isVersionHistoryEnabled()) {
            var manualSaveBtn = actions.createDiv({
              cls: "wpp-icon-btn",
              attr: { role: "button", tabindex: "-1", "data-action-key": "manual-save" }
            });
            obsidian2.setIcon(manualSaveBtn, "save");
            obsidian2.setTooltip(manualSaveBtn, L.historyManualSave, { delay: 250 });
            manualSaveBtn.addEventListener("click", function(e) {
              e.stopPropagation();
              self.onManualSave(session);
            });
            var historyBtn = actions.createDiv({
              cls: "wpp-icon-btn",
              attr: { role: "button", tabindex: "-1", "data-action-key": "history" }
            });
            obsidian2.setIcon(historyBtn, "history");
            obsidian2.setTooltip(historyBtn, L.contextVersionHistory, { delay: 250 });
            historyBtn.addEventListener("click", function(e) {
              e.stopPropagation();
              new HistoryModal(self.app, self.plugin, session).open();
            });
          }
          var renameBtn = actions.createDiv({
            cls: "wpp-icon-btn",
            attr: { role: "button", tabindex: "-1", "data-action-key": "rename" }
          });
          obsidian2.setIcon(renameBtn, "pen-line");
          obsidian2.setTooltip(renameBtn, L.editSessionTitle || L.rename, { delay: 250 });
          renameBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            self.onRename(session);
          });
          var duplicateBtn = actions.createDiv({
            cls: "wpp-icon-btn",
            attr: { role: "button", tabindex: "-1", "data-action-key": "duplicate" }
          });
          obsidian2.setIcon(duplicateBtn, "copy");
          obsidian2.setTooltip(duplicateBtn, L.contextDuplicateSession, { delay: 250 });
          duplicateBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            self.onDuplicate(session);
          });
          if (Object.keys(self.plugin.data.sessions).length > 1) {
            var deleteBtn = actions.createDiv({
              cls: "wpp-icon-btn",
              attr: { role: "button", tabindex: "-1", "data-action-key": "delete" }
            });
            obsidian2.setIcon(deleteBtn, "trash-2");
            obsidian2.setTooltip(deleteBtn, L.delete, { delay: 250 });
            deleteBtn.addEventListener("click", function(e) {
              e.stopPropagation();
              self.onDelete(session);
            });
          }
        };
        SessionManagerModal2.prototype.getSessionItemIndexAtPoint = function(x, y) {
          var items = this.listEl.querySelectorAll(".wpp-session-item");
          for (var i = 0; i < items.length; i++) {
            var rect = items[i].getBoundingClientRect();
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
              return i;
            }
          }
          return -1;
        };
        SessionManagerModal2.prototype.setupDragAndDrop = function() {
          var self = this;
          if ((this.filterQuery || "").trim()) return;
          this.listEl.querySelectorAll(".wpp-session-item-drag").forEach(function(handle) {
            var item = handle.closest(".wpp-session-item");
            if (!item) return;
            handle.addEventListener("mousedown", function(e) {
              if (e.button !== 0) return;
              if (utils.isModPressed(e)) return;
              e.preventDefault();
              e.stopPropagation();
              var startX = e.clientX;
              var startY = e.clientY;
              var dragStarted = false;
              var draggedEl = item;
              var cloneEl = null;
              var items = Array.prototype.slice.call(self.listEl.querySelectorAll(".wpp-session-item"));
              var fromIndex = items.indexOf(item);
              if (fromIndex < 0) return;
              function clearSessionDropTargets() {
                items.forEach(function(el) {
                  el.classList.remove("is-drop-target");
                });
              }
              function startDrag(ev) {
                dragStarted = true;
                document.body.classList.add("wpp-session-list-dragging");
                var rect = item.getBoundingClientRect();
                var offsetX = startX - rect.left;
                var offsetY = startY - rect.top;
                cloneEl = item.cloneNode(true);
                cloneEl.classList.remove("is-dragging", "is-drop-target", "wpp-just-moved");
                cloneEl.classList.add("wpp-drag-clone");
                cloneEl.style.position = "fixed";
                cloneEl.style.width = rect.width + "px";
                cloneEl.style.height = rect.height + "px";
                cloneEl.style.top = ev.clientY - offsetY + "px";
                cloneEl.style.left = ev.clientX - offsetX + "px";
                cloneEl.style.zIndex = "10050";
                cloneEl.style.pointerEvents = "none";
                document.body.appendChild(cloneEl);
                cloneEl._offsetX = offsetX;
                cloneEl._offsetY = offsetY;
                item.classList.add("is-dragging");
              }
              function updateGroupDropTarget(ev) {
                var tabs = self.groupTabsRow.querySelectorAll(".wpp-group-tab");
                var hoveredTab = null;
                for (var t = 0; t < tabs.length; t++) {
                  var tr = tabs[t].getBoundingClientRect();
                  if (ev.clientX >= tr.left && ev.clientX <= tr.right && ev.clientY >= tr.top && ev.clientY <= tr.bottom) {
                    hoveredTab = tabs[t];
                    break;
                  }
                }
                for (var t2 = 0; t2 < tabs.length; t2++) {
                  tabs[t2].classList.toggle("wpp-group-drop-target", tabs[t2] === hoveredTab);
                }
                return hoveredTab;
              }
              function clearGroupDropTargets() {
                var tabs = self.groupTabsRow.querySelectorAll(".wpp-group-tab");
                for (var t = 0; t < tabs.length; t++) {
                  tabs[t].classList.remove("wpp-group-drop-target");
                }
              }
              function onMouseMove(ev) {
                if (!dragStarted) {
                  if (Math.abs(ev.clientX - startX) + Math.abs(ev.clientY - startY) < 5) return;
                  startDrag(ev);
                }
                if (!cloneEl) return;
                cloneEl.style.top = ev.clientY - cloneEl._offsetY + "px";
                cloneEl.style.left = ev.clientX - cloneEl._offsetX + "px";
                var hoverTab = updateGroupDropTarget(ev);
                if (hoverTab) {
                  clearSessionDropTargets();
                  return;
                }
                var overIndex = self.getSessionItemIndexAtPoint(ev.clientX, ev.clientY);
                items.forEach(function(el, i) {
                  el.classList.toggle("is-drop-target", overIndex === i && i !== fromIndex);
                });
              }
              function onMouseUp(ev) {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
                document.body.classList.remove("wpp-session-list-dragging");
                var dropTab = dragStarted ? updateGroupDropTarget(ev) : null;
                clearGroupDropTargets();
                clearSessionDropTargets();
                if (cloneEl) {
                  cloneEl.remove();
                  cloneEl = null;
                }
                draggedEl.classList.remove("is-dragging");
                if (!dragStarted) return;
                if (dropTab && dropTab.dataset.groupId === "__ungrouped__") {
                  var ungroupSessionId = draggedEl.dataset.sessionId;
                  var ungroupSessionName = (self.plugin.data.sessions[ungroupSessionId] || {}).name || "";
                  self.plugin.clearSessionGroupMembership(ungroupSessionId).then(function(changed) {
                    if (changed) {
                      new obsidian2.Notice(
                        i18n2.L.groupMovedToDefault ? i18n2.L.groupMovedToDefault(ungroupSessionName) : 'Moved "' + ungroupSessionName + '" to Default'
                      );
                    }
                    self.renderGroupTabs();
                    self.renderList();
                  });
                  return;
                }
                if (dropTab && dropTab.dataset.groupId && dropTab.dataset.groupId !== "__all__" && dropTab.dataset.groupId !== "__ungrouped__") {
                  var sessionId = draggedEl.dataset.sessionId;
                  var groupId = dropTab.dataset.groupId;
                  var sessionName = (self.plugin.data.sessions[sessionId] || {}).name || "";
                  var groupName = (self.plugin.data.groups[groupId] || {}).name || "";
                  self.plugin.moveSessionToGroupExclusive(sessionId, groupId).then(function() {
                    new obsidian2.Notice(i18n2.L.groupAddedSession(sessionName, groupName));
                    self.renderGroupTabs();
                    self.renderList();
                  });
                  return;
                } else {
                  var currentGroupId = self.getModalGroupId();
                  if (dropTab && dropTab.dataset.groupId === "__all__" && currentGroupId && currentGroupId !== "__ungrouped__") {
                    var rmSessionId = draggedEl.dataset.sessionId;
                    var rmGroupId = currentGroupId;
                    var rmSessionName = (self.plugin.data.sessions[rmSessionId] || {}).name || "";
                    var rmGroupName = (self.plugin.data.groups[rmGroupId] || {}).name || "";
                    self.plugin.removeSessionFromGroup(rmSessionId, rmGroupId).then(function() {
                      new obsidian2.Notice(i18n2.L.groupRemovedSession(rmSessionName, rmGroupName));
                      self.renderGroupTabs();
                      self.renderList();
                    });
                    return;
                  }
                }
                var toIndex = self.getSessionItemIndexAtPoint(ev.clientX, ev.clientY);
                if (toIndex < 0 || toIndex === fromIndex) return;
                var orderItems = Array.prototype.slice.call(self.listEl.querySelectorAll(".wpp-session-item"));
                var moved = orderItems[fromIndex];
                if (!moved) return;
                orderItems.splice(fromIndex, 1);
                orderItems.splice(toIndex, 0, moved);
                orderItems.forEach(function(el) {
                  self.listEl.appendChild(el);
                });
                var newVisibleOrder = [];
                orderItems.forEach(function(el, i) {
                  newVisibleOrder.push(el.dataset.sessionId);
                  var indexEl = el.querySelector(".wpp-session-index");
                  if (indexEl) {
                    indexEl.textContent = String(i + 1);
                  }
                });
                moved.classList.add("wpp-just-moved");
                setTimeout(function() {
                  moved.classList.remove("wpp-just-moved");
                }, 600);
                self.plugin.setSessionOrderFromVisible(newVisibleOrder, { syncCommands: false });
              }
              document.addEventListener("mousemove", onMouseMove);
              document.addEventListener("mouseup", onMouseUp);
            });
          });
        };
        SessionManagerModal2.prototype.onSave = function() {
          var L = i18n2.L;
          var self = this;
          var selectedGroupId = this.getModalGroupId();
          this.plugin.createSessionForViewedGroup(this.nameInput.value, selectedGroupId).then(function(result) {
            if (!result || !result.created) return;
            var createdName = result.name;
            self.modalGroupId = result.viewGroupId || null;
            self.persistPanelState();
            self.nameInput.value = "";
            self.renderGroupTabs();
            self.renderList();
            new obsidian2.Notice(L.created(createdName));
          });
        };
        SessionManagerModal2.prototype.onLoad = function(sessionId) {
          if (sessionId === this.plugin.data.activeSessionId) return;
          if (this.openingSessionId === sessionId) return;
          var self = this;
          this.openingSessionId = sessionId;
          this.renderList();
          this.plugin.switchSession(sessionId).then(function() {
            self.openingSessionId = null;
            self.renderList();
          }).catch(function() {
            self.openingSessionId = null;
            self.renderList();
          });
        };
        SessionManagerModal2.prototype.renderArchivedItem = function(session, index) {
          var L = i18n2.L;
          var self = this;
          var item = this.listEl.createDiv({ cls: "wpp-session-item wpp-session-item--card wpp-session-item--archived" });
          item.dataset.sessionId = session.id;
          var info = item.createDiv({ cls: "wpp-session-info" });
          info.createDiv({ cls: "wpp-session-name-row" }).createSpan({ text: session.name, cls: "wpp-session-name" });
          if (session.note && String(session.note).trim()) {
            info.createDiv({ text: session.note, cls: "wpp-session-note" });
          }
          var footer = item.createDiv({ cls: "wpp-session-item-footer" });
          var footLeft = footer.createDiv({ cls: "wpp-session-item-footer-left" });
          footLeft.createDiv({ text: formatRelativeTime(session.modified), cls: "wpp-session-modified" });
          var actions = footer.createDiv({ cls: "wpp-session-actions" });
          var restoreBtn = actions.createDiv({
            cls: "wpp-icon-btn",
            attr: { role: "button", tabindex: "-1", "data-action-key": "restore" }
          });
          obsidian2.setIcon(restoreBtn, "rotate-ccw");
          obsidian2.setTooltip(restoreBtn, L.restoreFromArchive, { delay: 250 });
          restoreBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            self.plugin.restoreArchivedSession(session.id).then(function(ok) {
              if (ok) {
                new obsidian2.Notice(L.restoredFromArchive(session.name));
                self.renderList();
                self.updateArchiveBadge();
              }
            });
          });
          var deleteBtn = actions.createDiv({
            cls: "wpp-icon-btn",
            attr: { role: "button", tabindex: "-1", "data-action-key": "delete" }
          });
          obsidian2.setIcon(deleteBtn, "trash");
          obsidian2.setTooltip(deleteBtn, L.deletePermanently, { delay: 250 });
          deleteBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            new ConfirmModal(self.app, L.confirmDeleteArchived(session.name), function() {
              return self.plugin.permanentlyDeleteArchivedSession(session.id).then(function(ok) {
                if (ok) {
                  new obsidian2.Notice(L.deleted(session.name));
                  self.renderList();
                  self.updateArchiveBadge();
                }
              });
            }).open();
          });
        };
        SessionManagerModal2.prototype.onRename = function(session) {
          var self = this;
          sessionListActions.renameSessionWithPrompt({
            app: this.app,
            plugin: this.plugin,
            session,
            onRenamed: function() {
              self.renderList();
            }
          });
        };
        SessionManagerModal2.prototype.onDuplicate = function(session) {
          var self = this;
          this.plugin.duplicateSession(session.id).then(function() {
            self.renderList();
          });
        };
        SessionManagerModal2.prototype.onManualSave = function(session) {
          var L = i18n2.L;
          var self = this;
          new HistoryEntryModal(this.app, {
            mode: "create",
            title: L.historyManualSaveTitle,
            placeholder: L.historyEntryTitlePlaceholder,
            buttonText: L.historyManualSave,
            emptyNotice: L.historyTitleRequired,
            onSubmit: function(title) {
              self.plugin.saveManualHistoryEntry(session.id, title).then(function(ok) {
                if (ok) self.renderList();
              });
            }
          }).open();
        };
        SessionManagerModal2.prototype.onDelete = function(session) {
          var L = i18n2.L;
          var self = this;
          var isActive = session.id === this.plugin.data.activeSessionId;
          var message = isActive ? L.confirmDeleteActive(session.name) : L.confirmDelete(session.name);
          return sessionListActions.deleteSessionWithPrompt({
            app: this.app,
            plugin: this.plugin,
            session,
            isActive,
            confirmMessage: message,
            forceConfirm: true,
            onDeleted: function() {
              self.renderList();
            }
          });
        };
        SessionManagerModal2.prototype.updateFocusUI = function() {
          var self = this;
          var items = this.listEl.querySelectorAll(".wpp-session-item");
          var focusedIndex = -1;
          if (this.keyboardTarget && this.keyboardTarget.zone === "session-action") {
            focusedIndex = typeof this.keyboardTarget.rowIndex === "number" ? this.keyboardTarget.rowIndex : -1;
          }
          this.focusedIndex = focusedIndex;
          items.forEach(function(el, i) {
            el.classList.toggle("wpp-focused", i === focusedIndex);
          });
          if (focusedIndex >= 0 && items[focusedIndex]) {
            items[focusedIndex].scrollIntoView({ block: "nearest" });
          }
        };
        SessionManagerModal2.prototype.updateSelectionUI = function() {
          var self = this;
          var items = this.listEl.querySelectorAll(".wpp-session-item");
          items.forEach(function(el) {
            el.classList.toggle("wpp-selected", self.selectedIds.has(el.dataset.sessionId));
          });
          this.updateBulkActions();
        };
        SessionManagerModal2.prototype.updateBulkActions = function() {
          var L = i18n2.L;
          if (this.selectedIds.size > 0) {
            this.bulkActionsEl.style.display = "";
            this.bulkDeleteBtn.textContent = L.bulkDelete(this.selectedIds.size);
          } else {
            this.bulkActionsEl.style.display = "none";
          }
        };
        SessionManagerModal2.prototype.onFocusedLoad = function() {
          var sessions = this.getNavigationSessions();
          var rowIndex = this.keyboardTarget && this.keyboardTarget.zone === "session-action" ? this.keyboardTarget.rowIndex : this.focusedIndex;
          if (rowIndex == null || rowIndex < 0 || rowIndex >= sessions.length) return;
          this.onLoad(sessions[rowIndex].id);
        };
        SessionManagerModal2.prototype.onBulkDelete = function() {
          var L = i18n2.L;
          var self = this;
          var ids = [];
          this.selectedIds.forEach(function(id) {
            ids.push(id);
          });
          var count = ids.length;
          new ConfirmModal(this.app, L.confirmBulkDelete(count), function() {
            var promises = ids.map(function(id) {
              return self.plugin.deleteSession(id);
            });
            return Promise.all(promises).then(function(results) {
              var deletedCount = results.filter(function(d) {
                return d;
              }).length;
              self.selectedIds.clear();
              self.renderList();
              if (deletedCount > 0) {
                new obsidian2.Notice(L.bulkDeleted(deletedCount));
              }
            });
          }).open();
        };
        SessionManagerModal2.prototype.renderGroupTabs = function() {
          var L = i18n2.L;
          var self = this;
          var el = this.groupTabsRow;
          while (el.firstChild) el.removeChild(el.firstChild);
          if (!this.plugin.isGroupFeatureEnabled()) {
            el.style.display = "none";
            return;
          }
          el.style.display = "";
          var groups = this.plugin.data.groups || {};
          var selectedGroupId = this.getModalGroupId();
          var groupOrder = this.plugin.getOrderedGroupTabIds();
          groupTabUi.renderGroupTabs({
            app: this.app,
            plugin: this.plugin,
            containerEl: el,
            groups,
            groupOrder,
            selectedGroupId,
            onSelectGroup: function(groupId) {
              self.selectGroup(groupId);
            },
            onResetViewGroup: function() {
              self.modalGroupId = null;
              self.persistPanelState();
            },
            onDeleteGroup: function(deletedGroupId) {
              if (self.modalGroupId === deletedGroupId) {
                self.modalGroupId = null;
                self.persistPanelState();
              }
            },
            onGroupsChanged: function() {
              self.renderGroupTabs();
            },
            onSessionsChanged: function() {
              self.renderList();
            },
            onGroupOrderCommit: function(newOrder) {
              self.plugin.setGroupTabOrder(newOrder);
            },
            addButtonTooltip: L.groupCreateNew,
            onAddGroupClick: function() {
              groupTabUi.openCreateGroupPrompt(self.app, self.plugin, function() {
                self.renderGroupTabs();
              });
            },
            locateButtonTooltip: L.locateCurrentSession,
            onLocateCurrentClick: function() {
              self.locateCurrentSession();
            }
          });
        };
        SessionManagerModal2.prototype.onClose = function() {
          this.persistPanelState();
          document.body.classList.remove("wpp-session-list-dragging");
          if (this.modalKeyHandler) {
            document.removeEventListener("keydown", this.modalKeyHandler, true);
            this.modalKeyHandler = null;
          }
          if (this.contentFocusHandler) {
            this.contentEl.removeEventListener("focusin", this.contentFocusHandler, true);
            this.contentFocusHandler = null;
          }
          this.contentEl.empty();
        };
        return SessionManagerModal2;
      }(obsidian2.Modal)
    );
    module2.exports = SessionManagerModal;
  }
});

// src/modals/unsaved-switch-modal.js
var require_unsaved_switch_modal = __commonJS({
  "src/modals/unsaved-switch-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var UnsavedSwitchModal = (
      /** @class */
      function(_super) {
        function UnsavedSwitchModal2(app, message, onSaveAndSwitch, onSwitchWithoutSaving, onCancel) {
          var _this = _super.call(this, app) || this;
          _this.message = message;
          _this.onSaveAndSwitch = onSaveAndSwitch;
          _this.onSwitchWithoutSaving = onSwitchWithoutSaving;
          _this.onCancel = onCancel || function() {
          };
          _this.didResolve = false;
          return _this;
        }
        UnsavedSwitchModal2.prototype = Object.create(_super.prototype);
        UnsavedSwitchModal2.prototype.constructor = UnsavedSwitchModal2;
        UnsavedSwitchModal2.prototype.onOpen = function() {
          var L = i18n2.L;
          this.containerEl.style.zIndex = "10001";
          var contentEl = this.contentEl;
          contentEl.createEl("p", { text: this.message });
          var btns = contentEl.createDiv({ cls: "wpp-confirm-buttons" });
          var self = this;
          function finish(callback) {
            if (self.didResolve) return;
            self.didResolve = true;
            if (callback) callback();
          }
          var cancelBtn = btns.createEl("button", { text: L.cancel });
          cancelBtn.addEventListener("click", function() {
            finish(self.onCancel);
            self.close();
          });
          var saveAndSwitchBtn = btns.createEl("button", { text: L.saveAndSwitch, cls: "mod-cta" });
          saveAndSwitchBtn.addEventListener("click", function() {
            finish(self.onSaveAndSwitch);
            self.close();
          });
          var switchWithoutSavingBtn = btns.createEl("button", {
            text: L.switchWithoutSaving,
            cls: "mod-warning"
          });
          switchWithoutSavingBtn.addEventListener("click", function() {
            finish(self.onSwitchWithoutSaving);
            self.close();
          });
          this.buttons = [cancelBtn, saveAndSwitchBtn, switchWithoutSavingBtn];
          this.focusedButtonIndex = 1;
          this.updateButtonFocus();
          this.keyHandler = function(e) {
            if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
              e.preventDefault();
              self.focusedButtonIndex = (self.focusedButtonIndex - 1 + self.buttons.length) % self.buttons.length;
              self.updateButtonFocus();
              return;
            }
            if (e.key === "ArrowRight" || e.key === "ArrowDown") {
              e.preventDefault();
              self.focusedButtonIndex = (self.focusedButtonIndex + 1) % self.buttons.length;
              self.updateButtonFocus();
              return;
            }
            if (e.key === "Enter") {
              e.preventDefault();
              var btn = self.buttons[self.focusedButtonIndex];
              if (btn) btn.click();
              return;
            }
            if (e.key === "Escape") {
              e.preventDefault();
              e.stopImmediatePropagation();
              finish(self.onCancel);
              self.close();
            }
          };
          document.addEventListener("keydown", this.keyHandler, true);
        };
        UnsavedSwitchModal2.prototype.updateButtonFocus = function() {
          var self = this;
          this.buttons.forEach(function(btn, i) {
            btn.classList.toggle("wpp-btn-focused", i === self.focusedButtonIndex);
          });
        };
        UnsavedSwitchModal2.prototype.onClose = function() {
          if (this.keyHandler) {
            document.removeEventListener("keydown", this.keyHandler, true);
            this.keyHandler = null;
          }
          if (!this.didResolve) {
            this.didResolve = true;
            this.onCancel();
          }
          this.contentEl.empty();
        };
        return UnsavedSwitchModal2;
      }(obsidian2.Modal)
    );
    module2.exports = UnsavedSwitchModal;
  }
});

// src/modals/tab-switcher-modal.js
var require_tab_switcher_modal = __commonJS({
  "src/modals/tab-switcher-modal.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    function isWorkspaceLeaf(node) {
      return !!(node && typeof node.getViewState === "function" && node.view);
    }
    function getActiveLeaf(app) {
      var active = app.workspace.activeLeaf;
      if (!active && typeof app.workspace.getMostRecentLeaf === "function") {
        active = app.workspace.getMostRecentLeaf();
      }
      return active || null;
    }
    function getLeafDocument(leaf) {
      try {
        var el = leaf && leaf.containerEl || leaf && leaf.view && leaf.view.containerEl;
        if (el && el.ownerDocument) return el.ownerDocument;
      } catch (err) {
      }
      return typeof activeDocument !== "undefined" && activeDocument || document;
    }
    function getDoc(leaf) {
      if (leaf) return getLeafDocument(leaf);
      return typeof activeDocument !== "undefined" && activeDocument || document;
    }
    function getTabGroup(leaf) {
      var node = leaf && leaf.parent;
      var depth = 0;
      while (node && depth < 6) {
        if (Array.isArray(node.children) && (typeof node.selectTab === "function" || typeof node.selectTabIndex === "function" || node.type === "tabs")) {
          return node;
        }
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
      return leaf && leaf.parent || null;
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
      if (!leaf) return "";
      if (typeof leaf.getDisplayText === "function") {
        var text = leaf.getDisplayText();
        if (text) return text;
      }
      if (leaf.view && typeof leaf.view.getDisplayText === "function") {
        var viewText = leaf.view.getDisplayText();
        if (viewText) return viewText;
      }
      return leaf.view && leaf.view.getViewType && leaf.view.getViewType() || "Tab";
    }
    function getLeafIcon(leaf) {
      if (leaf && leaf.view && typeof leaf.view.getIcon === "function") {
        var icon = leaf.view.getIcon();
        if (icon) return icon;
      }
      return "file-text";
    }
    function getLeafPreviewText(leaf) {
      var view = leaf && leaf.view;
      if (!view) return "";
      try {
        if (view.editor && typeof view.editor.getValue === "function") {
          return String(view.editor.getValue() || "").trim();
        }
        if (typeof view.data === "string") {
          return view.data.trim();
        }
        if (view.file && view.file.path) {
          return view.file.path;
        }
      } catch (err) {
      }
      return "";
    }
    function getCloneSourceEl(leaf) {
      var root = leaf && leaf.view && leaf.view.containerEl || leaf && leaf.containerEl;
      if (!root) return null;
      return root.querySelector(".view-content") || root.querySelector(".workspace-leaf-content") || root;
    }
    function sanitizeClone(clone) {
      if (!clone) return clone;
      try {
        clone.removeAttribute("id");
        if (clone.style) {
          clone.style.removeProperty("position");
          clone.style.removeProperty("top");
          clone.style.removeProperty("left");
          clone.style.removeProperty("right");
          clone.style.removeProperty("bottom");
          clone.style.removeProperty("width");
          clone.style.removeProperty("height");
          clone.style.removeProperty("inset");
          clone.style.removeProperty("transform");
        }
        var withIds = clone.querySelectorAll("[id]");
        for (var i = 0; i < withIds.length; i++) {
          withIds[i].removeAttribute("id");
        }
        var editables = clone.querySelectorAll("[contenteditable]");
        for (var j = 0; j < editables.length; j++) {
          editables[j].setAttribute("contenteditable", "false");
          editables[j].setAttribute("tabindex", "-1");
        }
        var media = clone.querySelectorAll("video, audio");
        for (var m = 0; m < media.length; m++) {
          try {
            media[m].pause && media[m].pause();
          } catch (e) {
          }
          media[m].removeAttribute("autoplay");
        }
      } catch (err) {
      }
      return clone;
    }
    function cloneLooksEmpty(clone) {
      if (!clone) return true;
      var text = String(clone.textContent || "").replace(/\s+/g, " ").trim();
      if (text.length >= 8) return false;
      if (clone.querySelector("img, canvas, iframe, video")) return false;
      var preview = clone.querySelector(".markdown-preview-view, .markdown-rendered");
      if (preview && String(preview.textContent || "").replace(/\s+/g, " ").trim().length >= 2) {
        return false;
      }
      var cmContent = clone.querySelector(".cm-content");
      if (cmContent && String(cmContent.textContent || "").replace(/\s+/g, " ").trim().length >= 2) {
        return false;
      }
      return true;
    }
    function cloneLooksLikeSourceCode(clone) {
      if (!clone) return true;
      if (clone.querySelector(
        ".canvas-wrapper, .canvas-node, .excalidraw, .excalidraw-wrapper, .layer-ui__wrapper, canvas"
      )) {
        return false;
      }
      var text = String(clone.textContent || "").replace(/\s+/g, " ").trim();
      if (!text) return false;
      if (text.charAt(0) === "{" && (text.indexOf('"nodes"') >= 0 || text.indexOf('"elements"') >= 0 || text.indexOf('"type"') >= 0 || text.indexOf("excalidraw") >= 0)) {
        return true;
      }
      if (clone.querySelector(".cm-editor, .cm-content, .markdown-source-view, .mod-cm6")) {
        if (text.charAt(0) === "{" || text.indexOf('"elements"') >= 0 || text.indexOf('"nodes"') >= 0) {
          return true;
        }
      }
      return false;
    }
    function getLeafViewType(leaf) {
      try {
        if (leaf && leaf.view && typeof leaf.view.getViewType === "function") {
          var type = leaf.view.getViewType();
          if (type) return type;
        }
        var vs = leaf && typeof leaf.getViewState === "function" ? leaf.getViewState() : null;
        if (vs && typeof vs.type === "string") return vs.type;
      } catch (err) {
      }
      return "";
    }
    function isCanvasFile(file) {
      return !!(file && file.extension === "canvas");
    }
    function isExcalidrawFile(app, file) {
      if (!file) return false;
      if (file.extension === "excalidraw") return true;
      var name = file.name || "";
      if (/\.excalidraw\.md$/i.test(name)) return true;
      if (file.extension !== "md") return false;
      try {
        var cache = app && app.metadataCache && app.metadataCache.getFileCache(file);
        var fm = cache && cache.frontmatter;
        if (fm && (fm["excalidraw-plugin"] != null || fm.excalidraw != null)) return true;
      } catch (err) {
      }
      return false;
    }
    function isAppDarkTheme() {
      try {
        var doc = typeof activeDocument !== "undefined" && activeDocument || document;
        return !!(doc && doc.body && doc.body.classList.contains("theme-dark"));
      } catch (err) {
        return false;
      }
    }
    function getExcalidrawExportPath(filePath, exportType) {
      if (!filePath || !exportType) return "";
      var lastDot = filePath.lastIndexOf(".");
      if (lastDot < 0) return filePath + "." + exportType;
      return filePath.substring(0, lastDot) + "." + exportType;
    }
    function findExcalidrawExportFile(app, file) {
      if (!app || !app.vault || !file || !file.path) return null;
      var preferDark = isAppDarkTheme();
      var types = preferDark ? ["dark.svg", "dark.png", "svg", "png", "light.svg", "light.png"] : ["light.svg", "light.png", "svg", "png", "dark.svg", "dark.png"];
      for (var i = 0; i < types.length; i++) {
        var path = getExcalidrawExportPath(file.path, types[i]);
        if (!path) continue;
        try {
          var af = app.vault.getAbstractFileByPath(path);
          if (isTFile(af)) return af;
        } catch (err) {
        }
      }
      return null;
    }
    function fillStaticImagePreview(host, src) {
      if (!host || !src) return false;
      host.empty();
      var wrap = host.createDiv({ cls: "wpp-tab-switcher-clone wpp-tab-switcher-static-preview" });
      wrap.createEl("img", {
        attr: {
          src,
          alt: "",
          draggable: "false"
        }
      });
      return true;
    }
    function captureLeafCanvasPreview(leaf) {
      var source = getCloneSourceEl(leaf);
      if (!source || typeof source.querySelectorAll !== "function") return null;
      var canvases = source.querySelectorAll("canvas");
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
        return best.toDataURL("image/jpeg", 0.55);
      } catch (err) {
        try {
          return best.toDataURL("image/png");
        } catch (err2) {
          return null;
        }
      }
    }
    function buildLeafViewClone(leaf, options) {
      var source = getCloneSourceEl(leaf);
      if (!source) return null;
      try {
        var clone = source.cloneNode(true);
        sanitizeClone(clone);
        clone.classList.add("wpp-tab-switcher-clone");
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
        "canvas, .canvas-wrapper, .canvas-node, .excalidraw, .excalidraw-wrapper, .layer-ui__wrapper"
      );
    }
    function waitForVisualPreview(leaf, maxAttempts) {
      var attempts = Math.max(1, maxAttempts || 10);
      return new Promise(function(resolve) {
        function tick() {
          if (leafHasVisualPreview(leaf) || attempts <= 1) {
            resolve();
            return;
          }
          attempts -= 1;
          if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(function() {
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
      return !!(file && typeof file.path === "string" && typeof file.extension === "string" && !file.children);
    }
    function getLeafFile(app, leaf) {
      if (!app || !leaf) return null;
      if (leaf.view && isTFile(leaf.view.file)) return leaf.view.file;
      try {
        if (leaf.view && typeof leaf.view.getState === "function") {
          var viewState = leaf.view.getState();
          if (viewState && typeof viewState.file === "string") {
            var fromView = app.vault.getAbstractFileByPath(viewState.file);
            if (isTFile(fromView)) return fromView;
          }
        }
      } catch (err) {
      }
      try {
        var vs = typeof leaf.getViewState === "function" ? leaf.getViewState() : null;
        var path = vs && vs.state && (vs.state.file || vs.state.path);
        if (!path && vs && typeof vs.file === "string") path = vs.file;
        if (typeof path === "string") {
          var fromLeaf = app.vault.getAbstractFileByPath(path);
          if (isTFile(fromLeaf)) return fromLeaf;
        }
      } catch (err2) {
      }
      return null;
    }
    function waitFrames(count) {
      return new Promise(function(resolve) {
        var left = Math.max(1, count || 1);
        function step() {
          left -= 1;
          if (left <= 0) resolve();
          else requestAnimationFrame(step);
        }
        if (typeof requestAnimationFrame === "function") requestAnimationFrame(step);
        else setTimeout(resolve, 32);
      });
    }
    function ensureLeafLoaded(leaf) {
      if (!leaf) return Promise.resolve();
      try {
        if (typeof leaf.loadIfDeferred === "function") {
          return Promise.resolve(leaf.loadIfDeferred()).catch(function() {
          });
        }
      } catch (err) {
      }
      return Promise.resolve();
    }
    function fillIconOnly(host, leaf) {
      host.empty();
      var iconWrap = host.createDiv({ cls: "wpp-tab-switcher-preview-icon" });
      obsidian2.setIcon(iconWrap, getLeafIcon(leaf));
    }
    function fillTextOrIcon(host, leaf) {
      var previewText = getLeafPreviewText(leaf);
      if (previewText) {
        host.createEl("pre", {
          cls: "wpp-tab-switcher-preview-text",
          text: previewText.slice(0, 1200)
        });
        return;
      }
      fillIconOnly(host, leaf);
    }
    function renderMarkdownInto(app, plugin, host, file, markdown) {
      host.empty();
      host.addClass("wpp-tab-switcher-clone");
      host.addClass("wpp-tab-switcher-md-fallback");
      var renderer = obsidian2.MarkdownRenderer;
      if (!renderer) return Promise.resolve(false);
      var source = String(markdown || "").slice(0, 5e3);
      var path = file && file.path || "";
      if (typeof renderer.render === "function") {
        return Promise.resolve(renderer.render(app, source, host, path, plugin)).then(function() {
          return true;
        }).catch(function() {
          return false;
        });
      }
      if (typeof renderer.renderMarkdown === "function") {
        try {
          renderer.renderMarkdown(source, host, path, plugin);
          return Promise.resolve(true);
        } catch (err) {
          return Promise.resolve(false);
        }
      }
      return Promise.resolve(false);
    }
    function buildWikiEmbedMarkdown(file) {
      if (!file || typeof file.path !== "string" || !file.path) return "";
      var path = file.path.replace(/\|/g, "\\|");
      return "![[" + path + "]]";
    }
    function embedLooksReady(host) {
      if (!host) return false;
      return !!host.querySelector(
        ".internal-embed, .markdown-embed, .media-embed, .canvas-wrapper, .canvas-node, .excalidraw, .excalidraw-wrapper, .layer-ui__wrapper, canvas, img, iframe, svg"
      );
    }
    function waitForEmbedReady(host, maxAttempts) {
      var attempts = Math.max(1, maxAttempts || 16);
      return new Promise(function(resolve) {
        function tick() {
          if (embedLooksReady(host) || attempts <= 1) {
            resolve(embedLooksReady(host));
            return;
          }
          attempts -= 1;
          if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(function() {
              setTimeout(tick, 40);
            });
          } else {
            setTimeout(tick, 50);
          }
        }
        tick();
      });
    }
    function renderFileEmbedInto(app, plugin, host, file) {
      var md = buildWikiEmbedMarkdown(file);
      if (!md) return Promise.resolve(false);
      host.empty();
      host.addClass("wpp-tab-switcher-clone");
      host.addClass("wpp-tab-switcher-embed");
      var renderer = obsidian2.MarkdownRenderer;
      if (!renderer) return Promise.resolve(false);
      var path = file.path || "";
      var renderPromise;
      if (typeof renderer.render === "function") {
        renderPromise = Promise.resolve(renderer.render(app, md, host, path, plugin));
      } else if (typeof renderer.renderMarkdown === "function") {
        try {
          renderer.renderMarkdown(md, host, path, plugin);
          renderPromise = Promise.resolve();
        } catch (err) {
          return Promise.resolve(false);
        }
      } else {
        return Promise.resolve(false);
      }
      return renderPromise.then(function() {
        return waitForEmbedReady(host, 20);
      }).catch(function() {
        return false;
      });
    }
    function collectGroupLeaves(app) {
      var active = getActiveLeaf(app);
      if (!active) {
        return { group: null, leaves: [], active: null };
      }
      var group = getTabGroup(active);
      var leaves = collectLeavesFromGroup(group);
      if (leaves.length === 0) {
        leaves = [active];
      }
      return { group, leaves, active };
    }
    function isTabGroupNode(node) {
      return !!(node && Array.isArray(node.children) && (typeof node.selectTab === "function" || typeof node.selectTabIndex === "function" || node.type === "tabs"));
    }
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
        if (group && typeof group.currentTab === "number" && group.children) {
          var cur = group.children[group.currentTab];
          if (isWorkspaceLeaf(cur)) return cur;
        }
      } catch (err) {
      }
      return leaves[0] || null;
    }
    function isLeafPinned(leaf) {
      if (!leaf) return false;
      if (typeof leaf.pinned === "boolean") return leaf.pinned;
      try {
        var vs = typeof leaf.getViewState === "function" ? leaf.getViewState() : null;
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
      try {
        if (typeof parent.removeChild === "function" && typeof parent.insertChild === "function") {
          parent.removeChild(leaf);
          parent.insertChild(toIndex, leaf);
        } else {
          parent.children.splice(fromIndex, 1);
          parent.children.splice(toIndex, 0, leaf);
          if (typeof leaf.setParent === "function") leaf.setParent(parent);
          if (typeof parent.recomputeChildrenDimensions === "function") {
            parent.recomputeChildrenDimensions();
          }
        }
        if (typeof parent.selectTab === "function") parent.selectTab(leaf);
        else if (typeof parent.selectTabIndex === "function") parent.selectTabIndex(toIndex);
        return true;
      } catch (err) {
        try {
          var idx = parent.children.indexOf(leaf);
          if (idx >= 0) parent.children.splice(idx, 1);
          parent.children.splice(toIndex, 0, leaf);
          if (typeof parent.recomputeChildrenDimensions === "function") {
            parent.recomputeChildrenDimensions();
          }
          return true;
        } catch (err2) {
          return false;
        }
      }
    }
    function moveLeafToGroup(leaf, targetGroup, toIndex) {
      if (!leaf || !targetGroup || !Array.isArray(targetGroup.children)) return false;
      var sourceParent = leaf.parent;
      if (!sourceParent || sourceParent === targetGroup) return false;
      var insertAt = typeof toIndex === "number" ? toIndex : targetGroup.children.length;
      if (insertAt < 0) insertAt = 0;
      if (insertAt > targetGroup.children.length) insertAt = targetGroup.children.length;
      try {
        if (typeof sourceParent.removeChild === "function" && typeof targetGroup.insertChild === "function") {
          sourceParent.removeChild(leaf);
          targetGroup.insertChild(insertAt, leaf);
        } else {
          var fromIndex = sourceParent.children.indexOf(leaf);
          if (fromIndex < 0) return false;
          sourceParent.children.splice(fromIndex, 1);
          targetGroup.children.splice(insertAt, 0, leaf);
          if (typeof leaf.setParent === "function") leaf.setParent(targetGroup);
          if (typeof sourceParent.recomputeChildrenDimensions === "function") {
            sourceParent.recomputeChildrenDimensions();
          }
          if (typeof targetGroup.recomputeChildrenDimensions === "function") {
            targetGroup.recomputeChildrenDimensions();
          }
        }
        if (typeof targetGroup.selectTab === "function") targetGroup.selectTab(leaf);
        else if (typeof targetGroup.selectTabIndex === "function") {
          targetGroup.selectTabIndex(insertAt);
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    function requestWorkspaceLayoutPersist(app) {
      try {
        if (app && app.workspace && typeof app.workspace.requestSaveLayout === "function") {
          app.workspace.requestSaveLayout();
        }
        if (app && app.workspace && typeof app.workspace.requestResize === "function") {
          app.workspace.requestResize();
        }
      } catch (err) {
      }
    }
    function removeOverlayDom(doc) {
      if (!doc || !doc.body) return;
      var nodes = doc.body.querySelectorAll(
        ".wpp-tab-switcher-backdrop, .wpp-tab-switcher-panel, .wpp-tab-switcher-floating-hint, .wpp-tab-switcher-hint, .wpp-tab-switcher-toolbar, .wpp-tab-switcher-drag-clone"
      );
      for (var i = 0; i < nodes.length; i++) {
        try {
          nodes[i].remove();
        } catch (err) {
        }
      }
      try {
        doc.body.style.removeProperty("--wpp-mc-source-width");
        doc.body.style.removeProperty("--wpp-mc-source-height");
        doc.body.style.removeProperty("--wpp-mc-content-zoom");
        doc.body.style.removeProperty("--wpp-mc-zoom");
      } catch (err2) {
      }
      doc.body.removeClass("wpp-mission-control-open");
      doc.body.classList.remove("wpp-tab-switcher-dragging");
    }
    var TabSwitcherModal = (
      /** @class */
      function() {
        function TabSwitcherModal2(app, plugin) {
          this.app = app;
          this.plugin = plugin;
          this.leaves = [];
          this.group = null;
          this.groups = [];
          this.groupIndex = 0;
          this.cardEls = [];
          this.focusedIndex = 0;
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
        TabSwitcherModal2.prototype.enqueuePreview = function(task) {
          var self = this;
          var generation = this._previewGeneration;
          return new Promise(function(resolve) {
            self._previewQueue.push(function() {
              if (generation !== self._previewGeneration) {
                resolve();
                return;
              }
              return Promise.resolve().then(task).then(resolve, function() {
                resolve();
              });
            });
            self.pumpPreviewQueue();
          });
        };
        TabSwitcherModal2.prototype.pumpPreviewQueue = function() {
          var self = this;
          var concurrency = Math.max(1, this._previewConcurrency || 1);
          while (this._previewActive < concurrency && this._previewQueue.length > 0) {
            var job = this._previewQueue.shift();
            this._previewActive += 1;
            Promise.resolve().then(job).then(function() {
            }, function() {
            }).then(function() {
              self._previewActive = Math.max(0, self._previewActive - 1);
              self.pumpPreviewQueue();
            });
          }
        };
        TabSwitcherModal2.prototype.cancelPreviewQueue = function() {
          this._previewGeneration += 1;
          this._previewQueue = [];
          this._previewActive = 0;
        };
        TabSwitcherModal2.prototype.open = function() {
          var collected = collectGroupLeaves(this.app);
          var doc = getDoc(collected.active);
          if (doc.body.classList.contains("wpp-mission-control-open") || doc.body.querySelector(".wpp-tab-switcher-backdrop")) {
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
            new obsidian2.Notice(i18n2.L.tabSwitcherEmpty);
            return;
          }
          var activeIndex = this.leaves.indexOf(this.activeLeaf);
          if (activeIndex < 0) activeIndex = 0;
          this.focusedIndex = activeIndex;
          doc.body.addClass("wpp-mission-control-open");
          try {
            if (this.plugin && typeof this.plugin.getTaskViewThumbnailSourceSize === "function") {
              var size = this.plugin.getTaskViewThumbnailSourceSize();
              if (size && size.width && size.height) {
                doc.body.style.setProperty("--wpp-mc-source-width", size.width + "px");
                doc.body.style.setProperty("--wpp-mc-source-height", size.height + "px");
              }
            }
            if (this.plugin && typeof this.plugin.getTaskViewContentZoom === "function") {
              doc.body.style.setProperty(
                "--wpp-mc-content-zoom",
                String(this.plugin.getTaskViewContentZoom())
              );
            }
          } catch (err) {
          }
          this.backdropEl = doc.body.createDiv({ cls: "wpp-tab-switcher-backdrop" });
          this.backdropEl.addEventListener("click", this._onBackdropClick);
          this.panelEl = doc.body.createDiv({
            cls: "wpp-tab-switcher-panel",
            attr: {
              role: "dialog",
              "aria-modal": "true",
              "aria-label": i18n2.L.tabSwitcherTitle
            }
          });
          this.gridWrapEl = this.panelEl.createDiv({ cls: "wpp-tab-switcher-grid-wrap" });
          this.gridEl = this.gridWrapEl.createDiv({ cls: "wpp-tab-switcher-grid" });
          this.gridHintEl = doc.body.createDiv({
            cls: "wpp-tab-switcher-hint wpp-tab-switcher-grid-hint is-hidden"
          });
          this._hintHoverNav = false;
          this._hintHoverGrid = false;
          this.mountSplitToolbar(doc);
          this.bindHintHover();
          this.updateHints();
          this.cardEls = [];
          this.renderCards();
          this.updateSplitToolbar();
          this.panelEl.addEventListener("click", this._onPanelClick);
          this.panelEl.addEventListener("mousemove", this._onPanelMove);
          doc.addEventListener("keydown", this._onKeyDown, true);
          doc.addEventListener("wheel", this._onWheel, { capture: true, passive: false });
          this.updateFocus(true);
        };
        TabSwitcherModal2.prototype.bindHintHover = function() {
          var self = this;
          if (this.toolbarEl && !this.toolbarEl._wppHintHoverBound) {
            this.toolbarEl._wppHintHoverBound = true;
            this.toolbarEl.addEventListener("mouseenter", function() {
              self._hintHoverNav = true;
              self.updateHints();
            });
            this.toolbarEl.addEventListener("mouseleave", function() {
              self._hintHoverNav = false;
              self.updateHints();
            });
          }
          if (this.gridEl && !this.gridEl._wppHintHoverBound) {
            this.gridEl._wppHintHoverBound = true;
            this.gridEl.addEventListener("mouseenter", function() {
              self._hintHoverGrid = true;
              self.updateHints();
            });
            this.gridEl.addEventListener("mouseleave", function() {
              self._hintHoverGrid = false;
              self.updateHints();
            });
          }
        };
        TabSwitcherModal2.prototype.updateHints = function() {
          var L = i18n2.L;
          var multiSplit = !!(this.groups && this.groups.length > 1);
          var hintsEnabled = !(this.plugin && typeof this.plugin.isTaskViewHintsEnabled === "function") || this.plugin.isTaskViewHintsEnabled();
          if (this.gridHintEl) {
            var gridText = hintsEnabled ? L.tabSwitcherHintGrid || "" : "";
            var showGrid = hintsEnabled && !!this._hintHoverGrid && !!gridText;
            this.gridHintEl.setText(gridText);
            this.gridHintEl.classList.toggle("is-hidden", !showGrid);
            this.gridHintEl.style.display = showGrid ? "" : "none";
            if (showGrid && this.gridEl) {
              var rect = this.gridEl.getBoundingClientRect();
              var gap = 18;
              try {
                var body = this.gridEl.ownerDocument && this.gridEl.ownerDocument.body;
                if (body) {
                  var raw = getComputedStyle(body).getPropertyValue("--wpp-mc-hint-gap");
                  var parsed = parseFloat(raw);
                  if (isFinite(parsed) && parsed > 0) gap = parsed;
                }
              } catch (err) {
              }
              this.gridHintEl.style.top = rect.bottom + gap + "px";
              this.gridHintEl.style.left = rect.left + rect.width / 2 + "px";
            }
          }
          if (this.toolbarHintEl) {
            var navText = hintsEnabled ? L.tabSwitcherHintNav || "" : "";
            var showNav = hintsEnabled && multiSplit && !!this._hintHoverNav && !!navText;
            this.toolbarHintEl.setText(navText);
            this.toolbarHintEl.classList.toggle("is-hidden", !showNav);
            this.toolbarHintEl.style.display = showNav ? "" : "none";
            this.toolbarHintEl.classList.toggle("is-below-nav", multiSplit);
            this.toolbarHintEl.classList.remove("is-top-only");
          }
        };
        TabSwitcherModal2.prototype.mountSplitToolbar = function(doc) {
          var self = this;
          var L = i18n2.L;
          this.toolbarEl = doc.body.createDiv({ cls: "wpp-tab-switcher-toolbar" });
          this.prevSplitBtn = this.toolbarEl.createDiv({
            cls: "wpp-tab-switcher-split-btn",
            attr: {
              role: "button",
              tabindex: "-1",
              "aria-label": L.tabSwitcherPrevSplit || "Previous split"
            }
          });
          this.prevSplitBtn.setText("\u2039");
          this.prevSplitBtn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            self.shiftSplitGroup(-1);
          });
          this.splitPagesEl = this.toolbarEl.createDiv({
            cls: "wpp-tab-switcher-split-pages",
            attr: { role: "tablist", "aria-label": L.tabSwitcherTitle || "Splits" }
          });
          this.nextSplitBtn = this.toolbarEl.createDiv({
            cls: "wpp-tab-switcher-split-btn",
            attr: {
              role: "button",
              tabindex: "-1",
              "aria-label": L.tabSwitcherNextSplit || "Next split"
            }
          });
          this.nextSplitBtn.setText("\u203A");
          this.nextSplitBtn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            self.shiftSplitGroup(1);
          });
          this.toolbarHintEl = doc.body.createDiv({
            cls: "wpp-tab-switcher-hint wpp-tab-switcher-toolbar-hint is-hidden"
          });
        };
        TabSwitcherModal2.prototype.updateSplitToolbar = function() {
          if (!this.toolbarEl) return;
          var self = this;
          var count = this.groups ? this.groups.length : 0;
          var showNav = count > 1;
          this.toolbarEl.classList.toggle("is-hidden", !showNav);
          this.toolbarEl.style.display = showNav ? "" : "none";
          this.updateHints();
          if (!showNav) return;
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
              (function(pageIndex) {
                var isPreview = pageIndex === previewIndex;
                var isWorkspace = pageIndex === workspaceSplitIndex;
                var page = self.splitPagesEl.createDiv({
                  cls: "wpp-tab-switcher-split-page" + (isPreview ? " is-active" : "") + (isWorkspace ? " is-workspace-split" : ""),
                  attr: {
                    role: "tab",
                    tabindex: "-1",
                    "aria-selected": isPreview ? "true" : "false",
                    "aria-current": isWorkspace ? "true" : "false",
                    "aria-label": typeof i18n2.L.tabSwitcherSplitLabel === "function" ? i18n2.L.tabSwitcherSplitLabel(pageIndex + 1, count) : String(pageIndex + 1),
                    "data-split-index": String(pageIndex)
                  }
                });
                page.setText(String(pageIndex + 1));
                page.addEventListener("click", function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  self.goToSplitGroup(pageIndex);
                });
                page.addEventListener("dblclick", function(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  self.enterZenOnSplit(pageIndex);
                });
              })(i);
            }
          }
        };
        TabSwitcherModal2.prototype.goToSplitGroup = function(index) {
          this.groups = collectRootTabGroups(this.app);
          if (!this.groups.length) return;
          var len = this.groups.length;
          if (len === 1) {
            this.groupIndex = 0;
            this.updateSplitToolbar();
            return;
          }
          var target = (index % len + len) % len;
          if (target === this.groupIndex && this.group === this.groups[target] && this.leaves && this.leaves.length > 0) {
            this.updateSplitToolbar();
            return;
          }
          var leaves = collectLeavesFromGroup(this.groups[target]);
          if (leaves.length === 0) {
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
          this.activeLeaf = pickLeafInGroup(this.app, this.group, null);
          var activeIndex = this.leaves.indexOf(this.activeLeaf);
          this.focusedIndex = activeIndex >= 0 ? activeIndex : 0;
          this.renderCards();
          this.updateFocus(true);
          this.updateSplitToolbar();
        };
        TabSwitcherModal2.prototype.enterZenOnSplit = function(index) {
          this.groups = collectRootTabGroups(this.app);
          if (!this.groups.length) return;
          var len = this.groups.length;
          var target = (index % len + len) % len;
          var group = this.groups[target];
          if (!group) return;
          var preferred = null;
          if (this.group === group && this.leaves && this.leaves.length) {
            preferred = this.leaves[this.focusedIndex] || this.activeLeaf || null;
          }
          var leaf = pickLeafInGroup(this.app, group, preferred);
          if (!leaf) {
            var leaves = collectLeavesFromGroup(group);
            leaf = leaves[0] || null;
          }
          if (!leaf) return;
          var plugin = this.plugin;
          this.close();
          try {
            if (typeof this.app.workspace.setActiveLeaf === "function") {
              this.app.workspace.setActiveLeaf(leaf, { focus: true });
            }
            if (typeof this.app.workspace.revealLeaf === "function") {
              this.app.workspace.revealLeaf(leaf);
            }
          } catch (err) {
          }
          if (!plugin) return;
          var finish = function() {
            if (typeof plugin.rememberZenFocusLeaf === "function") {
              plugin.rememberZenFocusLeaf(leaf, { force: true });
            }
            if (typeof plugin.refreshZenModeFocus === "function") {
              plugin.refreshZenModeFocus();
            }
          };
          if (typeof plugin.setZenMode === "function") {
            Promise.resolve(plugin.setZenMode(true)).then(finish).catch(finish);
          } else {
            finish();
          }
        };
        TabSwitcherModal2.prototype.shiftSplitGroup = function(delta) {
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
        TabSwitcherModal2.prototype.renderCards = function() {
          if (!this.gridEl) return;
          this.cancelPreviewQueue();
          this.gridEl.empty();
          this.cardEls = [];
          for (var i = 0; i < this.leaves.length; i++) {
            this.mountCard(this.leaves[i], i);
          }
        };
        TabSwitcherModal2.prototype.mountCard = function(leaf, index) {
          var self = this;
          var workspaceActive = getActiveLeaf(this.app);
          var isActive = leaf === workspaceActive;
          var pinned = isLeafPinned(leaf);
          var L = i18n2.L;
          var card = this.gridEl.createDiv({
            cls: "wpp-tab-switcher-card" + (isActive ? " is-active-tab" : "") + (pinned ? " is-pinned" : ""),
            attr: {
              role: "option",
              "data-index": String(index),
              "aria-selected": "false",
              "aria-current": isActive ? "true" : "false"
            }
          });
          var header = card.createDiv({ cls: "wpp-tab-switcher-header" });
          var iconEl = header.createDiv({ cls: "wpp-tab-switcher-icon" });
          obsidian2.setIcon(iconEl, getLeafIcon(leaf));
          header.createDiv({
            cls: "wpp-tab-switcher-title",
            text: getLeafTitle(leaf),
            attr: { title: getLeafTitle(leaf) }
          });
          var actions = header.createDiv({ cls: "wpp-tab-switcher-actions" });
          var pinBtn = actions.createDiv({
            cls: "wpp-tab-switcher-pin" + (pinned ? " is-active" : ""),
            attr: {
              role: "button",
              tabindex: "-1",
              "aria-label": pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab
            }
          });
          obsidian2.setIcon(pinBtn, "pin");
          if (typeof obsidian2.setTooltip === "function") {
            obsidian2.setTooltip(pinBtn, pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab, { delay: 250 });
          }
          pinBtn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            self.togglePin(leaf, pinBtn, card);
          });
          pinBtn.addEventListener("mousedown", function(e) {
            e.stopPropagation();
          });
          var closeBtn = actions.createDiv({
            cls: "wpp-tab-switcher-close",
            attr: {
              role: "button",
              tabindex: "-1",
              "aria-label": L.tabSwitcherCloseTab
            }
          });
          obsidian2.setIcon(closeBtn, "x");
          if (typeof obsidian2.setTooltip === "function") {
            obsidian2.setTooltip(closeBtn, L.tabSwitcherCloseTab, { delay: 250 });
          }
          closeBtn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var currentIndex = self.cardEls.indexOf(card);
            if (currentIndex < 0) return;
            self.closeLeafAt(currentIndex);
          });
          closeBtn.addEventListener("mousedown", function(e) {
            e.stopPropagation();
          });
          var viewport = card.createDiv({ cls: "wpp-tab-switcher-viewport" });
          var scale = viewport.createDiv({ cls: "wpp-tab-switcher-scale" });
          var loading = scale.createDiv({ cls: "wpp-tab-switcher-loading" });
          loading.createDiv({ cls: "wpp-tab-switcher-loading-spinner" });
          viewport.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            var currentIndex = self.cardEls.indexOf(card);
            if (currentIndex < 0) currentIndex = index;
            self.focusedIndex = currentIndex;
            self.activateFocused();
          });
          header.addEventListener("mousedown", function(e) {
            if (e.button !== 0) return;
            if (e.target && e.target.closest && e.target.closest(".wpp-tab-switcher-actions")) {
              return;
            }
            self.beginCardDrag(e, card);
          });
          this.cardEls.push(card);
          this.fillCardPreview(leaf, scale);
        };
        TabSwitcherModal2.prototype.togglePin = function(leaf, pinBtn, card) {
          var L = i18n2.L;
          var next = !isLeafPinned(leaf);
          try {
            if (typeof leaf.setPinned === "function") leaf.setPinned(next);
            else if (typeof leaf.togglePinned === "function") leaf.togglePinned();
          } catch (err) {
          }
          var pinned = isLeafPinned(leaf);
          pinBtn.classList.toggle("is-active", pinned);
          pinBtn.setAttribute("aria-label", pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab);
          pinBtn.empty();
          obsidian2.setIcon(pinBtn, "pin");
          if (typeof obsidian2.setTooltip === "function") {
            obsidian2.setTooltip(pinBtn, pinned ? L.tabSwitcherUnpinTab : L.tabSwitcherPinTab, { delay: 250 });
          }
          if (card) card.classList.toggle("is-pinned", pinned);
        };
        TabSwitcherModal2.prototype.beginCardDrag = function(e, card) {
          var self = this;
          var doc = this._overlayDoc || getDoc(this.activeLeaf);
          var startX = e.clientX;
          var startY = e.clientY;
          var dragStarted = false;
          var cloneEl = null;
          var fromIndex = this.cardEls.indexOf(card);
          if (fromIndex < 0) return;
          var dragLeaf = this.leaves[fromIndex];
          if (!dragLeaf) return;
          e.preventDefault();
          e.stopPropagation();
          function clearDropHighlights() {
            self.cardEls.forEach(function(el) {
              el.classList.remove("is-drop-target");
            });
            self.clearSplitDropTargets();
            if (self.gridEl) self.gridEl.classList.remove("is-drop-target");
          }
          function updateDropHighlights(clientX, clientY) {
            clearDropHighlights();
            var splitIndex = self.getSplitIndexAtPoint(clientX, clientY);
            if (splitIndex >= 0) {
              if (splitIndex !== self.groupIndex) {
                self.goToSplitGroup(splitIndex);
              }
              self.setSplitDropTarget(splitIndex);
              return;
            }
            if (!self.isPointInGrid(clientX, clientY)) return;
            var overIndex = self.getCardIndexAtPoint(clientX, clientY);
            var crossSplit = dragLeaf.parent !== self.group;
            if (overIndex >= 0) {
              self.cardEls.forEach(function(el, i) {
                var leaf = self.leaves[i];
                el.classList.toggle(
                  "is-drop-target",
                  i === overIndex && leaf !== dragLeaf
                );
              });
              return;
            }
            if (crossSplit && self.gridEl) {
              self.gridEl.classList.add("is-drop-target");
            }
          }
          function startDrag(ev) {
            dragStarted = true;
            self._cardDragLeaf = dragLeaf;
            doc.body.classList.add("wpp-tab-switcher-dragging");
            var rect = card.getBoundingClientRect();
            var offsetX = startX - rect.left;
            var offsetY = startY - rect.top;
            cloneEl = card.cloneNode(true);
            cloneEl.classList.add("wpp-tab-switcher-drag-clone");
            cloneEl.style.position = "fixed";
            cloneEl.style.width = rect.width + "px";
            cloneEl.style.top = ev.clientY - offsetY + "px";
            cloneEl.style.left = ev.clientX - offsetX + "px";
            cloneEl.style.zIndex = "10050";
            cloneEl.style.pointerEvents = "none";
            doc.body.appendChild(cloneEl);
            cloneEl._offsetX = offsetX;
            cloneEl._offsetY = offsetY;
            card.classList.add("is-dragging");
          }
          function onMouseMove(ev) {
            if (!dragStarted) {
              if (Math.abs(ev.clientX - startX) + Math.abs(ev.clientY - startY) < 5) return;
              startDrag(ev);
            }
            if (!cloneEl) return;
            cloneEl.style.top = ev.clientY - cloneEl._offsetY + "px";
            cloneEl.style.left = ev.clientX - cloneEl._offsetX + "px";
            updateDropHighlights(ev.clientX, ev.clientY);
          }
          function onMouseUp(ev) {
            doc.removeEventListener("mousemove", onMouseMove, true);
            doc.removeEventListener("mouseup", onMouseUp, true);
            doc.body.classList.remove("wpp-tab-switcher-dragging");
            self._cardDragLeaf = null;
            var inGrid = self.isPointInGrid(ev.clientX, ev.clientY);
            var toIndex = self.getCardIndexAtPoint(ev.clientX, ev.clientY);
            clearDropHighlights();
            self.cardEls.forEach(function(el) {
              el.classList.remove("is-dragging");
            });
            if (cloneEl) {
              cloneEl.remove();
              cloneEl = null;
            }
            if (!dragStarted) {
              var stillIdx = self.leaves.indexOf(dragLeaf);
              self.focusedIndex = stillIdx >= 0 ? stillIdx : fromIndex;
              self.updateFocus(false);
              return;
            }
            if (!inGrid) return;
            var targetGroup = self.group;
            if (!targetGroup) return;
            if (dragLeaf.parent === targetGroup) {
              if (toIndex < 0) return;
              var fromNow = self.leaves.indexOf(dragLeaf);
              if (fromNow < 0 || fromNow === toIndex) return;
              self.reorderLeaves(fromNow, toIndex);
              return;
            }
            var insertAt;
            if (toIndex >= 0 && self.leaves[toIndex]) {
              insertAt = targetGroup.children.indexOf(self.leaves[toIndex]);
              if (insertAt < 0) insertAt = targetGroup.children.length;
            } else {
              insertAt = targetGroup.children ? targetGroup.children.length : 0;
            }
            self.moveLeafIntoGroup(dragLeaf, targetGroup, insertAt);
          }
          doc.addEventListener("mousemove", onMouseMove, true);
          doc.addEventListener("mouseup", onMouseUp, true);
        };
        TabSwitcherModal2.prototype.getCardIndexAtPoint = function(x, y) {
          for (var i = 0; i < this.cardEls.length; i++) {
            var rect = this.cardEls[i].getBoundingClientRect();
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
              return i;
            }
          }
          return -1;
        };
        TabSwitcherModal2.prototype.isPointInGrid = function(x, y) {
          if (!this.gridEl) return false;
          var rect = this.gridEl.getBoundingClientRect();
          return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        };
        TabSwitcherModal2.prototype.getSplitIndexAtPoint = function(x, y) {
          if (!this.splitPagesEl || !this.groups || this.groups.length <= 1) return -1;
          if (this.toolbarEl && this.toolbarEl.classList.contains("is-hidden")) return -1;
          var pages = this.splitPagesEl.querySelectorAll(".wpp-tab-switcher-split-page");
          for (var i = 0; i < pages.length; i++) {
            var rect = pages[i].getBoundingClientRect();
            if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
              var idx = parseInt(pages[i].getAttribute("data-split-index"), 10);
              return isNaN(idx) ? i : idx;
            }
          }
          return -1;
        };
        TabSwitcherModal2.prototype.clearSplitDropTargets = function() {
          if (!this.splitPagesEl) return;
          var pages = this.splitPagesEl.querySelectorAll(".wpp-tab-switcher-split-page.is-drop-target");
          for (var i = 0; i < pages.length; i++) {
            pages[i].classList.remove("is-drop-target");
          }
        };
        TabSwitcherModal2.prototype.setSplitDropTarget = function(index) {
          this.clearSplitDropTargets();
          if (!this.splitPagesEl || index < 0) return;
          var page = this.splitPagesEl.querySelector(
            '.wpp-tab-switcher-split-page[data-split-index="' + index + '"]'
          );
          if (page) page.classList.add("is-drop-target");
        };
        TabSwitcherModal2.prototype.reorderLeaves = function(fromIndex, toIndex) {
          var moved = this.leaves[fromIndex];
          var target = this.leaves[toIndex];
          var parent = moved && moved.parent || this.group;
          if (!parent || !moved || !target) return;
          var realFrom = parent.children.indexOf(moved);
          var realTo = parent.children.indexOf(target);
          if (realFrom < 0 || realTo < 0) return;
          if (!moveLeafInParent(parent, realFrom, realTo)) return;
          requestWorkspaceLayoutPersist(this.app);
          this.syncLeavesFromGroup();
          var newIndex = this.leaves.indexOf(moved);
          this.focusedIndex = newIndex >= 0 ? newIndex : Math.min(toIndex, this.leaves.length - 1);
          this.renderCards();
          this.updateFocus(false);
        };
        TabSwitcherModal2.prototype.moveLeafIntoGroup = function(moved, targetGroup, insertAt) {
          if (!moved || !targetGroup) return;
          if (moved.parent === targetGroup) return;
          if (typeof insertAt !== "number" || insertAt < 0) {
            insertAt = targetGroup.children ? targetGroup.children.length : 0;
          }
          if (!moveLeafToGroup(moved, targetGroup, insertAt)) return;
          requestWorkspaceLayoutPersist(this.app);
          this.groups = collectRootTabGroups(this.app);
          var newTargetIndex = this.groups.indexOf(targetGroup);
          if (newTargetIndex < 0) {
            for (var i = 0; i < this.groups.length; i++) {
              if (collectLeavesFromGroup(this.groups[i]).indexOf(moved) >= 0) {
                newTargetIndex = i;
                break;
              }
            }
          }
          if (newTargetIndex < 0) {
            this.syncLeavesFromGroup();
            if (this.leaves.length === 0 && this.groups && this.groups.length > 1) {
              this.shiftSplitGroup(1);
            } else {
              this.renderCards();
              this.updateFocus(false);
            }
            return;
          }
          this.groupIndex = newTargetIndex;
          this.group = this.groups[newTargetIndex];
          this.leaves = collectLeavesFromGroup(this.group);
          this.activeLeaf = pickLeafInGroup(this.app, this.group, moved);
          this.focusedIndex = this.leaves.indexOf(moved);
          if (this.focusedIndex < 0) this.focusedIndex = 0;
          this.renderCards();
          this.updateFocus(false);
          this.updateSplitToolbar();
        };
        TabSwitcherModal2.prototype.fillCardPreview = function(leaf, scaleEl) {
          var file = getLeafFile(this.app, leaf);
          var isExcali = getLeafViewType(leaf) === "excalidraw" || isExcalidrawFile(this.app, file);
          var isCanvas = getLeafViewType(leaf) === "canvas" || isCanvasFile(file);
          if (isExcali) {
            return this.fillCardPreviewExcalidraw(leaf, scaleEl, file);
          }
          if (file && (file.extension === "md" || isCanvas)) {
            return this.fillCardPreviewEmbed(leaf, scaleEl, file, {
              visualOnlyFallback: isCanvas,
              staggered: isCanvas
            });
          }
          if (isCanvas) {
            return this.fillCardPreviewFromLeaf(leaf, scaleEl, { visualOnly: true });
          }
          return this.fillCardPreviewFromLeaf(leaf, scaleEl);
        };
        TabSwitcherModal2.prototype.fillCardPreviewExcalidraw = function(leaf, scaleEl, file) {
          if (!scaleEl || !scaleEl.isConnected) return Promise.resolve();
          var exportFile = findExcalidrawExportFile(this.app, file);
          if (exportFile) {
            try {
              var src = this.app.vault.getResourcePath(exportFile);
              if (src && fillStaticImagePreview(scaleEl, src)) {
                return Promise.resolve();
              }
            } catch (err) {
            }
          }
          var dataUrl = captureLeafCanvasPreview(leaf);
          if (dataUrl && fillStaticImagePreview(scaleEl, dataUrl)) {
            return Promise.resolve();
          }
          fillIconOnly(scaleEl, leaf);
          return Promise.resolve();
        };
        TabSwitcherModal2.prototype.fillCardPreviewEmbed = function(leaf, scaleEl, file, options) {
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
            return renderFileEmbedInto(self.app, self.plugin, host, file).then(function(ok) {
              if (!scaleEl.isConnected) return;
              if (ok) return;
              if (visualOnlyFallback) {
                return self.fillCardPreviewFromLeaf(leaf, scaleEl, { visualOnly: true });
              }
              if (file.extension === "md" && !isExcalidrawFile(self.app, file)) {
                return self.app.vault.cachedRead(file).then(function(md) {
                  if (!scaleEl.isConnected) return;
                  scaleEl.empty();
                  var mdHost = scaleEl.createDiv();
                  return renderMarkdownInto(self.app, self.plugin, mdHost, file, md).then(function(rendered) {
                    if (rendered || !scaleEl.isConnected) return;
                    scaleEl.empty();
                    fillTextOrIcon(scaleEl, leaf);
                  });
                }).catch(function() {
                  if (!scaleEl.isConnected) return;
                  return self.fillCardPreviewFromLeaf(leaf, scaleEl);
                });
              }
              return self.fillCardPreviewFromLeaf(leaf, scaleEl);
            }).catch(function() {
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
        TabSwitcherModal2.prototype.fillCardPreviewFromLeaf = function(leaf, scaleEl, options) {
          var self = this;
          var visualOnly = !!(options && options.visualOnly);
          return ensureLeafLoaded(leaf).then(function() {
            if (visualOnly) {
              return waitFrames(3).then(function() {
                return waitForVisualPreview(leaf, 12);
              });
            }
            return waitFrames(3);
          }).then(function() {
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
            var file = getLeafFile(self.app, leaf);
            if (file && file.extension === "md" && !isExcalidrawFile(self.app, file)) {
              return self.app.vault.cachedRead(file).then(function(md) {
                if (!scaleEl.isConnected) return;
                scaleEl.empty();
                var host = scaleEl.createDiv();
                return renderMarkdownInto(self.app, self.plugin, host, file, md).then(function(ok) {
                  if (ok || !scaleEl.isConnected) return;
                  scaleEl.empty();
                  fillTextOrIcon(scaleEl, leaf);
                });
              });
            }
            scaleEl.empty();
            fillTextOrIcon(scaleEl, leaf);
          }).catch(function() {
            if (!scaleEl || !scaleEl.isConnected) return;
            scaleEl.empty();
            if (visualOnly) fillIconOnly(scaleEl, leaf);
            else fillTextOrIcon(scaleEl, leaf);
          });
        };
        TabSwitcherModal2.prototype.syncLeavesFromGroup = function() {
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
        TabSwitcherModal2.prototype.closeLeafAt = function(index) {
          if (index < 0 || index >= this.leaves.length) return;
          var leaf = this.leaves[index];
          try {
            if (leaf && typeof leaf.detach === "function") leaf.detach();
          } catch (err) {
          }
          this.syncLeavesFromGroup();
          if (this.leaves.length === 0) {
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
        TabSwitcherModal2.prototype._onBackdropClick = function(e) {
          e.preventDefault();
          e.stopPropagation();
          this.close();
        };
        TabSwitcherModal2.prototype._onPanelClick = function(e) {
          if (e.target === this.panelEl || e.target === this.gridWrapEl || e.target === this.gridEl || e.target === this.gridHintEl) {
            e.preventDefault();
            e.stopPropagation();
            this.close();
          }
        };
        TabSwitcherModal2.prototype._onPanelMove = function(e) {
          var doc = this._overlayDoc || getDoc(this.activeLeaf);
          if (doc.body.classList.contains("wpp-tab-switcher-dragging")) return;
          var card = e.target && e.target.closest && e.target.closest(".wpp-tab-switcher-card");
          if (!card) return;
          var index = parseInt(card.getAttribute("data-index"), 10);
          if (isNaN(index) || index === this.focusedIndex) return;
          this.focusedIndex = index;
          this.updateFocus(false);
        };
        TabSwitcherModal2.prototype._onWheel = function(e) {
          var doc = this._overlayDoc || getDoc(this.activeLeaf);
          if (!doc || !doc.body || !doc.body.classList.contains("wpp-mission-control-open")) return;
          if (!this.groups || this.groups.length <= 1) return;
          var dragging = doc.body.classList.contains("wpp-tab-switcher-dragging");
          var target = e.target;
          if (!dragging) {
            if (!target || typeof target.closest !== "function") return;
            if (target.closest(".wpp-tab-switcher-grid")) return;
            var onMask = target.closest(
              ".wpp-tab-switcher-backdrop, .wpp-tab-switcher-panel, .wpp-tab-switcher-toolbar, .wpp-tab-switcher-floating-hint, .wpp-tab-switcher-hint, .wpp-tab-switcher-grid-wrap"
            );
            if (!onMask) return;
          }
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
        TabSwitcherModal2.prototype._onKeyDown = function(e) {
          if (e.isComposing) return;
          var key = e.key;
          var doc = this._overlayDoc || getDoc(this.activeLeaf);
          var dragging = !!(doc && doc.body && doc.body.classList.contains("wpp-tab-switcher-dragging"));
          if (dragging) {
            if (key === "[" || key === "<" || key === "ArrowLeft" && e.altKey) {
              e.preventDefault();
              e.stopPropagation();
              this.shiftSplitGroup(-1);
              return;
            }
            if (key === "]" || key === ">" || key === "ArrowRight" && e.altKey) {
              e.preventDefault();
              e.stopPropagation();
              this.shiftSplitGroup(1);
              return;
            }
            if (/^[1-9]$/.test(key)) {
              var dragPage = parseInt(key, 10) - 1;
              if (this.groups && dragPage < this.groups.length) {
                e.preventDefault();
                e.stopPropagation();
                this.goToSplitGroup(dragPage);
              }
              return;
            }
            if (key === "Escape") {
              e.preventDefault();
              e.stopPropagation();
              this.close();
              return;
            }
            e.preventDefault();
            e.stopPropagation();
            return;
          }
          if (key === "[" || key === "<" || key === "ArrowLeft" && e.altKey) {
            e.preventDefault();
            e.stopPropagation();
            this.shiftSplitGroup(-1);
          } else if (key === "]" || key === ">" || key === "ArrowRight" && e.altKey) {
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
          } else if (key === "ArrowLeft" || key === "ArrowRight" || key === "ArrowUp" || key === "ArrowDown") {
            e.preventDefault();
            e.stopPropagation();
            this.moveFocus(key);
          } else if (key === "Enter" || key === " ") {
            e.preventDefault();
            e.stopPropagation();
            this.activateFocused();
          } else if (key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            this.close();
          } else if (key === "Tab") {
            e.preventDefault();
            e.stopPropagation();
            this.moveFocus(e.shiftKey ? "ArrowLeft" : "ArrowRight");
          }
        };
        TabSwitcherModal2.prototype.getColumnCount = function() {
          if (!this.gridEl || !this.cardEls.length) return 1;
          var first = this.cardEls[0];
          if (!first || !first.offsetWidth) return 1;
          var styles = window.getComputedStyle(this.gridEl);
          var gap = parseFloat(styles.columnGap || styles.gap || "20") || 20;
          return Math.max(1, Math.floor((this.gridEl.clientWidth + gap) / (first.offsetWidth + gap)));
        };
        TabSwitcherModal2.prototype.moveFocus = function(key) {
          var count = this.leaves.length;
          if (count <= 0) return;
          var cols = this.getColumnCount();
          var idx = this.focusedIndex;
          if (key === "ArrowLeft") idx = (idx - 1 + count) % count;
          else if (key === "ArrowRight") idx = (idx + 1) % count;
          else if (key === "ArrowUp") idx = (idx - cols + count) % count;
          else if (key === "ArrowDown") idx = (idx + cols) % count;
          this.focusedIndex = idx;
          this.updateFocus(true);
        };
        TabSwitcherModal2.prototype.updateFocus = function(scrollIntoView) {
          var self = this;
          this.cardEls.forEach(function(card, i) {
            var focused = i === self.focusedIndex;
            card.classList.toggle("is-focused", focused);
            card.setAttribute("aria-selected", focused ? "true" : "false");
            if (focused && scrollIntoView && typeof card.scrollIntoView === "function") {
              card.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
            }
          });
        };
        TabSwitcherModal2.prototype.activateFocused = function() {
          var leaf = this.leaves[this.focusedIndex];
          this.close();
          if (!leaf) return;
          if (typeof this.app.workspace.setActiveLeaf === "function") {
            this.app.workspace.setActiveLeaf(leaf, { focus: true });
          }
          if (typeof this.app.workspace.revealLeaf === "function") {
            this.app.workspace.revealLeaf(leaf);
          }
        };
        TabSwitcherModal2.prototype.close = function() {
          var doc = this._overlayDoc || getDoc(this.activeLeaf);
          this.cancelPreviewQueue();
          try {
            doc.removeEventListener("keydown", this._onKeyDown, true);
          } catch (err) {
          }
          try {
            doc.removeEventListener("wheel", this._onWheel, { capture: true });
            doc.removeEventListener("wheel", this._onWheel, true);
          } catch (err2) {
          }
          this._wheelAcc = 0;
          this._wheelLastAt = 0;
          this._hintHoverNav = false;
          this._hintHoverGrid = false;
          if (this.panelEl) {
            this.panelEl.removeEventListener("click", this._onPanelClick);
            this.panelEl.removeEventListener("mousemove", this._onPanelMove);
            this.panelEl.remove();
            this.panelEl = null;
          }
          this.gridWrapEl = null;
          this.gridEl = null;
          if (this.gridHintEl) {
            this.gridHintEl.remove();
            this.gridHintEl = null;
          }
          this.cardEls = [];
          if (this.backdropEl) {
            this.backdropEl.removeEventListener("click", this._onBackdropClick);
            this.backdropEl.remove();
            this.backdropEl = null;
          }
          if (this.hintEl) {
            this.hintEl.remove();
            this.hintEl = null;
          }
          if (this.toolbarHintEl) {
            this.toolbarHintEl.remove();
            this.toolbarHintEl = null;
          }
          if (this.toolbarEl) {
            this.toolbarEl.remove();
            this.toolbarEl = null;
            this.prevSplitBtn = null;
            this.nextSplitBtn = null;
            this.splitPagesEl = null;
          }
          removeOverlayDom(doc);
          this.leaves = [];
          this.group = null;
          this.groups = [];
          this.groupIndex = 0;
          this.activeLeaf = null;
          this._overlayDoc = null;
          this._cardDragLeaf = null;
          this.focusedIndex = 0;
          if (this.plugin && typeof this.plugin.refreshZenModeFocus === "function") {
            this.plugin.refreshZenModeFocus();
          }
        };
        return TabSwitcherModal2;
      }()
    );
    module2.exports = TabSwitcherModal;
  }
});

// src/modals/index.js
var require_modals = __commonJS({
  "src/modals/index.js"(exports2, module2) {
    "use strict";
    var SessionManagerModal = require_session_manager_modal();
    var ConfirmModal = require_confirm_modal();
    var RenameModal = require_rename_modal();
    var UnsavedSwitchModal = require_unsaved_switch_modal();
    var HistoryModal = require_history_modal();
    var HistoryEntryModal = require_history_entry_modal();
    var TabSwitcherModal = require_tab_switcher_modal();
    module2.exports = {
      SessionManagerModal,
      ConfirmModal,
      RenameModal,
      UnsavedSwitchModal,
      HistoryModal,
      HistoryEntryModal,
      DeleteOrArchiveModal: require_delete_or_archive_modal(),
      TabSwitcherModal
    };
  }
});

// src/modals.js
var require_modals2 = __commonJS({
  "src/modals.js"(exports2, module2) {
    "use strict";
    module2.exports = require_modals();
  }
});

// src/settings-ui.js
var require_settings_ui = __commonJS({
  "src/settings-ui.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var modals2 = require_modals2();
    var GroupSessionsModal = (
      /** @class */
      function(_super) {
        function GroupSessionsModal2(app, plugin, group) {
          var _this = _super.call(this, app) || this;
          _this.plugin = plugin;
          _this.group = group;
          return _this;
        }
        GroupSessionsModal2.prototype = Object.create(_super.prototype);
        GroupSessionsModal2.prototype.constructor = GroupSessionsModal2;
        GroupSessionsModal2.prototype.onOpen = function() {
          var L = i18n2.L;
          var self = this;
          var contentEl = this.contentEl;
          contentEl.empty();
          contentEl.createEl("h3", { text: self.group.name + " \u2014 " + L.settingsGroupManageSessions });
          var allSessions = self.plugin.getOrderedSessionsUnfiltered();
          var memberIds = self.plugin.getGroupSessionIds(self.group.id);
          for (var i = 0; i < allSessions.length; i++) {
            (function(session) {
              var isMember = memberIds.indexOf(session.id) !== -1;
              new obsidian2.Setting(contentEl).setName(session.name).addToggle(function(toggle) {
                toggle.setValue(isMember);
                toggle.onChange(function(value) {
                  if (value) {
                    self.plugin.addSessionToGroup(session.id, self.group.id);
                  } else {
                    self.plugin.removeSessionFromGroup(session.id, self.group.id);
                  }
                });
              });
            })(allSessions[i]);
          }
        };
        GroupSessionsModal2.prototype.onClose = function() {
          this.contentEl.empty();
        };
        return GroupSessionsModal2;
      }(obsidian2.Modal)
    );
    function applyWarningStyle(btn) {
      if (typeof btn.setWarning === "function") {
        btn.setWarning();
        return;
      }
      if (btn.buttonEl) {
        btn.buttonEl.addClass("mod-warning");
      }
    }
    function resolveSettingText(value) {
      return typeof value === "function" ? value() : value;
    }
    function addToggleSetting(parentEl, options) {
      var setting = new obsidian2.Setting(parentEl).setName(resolveSettingText(options.name));
      if (options.desc) {
        setting.setDesc(resolveSettingText(options.desc));
      }
      setting.addToggle(function(toggle) {
        toggle.setValue(!!options.value);
        if (options.disabled && typeof toggle.setDisabled === "function") {
          toggle.setDisabled(true);
        }
        toggle.onChange(function(value) {
          options.onChange(value);
        });
      });
      return setting;
    }
    function addDropdownSetting(parentEl, options) {
      var setting = new obsidian2.Setting(parentEl).setName(resolveSettingText(options.name));
      if (options.desc) {
        setting.setDesc(resolveSettingText(options.desc));
      }
      setting.addDropdown(function(dropdown) {
        var optionKeys = Object.keys(options.items || {});
        for (var i = 0; i < optionKeys.length; i++) {
          dropdown.addOption(optionKeys[i], resolveSettingText(options.items[optionKeys[i]]));
        }
        dropdown.setValue(String(options.value));
        if (options.disabled && typeof dropdown.setDisabled === "function") {
          dropdown.setDisabled(true);
        }
        dropdown.onChange(function(value) {
          options.onChange(value);
        });
      });
      return setting;
    }
    function addSubsection(parentEl, title) {
      var headingEl = parentEl.createEl("h4", { text: resolveSettingText(title) });
      headingEl.addClass("wpp-settings-subsection");
      return headingEl;
    }
    function addDangerResetSetting(parentEl, app, display, options) {
      new obsidian2.Setting(parentEl).setName(resolveSettingText(options.name)).setDesc(resolveSettingText(options.desc)).addButton(function(btn) {
        var isRunning = false;
        btn.setButtonText(resolveSettingText(options.buttonText));
        applyWarningStyle(btn);
        btn.onClick(function() {
          if (isRunning) return;
          var confirmOptions = {
            confirmText: options.buttonText
          };
          if (options.confirmHint) {
            confirmOptions.hint = options.confirmHint;
          }
          new modals2.ConfirmModal(app, options.confirmMessage, function() {
            isRunning = true;
            btn.setDisabled(true);
            return options.run().then(function() {
              new obsidian2.Notice(options.successNotice);
            }).catch(function() {
              new obsidian2.Notice(options.failureNotice);
            }).then(function() {
              isRunning = false;
              btn.setDisabled(false);
              display();
            });
          }, confirmOptions).open();
        });
      });
    }
    function addAsyncActionSetting(parentEl, options) {
      new obsidian2.Setting(parentEl).setName(resolveSettingText(options.name)).setDesc(resolveSettingText(options.desc)).addButton(function(btn) {
        btn.setButtonText(resolveSettingText(options.buttonText));
        if (options.disabled) {
          btn.setDisabled(true);
        }
        btn.onClick(function() {
          options.run().then(function() {
            if (options.onSuccess) options.onSuccess();
          }).catch(function() {
            if (options.failureNotice) {
              new obsidian2.Notice(options.failureNotice);
            }
          });
        });
      });
    }
    module2.exports = {
      GroupSessionsModal,
      resolveSettingText,
      addToggleSetting,
      addDropdownSetting,
      addSubsection,
      addDangerResetSetting,
      addAsyncActionSetting
    };
  }
});

// src/settings.js
var require_settings = __commonJS({
  "src/settings.js"(exports2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var modals2 = require_modals2();
    var formatRelativeTime = require_format_relative_time();
    var settingsUi = require_settings_ui();
    var GroupSessionsModal = settingsUi.GroupSessionsModal;
    var resolveSettingText = settingsUi.resolveSettingText;
    var addToggleSetting = settingsUi.addToggleSetting;
    var addDropdownSetting = settingsUi.addDropdownSetting;
    var addSubsection = settingsUi.addSubsection;
    var addDangerResetSetting = settingsUi.addDangerResetSetting;
    var addAsyncActionSetting = settingsUi.addAsyncActionSetting;
    var WorkspacePlusPlusSettingTab = (
      /** @class */
      function(_super) {
        function WorkspacePlusPlusSettingTab2(app, plugin) {
          var _this = _super.call(this, app, plugin) || this;
          _this.plugin = plugin;
          return _this;
        }
        WorkspacePlusPlusSettingTab2.prototype = Object.create(_super.prototype);
        WorkspacePlusPlusSettingTab2.prototype.constructor = WorkspacePlusPlusSettingTab2;
        WorkspacePlusPlusSettingTab2.prototype.display = function() {
          var L = i18n2.L;
          var self = this;
          var containerEl = this.containerEl;
          containerEl.empty();
          if (!self.activeTab) self.activeTab = "general";
          var tabs = [
            { id: "general", label: L.settingsSectionGeneral },
            { id: "sessions", label: L.settingsTabSessions },
            { id: "groups", label: L.settingsTabGroups },
            { id: "advanced", label: L.settingsSectionAdvanced }
          ];
          var tabBarEl = containerEl.createDiv({ cls: "wpp-settings-tab-bar" });
          for (var ti = 0; ti < tabs.length; ti++) {
            (function(tab) {
              var btn = tabBarEl.createEl("button", {
                text: tab.label,
                cls: "wpp-settings-tab" + (tab.id === self.activeTab ? " is-active" : "")
              });
              btn.addEventListener("click", function() {
                self.activeTab = tab.id;
                self.display();
              });
            })(tabs[ti]);
          }
          var contentEl = containerEl.createDiv({ cls: "wpp-settings-tab-content" });
          function addSection(title) {
            contentEl.createEl("h3", { text: resolveSettingText(title), cls: "wpp-settings-section-title" });
          }
          if (self.activeTab === "general") {
            new obsidian2.Setting(contentEl).setName(L.settingsLanguage).setDesc(L.settingsLanguageDesc).addDropdown(function(dropdown) {
              dropdown.addOption("auto", L.settingsLangAuto);
              var order = i18n2.LANG_ORDER;
              for (var i = 0; i < order.length; i++) {
                dropdown.addOption(order[i], i18n2.LANG_OPTIONS[order[i]]);
              }
              var currentLang = self.plugin.data.language || "auto";
              if (currentLang !== "auto" && (!i18n2.LANG_OPTIONS || !i18n2.LANG_OPTIONS[currentLang])) {
                currentLang = "auto";
              }
              dropdown.setValue(currentLang);
              dropdown.onChange(function(value) {
                self.plugin.setLanguageSetting(value).then(function() {
                  self.display();
                });
              });
            });
            new obsidian2.Setting(contentEl).setName(L.settingsHotkeys).addButton(function(btn) {
              btn.setButtonText(L.settingsHotkeysBtn);
              btn.onClick(function() {
                self.app.setting.openTabById("hotkeys");
                var sc = self.app.setting.activeTab.searchComponent;
                var pluginName = self.plugin.manifest && self.plugin.manifest.name ? self.plugin.manifest.name : "Workspace++";
                sc.setValue(pluginName);
                sc.inputEl.dispatchEvent(new Event("input"));
              });
            });
            addToggleSetting(contentEl, {
              name: L.settingsRestoreSidebars,
              desc: L.settingsRestoreSidebarsDesc,
              value: self.plugin.isSidebarRestoreEnabled(),
              onChange: function(value) {
                self.plugin.setRestoreSidebars(value);
              }
            });
            addToggleSetting(contentEl, {
              name: L.settingsShowStatusBarWorkspace,
              desc: L.settingsShowStatusBarWorkspaceDesc,
              value: self.plugin.isStatusBarWorkspaceEnabled(),
              onChange: function(value) {
                self.plugin.setShowStatusBarWorkspace(value);
              }
            });
            addToggleSetting(contentEl, {
              name: L.settingsShowStatusBarZenMode,
              desc: L.settingsShowStatusBarZenModeDesc,
              value: self.plugin.isStatusBarZenModeEnabled(),
              onChange: function(value) {
                self.plugin.setShowStatusBarZenMode(value);
              }
            });
            new obsidian2.Setting(contentEl).setName(L.settingsTaskViewThumbnailRatio).setDesc(L.settingsTaskViewThumbnailRatioDesc).addDropdown(function(dropdown) {
              dropdown.addOption("16:9", "16:9");
              dropdown.addOption("4:3", "4:3");
              dropdown.addOption("3:2", "3:2");
              dropdown.addOption("1:1", "1:1");
              dropdown.setValue(self.plugin.getTaskViewThumbnailRatio());
              dropdown.onChange(function(value) {
                self.plugin.setTaskViewThumbnailRatio(value);
              });
            });
            var contentZoomDefault = 0.45;
            var contentZoomSetting = new obsidian2.Setting(contentEl).setName(L.settingsTaskViewContentZoom).setDesc(L.settingsTaskViewContentZoomDesc).addSlider(function(slider) {
              slider.setLimits(0.1, 1, 0.05).setValue(self.plugin.getTaskViewContentZoom()).setDynamicTooltip().onChange(function(value) {
                self.plugin.setTaskViewContentZoom(value);
              });
              if (typeof slider.setInstant === "function") {
                slider.setInstant(true);
              }
            });
            contentZoomSetting.addExtraButton(function(btn) {
              btn.setIcon("rotate-ccw");
              btn.setTooltip(
                (L.settingsTaskViewContentZoomReset || "Reset to {value}").replace("{value}", String(Math.round(contentZoomDefault * 100)) + "%")
              );
              btn.onClick(function() {
                self.plugin.setTaskViewContentZoom(contentZoomDefault).then(function() {
                  self.display();
                });
              });
            });
            addToggleSetting(contentEl, {
              name: L.settingsShowTaskViewHints,
              desc: L.settingsShowTaskViewHintsDesc,
              value: self.plugin.isTaskViewHintsEnabled(),
              onChange: function(value) {
                self.plugin.setShowTaskViewHints(value);
              }
            });
            addToggleSetting(contentEl, {
              name: L.settingsZenHideInactiveTabs,
              desc: L.settingsZenHideInactiveTabsDesc,
              value: self.plugin.isZenHideInactiveTabsEnabled(),
              onChange: function(value) {
                self.plugin.setZenHideInactiveTabs(value);
              }
            });
          }
          if (self.activeTab === "sessions") {
            addSubsection(contentEl, L.settingsSubsectionSessionRestore);
            addToggleSetting(contentEl, {
              name: L.settingsRestoreTabsByFilename,
              desc: L.settingsRestoreTabsByFilenameDesc,
              value: self.plugin.isRestoreTabsByFilenameEnabled(),
              onChange: function(value) {
                self.plugin.setRestoreTabsByFilename(value);
              }
            });
            new obsidian2.Setting(contentEl).setName(L.settingsNoteUidProperty).setDesc(L.settingsNoteUidPropertyDesc).addText(function(text) {
              text.setPlaceholder(L.settingsNoteUidPropertyPlaceholder || "uid");
              text.setValue(self.plugin.getNoteUidPropertyName());
              text.onChange(function(value) {
                self.plugin.setNoteUidPropertyName(value);
              });
            });
            addSubsection(contentEl, L.settingsSubsectionAutoSaveMode);
            var autoSaveOnSwitch = self.plugin.isAutoSaveOnSwitchEnabled();
            new obsidian2.Setting(contentEl).setName(L.settingsAutoSaveOnSwitch).setDesc(L.settingsAutoSaveOnSwitchDesc).addToggle(function(toggle) {
              toggle.setValue(autoSaveOnSwitch);
              toggle.onChange(function(value) {
                self.plugin.setAutoSaveOnSwitch(value).then(function() {
                  self.display();
                });
              });
            });
            if (!autoSaveOnSwitch) {
              addToggleSetting(contentEl, {
                name: L.settingsWarnUnsavedSwitch,
                desc: L.settingsWarnUnsavedSwitchDesc,
                value: self.plugin.isWarnOnUnsavedSwitchEnabled(),
                onChange: function(value) {
                  self.plugin.setWarnOnUnsavedSwitch(value);
                }
              });
              addToggleSetting(contentEl, {
                name: L.settingsHighlightUnsavedSessionChanges,
                desc: L.settingsHighlightUnsavedSessionChangesDesc,
                value: self.plugin.isUnsavedStatusBarHighlightEnabled(),
                onChange: function(value) {
                  self.plugin.setUnsavedStatusBarHighlight(value);
                }
              });
              addToggleSetting(contentEl, {
                name: L.settingsConfirmQuickActions,
                desc: L.settingsConfirmQuickActionsDesc,
                value: !!self.plugin.data.confirmQuickActions,
                onChange: function(value) {
                  self.plugin.setConfirmQuickActions(value);
                }
              });
            }
            addSection(L.settingsSectionSessionListSearch);
            addToggleSetting(contentEl, {
              name: L.settingsShowFilterInput,
              desc: L.settingsShowFilterInputDesc,
              value: !!self.plugin.data.showFilterInput,
              onChange: function(value) {
                self.plugin.setShowFilterInput(value);
              }
            });
            new obsidian2.Setting(contentEl).setName(L.settingsOverlayDefaultFocus).setDesc(L.settingsOverlayDefaultFocusDesc).addDropdown(function(dropdown) {
              dropdown.addOption("current-session", L.settingsOverlayFocusCurrentSession);
              dropdown.addOption("session-filter", L.settingsOverlayFocusSessionFilter);
              dropdown.addOption("session-create", L.settingsOverlayFocusSessionCreate);
              dropdown.setValue(self.plugin.data.overlayDefaultFocus || "current-session");
              dropdown.onChange(function(value) {
                self.plugin.setOverlayDefaultFocus(value);
              });
            });
            addSection(L.settingsSectionDeletion);
            addToggleSetting(contentEl, {
              name: L.settingsConfirmDelete,
              desc: L.settingsConfirmDeleteDesc,
              value: self.plugin.data.confirmDeleteByHotkey !== false,
              onChange: function(value) {
                self.plugin.setConfirmDeleteByHotkey(value);
              }
            });
            addSection(L.historyTitle);
            var versionHistoryEnabled = self.plugin.isVersionHistoryEnabled();
            var vhMasterSetting = new obsidian2.Setting(contentEl).setName(L.settingsVersionHistoryEnabled).setDesc(L.settingsVersionHistoryEnabledDesc).addToggle(function(toggle) {
              toggle.setValue(versionHistoryEnabled);
              toggle.onChange(function(value) {
                self.plugin.setVersionHistoryEnabled(value).then(function() {
                  self.display();
                });
              });
            });
            vhMasterSetting.settingEl.addClass("wpp-has-nested");
            var vhNestedDiv = vhMasterSetting.settingEl.createDiv({ cls: "wpp-nested-settings" });
            if (self.plugin.isAutoSaveOnSwitchEnabled()) {
              new obsidian2.Setting(vhNestedDiv).setName(L.settingsVersionHistoryInterval).setDesc(L.settingsVersionHistoryIntervalDesc).addDropdown(function(dropdown) {
                dropdown.addOption("1", "1");
                dropdown.addOption("2", "2");
                dropdown.addOption("5", "5");
                dropdown.addOption("10", "10");
                dropdown.addOption("15", "15");
                dropdown.addOption("30", "30");
                dropdown.setValue(String(self.plugin.getVersionHistorySnapshotInterval()));
                if (!versionHistoryEnabled) dropdown.setDisabled(true);
                dropdown.onChange(function(value) {
                  self.plugin.setVersionHistorySnapshotInterval(value);
                });
              });
            }
            addToggleSetting(vhNestedDiv, {
              name: L.settingsVersionHistoryConfirmRestore,
              desc: L.settingsVersionHistoryConfirmRestoreDesc,
              value: self.plugin.isVersionHistoryConfirmRestoreEnabled(),
              disabled: !versionHistoryEnabled,
              onChange: function(value) {
                self.plugin.setVersionHistoryConfirmRestore(value);
              }
            });
            addSection(L.rotationBackupSectionTitle);
            new obsidian2.Setting(contentEl).setName(L.rotationBackupCreate).setDesc(L.rotationBackupDesc).addButton(function(btn) {
              btn.setButtonText(L.rotationBackupCreateBtn);
              btn.onClick(function() {
                btn.setDisabled(true);
                var sessionData = self.plugin.extractSessionData(self.plugin.data);
                sessionData._wppSavedAt = Date.now();
                var backupData = self.plugin.prepareRotationBackupData(sessionData);
                self.plugin.ensureDir(self.plugin.getBackupsDirPath()).then(function() {
                  return self.plugin.copyFileIfExists(
                    self.plugin.getRotationBackupPath(2),
                    self.plugin.getRotationBackupPath(3)
                  );
                }).then(function() {
                  return self.plugin.copyFileIfExists(
                    self.plugin.getRotationBackupPath(1),
                    self.plugin.getRotationBackupPath(2)
                  );
                }).then(function() {
                  return self.plugin.writeJson(
                    self.plugin.getRotationBackupPath(1),
                    backupData
                  );
                }).then(function() {
                  self.plugin._lastRotationBackupAt = Date.now();
                  self.display();
                }).catch(function() {
                  btn.setDisabled(false);
                });
              });
            });
            var backupListEl = contentEl.createDiv({ cls: "wpp-backup-list" });
            backupListEl.createDiv({ text: L.rotationBackupNone, cls: "wpp-backup-none" });
            self.plugin.getRotationBackupInfo().then(function(backups) {
              backupListEl.empty();
              if (backups.length === 0) {
                backupListEl.createDiv({ text: L.rotationBackupNone, cls: "wpp-backup-none" });
                return;
              }
              for (var i = 0; i < backups.length; i++) {
                (function(backup) {
                  var absoluteTime = "";
                  try {
                    absoluteTime = new Date(backup.savedAt).toLocaleString();
                  } catch (e) {
                    absoluteTime = String(backup.savedAt);
                  }
                  var relativeTime = formatRelativeTime(backup.savedAt);
                  var backupSummary = relativeTime + "  \xB7  " + L.rotationBackupGeneration(backup.sessionCount);
                  var backupDesc = absoluteTime;
                  if (backup.backupPlatform) backupDesc += "  \xB7  " + backup.backupPlatform;
                  var setting = new obsidian2.Setting(backupListEl);
                  var nameEl = setting.nameEl;
                  var numSpan = document.createElement("span");
                  numSpan.textContent = backup.generation + ".";
                  numSpan.style.color = "var(--text-accent)";
                  numSpan.style.marginRight = "6px";
                  nameEl.appendChild(numSpan);
                  nameEl.appendText(backupSummary);
                  setting.setDesc(backupDesc).addButton(function(btn) {
                    btn.setButtonText(L.rotationBackupRestore);
                    btn.onClick(function() {
                      new modals2.ConfirmModal(
                        self.app,
                        L.rotationBackupRestoreConfirm(absoluteTime, backup.sessionCount),
                        function() {
                          return self.plugin.restoreFromRotationBackup(backup.generation).then(function(ok) {
                            if (ok) self.display();
                          });
                        },
                        { confirmText: L.rotationBackupRestore }
                      ).open();
                    });
                  });
                })(backups[i]);
              }
            });
          }
          if (self.activeTab === "groups") {
            addToggleSetting(contentEl, {
              name: L.settingsSectionGroups,
              desc: L.settingsSectionGroupsDesc,
              value: self.plugin.isGroupFeatureEnabled(),
              onChange: function(value) {
                self.plugin.setGroupFeatureEnabled(value).then(function() {
                  self.display();
                });
              }
            });
            if (self.plugin.isGroupFeatureEnabled()) {
              var createGroupSetting = new obsidian2.Setting(contentEl).setName(L.settingsGroupCreate).setDesc(L.settingsGroupCreateDesc);
              var groupNameInput = null;
              createGroupSetting.addText(function(text) {
                groupNameInput = text;
                text.setPlaceholder(L.settingsGroupCreatePlaceholder);
              });
              createGroupSetting.addButton(function(btn) {
                btn.setButtonText(L.settingsGroupCreateBtn);
                btn.onClick(function() {
                  if (!groupNameInput) return;
                  self.plugin.createGroupValidated(groupNameInput.getValue()).then(function(created) {
                    if (!created) return;
                    self.display();
                  });
                });
              });
              var orderedGroups = self.plugin.getOrderedGroups();
              for (var gIdx = 0; gIdx < orderedGroups.length; gIdx++) {
                (function(group) {
                  var sessionCount = self.plugin.getGroupSessionIds(group.id).length;
                  var groupSetting = new obsidian2.Setting(contentEl).setName(group.name).setDesc(L.settingsGroupManageSessionsDesc + " \xB7 " + L.settingsGroupSessionCount(sessionCount));
                  groupSetting.addButton(function(btn) {
                    btn.setButtonText(L.settingsGroupManageSessions);
                    btn.onClick(function() {
                      new GroupSessionsModal(self.app, self.plugin, group).open();
                    });
                  });
                  groupSetting.addExtraButton(function(btn) {
                    btn.setIcon("pencil");
                    btn.setTooltip(L.rename);
                    btn.onClick(function() {
                      new modals2.RenameModal(self.app, group.name, function(newName) {
                        self.plugin.renameGroupValidated(group.id, newName).then(function(renamed) {
                          if (!renamed) return;
                          self.display();
                        });
                      }, {
                        emptyNotice: L.groupEmptyName
                      }).open();
                    });
                  });
                  groupSetting.addExtraButton(function(btn) {
                    btn.setIcon("trash-2");
                    btn.setTooltip(L.settingsGroupDelete);
                    btn.onClick(function() {
                      new modals2.ConfirmModal(self.app, L.settingsGroupDeleteConfirm(group.name), function() {
                        self.plugin.deleteGroup(group.id).then(function() {
                          self.display();
                        });
                      }).open();
                    });
                  });
                })(orderedGroups[gIdx]);
              }
            }
          }
          if (self.activeTab === "advanced") {
            let addDevCardRow = function(label, value, options) {
              options = options || {};
              var row = devCardEl.createDiv({ cls: "wpp-dev-card-row" });
              row.createDiv({ text: label, cls: "wpp-dev-card-label" });
              row.createDiv({
                text: String(value),
                cls: options.code ? "wpp-dev-card-value wpp-dev-card-value-code" : "wpp-dev-card-value"
              });
            };
            addSection(L.settingsAdvancedStorageSubsection);
            var sessionStorageLocation = self.plugin.getSessionStorageLocation();
            new obsidian2.Setting(contentEl).setName(L.settingsSessionStorageLocation).setDesc(L.settingsSessionStorageLocationDesc(self.plugin.getSessionsPath()));
            addAsyncActionSetting(contentEl, {
              name: L.settingsMoveSessionsToPluginFolder,
              desc: L.settingsMoveSessionsToPluginFolderDesc,
              buttonText: L.settingsMoveSessionsToPluginFolderBtn,
              disabled: sessionStorageLocation === "plugin-folder",
              run: function() {
                return self.plugin.setSessionStorageLocation("plugin-folder");
              },
              onSuccess: function() {
                self.display();
              },
              failureNotice: L.sessionStorageMoveFailed
            });
            addAsyncActionSetting(contentEl, {
              name: L.settingsMoveSessionsToVaultFolder,
              desc: L.settingsMoveSessionsToVaultFolderDesc,
              buttonText: L.settingsMoveSessionsToVaultFolderBtn,
              disabled: sessionStorageLocation === "vault-folder",
              run: function() {
                return self.plugin.setSessionStorageLocation("vault-folder");
              },
              onSuccess: function() {
                self.display();
              },
              failureNotice: L.sessionStorageMoveFailed
            });
            var useLocalSettings = self.plugin.isUsingLocalSettings();
            addToggleSetting(contentEl, {
              name: L.settingsUseLocalSettings,
              desc: L.settingsUseLocalSettingsDesc,
              value: useLocalSettings,
              onChange: function(value) {
                self.plugin.setUseLocalSettings(value, { notify: true }).then(function() {
                  self.display();
                }).catch(function() {
                  new obsidian2.Notice(L.localSettingsOperationFailed);
                  self.display();
                });
              }
            });
            addAsyncActionSetting(contentEl, {
              name: L.settingsCopyGlobalToLocal,
              desc: L.settingsCopyGlobalToLocalDesc,
              buttonText: L.settingsCopyGlobalToLocalBtn,
              disabled: !useLocalSettings,
              run: function() {
                return self.plugin.copyGlobalSettingsToLocal({ notify: true });
              },
              onSuccess: function() {
                self.display();
              },
              failureNotice: L.localSettingsOperationFailed
            });
            addAsyncActionSetting(contentEl, {
              name: L.settingsResetLocalSettings,
              desc: L.settingsResetLocalSettingsDesc,
              buttonText: L.settingsResetLocalSettingsBtn,
              disabled: !useLocalSettings,
              run: function() {
                return self.plugin.resetLocalSettings({ notify: true });
              },
              onSuccess: function() {
                self.display();
              },
              failureNotice: L.localSettingsOperationFailed
            });
            addSection(L.settingsAdvancedTransferSubsection);
            new obsidian2.Setting(contentEl).setName(L.settingsExportSessions).setDesc(L.settingsExportSessionsDesc).addButton(function(btn) {
              btn.setButtonText(L.settingsExportSessionsBtn);
              btn.onClick(function() {
                self.plugin.exportSessionsSnapshot().catch(function() {
                  new obsidian2.Notice(L.exportSessionsFailed);
                });
              });
            });
            new obsidian2.Setting(contentEl).setName(L.settingsImportSessions).setDesc(L.settingsImportSessionsDesc).addButton(function(btn) {
              btn.setButtonText(L.settingsImportSessionsBtn);
              btn.onClick(function() {
                new modals2.ConfirmModal(self.app, L.confirmImportSessions, function() {
                  return self.plugin.importSessionsFromLatestExport().catch(function() {
                    new obsidian2.Notice(L.importSessionsFailed);
                  });
                }, {
                  confirmText: L.settingsImportSessionsBtn
                }).open();
              });
            });
            addSection(L.settingsSectionReset);
            addDangerResetSetting(contentEl, self.app, function() {
              self.display();
            }, {
              name: L.settingsResetSettings,
              desc: L.settingsResetSettingsDesc,
              buttonText: L.settingsResetSettingsBtn,
              confirmMessage: L.confirmResetSettings,
              run: function() {
                return self.plugin.resetSettingsToDefault();
              },
              successNotice: L.resetSettingsDone,
              failureNotice: L.resetSettingsFailed
            });
            addDangerResetSetting(contentEl, self.app, function() {
              self.display();
            }, {
              name: L.settingsResetSessions,
              desc: L.settingsResetSessionsDesc,
              buttonText: L.settingsResetSessionsBtn,
              confirmMessage: L.confirmResetSessions,
              confirmHint: L.resetSessionsHint,
              run: function() {
                return self.plugin.resetSessionsToDefault();
              },
              successNotice: L.resetSessionsDone,
              failureNotice: L.resetSessionsFailed
            });
            addDangerResetSetting(contentEl, self.app, function() {
              self.display();
            }, {
              name: L.settingsResetBackupsAndHistory,
              desc: L.settingsResetBackupsAndHistoryDesc,
              buttonText: L.settingsResetBackupsAndHistoryBtn,
              confirmMessage: L.confirmResetBackupsAndHistory,
              confirmHint: L.resetBackupsAndHistoryHint,
              run: function() {
                return self.plugin.clearBackupsAndVersionHistory();
              },
              successNotice: L.resetBackupsAndHistoryDone,
              failureNotice: L.resetBackupsAndHistoryFailed
            });
            addDangerResetSetting(contentEl, self.app, function() {
              self.display();
            }, {
              name: L.settingsResetSessionsAndSettings,
              desc: L.settingsResetSessionsAndSettingsDesc,
              buttonText: L.settingsResetSessionsAndSettingsBtn,
              confirmMessage: L.confirmResetSessionsAndSettings,
              run: function() {
                return self.plugin.resetSessionsAndSettingsToDefault();
              },
              successNotice: L.resetSessionsAndSettingsDone,
              failureNotice: L.resetSessionsAndSettingsFailed
            });
            addSection(L.settingsDeveloperSection);
            var diagnosticsInfo = self.plugin.getStorageDiagnosticsInfo();
            var diagnosticsUpdatedText = "";
            try {
              diagnosticsUpdatedText = new Date(diagnosticsInfo.updatedAt).toLocaleString();
            } catch (e) {
              diagnosticsUpdatedText = String(diagnosticsInfo.updatedAt);
            }
            var devCardEl = contentEl.createDiv({ cls: "wpp-dev-card" });
            devCardEl.createDiv({
              text: L.settingsStorageDiagnostics,
              cls: "wpp-dev-card-title"
            });
            devCardEl.createDiv({
              text: L.settingsStorageDiagnosticsDesc,
              cls: "wpp-dev-card-desc"
            });
            addDevCardRow(L.settingsStorageFieldSessions, diagnosticsInfo.sessionsPath, { code: true });
            addDevCardRow(L.settingsStorageFieldSessionsBackup, diagnosticsInfo.sessionsBackupPath, { code: true });
            addDevCardRow(L.settingsStorageFieldSessionStorageLocation, diagnosticsInfo.sessionStorageLocation, { code: true });
            addDevCardRow(L.settingsStorageFieldLocalSettings, diagnosticsInfo.localSettingsPath, { code: true });
            addDevCardRow(L.settingsStorageFieldGlobalSettings, diagnosticsInfo.globalSettingsPath, { code: true });
            addDevCardRow(L.settingsStorageFieldSessionCount, diagnosticsInfo.sessionCount);
            addDevCardRow(L.settingsStorageFieldUpdatedAt, diagnosticsUpdatedText);
          }
          var footerEl = containerEl.createDiv({ cls: "wpp-settings-footer" });
          var creditEl = footerEl.createEl("p", { cls: "wpp-settings-credit" });
          creditEl.appendText(L.settingsForkCreditBefore);
          creditEl.createEl("a", {
            cls: "wpp-settings-credit-link",
            text: L.settingsForkCreditLink,
            href: "https://github.com/s1m4ne/obsidian-workspace-plus",
            attr: { target: "_blank", rel: "noopener" }
          });
          creditEl.appendText(L.settingsForkCreditAfter);
        };
        return WorkspacePlusPlusSettingTab2;
      }(obsidian2.PluginSettingTab)
    );
    exports2.WorkspacePlusPlusSettingTab = WorkspacePlusPlusSettingTab;
  }
});

// src/plugin/default-data.js
var require_default_data = __commonJS({
  "src/plugin/default-data.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      activeSessionId: null,
      sessions: {},
      sessionOrder: [],
      sessionStorageLocation: "plugin-folder",
      language: "auto",
      previewNext: false,
      previewPrevious: false,
      confirmDeleteByHotkey: true,
      confirmQuickActions: false,
      autoSaveOnSwitch: true,
      warnOnUnsavedSwitch: true,
      highlightUnsavedSessionChanges: true,
      restoreSidebars: true,
      restoreTabsByFilename: true,
      noteUidProperty: "uid",
      taskViewThumbnailRatio: "4:3",
      taskViewContentZoom: 0.45,
      showTaskViewHints: true,
      // zenMode is per-session (session.zenMode); kept here only for one-time migration
      zenMode: false,
      zenHideInactiveTabs: true,
      showStatusBarWorkspace: true,
      showStatusBarZenMode: true,
      statusBarQuickSwitcher: false,
      groupFeatureEnabled: true,
      showFilterInput: false,
      overlayDefaultFocus: "current-session",
      sessionManagerPanelMode: "sessions",
      sessionManagerViewGroupId: null,
      archivedSessions: {},
      archivedOrder: [],
      showActiveSwitchCommand: false,
      numberedSwitchCommands: false,
      searchOverlayPosition: null,
      searchOverlaySize: null,
      groups: {},
      groupOrder: [],
      sessionGroups: {},
      activeGroupId: null,
      versionHistoryEnabled: true,
      versionHistorySnapshotInterval: 5,
      versionHistoryCtrlRmbRestore: true,
      versionHistoryConfirmRestore: true,
      statusBarModScrollSwitch: false,
      statusBarScrollPreset: "trackpad",
      statusBarScrollModifierMode: "none",
      statusBarScrollThreshold: 30,
      statusBarScrollCooldownMs: 500,
      statusBarScrollResetMs: 250,
      statusBarScrollInvert: false,
      statusBarActions: {
        click: "sessionManager",
        altClick: "reloadWithoutSaving",
        modClick: "saveSession",
        shiftClick: "none",
        middleClick: "none",
        altMiddleClick: "none",
        modMiddleClick: "reloadWithoutSaving",
        shiftMiddleClick: "none",
        rightClick: "sessionMenu",
        altRightClick: "none",
        modRightClick: "restoreLatestHistory",
        shiftRightClick: "none"
      }
    };
  }
});

// src/plugin/register-commands.js
var require_register_commands = __commonJS({
  "src/plugin/register-commands.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var modals2 = require_modals2();
    function registerCommands2(plugin) {
      var L = i18n2.L;
      function addCommand(command) {
        plugin.addCommand(command);
      }
      function addSimpleCommand(id, name, callback) {
        addCommand({
          id,
          name,
          callback
        });
      }
      addSimpleCommand("manage-sessions", L.cmdManage, function() {
        new modals2.SessionManagerModal(plugin.app, plugin).open();
      });
      addSimpleCommand("switch-tabs", L.cmdTabSwitcher, function() {
        if (!plugin.tabSwitcherModal) {
          plugin.tabSwitcherModal = new modals2.TabSwitcherModal(plugin.app, plugin);
        }
        plugin.tabSwitcherModal.open();
      });
      addSimpleCommand("toggle-zen-mode", L.cmdToggleZenMode, function() {
        plugin.toggleZenMode({ notify: true });
      });
      addSimpleCommand("save-current-session", L.cmdSaveCurrent, function() {
        plugin.saveActiveSession();
      });
      addSimpleCommand("toggle-auto-save-on-switch", L.cmdToggleAutoSave, function() {
        plugin.toggleAutoSaveOnSwitch({ notify: true });
      });
      addCommand({
        id: "enable-auto-save-on-switch",
        name: L.cmdEnableAutoSave,
        checkCallback: function(checking) {
          var canRun = !plugin.isAutoSaveOnSwitchEnabled();
          if (!canRun) return false;
          if (!checking) plugin.setAutoSaveOnSwitch(true, { notify: true });
          return true;
        }
      });
      addCommand({
        id: "disable-auto-save-on-switch",
        name: L.cmdDisableAutoSave,
        checkCallback: function(checking) {
          var canRun = plugin.isAutoSaveOnSwitchEnabled();
          if (!canRun) return false;
          if (!checking) plugin.setAutoSaveOnSwitch(false, { notify: true });
          return true;
        }
      });
      addCommand({
        id: "version-history",
        name: L.cmdVersionHistory,
        checkCallback: function(checking) {
          if (!plugin.isVersionHistoryEnabled()) return false;
          var session = plugin.getActiveSession();
          if (!session) return false;
          if (!checking) {
            new modals2.HistoryModal(plugin.app, plugin, session).open();
          }
          return true;
        }
      });
    }
    module2.exports = registerCommands2;
  }
});

// src/plugin/methods/hotkeys.js
var require_hotkeys = __commonJS({
  "src/plugin/methods/hotkeys.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    function attachHotkeyMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.formatHotkey = function(hotkey) {
        var isMac = utils.isMacPlatform();
        var parts = [];
        var mods = hotkey.modifiers || [];
        for (var i = 0; i < mods.length; i++) {
          var m = mods[i];
          if (m === "Mod") parts.push(isMac ? "\u2318" : "Ctrl");
          else if (m === "Alt") parts.push(isMac ? "\u2325" : "Alt");
          else if (m === "Shift") parts.push(isMac ? "\u21E7" : "Shift");
          else if (m === "Ctrl") parts.push(isMac ? "\u2303" : "Ctrl");
        }
        var key = hotkey.key;
        if (key === "ArrowLeft") key = "\u2190";
        else if (key === "ArrowRight") key = "\u2192";
        else if (key === "ArrowUp") key = "\u2191";
        else if (key === "ArrowDown") key = "\u2193";
        else if (key === ",") key = "<";
        else if (key === ".") key = ">";
        if (isMac) return parts.join("") + key;
        parts.push(key);
        return parts.join("+");
      };
      WorkspacePlusPlus2.prototype.getCommandHotkey = function(cmdId, index) {
        var idx = index || 0;
        var fullId = this.manifest.id + ":" + cmdId;
        try {
          var mgr = this.app.hotkeyManager;
          if (!mgr) return "";
          var hotkeys = mgr.getHotkeys ? mgr.getHotkeys(fullId) : null;
          if (!hotkeys || hotkeys.length === 0) {
            hotkeys = mgr.getDefaultHotkeys ? mgr.getDefaultHotkeys(fullId) : null;
          }
          if (!hotkeys || hotkeys.length <= idx) return "";
          return this.formatHotkey(hotkeys[idx]);
        } catch (e) {
          return "";
        }
      };
    }
    module2.exports = attachHotkeyMethods;
  }
});

// src/search-overlay-key-handler.js
var require_search_overlay_key_handler = __commonJS({
  "src/search-overlay-key-handler.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var modals2 = require_modals2();
    var navigationUtils = require_navigation_utils();
    var utils = require_utils();
    function hasBlockingModal() {
      return !!document.querySelector(".modal-container");
    }
    function syncSearchOverlaySelectedIndex(plugin, filtered, currentIndex, options) {
      options = options || {};
      if (!filtered || filtered.length === 0) {
        return -1;
      }
      var activeIdx = plugin.findActiveSessionIndex(filtered);
      if (activeIdx !== -1) {
        return activeIdx;
      }
      if (options.preserveWhenMissing) {
        if (currentIndex >= filtered.length) {
          return filtered.length - 1;
        }
        return currentIndex < 0 ? 0 : currentIndex;
      }
      return 0;
    }
    function handleSearchOverlayHorizontalKey(e, activeEl, options) {
      if (activeEl === options.saveInput && e.key === "ArrowRight") {
        if (navigationUtils.isTextInputCursorAtEnd(options.saveInput)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          options.saveBtn.focus();
        }
        return true;
      }
      if (activeEl === options.saveBtn && e.key === "ArrowLeft") {
        e.preventDefault();
        e.stopImmediatePropagation();
        options.focusSaveInput();
        return true;
      }
      return false;
    }
    function handleSearchOverlayVerticalKey(e, activeEl, options) {
      if (activeEl === options.searchInput) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.key === "ArrowDown") {
          options.focusFirstResult();
        } else {
          options.focusSaveInput();
        }
        return true;
      }
      if (activeEl === options.saveInput || activeEl === options.saveBtn) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.key === "ArrowDown") {
          if (options.hasSearchInput()) {
            options.focusSearchInput();
          } else {
            options.focusFirstResult();
          }
        } else {
          options.focusLastResult();
        }
        return true;
      }
      var filtered = options.getFiltered();
      e.preventDefault();
      if (filtered.length === 0) return true;
      options.setKeyboardNav(true);
      var dir = e.key === "ArrowUp" ? -1 : 1;
      var selectedIndex = options.getSelectedIndex();
      var nextIndex = selectedIndex + dir;
      if (nextIndex < 0) {
        if (options.hasSearchInput()) {
          options.focusSearchInput();
        } else {
          options.focusSaveInput();
        }
        return true;
      }
      if (nextIndex >= filtered.length) {
        options.focusSaveInput();
        return true;
      }
      options.setSelectedIndex(nextIndex);
      options.updateSelection();
      return true;
    }
    function handleSearchOverlayEnterKey(e, activeEl, options) {
      if (activeEl === options.saveInput || activeEl === options.saveBtn) return false;
      e.preventDefault();
      e.stopImmediatePropagation();
      options.switchSelected({ shiftKey: e.shiftKey });
      return true;
    }
    function handleSearchOverlayDeleteKey(e, activeEl, options) {
      var searchInput = options.searchInput;
      if (activeEl === searchInput && searchInput.value.length > 0) return false;
      if (activeEl === options.saveInput || activeEl === options.saveBtn) return false;
      e.preventDefault();
      var filteredForDelete = options.getFiltered();
      var selectedForDelete = options.getSelectedIndex();
      if (selectedForDelete < 0 || selectedForDelete >= filteredForDelete.length) return true;
      var sess = filteredForDelete[selectedForDelete];
      if (Object.keys(options.plugin.data.sessions).length <= 1) {
        new obsidian2.Notice(i18n2.L.cannotDeleteLast);
        return true;
      }
      var doDelete = function() {
        options.plugin.deleteSession(sess.id).then(function(deleted) {
          if (!deleted) return;
          new obsidian2.Notice(i18n2.L.deleted(sess.name));
          options.refreshOrderedSessions();
        });
      };
      if (options.plugin.data.confirmDeleteByHotkey !== false) {
        new modals2.ConfirmModal(options.plugin.app, i18n2.L.confirmDeleteActive(sess.name), doDelete).open();
      } else {
        doDelete();
      }
      return true;
    }
    function handleSearchOverlaySlashKey(e, activeEl, options) {
      if (activeEl === options.searchInput || activeEl === options.saveInput || activeEl === options.saveBtn) return false;
      e.preventDefault();
      navigationUtils.focusTextInputSelect(options.searchInput);
      return true;
    }
    function createSearchOverlayKeyHandler(options) {
      return function(e) {
        var plugin = options.plugin;
        if (!plugin.searchOverlayEl) return;
        if (hasBlockingModal()) return;
        var activeEl = document.activeElement;
        if (utils.isModPressed(e)) {
          return;
        }
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopImmediatePropagation();
          plugin.hideSearchOverlay();
          return;
        }
        if (e.key === "Tab") {
          if (activeEl === options.saveInput || activeEl === options.saveBtn) return;
          if (!plugin.isGroupFeatureEnabled() || plugin.getOrderedGroups().length === 0) return;
          e.preventDefault();
          e.stopImmediatePropagation();
          var nextGroupId = plugin.getRelativeGroupId(options.getOverlayGroupId(), e.shiftKey ? -1 : 1);
          if (typeof nextGroupId === "undefined") return;
          options.applyOverlayGroupSelection(nextGroupId);
          return;
        }
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          if (handleSearchOverlayHorizontalKey(e, activeEl, options)) return;
        }
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          if (handleSearchOverlayVerticalKey(e, activeEl, options)) return;
        }
        if (e.key === "Enter" && !e.isComposing) {
          if (handleSearchOverlayEnterKey(e, activeEl, options)) return;
        }
        if (e.key === "Delete" || e.key === "Backspace") {
          if (handleSearchOverlayDeleteKey(e, activeEl, options)) return;
        }
        if (e.key === "/" && activeEl !== options.searchInput && activeEl !== options.saveInput && activeEl !== options.saveBtn) {
          if (handleSearchOverlaySlashKey(e, activeEl, options)) return;
        }
      };
    }
    module2.exports = {
      hasBlockingModal,
      syncSearchOverlaySelectedIndex,
      createSearchOverlayKeyHandler
    };
  }
});

// src/plugin/methods/overlays.js
var require_overlays = __commonJS({
  "src/plugin/methods/overlays.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var modals2 = require_modals2();
    var formatRelativeTime = require_format_relative_time();
    var groupTabUi = require_group_tab_ui();
    var navigationUtils = require_navigation_utils();
    var utils = require_utils();
    var searchOverlayKeys = require_search_overlay_key_handler();
    var sessionContextActions = require_session_context_actions();
    var settingsContextMenu = require_settings_context_menu();
    var sessionListActions = require_session_list_actions();
    function attachOverlayMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.filterSessionsByQuery = function(sessions, query) {
        var q = (query || "").trim().toLowerCase();
        if (!q) return sessions.slice();
        return sessions.filter(function(s) {
          return (s.name || "").toLowerCase().indexOf(q) !== -1;
        });
      };
      WorkspacePlusPlus2.prototype.openSearchOverlay = function(anchorEl) {
        var L = i18n2.L;
        var self = this;
        var overlayGroupId = this.isGroupFeatureEnabled() ? this.data.activeGroupId || null : null;
        this.searchOverlayViewGroupId = overlayGroupId;
        var ordered = this.getOrderedSessionsForGroup(overlayGroupId);
        var focusTarget = this.data.overlayDefaultFocus || "current-session";
        this.hideSwitchOverlay();
        this.hideSearchOverlay();
        var filtered = ordered.slice();
        var selectedIndex = 0;
        var keyboardNav = false;
        function syncSelectedIndexToActive(options) {
          selectedIndex = searchOverlayKeys.syncSearchOverlaySelectedIndex(self, filtered, selectedIndex, options || {});
        }
        syncSelectedIndexToActive();
        function getOverlayGroupId() {
          if (!self.isGroupFeatureEnabled()) {
            overlayGroupId = null;
            self.searchOverlayViewGroupId = null;
            return null;
          }
          if (overlayGroupId === "__ungrouped__") {
            self.searchOverlayViewGroupId = "__ungrouped__";
            return "__ungrouped__";
          }
          var groups = self.data.groups || {};
          if (overlayGroupId && !groups[overlayGroupId]) {
            overlayGroupId = self.data.activeGroupId || null;
            if (overlayGroupId && !groups[overlayGroupId]) {
              overlayGroupId = null;
            }
          }
          self.searchOverlayViewGroupId = overlayGroupId || null;
          return overlayGroupId || null;
        }
        function applyOverlayGroupSelection(groupId) {
          return self.resolveGroupViewSelection(groupId).then(function(result) {
            overlayGroupId = result.resolvedGroupId || null;
            self.searchOverlayViewGroupId = overlayGroupId;
            renderGroupTabs();
            refreshOrderedSessions();
            return result.switched;
          });
        }
        var overlay = document.createElement("div");
        overlay.className = "wpp-switch-overlay wpp-search-overlay";
        overlay.tabIndex = -1;
        var corners = ["tl", "tr", "bl", "br"];
        for (var ci = 0; ci < corners.length; ci++) {
          var corner = document.createElement("div");
          corner.className = "wpp-resize-corner wpp-resize-" + corners[ci];
          corner.dataset.corner = corners[ci];
          overlay.appendChild(corner);
        }
        var edges = ["top", "right", "bottom", "left"];
        for (var ei = 0; ei < edges.length; ei++) {
          var edgeEl = document.createElement("div");
          edgeEl.className = "wpp-resize-edge wpp-resize-" + edges[ei];
          edgeEl.dataset.edge = edges[ei];
          overlay.appendChild(edgeEl);
        }
        var headerRow = document.createElement("div");
        headerRow.className = "wpp-search-header";
        var countSpan = document.createElement("div");
        countSpan.className = "wpp-switch-count";
        headerRow.appendChild(countSpan);
        var closeBtn = document.createElement("div");
        closeBtn.className = "wpp-search-close";
        obsidian2.setIcon(closeBtn, "x");
        closeBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          self.hideSearchOverlay();
        });
        headerRow.appendChild(closeBtn);
        overlay.appendChild(headerRow);
        var saveRow = document.createElement("div");
        saveRow.className = "wpp-save-container";
        var saveInput = document.createElement("input");
        saveInput.type = "text";
        saveInput.className = "wpp-save-input";
        saveInput.placeholder = L.savePlaceholder;
        saveRow.appendChild(saveInput);
        var saveBtn = document.createElement("button");
        saveBtn.className = "wpp-save-btn";
        saveBtn.textContent = L.save;
        saveRow.appendChild(saveBtn);
        function onOverlaySave() {
          var selectedGroupId = getOverlayGroupId();
          self.createSessionForViewedGroup(saveInput.value, selectedGroupId).then(function(result) {
            if (!result || !result.created) return;
            var createdName = result.name;
            overlayGroupId = result.viewGroupId || null;
            self.searchOverlayViewGroupId = overlayGroupId;
            saveInput.value = "";
            new obsidian2.Notice(L.created(createdName));
            renderGroupTabs();
            refreshOrderedSessions();
          });
        }
        saveBtn.addEventListener("click", function(e) {
          e.stopPropagation();
          onOverlaySave();
        });
        saveInput.addEventListener("keydown", function(e) {
          if (e.key === "Enter" && !e.isComposing) {
            e.stopPropagation();
            onOverlaySave();
          }
        });
        overlay.appendChild(saveRow);
        var searchRow = document.createElement("div");
        searchRow.className = "wpp-search-row";
        var searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.className = "wpp-search-input";
        searchInput.placeholder = L.searchOverlayPlaceholder;
        searchRow.appendChild(searchInput);
        this.searchOverlayInputEl = searchInput;
        if (!self.data.showFilterInput) {
          searchRow.style.display = "none";
        }
        overlay.appendChild(searchRow);
        var groupTabsRow = document.createElement("div");
        groupTabsRow.className = "wpp-group-tabs";
        function stripSaveHint(text) {
          return text.replace(/  \/  ⇧.+?  \/  /, "  /  ");
        }
        function renderGroupTabs() {
          while (groupTabsRow.firstChild) groupTabsRow.removeChild(groupTabsRow.firstChild);
          var autoSave = self.isAutoSaveOnSwitchEnabled();
          if (!self.isGroupFeatureEnabled()) {
            groupTabsRow.style.display = "none";
            footerRow.textContent = autoSave ? stripSaveHint(L.searchOverlayHelp) : L.searchOverlayHelp;
            return;
          }
          var groups = self.data.groups || {};
          var realGroups = self.getOrderedGroups();
          groupTabsRow.style.display = "";
          var helpText = realGroups.length > 0 ? L.searchOverlayHelpWithGroups || L.searchOverlayHelp : L.searchOverlayHelp;
          footerRow.textContent = autoSave ? stripSaveHint(helpText) : helpText;
          var groupOrder = self.getOrderedGroupTabIds();
          groupTabUi.renderGroupTabs({
            app: self.app,
            plugin: self,
            containerEl: groupTabsRow,
            groups,
            groupOrder,
            selectedGroupId: getOverlayGroupId(),
            stopPropagationOnMouseDown: true,
            onSelectGroup: function(groupId) {
              applyOverlayGroupSelection(groupId);
            },
            onResetViewGroup: function() {
              overlayGroupId = null;
              self.searchOverlayViewGroupId = null;
            },
            onDeleteGroup: function(deletedGroupId) {
              if (overlayGroupId === deletedGroupId) {
                overlayGroupId = self.data.activeGroupId || null;
                self.searchOverlayViewGroupId = overlayGroupId || null;
              }
            },
            onGroupsChanged: function() {
              renderGroupTabs();
            },
            onSessionsChanged: function() {
              refreshOrderedSessions();
            },
            onGroupOrderCommit: function(newOrder) {
              self.setGroupTabOrder(newOrder);
            },
            addButtonTooltip: L.groupCreateNew,
            onAddGroupClick: function() {
              groupTabUi.openCreateGroupPrompt(self.app, self, function() {
                renderGroupTabs();
                refreshOrderedSessions();
              });
            },
            locateButtonTooltip: L.locateCurrentSession,
            onLocateCurrentClick: function() {
              locateCurrentSessionInOverlay();
            }
          });
        }
        function locateCurrentSessionInOverlay() {
          var activeId = self.data.activeSessionId;
          if (!activeId || !self.data.sessions[activeId]) return;
          if ((searchInput.value || "").trim()) {
            searchInput.value = "";
          }
          var targetGroupId = null;
          if (self.isGroupFeatureEnabled() && typeof self.chooseSessionGroupForView === "function") {
            var preferred = self.chooseSessionGroupForView(activeId);
            if (preferred === null) targetGroupId = "__ungrouped__";
            else if (preferred) targetGroupId = preferred;
          }
          var finishLocate = function() {
            syncSelectedIndexToActive();
            renderList();
          };
          if (!self.isGroupFeatureEnabled() || getOverlayGroupId() === targetGroupId) {
            ordered = self.getOrderedSessionsForGroup(getOverlayGroupId());
            filtered = self.filterSessionsByQuery(ordered, searchInput.value);
            finishLocate();
            return;
          }
          applyOverlayGroupSelection(targetGroupId).then(function() {
            finishLocate();
          });
        }
        overlay.appendChild(groupTabsRow);
        var list = document.createElement("div");
        list.className = "wpp-switch-list wpp-search-list";
        overlay.appendChild(list);
        var emptyEl = document.createElement("div");
        emptyEl.className = "wpp-search-empty";
        emptyEl.textContent = L.noFilteredSessions;
        overlay.appendChild(emptyEl);
        var footerRow = document.createElement("div");
        footerRow.className = "wpp-switch-footer";
        overlay.appendChild(footerRow);
        renderGroupTabs();
        self._refreshOverlaySessions = refreshOrderedSessions;
        function refreshOrderedSessions() {
          ordered = self.getOrderedSessionsForGroup(getOverlayGroupId());
          filtered = self.filterSessionsByQuery(ordered, searchInput.value);
          syncSelectedIndexToActive({ preserveWhenMissing: true });
          renderList();
        }
        function renderList() {
          while (list.firstChild) list.removeChild(list.firstChild);
          if (filtered.length === 0) {
            selectedIndex = -1;
            countSpan.textContent = "0 / 0";
            if (getOverlayGroupId() && ordered.length === 0) {
              emptyEl.textContent = L.noGroupSessions;
            } else {
              emptyEl.textContent = L.noFilteredSessions;
            }
            list.style.display = "none";
            emptyEl.style.display = "flex";
            return;
          }
          if (selectedIndex < 0 || selectedIndex >= filtered.length) {
            var activeIdx = self.findActiveSessionIndex(filtered);
            selectedIndex = activeIdx !== -1 ? activeIdx : 0;
          }
          list.style.display = "";
          emptyEl.style.display = "none";
          countSpan.textContent = selectedIndex + 1 + " / " + filtered.length;
          for (var i = 0; i < filtered.length; i++) {
            var session = filtered[i];
            var isActive = session.id === self.data.activeSessionId;
            var item = document.createElement("div");
            item.className = "wpp-switch-item";
            if (i === selectedIndex) item.classList.add("wpp-kb-selected");
            item.dataset.sessionId = session.id;
            var infoCol = document.createElement("div");
            infoCol.className = "wpp-qs-info-col";
            var nameRow = document.createElement("div");
            nameRow.className = "wpp-qs-name-row";
            var name = document.createElement("div");
            name.className = "wpp-switch-name";
            name.textContent = session.name;
            nameRow.appendChild(name);
            infoCol.appendChild(nameRow);
            var modifiedEl = document.createElement("div");
            modifiedEl.className = "wpp-qs-modified";
            modifiedEl.textContent = formatRelativeTime(session.modified);
            infoCol.appendChild(modifiedEl);
            item.appendChild(infoCol);
            if (isActive) {
              var badge = document.createElement("span");
              badge.className = "wpp-active-badge";
              badge.textContent = L.active;
              item.appendChild(badge);
            }
            var actions = document.createElement("div");
            actions.className = "wpp-qs-actions";
            var saveIcon = null;
            var reloadIcon = null;
            if (isActive && !self.isAutoSaveOnSwitchEnabled()) {
              saveIcon = document.createElement("div");
              saveIcon.className = "wpp-qs-action-btn";
              obsidian2.setIcon(saveIcon, "save");
              obsidian2.setTooltip(saveIcon, L.saveInline, { delay: 250 });
              actions.appendChild(saveIcon);
              reloadIcon = document.createElement("div");
              reloadIcon.className = "wpp-qs-action-btn";
              obsidian2.setIcon(reloadIcon, "rotate-ccw");
              obsidian2.setTooltip(reloadIcon, L.contextReloadSession, { delay: 250 });
              actions.appendChild(reloadIcon);
            }
            var renameIcon = document.createElement("div");
            renameIcon.className = "wpp-qs-action-btn";
            obsidian2.setIcon(renameIcon, "pencil");
            obsidian2.setTooltip(renameIcon, L.rename, { delay: 250 });
            actions.appendChild(renameIcon);
            var deleteIcon = document.createElement("div");
            deleteIcon.className = "wpp-qs-action-btn";
            obsidian2.setIcon(deleteIcon, "trash-2");
            obsidian2.setTooltip(deleteIcon, L.delete, { delay: 250 });
            actions.appendChild(deleteIcon);
            item.appendChild(actions);
            (function(idx, sess, itemEl, _saveIcon, _reloadIcon, _isActive) {
              itemEl.addEventListener("click", function(e) {
                if (e.target.closest(".wpp-qs-action-btn")) return;
                selectedIndex = idx;
                switchSelected();
              });
              setupDrag(itemEl);
              itemEl.addEventListener("mouseenter", function() {
                if (keyboardNav) return;
                selectedIndex = idx;
                updateSelection();
              });
              itemEl.addEventListener("contextmenu", function(e) {
                e.preventDefault();
                var selectedGroupId = getOverlayGroupId();
                sessionContextActions.openSessionContextMenu({
                  plugin: self,
                  app: self.app,
                  session: sess,
                  isActive: _isActive,
                  event: e,
                  showSwitch: true,
                  showRemoveFromGroup: !!selectedGroupId && selectedGroupId !== "__ungrouped__",
                  getViewGroupId: getOverlayGroupId,
                  onSwitch: function() {
                    selectedIndex = idx;
                    switchSelected();
                  },
                  showMoveToGroup: self.isGroupFeatureEnabled() && self.getOrderedGroups().length > 0,
                  deleteConfirmMessage: L.confirmDeleteActive(sess.name),
                  onGroupsChanged: renderGroupTabs,
                  onSessionsChanged: refreshOrderedSessions
                });
              });
              if (_saveIcon) {
                _saveIcon.addEventListener("click", function(e) {
                  e.stopPropagation();
                  var doSave = function() {
                    self.saveActiveSession().then(function() {
                      refreshOrderedSessions();
                    });
                  };
                  if (self.data.confirmQuickActions) {
                    new modals2.ConfirmModal(self.app, L.confirmSaveSession(sess.name), doSave, { confirmText: L.saveInline, confirmClass: "mod-cta" }).open();
                  } else {
                    doSave();
                  }
                });
              }
              if (_reloadIcon) {
                _reloadIcon.addEventListener("click", function(e) {
                  e.stopPropagation();
                  var doReload = function() {
                    self.reloadCurrentSessionWithoutSaving();
                  };
                  if (self.data.confirmQuickActions) {
                    new modals2.ConfirmModal(self.app, L.confirmReloadSession(sess.name), doReload, { confirmText: L.load, confirmClass: "mod-cta" }).open();
                  } else {
                    doReload();
                  }
                });
              }
              renameIcon.addEventListener("click", function(e) {
                e.stopPropagation();
                sessionListActions.renameSessionWithPrompt({
                  app: self.app,
                  plugin: self,
                  session: sess,
                  onRenamed: function() {
                    refreshOrderedSessions();
                  }
                });
              });
              deleteIcon.addEventListener("click", function(e) {
                e.stopPropagation();
                sessionListActions.deleteSessionWithPrompt({
                  app: self.app,
                  plugin: self,
                  session: sess,
                  isActive: _isActive,
                  confirmMessage: L.confirmDeleteActive(sess.name),
                  onDeleted: function() {
                    refreshOrderedSessions();
                  }
                });
              });
            })(i, session, item, saveIcon, reloadIcon, isActive);
            list.appendChild(item);
          }
          var selectedItem = list.querySelector(".wpp-kb-selected");
          if (selectedItem) {
            selectedItem.scrollIntoView({ block: "nearest" });
          }
        }
        function setupDrag(dragItem) {
          dragItem.addEventListener("mousedown", function(e) {
            if (e.button !== 0) return;
            if (e.target.closest(".wpp-qs-action-btn")) return;
            var startX = e.clientX;
            var startY = e.clientY;
            var dragStarted = false;
            var cloneEl = null;
            function startDragOp(ev) {
              dragStarted = true;
              var rect = dragItem.getBoundingClientRect();
              var offsetX = startX - rect.left;
              var offsetY = startY - rect.top;
              cloneEl = dragItem.cloneNode(true);
              cloneEl.classList.add("wpp-drag-clone");
              cloneEl.style.position = "fixed";
              cloneEl.style.width = rect.width + "px";
              cloneEl.style.top = ev.clientY - offsetY + "px";
              cloneEl.style.left = ev.clientX - offsetX + "px";
              cloneEl.style.zIndex = "9999";
              cloneEl.style.pointerEvents = "none";
              document.body.appendChild(cloneEl);
              dragItem.classList.add("is-dragging");
              cloneEl._offsetX = offsetX;
              cloneEl._offsetY = offsetY;
            }
            function updateOverlayGroupDropTarget(ev) {
              var tabs = groupTabsRow.querySelectorAll(".wpp-group-tab");
              var hoveredTab = null;
              for (var t = 0; t < tabs.length; t++) {
                var tr = tabs[t].getBoundingClientRect();
                if (ev.clientX >= tr.left && ev.clientX <= tr.right && ev.clientY >= tr.top && ev.clientY <= tr.bottom) {
                  hoveredTab = tabs[t];
                  break;
                }
              }
              for (var t2 = 0; t2 < tabs.length; t2++) {
                tabs[t2].classList.toggle("wpp-group-drop-target", tabs[t2] === hoveredTab);
              }
              return hoveredTab;
            }
            function clearOverlayGroupDropTargets() {
              var tabs = groupTabsRow.querySelectorAll(".wpp-group-tab");
              for (var t = 0; t < tabs.length; t++) {
                tabs[t].classList.remove("wpp-group-drop-target");
              }
            }
            function onMouseMove(ev) {
              if (!dragStarted) {
                var dx = ev.clientX - startX;
                var dy = ev.clientY - startY;
                if (Math.abs(dx) + Math.abs(dy) < 5) return;
                startDragOp(ev);
              }
              cloneEl.style.top = ev.clientY - cloneEl._offsetY + "px";
              cloneEl.style.left = ev.clientX - cloneEl._offsetX + "px";
              var hoverTab = updateOverlayGroupDropTarget(ev);
              if (hoverTab) return;
              var siblings = list.querySelectorAll(".wpp-switch-item");
              var placed = false;
              for (var si = 0; si < siblings.length; si++) {
                var el = siblings[si];
                if (el === dragItem) continue;
                var r = el.getBoundingClientRect();
                if (ev.clientY < r.top + r.height / 2) {
                  list.insertBefore(dragItem, el);
                  placed = true;
                  break;
                }
              }
              if (!placed) list.appendChild(dragItem);
            }
            function onMouseUp(ev) {
              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", onMouseUp);
              if (!dragStarted) return;
              cloneEl.remove();
              dragItem.classList.remove("is-dragging");
              var dropTab = updateOverlayGroupDropTarget(ev);
              clearOverlayGroupDropTargets();
              if (dropTab && dropTab.dataset.groupId === "__ungrouped__") {
                var ungroupSessionId = dragItem.dataset.sessionId;
                var ungroupSessionName = (self.data.sessions[ungroupSessionId] || {}).name || "";
                self.clearSessionGroupMembership(ungroupSessionId).then(function(changed) {
                  if (changed) {
                    new obsidian2.Notice(
                      i18n2.L.groupMovedToDefault ? i18n2.L.groupMovedToDefault(ungroupSessionName) : 'Moved "' + ungroupSessionName + '" to Default'
                    );
                  }
                  renderGroupTabs();
                  refreshOrderedSessions();
                });
                return;
              }
              if (dropTab && dropTab.dataset.groupId && dropTab.dataset.groupId !== "__all__" && dropTab.dataset.groupId !== "__ungrouped__") {
                var sessionId = dragItem.dataset.sessionId;
                var groupId = dropTab.dataset.groupId;
                var sessionName = (self.data.sessions[sessionId] || {}).name || "";
                var groupName = (self.data.groups[groupId] || {}).name || "";
                self.moveSessionToGroupExclusive(sessionId, groupId).then(function() {
                  new obsidian2.Notice(i18n2.L.groupAddedSession(sessionName, groupName));
                  renderGroupTabs();
                  refreshOrderedSessions();
                });
                return;
              } else {
                var currentGroupId = getOverlayGroupId();
                if (dropTab && dropTab.dataset.groupId === "__all__" && currentGroupId && currentGroupId !== "__ungrouped__") {
                  var rmSessionId = dragItem.dataset.sessionId;
                  var rmGroupId = currentGroupId;
                  var rmSessionName = (self.data.sessions[rmSessionId] || {}).name || "";
                  var rmGroupName = (self.data.groups[rmGroupId] || {}).name || "";
                  self.removeSessionFromGroup(rmSessionId, rmGroupId).then(function() {
                    new obsidian2.Notice(i18n2.L.groupRemovedSession(rmSessionName, rmGroupName));
                    renderGroupTabs();
                    refreshOrderedSessions();
                  });
                  return;
                }
              }
              var newVisibleOrder = [];
              var items = list.querySelectorAll(".wpp-switch-item");
              for (var ni = 0; ni < items.length; ni++) {
                newVisibleOrder.push(items[ni].dataset.sessionId);
              }
              self.setSessionOrderFromVisible(newVisibleOrder);
              dragItem.classList.add("wpp-just-moved");
              setTimeout(function() {
                dragItem.classList.remove("wpp-just-moved");
              }, 600);
            }
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", onMouseUp);
          });
        }
        function updateSelection() {
          var items = list.querySelectorAll(".wpp-switch-item");
          for (var si = 0; si < items.length; si++) {
            items[si].classList.toggle("wpp-kb-selected", si === selectedIndex);
          }
          if (filtered.length > 0) {
            countSpan.textContent = selectedIndex + 1 + " / " + filtered.length;
          }
          if (keyboardNav && items[selectedIndex]) {
            items[selectedIndex].scrollIntoView({ block: "nearest" });
          }
        }
        function setKeyboardNavState(value) {
          keyboardNav = !!value;
          overlay.classList.toggle("wpp-keyboard-nav", keyboardNav);
        }
        function focusSaveInput() {
          setKeyboardNavState(false);
          navigationUtils.focusTextInputEnd(saveInput);
        }
        function focusSearchInput() {
          setKeyboardNavState(false);
          navigationUtils.focusTextInputSelect(searchInput);
        }
        function focusResultAt(index) {
          if (!filtered.length) return;
          setKeyboardNavState(true);
          selectedIndex = index;
          updateSelection();
          overlay.focus();
        }
        function focusFirstResult() {
          focusResultAt(0);
        }
        function focusLastResult() {
          focusResultAt(filtered.length - 1);
        }
        list.addEventListener("mousemove", function() {
          if (keyboardNav) {
            setKeyboardNavState(false);
          }
        });
        function switchSelected(opts) {
          opts = opts || {};
          if (selectedIndex < 0 || selectedIndex >= filtered.length) return;
          var target = filtered[selectedIndex];
          if (target.id === self.data.activeSessionId) {
            if (opts.shiftKey) {
              var doSave = function() {
                self.saveActiveSession().then(function() {
                  refreshOrderedSessions();
                });
              };
              if (self.data.confirmQuickActions) {
                new modals2.ConfirmModal(self.app, L.confirmSaveSession(target.name), doSave, { confirmText: L.saveInline, confirmClass: "mod-cta" }).open();
              } else {
                doSave();
              }
            } else {
              var doReload = function() {
                self.reloadCurrentSessionWithoutSaving();
              };
              if (self.data.confirmQuickActions) {
                new modals2.ConfirmModal(self.app, L.confirmReloadSession(target.name), doReload, { confirmText: L.load, confirmClass: "mod-cta" }).open();
              } else {
                doReload();
              }
            }
            self.hideSearchOverlay();
            return;
          }
          self.switchSession(target.id, { silent: true }).then(function(switched) {
            if (switched) self.hideSearchOverlay();
          });
        }
        this.searchOverlayInputHandler = function() {
          filtered = self.filterSessionsByQuery(ordered, searchInput.value);
          syncSelectedIndexToActive();
          renderList();
        };
        this.searchOverlayKeyHandler = searchOverlayKeys.createSearchOverlayKeyHandler({
          plugin: self,
          overlay,
          saveInput,
          saveBtn,
          searchInput,
          getOverlayGroupId,
          applyOverlayGroupSelection,
          switchSelected,
          refreshOrderedSessions,
          updateSelection,
          focusSaveInput,
          focusSearchInput,
          focusFirstResult,
          focusLastResult,
          hasSearchInput: function() {
            return !!self.data.showFilterInput;
          },
          getFiltered: function() {
            return filtered;
          },
          getSelectedIndex: function() {
            return selectedIndex;
          },
          setSelectedIndex: function(value) {
            selectedIndex = value;
          },
          setKeyboardNav: setKeyboardNavState
        });
        this.searchOverlayClickOutsideHandler = function(e) {
          if (!self.searchOverlayEl) return;
          if (searchOverlayKeys.hasBlockingModal()) return;
          if (self.statusBarEl && self.statusBarEl.contains(e.target)) return;
          if (!self.searchOverlayEl.contains(e.target)) {
            self.hideSearchOverlay();
          }
        };
        searchInput.addEventListener("input", this.searchOverlayInputHandler);
        document.addEventListener("keydown", this.searchOverlayKeyHandler, true);
        document.addEventListener("mousedown", this.searchOverlayClickOutsideHandler, true);
        document.body.appendChild(overlay);
        this.searchOverlayEl = overlay;
        setKeyboardNavState(focusTarget === "current-session");
        renderList();
        var margin = 8;
        var STATUS_BAR_FALLBACK_HEIGHT = 28;
        var MIN_VISIBLE_HEIGHT = 20;
        function cacheStatusBarMetrics() {
          var aEl = anchorEl || self.statusBarEl;
          var statusBar = aEl ? aEl.closest(".status-bar") : document.querySelector(".status-bar");
          if (statusBar) {
            var h = statusBar.getBoundingClientRect().height;
            if (h >= MIN_VISIBLE_HEIGHT) {
              self._cachedBarHeight = h;
            }
          }
          if (aEl) {
            var aRect = aEl.getBoundingClientRect();
            if (aRect.width > 0 && aRect.height > 0) {
              self._cachedAnchorCenterX = aRect.left + aRect.width / 2;
            }
          }
        }
        cacheStatusBarMetrics();
        function positionToAnchor() {
          var oRect = overlay.getBoundingClientRect();
          var barHeight = self._cachedBarHeight || STATUS_BAR_FALLBACK_HEIGHT;
          var centerX = self._cachedAnchorCenterX || window.innerWidth / 2;
          var lp = centerX - oRect.width / 2;
          lp = Math.max(margin, Math.min(lp, window.innerWidth - oRect.width - margin));
          var bp = barHeight + margin;
          if (bp + oRect.height > window.innerHeight - margin) {
            bp = margin;
          }
          overlay.style.right = "auto";
          overlay.style.top = "auto";
          overlay.style.left = lp + "px";
          overlay.style.bottom = bp + "px";
        }
        var savedSize = self.data.searchOverlaySize;
        var MIN_WIDTH = 220;
        var MIN_HEIGHT = 140;
        if (savedSize && savedSize.width != null && savedSize.height != null) {
          overlay.style.width = Math.max(MIN_WIDTH, savedSize.width) + "px";
          overlay.style.height = Math.max(MIN_HEIGHT, savedSize.height) + "px";
          overlay.style.minWidth = "0";
          overlay.style.maxWidth = "none";
          list.style.maxHeight = "none";
        }
        function resetSize() {
          overlay.style.width = "";
          overlay.style.height = "";
          overlay.style.minWidth = "";
          overlay.style.maxWidth = "";
          list.style.maxHeight = "";
        }
        var savedPos = self.data.searchOverlayPosition;
        if (savedPos && savedPos.left != null && savedPos.bottom != null) {
          var overlayRect = overlay.getBoundingClientRect();
          var sl = Math.max(margin, Math.min(savedPos.left, window.innerWidth - overlayRect.width - margin));
          var sb = Math.max(margin, Math.min(savedPos.bottom, window.innerHeight - overlayRect.height - margin));
          overlay.style.right = "auto";
          overlay.style.top = "auto";
          overlay.style.left = sl + "px";
          overlay.style.bottom = sb + "px";
        } else {
          positionToAnchor();
        }
        overlay.addEventListener("dblclick", function(e) {
          if (e.target.closest(".wpp-search-close")) return;
          if (e.target.closest(".wpp-switch-item")) return;
          if (e.target.closest(".wpp-search-input")) return;
          if (e.target.closest(".wpp-qs-action-btn")) return;
          resetSize();
          positionToAnchor();
          self.data.searchOverlayPosition = null;
          self.data.searchOverlaySize = null;
          self.persistData();
        });
        overlay.addEventListener("contextmenu", function(e) {
          if (e.target.closest(".wpp-switch-item")) return;
          if (e.target.closest(".wpp-search-input")) return;
          if (e.target.closest(".wpp-search-close")) return;
          if (e.target.closest(".wpp-qs-action-btn")) return;
          if (e.target.closest(".wpp-group-tab")) return;
          e.preventDefault();
          settingsContextMenu.openSettingsContextMenu({
            plugin: self,
            app: self.app,
            event: e,
            showResetOverlay: true,
            onResetOverlay: function() {
              resetSize();
              positionToAnchor();
              self.data.searchOverlayPosition = null;
              self.data.searchOverlaySize = null;
              self.persistData();
            },
            onChanged: function() {
              searchRow.style.display = self.data.showFilterInput ? "" : "none";
              renderGroupTabs();
              refreshOrderedSessions();
            }
          });
        });
        overlay.addEventListener("mousedown", function(e) {
          var cornerEl = e.target.closest(".wpp-resize-corner");
          var edgeEl2 = !cornerEl ? e.target.closest(".wpp-resize-edge") : null;
          if (!cornerEl && !edgeEl2) return;
          if (e.button !== 0) return;
          e.preventDefault();
          e.stopPropagation();
          var dir = cornerEl ? cornerEl.dataset.corner : null;
          var edge = edgeEl2 ? edgeEl2.dataset.edge : null;
          var startX = e.clientX;
          var startY = e.clientY;
          var startRect = overlay.getBoundingClientRect();
          var startWidth = startRect.width;
          var startHeight = startRect.height;
          var startLeft = startRect.left;
          var startBottom = window.innerHeight - startRect.bottom;
          function onMove(ev) {
            var dx = ev.clientX - startX;
            var dy = ev.clientY - startY;
            var newWidth = startWidth;
            var newHeight = startHeight;
            var newLeft = startLeft;
            var newBottom = startBottom;
            var moveRight = dir === "tr" || dir === "br" || edge === "right";
            var moveLeft = dir === "tl" || dir === "bl" || edge === "left";
            if (moveRight) {
              newWidth = Math.max(MIN_WIDTH, startWidth + dx);
            } else if (moveLeft) {
              newWidth = Math.max(MIN_WIDTH, startWidth - dx);
              newLeft = startLeft + (startWidth - newWidth);
            }
            var moveTop = dir === "tl" || dir === "tr" || edge === "top";
            var moveBottom = dir === "bl" || dir === "br" || edge === "bottom";
            if (moveTop) {
              newHeight = Math.max(MIN_HEIGHT, startHeight - dy);
            } else if (moveBottom) {
              newHeight = Math.max(MIN_HEIGHT, startHeight + dy);
              newBottom = startBottom - (newHeight - startHeight);
              if (newBottom < margin) {
                newHeight = startHeight + startBottom - margin;
                newBottom = margin;
              }
            }
            newWidth = Math.max(MIN_WIDTH, newWidth);
            newHeight = Math.max(MIN_HEIGHT, newHeight);
            if (newLeft < margin) newLeft = margin;
            if (newLeft + newWidth > window.innerWidth - margin) {
              newLeft = window.innerWidth - margin - newWidth;
              if (newLeft < margin) newLeft = margin;
            }
            if (newBottom < margin) newBottom = margin;
            if (window.innerHeight - newBottom - newHeight < margin) {
              newBottom = window.innerHeight - newHeight - margin;
              if (newBottom < margin) newBottom = margin;
            }
            overlay.style.width = newWidth + "px";
            overlay.style.height = newHeight + "px";
            overlay.style.minWidth = "0";
            overlay.style.maxWidth = "none";
            overlay.style.left = newLeft + "px";
            overlay.style.bottom = newBottom + "px";
            overlay.style.right = "auto";
            overlay.style.top = "auto";
            list.style.maxHeight = "none";
          }
          function onUp() {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
            var finalRect = overlay.getBoundingClientRect();
            self.data.searchOverlaySize = {
              width: finalRect.width,
              height: finalRect.height
            };
            self.data.searchOverlayPosition = {
              left: finalRect.left,
              bottom: window.innerHeight - finalRect.bottom
            };
            self.persistData();
          }
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", onUp);
        });
        overlay.addEventListener("mousedown", function(e) {
          if (e.target.closest(".wpp-search-close")) return;
          if (e.target.closest(".wpp-switch-item")) return;
          if (e.target.closest(".wpp-search-input")) return;
          if (e.target.closest(".wpp-save-input")) return;
          if (e.target.closest(".wpp-save-btn")) return;
          if (e.target.closest(".wpp-group-tab")) return;
          if (e.target.closest(".wpp-group-add-btn")) return;
          if (e.target.closest(".wpp-group-tabs")) return;
          if (e.target.closest(".wpp-qs-action-btn")) return;
          if (e.target.closest(".wpp-resize-corner")) return;
          if (e.button !== 0) return;
          e.preventDefault();
          overlay.classList.add("wpp-dragging");
          var rect = overlay.getBoundingClientRect();
          var offsetX = e.clientX - rect.left;
          var offsetY = e.clientY - rect.top;
          function onMove(ev) {
            var newLeft = ev.clientX - offsetX;
            var newTop = ev.clientY - offsetY;
            var oRect = overlay.getBoundingClientRect();
            newLeft = Math.max(margin, Math.min(newLeft, window.innerWidth - oRect.width - margin));
            newTop = Math.max(margin, Math.min(newTop, window.innerHeight - oRect.height - margin));
            var newBottom = window.innerHeight - newTop - oRect.height;
            overlay.style.right = "auto";
            overlay.style.top = "auto";
            overlay.style.left = newLeft + "px";
            overlay.style.bottom = newBottom + "px";
          }
          function onUp() {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
            overlay.classList.remove("wpp-dragging");
            var finalRect = overlay.getBoundingClientRect();
            self.data.searchOverlayPosition = {
              left: finalRect.left,
              bottom: window.innerHeight - finalRect.bottom
            };
            self.persistData();
          }
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", onUp);
        });
        if (focusTarget !== "session-create") {
          var guardHandler = function(e) {
            if (e.target === saveInput) {
              e.preventDefault();
              e.stopImmediatePropagation();
              if (focusTarget === "session-filter" && self.data.showFilterInput) {
                searchInput.focus();
              } else {
                overlay.focus();
              }
            }
          };
          overlay.addEventListener("focusin", guardHandler, true);
          setTimeout(function() {
            overlay.removeEventListener("focusin", guardHandler, true);
          }, 300);
        }
        setTimeout(function() {
          if (focusTarget === "session-filter" && self.data.showFilterInput) {
            navigationUtils.focusTextInputSelect(searchInput);
          } else if (focusTarget === "session-create") {
            saveInput.focus();
          } else {
            overlay.focus();
          }
        }, 20);
      };
      WorkspacePlusPlus2.prototype.showSwitchPreviewOverlay = function(ordered, activeIndex, viewGroupId) {
        return this.showSwitchOverlay(ordered, activeIndex, viewGroupId, { mode: "preview" });
      };
      WorkspacePlusPlus2.prototype.showSwitchFeedbackOverlay = function(ordered, activeIndex, viewGroupId, options) {
        options = Object.assign({}, options, { mode: "feedback" });
        return this.showSwitchOverlay(ordered, activeIndex, viewGroupId, options);
      };
      WorkspacePlusPlus2.prototype.showSwitchOverlay = function(ordered, activeIndex, viewGroupId, options) {
        options = options || {};
        var L = i18n2.L;
        if (this.clearSessionSwitchNotice) {
          this.clearSessionSwitchNotice();
        }
        this.hideSearchOverlay();
        this.cleanupOverlayListeners();
        if (this.switchOverlayEl) {
          this.switchOverlayEl.remove();
        }
        if (this.switchOverlayTimer) {
          clearTimeout(this.switchOverlayTimer);
        }
        var overlayGroupId = this.isGroupFeatureEnabled() ? typeof viewGroupId === "undefined" ? this.data.activeGroupId || null : viewGroupId || null : null;
        if (overlayGroupId === "__ungrouped__") {
        } else if (overlayGroupId && !(this.data.groups || {})[overlayGroupId]) {
          overlayGroupId = this.data.activeGroupId || null;
          if (overlayGroupId && !(this.data.groups || {})[overlayGroupId]) {
            overlayGroupId = null;
          }
        }
        var overlayMode = options.mode || "preview";
        var feedbackDurationMs = Math.max(0, Number(options.durationMs) || 400);
        this.switchOverlayViewGroupId = overlayGroupId;
        var self = this;
        function reopenOverlayForGroup(result) {
          var newOrdered = result.sessions;
          var newActiveIndex = self.getActiveSessionIndex(newOrdered);
          self.showSwitchOverlay(newOrdered, newActiveIndex, result.resolvedGroupId, options);
        }
        function onGroupTabClick(targetGroupId, e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          self.resolveGroupViewSelection(targetGroupId || null).then(reopenOverlayForGroup);
        }
        function onSessionItemClick(sessionId, e) {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          if (!sessionId) return;
          if (sessionId === self.data.activeSessionId) {
            self.hideSwitchOverlay();
            return;
          }
          self.switchSession(sessionId, { silent: true }).then(function(switched) {
            if (switched) self.hideSwitchOverlay();
          });
        }
        var overlay = document.createElement("div");
        overlay.className = "wpp-switch-overlay";
        var countSpan = document.createElement("div");
        countSpan.className = "wpp-switch-count";
        countSpan.textContent = ordered.length > 0 ? activeIndex + 1 + " / " + ordered.length : "0 / 0";
        overlay.appendChild(countSpan);
        var realGroups = this.getOrderedGroups();
        if (realGroups.length > 0) {
          var groupTabsRow = document.createElement("div");
          groupTabsRow.className = "wpp-group-tabs";
          groupTabsRow.classList.add("wpp-group-tabs-row-inner");
          var defaultWrap = document.createElement("div");
          defaultWrap.className = "wpp-group-tabs-default";
          var groupsWrap = document.createElement("div");
          groupsWrap.className = "wpp-group-tabs-groups";
          var allWrap = document.createElement("div");
          allWrap.className = "wpp-group-tabs-all";
          var defaultTab = document.createElement("div");
          defaultTab.className = "wpp-group-tab wpp-group-tab--default";
          if (overlayGroupId === "__ungrouped__") defaultTab.classList.add("is-active");
          defaultTab.textContent = L.groupDefault || "Default";
          defaultTab.addEventListener("click", function(e) {
            onGroupTabClick("__ungrouped__", e);
          });
          defaultWrap.appendChild(defaultTab);
          var allGroups = this.data.groups || {};
          var groupOrder = this.getOrderedGroupTabIds();
          for (var gi = 0; gi < groupOrder.length; gi++) {
            var gid = groupOrder[gi];
            if (gid === "__all__" || gid === "__ungrouped__") continue;
            if (!allGroups[gid]) continue;
            var tab = document.createElement("div");
            tab.className = "wpp-group-tab";
            if (overlayGroupId === gid) tab.classList.add("is-active");
            tab.textContent = allGroups[gid].name;
            (function(targetGroupId) {
              tab.addEventListener("click", function(e) {
                onGroupTabClick(targetGroupId, e);
              });
            })(gid);
            groupsWrap.appendChild(tab);
          }
          var allTab = document.createElement("div");
          allTab.className = "wpp-group-tab wpp-group-tab--all";
          if (!overlayGroupId) allTab.classList.add("is-active");
          obsidian2.setIcon(allTab, "layout-list");
          if (L.groupAll) {
            obsidian2.setTooltip(allTab, L.groupAll, {
              placement: "bottom",
              delay: 250
            });
          }
          allTab.addEventListener("click", function(e) {
            onGroupTabClick(null, e);
          });
          allWrap.appendChild(allTab);
          groupTabsRow.appendChild(defaultWrap);
          groupTabsRow.appendChild(groupsWrap);
          groupTabsRow.appendChild(allWrap);
          overlay.appendChild(groupTabsRow);
        }
        var list = document.createElement("div");
        list.className = "wpp-switch-list";
        for (var i = 0; i < ordered.length; i++) {
          var item = document.createElement("div");
          item.className = "wpp-switch-item";
          if (i === activeIndex) {
            item.classList.add("is-active");
          }
          item.dataset.sessionId = ordered[i].id;
          var name = document.createElement("div");
          name.className = "wpp-switch-name";
          name.textContent = ordered[i].name;
          item.appendChild(name);
          var hk = i <= 8 ? this.getCommandHotkey("switch-to-" + (i + 1)) : "";
          var hotkeyEl = document.createElement("div");
          hotkeyEl.className = "wpp-switch-hotkey";
          hotkeyEl.textContent = hk || String(i + 1);
          item.appendChild(hotkeyEl);
          (function(targetSessionId) {
            item.addEventListener("click", function(e) {
              onSessionItemClick(targetSessionId, e);
            });
          })(ordered[i].id);
          list.appendChild(item);
        }
        overlay.appendChild(list);
        var footerRow = document.createElement("div");
        footerRow.className = "wpp-switch-footer";
        if (realGroups.length > 0) {
          var groupLine = document.createElement("div");
          groupLine.textContent = (L.keyTab || "Tab") + "  " + L.switchGroup;
          footerRow.appendChild(groupLine);
        }
        var nextKey = this.getCommandHotkey("next-session");
        if (nextKey) {
          var line1 = document.createElement("div");
          line1.textContent = L.cmdNext + "  " + nextKey;
          footerRow.appendChild(line1);
        }
        var prevKey2 = this.getCommandHotkey("previous-session");
        var nextKey2 = this.getCommandHotkey("next-session", 1);
        if (prevKey2 || nextKey2) {
          var line2 = document.createElement("div");
          var parts = [];
          if (prevKey2) parts.push(L.switchLeft + " " + prevKey2);
          if (nextKey2) parts.push(L.switchRight + " " + nextKey2);
          line2.textContent = parts.join("  /  ");
          footerRow.appendChild(line2);
        }
        overlay.appendChild(footerRow);
        var allSessions = this.getOrderedSessionsUnfiltered();
        if (allSessions.length > ordered.length) {
          var measure = overlay.cloneNode(false);
          measure.style.visibility = "hidden";
          measure.style.pointerEvents = "none";
          for (var ci = 0; ci < overlay.childNodes.length; ci++) {
            if (overlay.childNodes[ci] === list) break;
            measure.appendChild(overlay.childNodes[ci].cloneNode(true));
          }
          var measureList = document.createElement("div");
          measureList.className = "wpp-switch-list";
          for (var mi = 0; mi < allSessions.length; mi++) {
            var mItem = document.createElement("div");
            mItem.className = "wpp-switch-item";
            var mName = document.createElement("div");
            mName.className = "wpp-switch-name";
            mName.textContent = allSessions[mi].name;
            mItem.appendChild(mName);
            var mHk = document.createElement("div");
            mHk.className = "wpp-switch-hotkey";
            mHk.textContent = String(mi + 1);
            mItem.appendChild(mHk);
            measureList.appendChild(mItem);
          }
          measure.appendChild(measureList);
          measure.appendChild(footerRow.cloneNode(true));
          document.body.appendChild(measure);
          overlay.style.minWidth = measure.offsetWidth + "px";
          overlay.style.minHeight = measure.offsetHeight + "px";
          measure.remove();
        }
        document.body.appendChild(overlay);
        this.switchOverlayEl = overlay;
        if (overlayMode === "feedback") {
          this.overlayBlurHandler = function() {
            self.hideSwitchOverlay();
          };
          window.addEventListener("blur", this.overlayBlurHandler);
          this.switchOverlayTimer = setTimeout(function() {
            if (!self.switchOverlayEl) return;
            self.hideSwitchOverlay();
          }, feedbackDurationMs);
          return;
        }
        var showTime = Date.now();
        this.overlayKeyUpHandler = function(e) {
          if (!utils.isModShiftPressed(e)) {
            var elapsed = Date.now() - showTime;
            var minDelay = Math.max(0, 300 - elapsed);
            self.cleanupOverlayListeners();
            if (minDelay > 0) {
              self.switchOverlayTimer = setTimeout(function() {
                self.hideSwitchOverlay();
              }, minDelay);
            } else {
              self.hideSwitchOverlay();
            }
          }
        };
        this.overlayBlurHandler = function() {
          self.hideSwitchOverlay();
        };
        document.addEventListener("keyup", this.overlayKeyUpHandler);
        window.addEventListener("blur", this.overlayBlurHandler);
        function safetyCheck() {
          self.switchOverlayTimer = setTimeout(function() {
            if (!self.switchOverlayEl) return;
            self.hideSwitchOverlay();
          }, 5e3);
        }
        this.overlayKeyDownHandler = function(e) {
          if (self.switchOverlayTimer) {
            clearTimeout(self.switchOverlayTimer);
          }
          safetyCheck();
          if (e.key === "Tab" && self.switchOverlayEl && !utils.isModPressed(e)) {
            if (!self.isGroupFeatureEnabled() || self.getOrderedGroups().length === 0) return;
            e.preventDefault();
            e.stopImmediatePropagation();
            var nextGroupId = self.getRelativeGroupId(overlayGroupId, e.shiftKey ? -1 : 1);
            if (typeof nextGroupId === "undefined") return;
            self.resolveGroupViewSelection(nextGroupId).then(function(result) {
              var newOrdered = result.sessions;
              var newActiveIndex = self.getActiveSessionIndex(newOrdered);
              self.showSwitchOverlay(newOrdered, newActiveIndex, result.resolvedGroupId);
            });
          }
        };
        document.addEventListener("keydown", this.overlayKeyDownHandler);
        safetyCheck();
      };
      WorkspacePlusPlus2.prototype.cleanupOverlayListeners = function() {
        if (this.overlayKeyUpHandler) {
          document.removeEventListener("keyup", this.overlayKeyUpHandler);
          this.overlayKeyUpHandler = null;
        }
        if (this.overlayKeyDownHandler) {
          document.removeEventListener("keydown", this.overlayKeyDownHandler);
          this.overlayKeyDownHandler = null;
        }
        if (this.overlayBlurHandler) {
          window.removeEventListener("blur", this.overlayBlurHandler);
          this.overlayBlurHandler = null;
        }
        if (this.switchOverlayTimer) {
          clearTimeout(this.switchOverlayTimer);
          this.switchOverlayTimer = null;
        }
      };
      WorkspacePlusPlus2.prototype.hideSwitchOverlay = function() {
        if (this.switchOverlayEl) {
          this.switchOverlayEl.remove();
          this.switchOverlayEl = null;
        }
        this.switchOverlayViewGroupId = null;
        this.cleanupOverlayListeners();
      };
      WorkspacePlusPlus2.prototype.hideSearchOverlay = function() {
        if (this.searchOverlayEl) {
          this.searchOverlayEl.remove();
          this.searchOverlayEl = null;
        }
        this.searchOverlayViewGroupId = null;
        if (this.searchOverlayInputHandler && this.searchOverlayInputEl) {
          this.searchOverlayInputEl.removeEventListener("input", this.searchOverlayInputHandler);
        }
        if (this.searchOverlayKeyHandler) {
          document.removeEventListener("keydown", this.searchOverlayKeyHandler, true);
          this.searchOverlayKeyHandler = null;
        }
        if (this.searchOverlayClickOutsideHandler) {
          document.removeEventListener("mousedown", this.searchOverlayClickOutsideHandler, true);
          this.searchOverlayClickOutsideHandler = null;
        }
        this.searchOverlayInputHandler = null;
        this.searchOverlayInputEl = null;
        this._refreshOverlaySessions = null;
      };
    }
    module2.exports = attachOverlayMethods;
  }
});

// src/plugin/methods/persistence.js
var require_persistence = __commonJS({
  "src/plugin/methods/persistence.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var DEFAULT_DATA2 = require_default_data();
    var STORAGE_DIR = ".workspace-plus-plus";
    var SESSION_STORAGE_VAULT = "vault-folder";
    var SESSION_STORAGE_PLUGIN = "plugin-folder";
    var SESSIONS_FILE_NAME = "sessions.json";
    var SESSIONS_BACKUP_FILE_NAME = "sessions.backup.json";
    var LOCAL_SETTINGS_FILE = STORAGE_DIR + "/settings.local.json";
    var EXPORT_DIR_NAME = "exports";
    var BACKUPS_DIR_NAME = "backups";
    var BACKUP_ROTATION_INTERVAL = 36e5;
    var SESSION_KEYS = [
      "activeSessionId",
      "sessions",
      "sessionOrder",
      "groups",
      "groupOrder",
      "sessionGroups",
      "activeGroupId",
      "archivedSessions",
      "archivedOrder"
    ];
    var SETTINGS_KEYS = [
      "language",
      "previewNext",
      "previewPrevious",
      "confirmDeleteByHotkey",
      "autoSaveOnSwitch",
      "warnOnUnsavedSwitch",
      "highlightUnsavedSessionChanges",
      "statusBarQuickSwitcher",
      "statusBarModScrollSwitch",
      "groupFeatureEnabled",
      "overlayDefaultFocus",
      "searchOverlayPosition",
      "searchOverlaySize",
      "versionHistoryEnabled",
      "versionHistorySnapshotInterval",
      "versionHistoryCtrlRmbRestore",
      "versionHistoryConfirmRestore",
      "statusBarScrollPreset",
      "statusBarScrollModifierMode",
      "statusBarScrollThreshold",
      "statusBarScrollCooldownMs",
      "statusBarScrollResetMs",
      "statusBarScrollInvert",
      "statusBarActions",
      "confirmQuickActions",
      "showFilterInput",
      "showActiveSwitchCommand",
      "numberedSwitchCommands",
      "sessionManagerPanelMode",
      "sessionManagerViewGroupId",
      "restoreSidebars",
      "restoreTabsByFilename",
      "noteUidProperty",
      "taskViewThumbnailRatio",
      "taskViewContentZoom",
      "showTaskViewHints",
      "zenHideInactiveTabs",
      "showStatusBarWorkspace",
      "showStatusBarZenMode"
    ];
    function joinPath(base, child) {
      return String(base || "").replace(/\/+$/, "") + "/" + child;
    }
    function normalizeSessionStorageLocation(value) {
      if (value === SESSION_STORAGE_PLUGIN) return SESSION_STORAGE_PLUGIN;
      if (value === SESSION_STORAGE_VAULT) return SESSION_STORAGE_VAULT;
      return null;
    }
    function pickKeys(data, keys) {
      var out = {};
      if (!data) return out;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (data[key] !== void 0) out[key] = data[key];
      }
      return out;
    }
    function hasSessionShape(data) {
      return !!(data && typeof data === "object" && (data.sessions !== void 0 || data.sessionOrder !== void 0 || data.activeSessionId !== void 0));
    }
    function hasNonEmptySessions(data) {
      return !!(data && data.sessions && typeof data.sessions === "object" && Object.keys(data.sessions).length > 0);
    }
    function getPersistStamp(data) {
      if (!data || typeof data !== "object") return 0;
      var stamp = data._wppSavedAt;
      if (typeof stamp !== "number" || !isFinite(stamp)) return 0;
      return stamp;
    }
    function getBackupPlatformLabel() {
      var platform = obsidian2.Platform || {};
      if (platform.isAndroidApp) return "Android";
      if (platform.isIosApp) return "iOS";
      if (platform.isMacOS) return "macOS";
      if (platform.isWin) return "Windows";
      if (platform.isLinux) return "Linux";
      if (platform.isMobileApp || platform.isMobile) return "Mobile";
      if (platform.isDesktopApp || platform.isDesktop) return "Desktop";
      return "";
    }
    function pad2(n) {
      return n < 10 ? "0" + n : String(n);
    }
    function formatExportStamp(ts) {
      var d = new Date(ts);
      return String(d.getFullYear()) + pad2(d.getMonth() + 1) + pad2(d.getDate()) + "-" + pad2(d.getHours()) + pad2(d.getMinutes()) + pad2(d.getSeconds());
    }
    function attachPersistenceMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.getBackupPath = function() {
        return this.manifest.dir + "/data.backup.json";
      };
      WorkspacePlusPlus2.prototype.getStorageDirPath = function() {
        return STORAGE_DIR;
      };
      WorkspacePlusPlus2.prototype.getPluginStorageDirPath = function() {
        return this.manifest && this.manifest.dir || ".obsidian/plugins/workspace-plus-plus";
      };
      WorkspacePlusPlus2.prototype.getDefaultSessionStorageLocation = function() {
        return SESSION_STORAGE_PLUGIN;
      };
      WorkspacePlusPlus2.prototype.normalizeSessionStorageLocation = function(location) {
        return normalizeSessionStorageLocation(location);
      };
      WorkspacePlusPlus2.prototype.getSessionStorageLocation = function() {
        return normalizeSessionStorageLocation(this.data && this.data.sessionStorageLocation) || normalizeSessionStorageLocation(this._sessionStorageLocation) || this.getDefaultSessionStorageLocation();
      };
      WorkspacePlusPlus2.prototype.setRuntimeSessionStorageLocation = function(location) {
        var normalized = normalizeSessionStorageLocation(location) || this.getDefaultSessionStorageLocation();
        this._sessionStorageLocation = normalized;
        if (this.data) this.data.sessionStorageLocation = normalized;
        return normalized;
      };
      WorkspacePlusPlus2.prototype.getSessionStorageDirPathForLocation = function(location) {
        var normalized = normalizeSessionStorageLocation(location) || this.getDefaultSessionStorageLocation();
        return normalized === SESSION_STORAGE_PLUGIN ? this.getPluginStorageDirPath() : this.getStorageDirPath();
      };
      WorkspacePlusPlus2.prototype.getSessionStorageDirPath = function() {
        return this.getSessionStorageDirPathForLocation(this.getSessionStorageLocation());
      };
      WorkspacePlusPlus2.prototype.getSessionsPathForLocation = function(location) {
        return joinPath(this.getSessionStorageDirPathForLocation(location), SESSIONS_FILE_NAME);
      };
      WorkspacePlusPlus2.prototype.getSessionsPath = function() {
        return this.getSessionsPathForLocation(this.getSessionStorageLocation());
      };
      WorkspacePlusPlus2.prototype.getSessionsBackupPathForLocation = function(location) {
        return joinPath(this.getSessionStorageDirPathForLocation(location), SESSIONS_BACKUP_FILE_NAME);
      };
      WorkspacePlusPlus2.prototype.getSessionsBackupPath = function() {
        return this.getSessionsBackupPathForLocation(this.getSessionStorageLocation());
      };
      WorkspacePlusPlus2.prototype.getLocalSettingsPath = function() {
        return LOCAL_SETTINGS_FILE;
      };
      WorkspacePlusPlus2.prototype.getExportDirPath = function() {
        return joinPath(this.getSessionStorageDirPath(), EXPORT_DIR_NAME);
      };
      WorkspacePlusPlus2.prototype.getBackupsDirPath = function() {
        return joinPath(this.getSessionStorageDirPath(), BACKUPS_DIR_NAME);
      };
      WorkspacePlusPlus2.prototype.getRotationBackupPath = function(generation) {
        return this.getBackupsDirPath() + "/sessions." + generation + ".json";
      };
      WorkspacePlusPlus2.prototype.getRotationBackupPathForLocation = function(location, generation) {
        return joinPath(this.getSessionStorageDirPathForLocation(location), BACKUPS_DIR_NAME) + "/sessions." + generation + ".json";
      };
      WorkspacePlusPlus2.prototype.getSessionBackupFilePathsForLocation = function(location) {
        return [
          this.getSessionsBackupPathForLocation(location),
          this.getRotationBackupPathForLocation(location, 1),
          this.getRotationBackupPathForLocation(location, 2),
          this.getRotationBackupPathForLocation(location, 3)
        ];
      };
      WorkspacePlusPlus2.prototype.getBackupFilePaths = function() {
        return [
          this.getBackupPath()
        ].concat(this.getSessionBackupFilePathsForLocation(SESSION_STORAGE_VAULT)).concat(this.getSessionBackupFilePathsForLocation(SESSION_STORAGE_PLUGIN));
      };
      WorkspacePlusPlus2.prototype.getBackupPlatformLabel = function() {
        return getBackupPlatformLabel();
      };
      WorkspacePlusPlus2.prototype.prepareRotationBackupData = function(sessionData) {
        var backupData = Object.assign({}, sessionData);
        var platform = this.getBackupPlatformLabel();
        if (platform) backupData._wppBackupPlatform = platform;
        return backupData;
      };
      WorkspacePlusPlus2.prototype.getDefaultSettingsData = function() {
        return pickKeys(DEFAULT_DATA2, SETTINGS_KEYS);
      };
      WorkspacePlusPlus2.prototype.getDefaultSessionData = function() {
        return pickKeys(DEFAULT_DATA2, SESSION_KEYS);
      };
      WorkspacePlusPlus2.prototype.extractSettingsData = function(data) {
        return pickKeys(data, SETTINGS_KEYS);
      };
      WorkspacePlusPlus2.prototype.extractSessionData = function(data) {
        return this.normalizeSessionData(pickKeys(data, SESSION_KEYS));
      };
      WorkspacePlusPlus2.prototype.normalizeSessionData = function(raw) {
        var sessions = raw && raw.sessions && typeof raw.sessions === "object" ? raw.sessions : {};
        var rawOrder = Array.isArray(raw && raw.sessionOrder) ? raw.sessionOrder : Object.keys(sessions);
        var seen = {};
        var order = [];
        var i;
        for (i = 0; i < rawOrder.length; i++) {
          var id = rawOrder[i];
          if (!sessions[id] || seen[id]) continue;
          seen[id] = true;
          order.push(id);
        }
        var allIds = Object.keys(sessions);
        for (i = 0; i < allIds.length; i++) {
          if (seen[allIds[i]]) continue;
          seen[allIds[i]] = true;
          order.push(allIds[i]);
        }
        var active = raw && typeof raw.activeSessionId === "string" ? raw.activeSessionId : null;
        if (active && !sessions[active]) active = null;
        if (!active && order.length > 0) active = order[0];
        var groups = raw && raw.groups && typeof raw.groups === "object" ? raw.groups : {};
        var rawGroupOrder = Array.isArray(raw && raw.groupOrder) ? raw.groupOrder : Object.keys(groups);
        var seenGroups = {};
        var groupOrder = [];
        for (i = 0; i < rawGroupOrder.length; i++) {
          var gid = rawGroupOrder[i];
          if (gid !== "__all__" && !groups[gid]) continue;
          if (seenGroups[gid]) continue;
          seenGroups[gid] = true;
          groupOrder.push(gid);
        }
        var allGroupIds = Object.keys(groups);
        for (i = 0; i < allGroupIds.length; i++) {
          if (seenGroups[allGroupIds[i]]) continue;
          seenGroups[allGroupIds[i]] = true;
          groupOrder.push(allGroupIds[i]);
        }
        var sessionGroups = raw && raw.sessionGroups && typeof raw.sessionGroups === "object" ? raw.sessionGroups : {};
        var sessionGroupsCleaned = {};
        var sgKeys = Object.keys(sessionGroups);
        for (i = 0; i < sgKeys.length; i++) {
          var sid = sgKeys[i];
          if (!sessions[sid]) continue;
          var gids = Array.isArray(sessionGroups[sid]) ? sessionGroups[sid] : [];
          var validGids = [];
          for (var k = 0; k < gids.length; k++) {
            if (groups[gids[k]]) validGids.push(gids[k]);
          }
          if (validGids.length > 0) sessionGroupsCleaned[sid] = validGids;
        }
        var activeGroupId = raw && typeof raw.activeGroupId === "string" && groups[raw.activeGroupId] ? raw.activeGroupId : null;
        var archivedSessions = raw && raw.archivedSessions && typeof raw.archivedSessions === "object" ? raw.archivedSessions : {};
        var rawArchivedOrder = Array.isArray(raw && raw.archivedOrder) ? raw.archivedOrder : Object.keys(archivedSessions);
        var archivedSeen = {};
        var archivedOrder = [];
        for (i = 0; i < rawArchivedOrder.length; i++) {
          var aid = rawArchivedOrder[i];
          if (!archivedSessions[aid] || archivedSeen[aid]) continue;
          archivedSeen[aid] = true;
          archivedOrder.push(aid);
        }
        var archivedIds = Object.keys(archivedSessions);
        for (i = 0; i < archivedIds.length; i++) {
          if (archivedSeen[archivedIds[i]]) continue;
          archivedSeen[archivedIds[i]] = true;
          archivedOrder.push(archivedIds[i]);
        }
        return {
          activeSessionId: active,
          sessions,
          sessionOrder: order,
          groups,
          groupOrder,
          sessionGroups: sessionGroupsCleaned,
          activeGroupId,
          archivedSessions,
          archivedOrder
        };
      };
      WorkspacePlusPlus2.prototype.ensureDir = function(path) {
        var self = this;
        return this.app.vault.adapter.exists(path).then(function(exists) {
          if (exists) return;
          return self.app.vault.adapter.mkdir(path).catch(function() {
            return self.app.vault.adapter.exists(path).then(function(existsAfter) {
              if (!existsAfter) throw new Error("Failed to create directory: " + path);
            });
          });
        });
      };
      WorkspacePlusPlus2.prototype.ensureStorageDir = function() {
        return this.ensureDir(this.getStorageDirPath());
      };
      WorkspacePlusPlus2.prototype.ensureSessionStorageDir = function() {
        return this.ensureDir(this.getSessionStorageDirPath());
      };
      WorkspacePlusPlus2.prototype.getFileMtime = function(path) {
        return this.app.vault.adapter.stat(path).then(function(stat) {
          if (!stat || typeof stat.mtime !== "number") return 0;
          return stat.mtime;
        }).catch(function() {
          return 0;
        });
      };
      WorkspacePlusPlus2.prototype.readJsonIfExists = function(path) {
        var self = this;
        return this.app.vault.adapter.exists(path).then(function(exists) {
          if (!exists) {
            return { exists: false, data: null, error: null };
          }
          return self.app.vault.adapter.read(path).then(function(raw) {
            try {
              return { exists: true, data: JSON.parse(raw), error: null };
            } catch (e) {
              return { exists: true, data: null, error: e };
            }
          }).catch(function(e) {
            return { exists: true, data: null, error: e };
          });
        });
      };
      WorkspacePlusPlus2.prototype.writeJson = function(path, data, pretty) {
        var json = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data);
        return this.app.vault.adapter.write(path, json);
      };
      WorkspacePlusPlus2.prototype.writeJsonWithBackup = function(path, backupPath, data, pretty) {
        var self = this;
        return this.writeJson(backupPath, data, pretty).then(function() {
          return self.writeJson(path, data, pretty);
        });
      };
      WorkspacePlusPlus2.prototype.removeIfExists = function(path) {
        var self = this;
        return this.app.vault.adapter.exists(path).then(function(exists) {
          if (!exists) return;
          return self.app.vault.adapter.remove(path).catch(function() {
            return;
          });
        });
      };
      WorkspacePlusPlus2.prototype.resolveSessionStorageLocation = function(settingsData) {
        var explicit = normalizeSessionStorageLocation(settingsData && settingsData.sessionStorageLocation);
        if (explicit) {
          this.setRuntimeSessionStorageLocation(explicit);
          return Promise.resolve(explicit);
        }
        var self = this;
        return Promise.all([
          this.app.vault.adapter.exists(this.getSessionsPathForLocation(SESSION_STORAGE_VAULT)),
          this.app.vault.adapter.exists(this.getSessionsBackupPathForLocation(SESSION_STORAGE_VAULT)),
          this.app.vault.adapter.exists(this.getSessionsPathForLocation(SESSION_STORAGE_PLUGIN)),
          this.app.vault.adapter.exists(this.getSessionsBackupPathForLocation(SESSION_STORAGE_PLUGIN))
        ]).then(function(exists) {
          var location;
          if (exists[0] || exists[1]) {
            location = SESSION_STORAGE_VAULT;
          } else if (exists[2] || exists[3]) {
            location = SESSION_STORAGE_PLUGIN;
          } else {
            location = self.getDefaultSessionStorageLocation();
          }
          self.setRuntimeSessionStorageLocation(location);
          return location;
        }).catch(function() {
          var fallback = self.getDefaultSessionStorageLocation();
          self.setRuntimeSessionStorageLocation(fallback);
          return fallback;
        });
      };
      WorkspacePlusPlus2.prototype.setSessionStorageLocation = function(location, options) {
        var self = this;
        var L = i18n2.L;
        options = options || {};
        var next = normalizeSessionStorageLocation(location);
        if (!next) return Promise.resolve(false);
        if (next === this.getSessionStorageLocation()) return Promise.resolve(false);
        var previousLocation = this.getSessionStorageLocation();
        var sessionData = this.extractSessionData(this.data);
        var now = Date.now();
        if (typeof this._lastPersistStamp === "number" && now <= this._lastPersistStamp) {
          now = this._lastPersistStamp + 1;
        }
        sessionData._wppSavedAt = now;
        this.setRuntimeSessionStorageLocation(next);
        this._lastPersistStamp = now;
        this._lastRotationBackupAt = 0;
        return this.ensureSessionStorageDir().then(function() {
          return self.writeJsonWithBackup(
            self.getSessionsPath(),
            self.getSessionsBackupPath(),
            sessionData,
            true
          );
        }).then(function() {
          if (typeof self.recordSessionDataStored !== "function") return true;
          return self.recordSessionDataStored(sessionData);
        }).then(function() {
          return self.persistData();
        }).then(function() {
          if (!options.silent) new obsidian2.Notice(L.sessionStorageMoved(self.getSessionsPath()), 7e3);
          return true;
        }).catch(function(error) {
          self.setRuntimeSessionStorageLocation(previousLocation);
          if (!options.silent) new obsidian2.Notice(L.sessionStorageMoveFailed);
          throw error;
        });
      };
      WorkspacePlusPlus2.prototype.persistGlobalSettings = function() {
        var self = this;
        if (!this.globalSettings) {
          this.globalSettings = Object.assign({}, this.getDefaultSettingsData());
        }
        var data = Object.assign({}, this.globalSettings, {
          sessionStorageLocation: this.getSessionStorageLocation()
        });
        var json = JSON.stringify(data);
        return this.app.vault.adapter.write(this.getBackupPath(), json).then(function() {
          return self.saveData(data);
        });
      };
      WorkspacePlusPlus2.prototype.isUsingLocalSettings = function() {
        return !!this.useLocalSettings;
      };
      WorkspacePlusPlus2.prototype.setUseLocalSettings = function(enabled, options) {
        var self = this;
        var L = i18n2.L;
        options = options || {};
        var next = !!enabled;
        if (next === this.isUsingLocalSettings()) return Promise.resolve(next);
        if (next) {
          var current = Object.assign({}, this.getDefaultSettingsData(), this.extractSettingsData(this.data));
          this.globalSettings = Object.assign({}, current);
          this.useLocalSettings = true;
          return this.ensureStorageDir().then(function() {
            return self.writeJson(self.getLocalSettingsPath(), current, true);
          }).then(function() {
            return self.persistData();
          }).then(function() {
            if (options.notify) new obsidian2.Notice(L.localSettingsEnabled);
            return true;
          });
        }
        this.useLocalSettings = false;
        var global = Object.assign({}, this.getDefaultSettingsData(), this.globalSettings || {});
        for (var i = 0; i < SETTINGS_KEYS.length; i++) {
          this.data[SETTINGS_KEYS[i]] = global[SETTINGS_KEYS[i]];
        }
        return this.removeIfExists(this.getLocalSettingsPath()).then(function() {
          return self.persistData();
        }).then(function() {
          if (options.notify) new obsidian2.Notice(L.localSettingsDisabled);
          return false;
        });
      };
      WorkspacePlusPlus2.prototype.copyGlobalSettingsToLocal = function(options) {
        var self = this;
        var L = i18n2.L;
        options = options || {};
        var global = Object.assign({}, this.getDefaultSettingsData(), this.globalSettings || {});
        this.useLocalSettings = true;
        for (var i = 0; i < SETTINGS_KEYS.length; i++) {
          this.data[SETTINGS_KEYS[i]] = global[SETTINGS_KEYS[i]];
        }
        return this.ensureStorageDir().then(function() {
          return self.writeJson(self.getLocalSettingsPath(), global, true);
        }).then(function() {
          return self.persistData();
        }).then(function() {
          if (options.notify) new obsidian2.Notice(L.localSettingsCopied);
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.resetLocalSettings = function(options) {
        var self = this;
        options = options || {};
        if (!this.isUsingLocalSettings()) return Promise.resolve(false);
        return this.copyGlobalSettingsToLocal(options).then(function() {
          return self.isUsingLocalSettings();
        });
      };
      WorkspacePlusPlus2.prototype.applyDefaultSettingsToCurrentScope = function() {
        var defaults = this.getDefaultSettingsData();
        for (var i = 0; i < SETTINGS_KEYS.length; i++) {
          this.data[SETTINGS_KEYS[i]] = defaults[SETTINGS_KEYS[i]];
        }
        i18n2.resolveLocale(this.data.language || "auto");
      };
      WorkspacePlusPlus2.prototype.resetSettingsToDefault = function() {
        this.applyDefaultSettingsToCurrentScope();
        return this.persistData();
      };
      WorkspacePlusPlus2.prototype.resetSessionsAndSettingsToDefault = function() {
        var self = this;
        this.applyDefaultSettingsToCurrentScope();
        return this.resetSessionsToDefault().then(function() {
          return self.clearBackupFiles();
        });
      };
      WorkspacePlusPlus2.prototype.clearBackupFiles = function() {
        var self = this;
        var paths = this.getBackupFilePaths();
        var tasks = paths.map(function(path) {
          return self.removeIfExists(path);
        });
        return Promise.all(tasks).then(function() {
          self._lastRotationBackupAt = 0;
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.clearBackupsAndVersionHistory = function() {
        var self = this;
        var changed = false;
        if (typeof this.clearVersionHistoryEntries === "function") {
          changed = this.clearVersionHistoryEntries();
        }
        var save = changed ? this.persistData() : Promise.resolve();
        return save.then(function() {
          return self.clearBackupFiles();
        });
      };
      WorkspacePlusPlus2.prototype.getStorageDiagnosticsInfo = function() {
        return {
          sessionStorageLocation: this.getSessionStorageLocation(),
          sessionsPath: this.getSessionsPath(),
          sessionsBackupPath: this.getSessionsBackupPath(),
          localSettingsPath: this.getLocalSettingsPath(),
          globalSettingsPath: this.manifest.dir + "/data.json",
          sessionCount: Object.keys(this.data && this.data.sessions || {}).length,
          updatedAt: Date.now()
        };
      };
      WorkspacePlusPlus2.prototype.exportSessionsSnapshot = function() {
        var self = this;
        var L = i18n2.L;
        var stamp = formatExportStamp(Date.now());
        var filePath = this.getExportDirPath() + "/sessions-" + stamp + ".json";
        var payload = {
          exportedAt: Date.now(),
          source: this.manifest.id,
          data: this.extractSessionData(this.data)
        };
        return this.ensureSessionStorageDir().then(function() {
          return self.ensureDir(self.getExportDirPath());
        }).then(function() {
          return self.writeJson(filePath, payload, true);
        }).then(function() {
          new obsidian2.Notice(L.exportSessionsDone(filePath), 7e3);
          return filePath;
        });
      };
      WorkspacePlusPlus2.prototype.importSessionsFromLatestExport = function() {
        var self = this;
        var L = i18n2.L;
        return this.app.vault.adapter.exists(this.getExportDirPath()).then(function(exists) {
          if (!exists) return null;
          return self.app.vault.adapter.list(self.getExportDirPath());
        }).then(function(listed) {
          if (!listed || !listed.files || listed.files.length === 0) return null;
          var files = listed.files.filter(function(path) {
            return /\.json$/i.test(path);
          });
          if (files.length === 0) return null;
          files.sort();
          return files[files.length - 1];
        }).then(function(latestPath) {
          if (!latestPath) {
            new obsidian2.Notice(L.importSessionsNoFile);
            return false;
          }
          return self.app.vault.adapter.read(latestPath).then(function(raw) {
            var parsed = JSON.parse(raw);
            var candidate = parsed && parsed.data ? parsed.data : parsed;
            if (!hasSessionShape(candidate)) {
              new obsidian2.Notice(L.importSessionsFailed);
              return false;
            }
            var imported = self.normalizeSessionData(candidate);
            if (!hasNonEmptySessions(imported)) {
              new obsidian2.Notice(L.importSessionsFailed);
              return false;
            }
            self.data.activeSessionId = imported.activeSessionId;
            self.data.sessions = imported.sessions;
            self.data.sessionOrder = imported.sessionOrder;
            self.data.groups = imported.groups || {};
            self.data.groupOrder = typeof self.normalizeGroupTabOrder === "function" ? self.normalizeGroupTabOrder(imported.groupOrder || []) : imported.groupOrder || [];
            self.data.sessionGroups = imported.sessionGroups || {};
            self.data.activeGroupId = imported.activeGroupId || null;
            self.syncSessionOrder();
            self.updateStatusBar();
            self.syncSessionCommands();
            return self.persistData().then(function() {
              new obsidian2.Notice(L.importSessionsDone(latestPath), 7e3);
              return true;
            });
          }).catch(function() {
            new obsidian2.Notice(L.importSessionsFailed);
            return false;
          });
        });
      };
      WorkspacePlusPlus2.prototype.persistDataImmediate = function() {
        var self = this;
        var syncBeforeWrite = typeof this.reloadExternalSessionStorageIfChanged === "function" ? this.reloadExternalSessionStorageIfChanged({ mergeLocal: true }) : Promise.resolve(false);
        return syncBeforeWrite.then(function() {
          var sessionData = self.extractSessionData(self.data);
          var settingsData = Object.assign({}, self.getDefaultSettingsData(), self.extractSettingsData(self.data));
          var now = Date.now();
          if (typeof self._lastPersistStamp === "number" && now <= self._lastPersistStamp) {
            now = self._lastPersistStamp + 1;
          }
          self._lastPersistStamp = now;
          sessionData._wppSavedAt = now;
          if (self.isUsingLocalSettings()) {
            if (!self.globalSettings) {
              self.globalSettings = Object.assign({}, settingsData);
            }
          } else {
            self.globalSettings = Object.assign({}, settingsData);
          }
          return self.ensureSessionStorageDir().then(function() {
            return self.writeJsonWithBackup(
              self.getSessionsPath(),
              self.getSessionsBackupPath(),
              sessionData
            );
          }).then(function() {
            if (typeof self.recordSessionDataStored !== "function") return true;
            return self.recordSessionDataStored(sessionData);
          }).then(function() {
            return self.rotateBackupIfNeeded(sessionData);
          }).then(function() {
            if (!self.isUsingLocalSettings()) return;
            return self.writeJson(self.getLocalSettingsPath(), settingsData, true);
          }).then(function() {
            return self.persistGlobalSettings();
          });
        });
      };
      WorkspacePlusPlus2.prototype.persistData = function() {
        var self = this;
        if (!this._persistQueue) {
          this._persistQueue = Promise.resolve();
        }
        var next = this._persistQueue.catch(function() {
          return;
        }).then(function() {
          return self.persistDataImmediate();
        });
        this._persistQueue = next;
        return next;
      };
      WorkspacePlusPlus2.prototype.flushPendingPersistence = function() {
        if (!this._persistQueue) return Promise.resolve();
        return this._persistQueue.catch(function() {
          return;
        });
      };
      WorkspacePlusPlus2.prototype.initRotationBackupTimestamp = function() {
        var self = this;
        return this.readJsonIfExists(this.getRotationBackupPath(1)).then(function(res) {
          if (res.exists && res.data) {
            self._lastRotationBackupAt = getPersistStamp(res.data) || 0;
          } else {
            self._lastRotationBackupAt = 0;
          }
        }).catch(function() {
          self._lastRotationBackupAt = 0;
        });
      };
      WorkspacePlusPlus2.prototype.rotateBackupIfNeeded = function(sessionData) {
        var now = Date.now();
        var last = this._lastRotationBackupAt || 0;
        if (now - last < BACKUP_ROTATION_INTERVAL) return Promise.resolve();
        var self = this;
        this._lastRotationBackupAt = now;
        return this.ensureDir(this.getBackupsDirPath()).then(function() {
          return self.copyFileIfExists(
            self.getRotationBackupPath(2),
            self.getRotationBackupPath(3)
          );
        }).then(function() {
          return self.copyFileIfExists(
            self.getRotationBackupPath(1),
            self.getRotationBackupPath(2)
          );
        }).then(function() {
          return self.writeJson(
            self.getRotationBackupPath(1),
            self.prepareRotationBackupData(sessionData)
          );
        }).catch(function() {
          return;
        });
      };
      WorkspacePlusPlus2.prototype.copyFileIfExists = function(srcPath, dstPath) {
        var self = this;
        return this.app.vault.adapter.exists(srcPath).then(function(exists) {
          if (!exists) return;
          return self.app.vault.adapter.read(srcPath).then(function(raw) {
            return self.app.vault.adapter.write(dstPath, raw);
          });
        });
      };
      WorkspacePlusPlus2.prototype.getRotationBackupInfo = function() {
        var self = this;
        var results = [];
        function readGeneration(n) {
          return self.readJsonIfExists(self.getRotationBackupPath(n)).then(function(res) {
            if (!res.exists || !res.data) return null;
            var stamp = getPersistStamp(res.data);
            var sessions = res.data.sessions;
            var count = sessions && typeof sessions === "object" ? Object.keys(sessions).length : 0;
            var platform = typeof res.data._wppBackupPlatform === "string" ? res.data._wppBackupPlatform : "";
            return {
              generation: n,
              savedAt: stamp,
              sessionCount: count,
              backupPlatform: platform
            };
          }).catch(function() {
            return null;
          });
        }
        return Promise.all([
          readGeneration(1),
          readGeneration(2),
          readGeneration(3)
        ]).then(function(items) {
          for (var i = 0; i < items.length; i++) {
            if (items[i]) results.push(items[i]);
          }
          return results;
        });
      };
      WorkspacePlusPlus2.prototype.restoreFromRotationBackup = function(generation) {
        var self = this;
        var L = i18n2.L;
        return this.readJsonIfExists(this.getRotationBackupPath(generation)).then(function(res) {
          if (!res.exists || res.error || !res.data) {
            new obsidian2.Notice(L.rotationBackupRestoreFailed);
            return false;
          }
          if (!hasSessionShape(res.data)) {
            new obsidian2.Notice(L.rotationBackupRestoreFailed);
            return false;
          }
          var imported = self.normalizeSessionData(res.data);
          if (!hasNonEmptySessions(imported)) {
            new obsidian2.Notice(L.rotationBackupRestoreFailed);
            return false;
          }
          self.data.activeSessionId = imported.activeSessionId;
          self.data.sessions = imported.sessions;
          self.data.sessionOrder = imported.sessionOrder;
          self.data.groups = imported.groups || {};
          self.data.groupOrder = typeof self.normalizeGroupTabOrder === "function" ? self.normalizeGroupTabOrder(imported.groupOrder || []) : imported.groupOrder || [];
          self.data.sessionGroups = imported.sessionGroups || {};
          self.data.activeGroupId = imported.activeGroupId || null;
          self.syncSessionOrder();
          self.updateStatusBar();
          self.syncSessionCommands();
          return self.persistData().then(function() {
            var active = self.getActiveSession();
            if (active && active.layout) {
              return self.applyWorkspaceLayout(active.layout, { catchErrors: false }).then(function() {
                new obsidian2.Notice(L.rotationBackupRestored);
                return true;
              });
            }
            new obsidian2.Notice(L.rotationBackupRestored);
            return true;
          });
        }).catch(function() {
          new obsidian2.Notice(L.rotationBackupRestoreFailed);
          return false;
        });
      };
      WorkspacePlusPlus2.prototype.loadLocalSettingsData = function() {
        var L = i18n2.L;
        return this.readJsonIfExists(this.getLocalSettingsPath()).then(function(res) {
          if (!res.exists) return null;
          if (res.error || !res.data || typeof res.data !== "object") {
            new obsidian2.Notice(L.localSettingsLoadFailed);
            return null;
          }
          return pickKeys(res.data, SETTINGS_KEYS);
        });
      };
      WorkspacePlusPlus2.prototype.loadSessionDataFromStorage = function() {
        var self = this;
        var L = i18n2.L;
        var mainPath = this.getSessionsPath();
        var backupPath = this.getSessionsBackupPath();
        return Promise.all([
          this.readJsonIfExists(mainPath),
          this.readJsonIfExists(backupPath),
          this.getFileMtime(mainPath),
          this.getFileMtime(backupPath)
        ]).then(function(parts) {
          var mainRes = parts[0];
          var backupRes = parts[1];
          var mainMtime = parts[2] || 0;
          var backupMtime = parts[3] || 0;
          var mainValid = mainRes.exists && !mainRes.error && hasSessionShape(mainRes.data);
          var backupValid = backupRes.exists && !backupRes.error && hasSessionShape(backupRes.data);
          var mainStamp = mainValid ? getPersistStamp(mainRes.data) : 0;
          var backupStamp = backupValid ? getPersistStamp(backupRes.data) : 0;
          if (!mainValid && !backupValid) return null;
          var useBackup = false;
          if (!mainValid && backupValid) {
            useBackup = true;
          } else if (mainValid && backupValid) {
            if (backupStamp > mainStamp) {
              useBackup = true;
            } else if (backupStamp === mainStamp && backupMtime > mainMtime) {
              useBackup = true;
            }
          }
          if (!useBackup) {
            var mainData = self.normalizeSessionData(mainRes.data);
            if (typeof self.recordSessionStorageState === "function") {
              self.recordSessionStorageState(mainStamp, mainMtime, mainData);
            }
            return mainData;
          }
          var restoredRaw = backupRes.data;
          var restored = self.normalizeSessionData(restoredRaw);
          return self.writeJson(mainPath, restoredRaw).catch(function() {
            return;
          }).then(function() {
            return self.getFileMtime(mainPath);
          }).then(function(restoredMtime) {
            if (typeof self.recordSessionStorageState === "function") {
              self.recordSessionStorageState(backupStamp, restoredMtime || backupMtime, restored);
            }
            if (!mainValid) new obsidian2.Notice(L.backupRestored);
            return restored;
          });
        });
      };
      WorkspacePlusPlus2.prototype.migrateLegacySessions = function(sessionData) {
        var self = this;
        var normalized = this.normalizeSessionData(sessionData);
        return this.ensureSessionStorageDir().then(function() {
          return self.writeJsonWithBackup(
            self.getSessionsPath(),
            self.getSessionsBackupPath(),
            normalized
          );
        }).then(function() {
          return self.persistGlobalSettings();
        }).then(function() {
          return true;
        }).catch(function() {
          return false;
        });
      };
      WorkspacePlusPlus2.prototype.loadWithBackup = function() {
        var self = this;
        var L = i18n2.L;
        var loadedMain = null;
        var rawSaved = null;
        var legacyMain = null;
        var hadLegacyInMain = false;
        var loadedLocalSettings = null;
        return this.loadData().catch(function() {
          return null;
        }).then(function(saved) {
          rawSaved = saved;
          loadedMain = saved || {};
          self.globalSettings = Object.assign(
            {},
            self.getDefaultSettingsData(),
            self.extractSettingsData(loadedMain)
          );
          hadLegacyInMain = hasSessionShape(loadedMain);
          legacyMain = hadLegacyInMain ? self.normalizeSessionData(loadedMain) : null;
          return self.loadLocalSettingsData();
        }).then(function(localSettings) {
          loadedLocalSettings = localSettings;
          self.useLocalSettings = !!loadedLocalSettings;
          return self.resolveSessionStorageLocation({
            sessionStorageLocation: loadedMain.sessionStorageLocation
          });
        }).then(function() {
          return self.loadSessionDataFromStorage();
        }).then(function(sessionData) {
          if (sessionData && hasNonEmptySessions(sessionData)) return sessionData;
          if (legacyMain && hasNonEmptySessions(legacyMain)) {
            return self.migrateLegacySessions(legacyMain).then(function(ok) {
              if (ok) new obsidian2.Notice(L.sessionDataMigrated);
              else new obsidian2.Notice(L.sessionDataMigrationFailed);
              return legacyMain;
            });
          }
          if (sessionData) return sessionData;
          return self.readJsonIfExists(self.getBackupPath()).then(function(legacyBackupRes) {
            if (legacyBackupRes.exists && !legacyBackupRes.error && hasSessionShape(legacyBackupRes.data) && hasNonEmptySessions(legacyBackupRes.data)) {
              var fromLegacyBackup = self.normalizeSessionData(legacyBackupRes.data);
              return self.migrateLegacySessions(fromLegacyBackup).then(function(ok) {
                if (ok) new obsidian2.Notice(L.sessionDataMigrated);
                else new obsidian2.Notice(L.sessionDataMigrationFailed);
                return fromLegacyBackup;
              });
            }
            return self.getDefaultSessionData();
          });
        }).then(function(sessionData) {
          if (!hadLegacyInMain) return sessionData;
          return self.persistGlobalSettings().catch(function() {
            return;
          }).then(function() {
            return sessionData;
          });
        }).then(function(sessionData) {
          var effectiveSettings = self.isUsingLocalSettings() ? Object.assign({}, self.globalSettings, loadedLocalSettings) : Object.assign({}, self.globalSettings);
          effectiveSettings.sessionStorageLocation = self.getSessionStorageLocation();
          if (rawSaved !== null && rawSaved !== void 0 && rawSaved.showFilterInput === void 0) {
            effectiveSettings.showFilterInput = true;
          }
          var merged = Object.assign({}, self.getDefaultSessionData(), sessionData || {});
          return Object.assign(merged, effectiveSettings);
        });
      };
    }
    module2.exports = attachPersistenceMethods;
  }
});

// src/plugin/methods/session-sync.js
var require_session_sync = __commonJS({
  "src/plugin/methods/session-sync.js"(exports2, module2) {
    "use strict";
    var EXTERNAL_SESSION_RELOAD_DEBOUNCE_MS = 500;
    var SESSION_FILE_MTIME_EPSILON_MS = 25;
    var STARTUP_SESSION_RECHECK_DELAYS = [3e3, 1e4];
    function getPersistStamp(data) {
      if (!data || typeof data !== "object") return 0;
      var stamp = data._wppSavedAt;
      if (typeof stamp !== "number" || !isFinite(stamp)) return 0;
      return stamp;
    }
    function cloneJson(value) {
      if (value === void 0) return void 0;
      return JSON.parse(JSON.stringify(value));
    }
    function isSessionDataShape(data) {
      return !!(data && typeof data === "object" && (data.sessions !== void 0 || data.sessionOrder !== void 0 || data.activeSessionId !== void 0));
    }
    function getSessionModified(session) {
      if (!session || typeof session.modified !== "number" || !isFinite(session.modified)) return 0;
      return session.modified;
    }
    function mergeOrder(primary, secondary, validMap) {
      var out = [];
      var seen = {};
      function add(id) {
        if (!id || seen[id]) return;
        if (validMap && !validMap[id]) return;
        seen[id] = true;
        out.push(id);
      }
      var i;
      primary = Array.isArray(primary) ? primary : [];
      secondary = Array.isArray(secondary) ? secondary : [];
      for (i = 0; i < primary.length; i++) add(primary[i]);
      for (i = 0; i < secondary.length; i++) add(secondary[i]);
      if (validMap) {
        var keys = Object.keys(validMap);
        for (i = 0; i < keys.length; i++) add(keys[i]);
      }
      return out;
    }
    function mergeObjectWithLocalDeletes(externalObj, localObj, baselineObj) {
      externalObj = externalObj || {};
      localObj = localObj || {};
      baselineObj = baselineObj || {};
      var out = {};
      var id;
      var externalKeys = Object.keys(externalObj);
      for (var i = 0; i < externalKeys.length; i++) {
        id = externalKeys[i];
        if (baselineObj[id] && !localObj[id]) continue;
        out[id] = cloneJson(externalObj[id]);
      }
      var localKeys = Object.keys(localObj);
      for (i = 0; i < localKeys.length; i++) {
        id = localKeys[i];
        out[id] = cloneJson(localObj[id]);
      }
      return out;
    }
    function attachSessionSyncMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.getComparableSessionData = function(data) {
        var normalized = this.normalizeSessionData(data || {});
        return {
          sessions: normalized.sessions || {},
          sessionOrder: normalized.sessionOrder || [],
          groups: normalized.groups || {},
          groupOrder: normalized.groupOrder || [],
          sessionGroups: normalized.sessionGroups || {},
          archivedSessions: normalized.archivedSessions || {},
          archivedOrder: normalized.archivedOrder || []
        };
      };
      WorkspacePlusPlus2.prototype.getComparableSessionDataJson = function(data) {
        return JSON.stringify(this.getComparableSessionData(data));
      };
      WorkspacePlusPlus2.prototype.recordSessionStorageState = function(stamp, mtime, data) {
        this._sessionStorageStamp = typeof stamp === "number" && isFinite(stamp) ? stamp : 0;
        this._sessionStorageMtime = typeof mtime === "number" && isFinite(mtime) ? mtime : 0;
        if (data) {
          var comparable = this.getComparableSessionData(data);
          this._sessionStorageComparableData = cloneJson(comparable);
          this._sessionStorageDataJson = JSON.stringify(comparable);
        }
      };
      WorkspacePlusPlus2.prototype.recordSessionDataStored = function(sessionData) {
        var self = this;
        var stamp = getPersistStamp(sessionData);
        this.recordSessionStorageState(stamp, Date.now(), sessionData);
        return this.getFileMtime(this.getSessionsPath()).then(function(mtime) {
          self.recordSessionStorageState(stamp, mtime || self._sessionStorageMtime || 0, sessionData);
          return true;
        }).catch(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.getSessionStorageInfo = function() {
        var self = this;
        var path = this.getSessionsPath();
        return Promise.all([
          this.readJsonIfExists(path),
          this.getFileMtime(path)
        ]).then(function(parts) {
          var res = parts[0];
          var mtime = parts[1] || 0;
          var valid = !!(res.exists && !res.error && isSessionDataShape(res.data));
          return {
            exists: !!res.exists,
            valid,
            data: valid ? res.data : null,
            stamp: valid ? getPersistStamp(res.data) : 0,
            mtime,
            path,
            plugin: self
          };
        });
      };
      WorkspacePlusPlus2.prototype.isSessionStorageInfoNewer = function(info) {
        if (!info || !info.valid) return false;
        var currentStamp = this._sessionStorageStamp || 0;
        var currentMtime = this._sessionStorageMtime || 0;
        var nextStamp = info.stamp || 0;
        var nextMtime = info.mtime || 0;
        if (nextStamp && currentStamp) {
          if (nextStamp > currentStamp) return true;
          if (nextStamp < currentStamp) return false;
        } else if (nextStamp && !currentStamp) {
          return true;
        }
        return nextMtime > currentMtime + SESSION_FILE_MTIME_EPSILON_MS;
      };
      WorkspacePlusPlus2.prototype.hasLocalSessionChangesSinceStorage = function() {
        if (!this._sessionStorageDataJson) return false;
        return this.getComparableSessionDataJson(this.data || {}) !== this._sessionStorageDataJson;
      };
      WorkspacePlusPlus2.prototype.mergeExternalSessionDataForWrite = function(externalData) {
        var local = this.extractSessionData(this.data || {});
        var external = this.normalizeSessionData(externalData || {});
        var baseline = this._sessionStorageComparableData || {};
        var baselineSessions = baseline.sessions || {};
        var localSessions = local.sessions || {};
        var externalSessions = external.sessions || {};
        var mergedSessions = {};
        var id;
        var externalIds = Object.keys(externalSessions);
        for (var i = 0; i < externalIds.length; i++) {
          id = externalIds[i];
          if (baselineSessions[id] && !localSessions[id] && getSessionModified(externalSessions[id]) <= getSessionModified(baselineSessions[id])) {
            continue;
          }
          mergedSessions[id] = cloneJson(externalSessions[id]);
        }
        var localIds = Object.keys(localSessions);
        for (i = 0; i < localIds.length; i++) {
          id = localIds[i];
          if (!mergedSessions[id]) {
            mergedSessions[id] = cloneJson(localSessions[id]);
            continue;
          }
          if (getSessionModified(localSessions[id]) >= getSessionModified(mergedSessions[id])) {
            mergedSessions[id] = cloneJson(localSessions[id]);
          }
        }
        var groups = mergeObjectWithLocalDeletes(
          external.groups || {},
          local.groups || {},
          baseline.groups || {}
        );
        var sessionGroups = mergeObjectWithLocalDeletes(
          external.sessionGroups || {},
          local.sessionGroups || {},
          baseline.sessionGroups || {}
        );
        var archivedSessions = mergeObjectWithLocalDeletes(
          external.archivedSessions || {},
          local.archivedSessions || {},
          baseline.archivedSessions || {}
        );
        return this.normalizeSessionData({
          activeSessionId: local.activeSessionId || external.activeSessionId,
          sessions: mergedSessions,
          sessionOrder: mergeOrder(external.sessionOrder, local.sessionOrder, mergedSessions),
          groups,
          groupOrder: mergeOrder(external.groupOrder, local.groupOrder, groups),
          sessionGroups,
          activeGroupId: local.activeGroupId || external.activeGroupId,
          archivedSessions,
          archivedOrder: mergeOrder(external.archivedOrder, local.archivedOrder, archivedSessions)
        });
      };
      WorkspacePlusPlus2.prototype.applySessionDataFromStorage = function(sessionData, options) {
        options = options || {};
        if (!sessionData) return false;
        var localActiveSessionId = this.data && this.data.activeSessionId;
        var localActiveGroupId = this.data && this.data.activeGroupId;
        var next = options.mergeLocal ? this.mergeExternalSessionDataForWrite(sessionData) : this.normalizeSessionData(sessionData);
        this.data.sessions = next.sessions || {};
        this.data.sessionOrder = next.sessionOrder || [];
        this.data.groups = next.groups || {};
        this.data.groupOrder = next.groupOrder || [];
        this.data.sessionGroups = next.sessionGroups || {};
        this.data.archivedSessions = next.archivedSessions || {};
        this.data.archivedOrder = next.archivedOrder || [];
        if (localActiveSessionId && this.data.sessions[localActiveSessionId]) {
          this.data.activeSessionId = localActiveSessionId;
        } else if (next.activeSessionId && this.data.sessions[next.activeSessionId]) {
          this.data.activeSessionId = next.activeSessionId;
        } else {
          this.data.activeSessionId = this.data.sessionOrder[0] || Object.keys(this.data.sessions)[0] || null;
        }
        if (localActiveGroupId && this.data.groups[localActiveGroupId]) {
          this.data.activeGroupId = localActiveGroupId;
        } else if (next.activeGroupId && this.data.groups[next.activeGroupId]) {
          this.data.activeGroupId = next.activeGroupId;
        } else {
          this.data.activeGroupId = null;
        }
        this.syncSessionOrder();
        this.normalizeGroupFeatureState();
        this.updateStatusBar();
        this.syncSessionCommands();
        if (typeof this._refreshOverlaySessions === "function") {
          this._refreshOverlaySessions();
        }
        return true;
      };
      WorkspacePlusPlus2.prototype.reloadExternalSessionStorageIfChanged = function(options) {
        var self = this;
        options = options || {};
        return this.getSessionStorageInfo().then(function(info) {
          if (!options.force && !self.isSessionStorageInfoNewer(info)) {
            return false;
          }
          var mergeLocal = !!options.mergeLocal && self.hasLocalSessionChangesSinceStorage();
          var previousComparable = self._sessionStorageComparableData ? cloneJson(self._sessionStorageComparableData) : null;
          var previousComparableJson = self._sessionStorageDataJson || "";
          return self.loadSessionDataFromStorage().then(function(sessionData) {
            if (!sessionData) return false;
            var externalComparable = self._sessionStorageComparableData ? cloneJson(self._sessionStorageComparableData) : null;
            var externalComparableJson = self._sessionStorageDataJson || "";
            if (mergeLocal && previousComparable) {
              self._sessionStorageComparableData = previousComparable;
              self._sessionStorageDataJson = previousComparableJson;
            }
            var applied = self.applySessionDataFromStorage(sessionData, {
              mergeLocal
            });
            if (mergeLocal && externalComparable) {
              self._sessionStorageComparableData = externalComparable;
              self._sessionStorageDataJson = externalComparableJson;
            }
            return applied;
          });
        }).catch(function() {
          return false;
        });
      };
      WorkspacePlusPlus2.prototype.scheduleExternalSessionStorageReload = function() {
        var self = this;
        if (this._externalSessionReloadTimer) {
          clearTimeout(this._externalSessionReloadTimer);
        }
        this._externalSessionReloadTimer = setTimeout(function() {
          self._externalSessionReloadTimer = null;
          self.reloadExternalSessionStorageIfChanged({ mergeLocal: false });
        }, EXTERNAL_SESSION_RELOAD_DEBOUNCE_MS);
      };
      WorkspacePlusPlus2.prototype.registerSessionStorageListeners = function() {
        var self = this;
        if (this._sessionStorageListenersRegistered) return;
        this._sessionStorageListenersRegistered = true;
        this._startupSessionStorageTimers = [];
        function isSessionsFile(file) {
          return !!(file && (file.path === self.getSessionsPath() || typeof self.getSessionsPathForLocation === "function" && (file.path === self.getSessionsPathForLocation("vault-folder") || file.path === self.getSessionsPathForLocation("plugin-folder"))));
        }
        this.registerEvent(this.app.vault.on("modify", function(file) {
          if (!isSessionsFile(file)) return;
          self.scheduleExternalSessionStorageReload();
        }));
        this.registerEvent(this.app.vault.on("create", function(file) {
          if (!isSessionsFile(file)) return;
          self.scheduleExternalSessionStorageReload();
        }));
        if (typeof this.registerDomEvent === "function" && typeof window !== "undefined") {
          this.registerDomEvent(window, "focus", function() {
            self.scheduleExternalSessionStorageReload();
          });
        }
      };
      WorkspacePlusPlus2.prototype.scheduleStartupSessionStorageChecks = function() {
        var self = this;
        if (!this._startupSessionStorageTimers) this._startupSessionStorageTimers = [];
        for (var i = 0; i < STARTUP_SESSION_RECHECK_DELAYS.length; i++) {
          (function(delayMs) {
            var timer = setTimeout(function() {
              var idx = self._startupSessionStorageTimers.indexOf(timer);
              if (idx !== -1) self._startupSessionStorageTimers.splice(idx, 1);
              self.reloadExternalSessionStorageIfChanged({ mergeLocal: false });
            }, delayMs);
            self._startupSessionStorageTimers.push(timer);
          })(STARTUP_SESSION_RECHECK_DELAYS[i]);
        }
      };
      WorkspacePlusPlus2.prototype.clearSessionStorageSyncTimers = function() {
        if (this._externalSessionReloadTimer) {
          clearTimeout(this._externalSessionReloadTimer);
          this._externalSessionReloadTimer = null;
        }
        var timers = this._startupSessionStorageTimers || [];
        for (var i = 0; i < timers.length; i++) {
          clearTimeout(timers[i]);
        }
        this._startupSessionStorageTimers = [];
      };
    }
    module2.exports = attachSessionSyncMethods;
  }
});

// src/layout-utils.js
var require_layout_utils = __commonJS({
  "src/layout-utils.js"(exports2, module2) {
    "use strict";
    var NOTE_UID_LAYOUT_KEY = "wppNoteUid";
    function serializeLayout(layout) {
      try {
        return JSON.stringify(layout || null);
      } catch (e) {
        return "";
      }
    }
    function layoutsEqual(a, b) {
      return serializeLayout(a) === serializeLayout(b);
    }
    function cloneLayout(layout) {
      if (layout === void 0) return void 0;
      return JSON.parse(JSON.stringify(layout));
    }
    function nodeContainsId(node, id) {
      if (!id || !node) return false;
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
          if (nodeContainsId(node[i], id)) return true;
        }
        return false;
      }
      if (typeof node === "object") {
        if (node.id === id) return true;
        var keys = Object.keys(node);
        for (var k = 0; k < keys.length; k++) {
          if (nodeContainsId(node[keys[k]], id)) return true;
        }
      }
      return false;
    }
    function mergeMainLayoutIntoCurrent(targetLayout, currentLayout) {
      var target = cloneLayout(targetLayout);
      if (!target || typeof target !== "object" || !target.main) return target;
      var current = currentLayout && typeof currentLayout === "object" ? cloneLayout(currentLayout) : {};
      current.main = target.main;
      if (typeof target.active === "string" && nodeContainsId(target.main, target.active)) {
        current.active = target.active;
      }
      return current;
    }
    function looksLikeWorkspaceItem(value) {
      return value && typeof value === "object" && typeof value.id === "string" && typeof value.type === "string" && (Array.isArray(value.children) || value.state !== void 0 || value.currentTab !== void 0 || value.direction !== void 0 || value.collapsed !== void 0);
    }
    function normalizeLayoutForComparison(layout) {
      var options = arguments.length > 1 && arguments[1] ? arguments[1] : {};
      if (options.restoreScope === "main-only" && layout && typeof layout === "object" && layout.main) {
        layout = layout.main;
      }
      var volatileKeys = {
        eState: true,
        lastOpenFiles: true,
        scroll: true,
        top: true,
        wppNoteUid: true
      };
      function normalizeNode(value, depth) {
        if (Array.isArray(value)) {
          return value.map(function(item) {
            return normalizeNode(item, depth + 1);
          });
        }
        if (value && typeof value === "object") {
          var normalized = {};
          var isWorkspaceItem = looksLikeWorkspaceItem(value);
          var keys = Object.keys(value).sort();
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (volatileKeys[key]) continue;
            if (key === "left" && (value[key] === null || typeof value[key] !== "object")) continue;
            if (key === "id" && isWorkspaceItem) continue;
            if (key === "active" && depth === 0 && typeof value[key] === "string") continue;
            normalized[key] = normalizeNode(value[key], depth + 1);
          }
          return normalized;
        }
        return value;
      }
      return normalizeNode(layout || null, 0);
    }
    function layoutsEqualStructural(a, b) {
      var options = arguments.length > 2 && arguments[2] ? arguments[2] : {};
      try {
        return JSON.stringify(normalizeLayoutForComparison(a, options)) === JSON.stringify(normalizeLayoutForComparison(b, options));
      } catch (e) {
        return layoutsEqual(a, b);
      }
    }
    function getPathBasename(filePath) {
      var normalized = String(filePath || "").replace(/\\/g, "/");
      var parts = normalized.split("/");
      return parts[parts.length - 1] || "";
    }
    function stripMdExtension(name) {
      return String(name || "").replace(/\.md$/i, "");
    }
    function normalizeUidValue(value) {
      if (value == null) return "";
      if (typeof value === "number" && isFinite(value)) return String(value);
      if (typeof value === "boolean") return value ? "true" : "false";
      if (typeof value === "string") return value.trim();
      if (Array.isArray(value) && value.length === 1) {
        return normalizeUidValue(value[0]);
      }
      return "";
    }
    function findVaultPathByBasename(files, baseName) {
      var targetBase = getPathBasename(baseName);
      var targetStem = stripMdExtension(targetBase);
      if (!targetBase && !targetStem) return null;
      var filesList = Array.isArray(files) ? files : [];
      var exact = [];
      var stem = [];
      for (var i = 0; i < filesList.length; i++) {
        var entry = filesList[i];
        var path = typeof entry === "string" ? entry : entry && entry.path;
        if (!path || typeof path !== "string") continue;
        var bn = getPathBasename(path);
        if (bn === targetBase) {
          exact.push(path);
        } else if (stripMdExtension(bn) === targetStem) {
          stem.push(path);
        }
      }
      if (exact.length > 0) return exact[0];
      if (stem.length > 0) return stem[0];
      return null;
    }
    function findVaultPathByUid(files, uid, getUidForPath) {
      var target = normalizeUidValue(uid);
      if (!target || typeof getUidForPath !== "function") return null;
      var filesList = Array.isArray(files) ? files : [];
      for (var i = 0; i < filesList.length; i++) {
        var entry = filesList[i];
        var path = typeof entry === "string" ? entry : entry && entry.path;
        if (!path || typeof path !== "string") continue;
        var fileUid = "";
        try {
          fileUid = normalizeUidValue(getUidForPath(path, entry));
        } catch (e) {
          fileUid = "";
        }
        if (fileUid && fileUid === target) return path;
      }
      return null;
    }
    function getLeafFilePath(node) {
      if (!node || typeof node !== "object" || !node.state || typeof node.state !== "object") {
        return "";
      }
      if (node.state.state && typeof node.state.state === "object" && typeof node.state.state.file === "string") {
        return node.state.state.file;
      }
      if (typeof node.state.file === "string") return node.state.file;
      return "";
    }
    function setLeafFilePath(node, filePath) {
      if (!node || typeof node !== "object" || !node.state || typeof node.state !== "object") {
        return;
      }
      if (node.state.state && typeof node.state.state === "object" && typeof node.state.state.file === "string") {
        node.state.state.file = filePath;
      }
      if (typeof node.state.file === "string") {
        node.state.file = filePath;
      }
    }
    function annotateLayoutNoteUids(layout, vaultApi, options) {
      options = options || {};
      vaultApi = vaultApi || {};
      if (!layout || typeof layout !== "object") {
        return { layout, changed: false };
      }
      var working = options.inPlace ? layout : cloneLayout(layout);
      var changed = false;
      function readUid(filePath) {
        if (!filePath || typeof vaultApi.getFileUid !== "function") return "";
        try {
          return normalizeUidValue(vaultApi.getFileUid(filePath));
        } catch (e) {
          return "";
        }
      }
      function walk(node) {
        if (!node) return;
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) walk(node[i]);
          return;
        }
        if (typeof node !== "object") return;
        var filePath = getLeafFilePath(node);
        if (filePath) {
          var uid = readUid(filePath);
          if (uid) {
            if (node[NOTE_UID_LAYOUT_KEY] !== uid) {
              node[NOTE_UID_LAYOUT_KEY] = uid;
              changed = true;
            }
          } else if (Object.prototype.hasOwnProperty.call(node, NOTE_UID_LAYOUT_KEY)) {
            delete node[NOTE_UID_LAYOUT_KEY];
            changed = true;
          }
        }
        if (Array.isArray(node.children)) walk(node.children);
        if (node.main) walk(node.main);
        if (node.left) walk(node.left);
        if (node.right) walk(node.right);
        if (node.floating) walk(node.floating);
      }
      walk(working);
      return { layout: working, changed };
    }
    function stripLayoutNoteUids(layout, options) {
      options = options || {};
      if (!layout || typeof layout !== "object") return layout;
      var working = options.inPlace ? layout : cloneLayout(layout);
      function walk(node) {
        if (!node) return;
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) walk(node[i]);
          return;
        }
        if (typeof node !== "object") return;
        if (Object.prototype.hasOwnProperty.call(node, NOTE_UID_LAYOUT_KEY)) {
          delete node[NOTE_UID_LAYOUT_KEY];
        }
        if (Array.isArray(node.children)) walk(node.children);
        if (node.main) walk(node.main);
        if (node.left) walk(node.left);
        if (node.right) walk(node.right);
        if (node.floating) walk(node.floating);
      }
      walk(working);
      return working;
    }
    function remapMissingLayoutFilePaths(layout, vaultApi, options) {
      options = options || {};
      vaultApi = vaultApi || {};
      if (!layout || typeof layout !== "object") {
        return { layout, changed: false, remaps: [] };
      }
      var working = options.inPlace ? layout : cloneLayout(layout);
      var remaps = [];
      var seenFrom = {};
      var filesCache = null;
      var restoreByFilename = options.restoreByFilename !== false;
      var restoreByUid = options.restoreByUid !== false;
      function ensureFiles() {
        if (filesCache) return filesCache;
        try {
          filesCache = typeof vaultApi.getFiles === "function" ? vaultApi.getFiles() || [] : [];
        } catch (e) {
          filesCache = [];
        }
        return filesCache;
      }
      function recordRemap(fromPath, toPath) {
        if (!fromPath || !toPath || fromPath === toPath) return;
        if (!seenFrom[fromPath]) {
          seenFrom[fromPath] = true;
          remaps.push({ from: fromPath, to: toPath });
        }
      }
      function resolvePath(filePath, storedUid) {
        if (!filePath || typeof filePath !== "string") return filePath;
        var uid = restoreByUid ? normalizeUidValue(storedUid) : "";
        if (uid) {
          var foundByUid = null;
          try {
            if (typeof vaultApi.findPathByUid === "function") {
              foundByUid = vaultApi.findPathByUid(uid);
            } else if (typeof vaultApi.getFileUid === "function") {
              foundByUid = findVaultPathByUid(ensureFiles(), uid, function(path) {
                return vaultApi.getFileUid(path);
              });
            }
          } catch (e) {
            foundByUid = null;
          }
          if (foundByUid) {
            recordRemap(filePath, foundByUid);
            return foundByUid;
          }
        }
        var exists = false;
        try {
          exists = typeof vaultApi.pathExists === "function" && !!vaultApi.pathExists(filePath);
        } catch (e) {
          exists = false;
        }
        if (exists) return filePath;
        if (!restoreByFilename) return filePath;
        var found = findVaultPathByBasename(ensureFiles(), filePath);
        if (found && found !== filePath) {
          recordRemap(filePath, found);
          return found;
        }
        return filePath;
      }
      function walk(node) {
        if (!node) return;
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) walk(node[i]);
          return;
        }
        if (typeof node !== "object") return;
        var filePath = getLeafFilePath(node);
        if (filePath) {
          var storedUid = Object.prototype.hasOwnProperty.call(node, NOTE_UID_LAYOUT_KEY) ? node[NOTE_UID_LAYOUT_KEY] : "";
          var nextPath = resolvePath(filePath, storedUid);
          if (nextPath !== filePath) {
            setLeafFilePath(node, nextPath);
          }
        }
        if (Array.isArray(node.children)) walk(node.children);
        if (node.main) walk(node.main);
        if (node.left) walk(node.left);
        if (node.right) walk(node.right);
        if (node.floating) walk(node.floating);
      }
      walk(working);
      if (Array.isArray(working.lastOpenFiles)) {
        working.lastOpenFiles = working.lastOpenFiles.map(function(filePath) {
          return resolvePath(filePath, "");
        });
      }
      return {
        layout: working,
        changed: remaps.length > 0,
        remaps
      };
    }
    module2.exports = {
      NOTE_UID_LAYOUT_KEY,
      serializeLayout,
      layoutsEqual,
      cloneLayout,
      mergeMainLayoutIntoCurrent,
      normalizeLayoutForComparison,
      layoutsEqualStructural,
      getPathBasename,
      normalizeUidValue,
      findVaultPathByBasename,
      findVaultPathByUid,
      annotateLayoutNoteUids,
      stripLayoutNoteUids,
      remapMissingLayoutFilePaths
    };
  }
});

// src/plugin/methods/sessions.js
var require_sessions = __commonJS({
  "src/plugin/methods/sessions.js"(exports2, module2) {
    "use strict";
    var layoutUtils = require_layout_utils();
    function attachSessionMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.syncSessionOrder = function() {
        var sessions = this.data.sessions;
        var order = this.data.sessionOrder;
        this.data.sessionOrder = order.filter(function(id) {
          return !!sessions[id];
        });
        var inOrder = {};
        for (var i = 0; i < this.data.sessionOrder.length; i++) {
          inOrder[this.data.sessionOrder[i]] = true;
        }
        var missing = Object.keys(sessions).filter(function(id) {
          return !inOrder[id];
        });
        missing.sort(function(a, b) {
          if (sessions[a].isDefault) return -1;
          if (sessions[b].isDefault) return 1;
          return sessions[a].name.localeCompare(sessions[b].name);
        });
        for (var j = 0; j < missing.length; j++) {
          if (sessions[missing[j]].isDefault) {
            this.data.sessionOrder.unshift(missing[j]);
          } else {
            this.data.sessionOrder.push(missing[j]);
          }
        }
      };
      WorkspacePlusPlus2.prototype.getOrderedSessionsUnfiltered = function() {
        var sessions = this.data.sessions;
        return this.data.sessionOrder.map(function(id) {
          return sessions[id];
        }).filter(function(s) {
          return !!s;
        });
      };
      WorkspacePlusPlus2.prototype.getOrderedSessionsForGroup = function(groupId) {
        var all = this.getOrderedSessionsUnfiltered();
        if (!this.isGroupFeatureEnabled()) return all;
        var targetGroupId = groupId || null;
        if (!targetGroupId) return all;
        var sessionGroups = this.data.sessionGroups || {};
        if (targetGroupId === "__ungrouped__") {
          return all.filter(function(s) {
            var groups = sessionGroups[s.id];
            return !groups || groups.length === 0;
          });
        }
        return all.filter(function(s) {
          var groups = sessionGroups[s.id];
          return groups && groups.indexOf(targetGroupId) !== -1;
        });
      };
      WorkspacePlusPlus2.prototype.getOrderedSessions = function() {
        if (!this.isGroupFeatureEnabled()) {
          return this.getOrderedSessionsUnfiltered();
        }
        return this.getOrderedSessionsForGroup(this.data.activeGroupId);
      };
      WorkspacePlusPlus2.prototype.mergeVisibleSessionOrder = function(visibleOrder) {
        var fullOrder = Array.isArray(this.data.sessionOrder) ? this.data.sessionOrder : [];
        var visible = Array.isArray(visibleOrder) ? visibleOrder : [];
        var visibleSet = {};
        for (var i = 0; i < visible.length; i++) {
          visibleSet[visible[i]] = true;
        }
        var visibleIdx = 0;
        var merged = [];
        for (var fi = 0; fi < fullOrder.length; fi++) {
          if (visibleSet[fullOrder[fi]]) {
            merged.push(visible[visibleIdx++]);
          } else {
            merged.push(fullOrder[fi]);
          }
        }
        while (visibleIdx < visible.length) {
          merged.push(visible[visibleIdx++]);
        }
        return merged;
      };
      WorkspacePlusPlus2.prototype.setSessionOrderFromVisible = function(visibleOrder, options) {
        var prev = Array.isArray(this.data.sessionOrder) ? this.data.sessionOrder : [];
        var merged = this.mergeVisibleSessionOrder(visibleOrder);
        var changed = prev.length !== merged.length;
        if (!changed) {
          for (var i = 0; i < prev.length; i++) {
            if (prev[i] !== merged[i]) {
              changed = true;
              break;
            }
          }
        }
        this.data.sessionOrder = merged;
        if (!(options && options.syncCommands === false)) {
          this.syncSessionCommands();
        }
        if (options && options.persist === false) return Promise.resolve(changed);
        if (!changed) return Promise.resolve(false);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.getSessionIndex = function(sessions, sessionId) {
        var idx = this.findSessionIndex(sessions, sessionId);
        return idx === -1 ? 0 : idx;
      };
      WorkspacePlusPlus2.prototype.findSessionIndex = function(sessions, sessionId) {
        if (!sessions || sessions.length === 0) return -1;
        for (var i = 0; i < sessions.length; i++) {
          if (sessions[i] && sessions[i].id === sessionId) {
            return i;
          }
        }
        return -1;
      };
      WorkspacePlusPlus2.prototype.findActiveSessionIndex = function(sessions) {
        return this.findSessionIndex(sessions, this.data.activeSessionId);
      };
      WorkspacePlusPlus2.prototype.getActiveSessionIndex = function(sessions) {
        return this.getSessionIndex(sessions, this.data.activeSessionId);
      };
      WorkspacePlusPlus2.prototype.getActiveSession = function() {
        if (!this.data.activeSessionId) return null;
        return this.data.sessions[this.data.activeSessionId] || null;
      };
      WorkspacePlusPlus2.prototype.getCurrentWorkspaceLayout = function() {
        var layout = this.app.workspace.getLayout();
        if (typeof this.isNoteUidBindingEnabled === "function" && !this.isNoteUidBindingEnabled()) {
          return layout;
        }
        if (typeof this.getNoteUidPropertyName === "function" && !this.getNoteUidPropertyName()) {
          return layout;
        }
        if (typeof this.annotateLayoutNoteUids !== "function") {
          return layout;
        }
        return this.annotateLayoutNoteUids(layoutUtils.cloneLayout(layout), { inPlace: true });
      };
      WorkspacePlusPlus2.prototype.serializeLayout = function(layout) {
        return layoutUtils.serializeLayout(layout);
      };
      WorkspacePlusPlus2.prototype.layoutsEqual = function(a, b) {
        return layoutUtils.layoutsEqual(a, b);
      };
      WorkspacePlusPlus2.prototype.layoutsEqualStructural = function(a, b) {
        var restoreScope = typeof this.getWorkspaceRestoreScope === "function" ? this.getWorkspaceRestoreScope() : "full";
        return layoutUtils.layoutsEqualStructural(a, b, { restoreScope });
      };
    }
    module2.exports = attachSessionMethods;
  }
});

// src/plugin/methods/layout-restore.js
var require_layout_restore = __commonJS({
  "src/plugin/methods/layout-restore.js"(exports2, module2) {
    "use strict";
    var layoutUtils = require_layout_utils();
    function attachLayoutRestoreMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.isSidebarRestoreEnabled = function() {
        return this.data.restoreSidebars !== false;
      };
      WorkspacePlusPlus2.prototype.isRestoreTabsByFilenameEnabled = function() {
        return this.data.restoreTabsByFilename !== false;
      };
      WorkspacePlusPlus2.prototype.getNoteUidPropertyName = function() {
        if (this.data.noteUidProperty === void 0 || this.data.noteUidProperty === null) {
          return "uid";
        }
        return String(this.data.noteUidProperty).trim();
      };
      WorkspacePlusPlus2.prototype.isNoteUidBindingEnabled = function() {
        return !!this.getNoteUidPropertyName();
      };
      WorkspacePlusPlus2.prototype.getWorkspaceRestoreScope = function() {
        return this.isSidebarRestoreEnabled() ? "full" : "main-only";
      };
      WorkspacePlusPlus2.prototype.buildLayoutForRestore = function(layout) {
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
      WorkspacePlusPlus2.prototype.readNoteUidForPath = function(filePath) {
        if (!this.isNoteUidBindingEnabled() || !filePath) return "";
        var prop = this.getNoteUidPropertyName();
        if (!prop) return "";
        var vault = this.app && this.app.vault;
        var metadataCache = this.app && this.app.metadataCache;
        if (!vault || typeof vault.getAbstractFileByPath !== "function") return "";
        if (!metadataCache || typeof metadataCache.getFileCache !== "function") return "";
        try {
          var file = vault.getAbstractFileByPath(filePath);
          if (!file) return "";
          var cache = metadataCache.getFileCache(file);
          var fm = cache && cache.frontmatter;
          if (!fm || fm[prop] == null) return "";
          return layoutUtils.normalizeUidValue(fm[prop]);
        } catch (e) {
          return "";
        }
      };
      WorkspacePlusPlus2.prototype.createLayoutPathVaultApi = function() {
        var self = this;
        var vault = this.app && this.app.vault;
        var uidIndex = null;
        function getFiles() {
          if (!vault || typeof vault.getFiles !== "function") return [];
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
              var path = typeof entry === "string" ? entry : entry && entry.path;
              if (!path) continue;
              var fileUid = getFileUid(path);
              if (fileUid && uidIndex[fileUid] === void 0) {
                uidIndex[fileUid] = path;
              }
            }
          }
          return uidIndex[target] || null;
        }
        return {
          pathExists: function(filePath) {
            if (!vault || typeof vault.getAbstractFileByPath !== "function") return false;
            try {
              return !!vault.getAbstractFileByPath(filePath);
            } catch (e) {
              return false;
            }
          },
          getFiles,
          getFileUid,
          findPathByUid
        };
      };
      WorkspacePlusPlus2.prototype.annotateLayoutNoteUids = function(layout, options) {
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
      WorkspacePlusPlus2.prototype.remapMissingLayoutPaths = function(layout) {
        if (!layout) {
          return { layout, changed: false, remaps: [] };
        }
        return layoutUtils.remapMissingLayoutFilePaths(
          layout,
          this.createLayoutPathVaultApi(),
          {
            inPlace: true,
            restoreByFilename: this.isRestoreTabsByFilenameEnabled(),
            restoreByUid: this.isNoteUidBindingEnabled()
          }
        );
      };
      WorkspacePlusPlus2.prototype.applyWorkspaceLayout = function(layout, options) {
        options = options || {};
        if (!layout) return Promise.resolve();
        var nextLayout = this.buildLayoutForRestore(layout);
        var remapResult = this.remapMissingLayoutPaths(nextLayout);
        nextLayout = remapResult.layout || nextLayout;
        if (remapResult.changed && layout && layout !== nextLayout) {
          this.remapMissingLayoutPaths(layout);
        }
        var layoutToApply = layoutUtils.stripLayoutNoteUids(nextLayout);
        var apply = Promise.resolve(this.app.workspace.changeLayout(layoutToApply));
        if (options.catchErrors === false) return apply;
        return apply.catch(function() {
        });
      };
    }
    module2.exports = attachLayoutRestoreMethods;
  }
});

// src/plugin/methods/sessions-validation.js
var require_sessions_validation = __commonJS({
  "src/plugin/methods/sessions-validation.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    function attachSessionValidationMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.isSessionNameTaken = function(name, excludeSessionId) {
        var sessions = this.data.sessions || {};
        var keys = Object.keys(sessions);
        for (var i = 0; i < keys.length; i++) {
          var id = keys[i];
          if (excludeSessionId && id === excludeSessionId) continue;
          if (!sessions[id]) continue;
          if (sessions[id].name === name) return true;
        }
        return false;
      };
      WorkspacePlusPlus2.prototype.isGroupNameTaken = function(name, excludeGroupId) {
        var groups = this.data.groups || {};
        var keys = Object.keys(groups);
        for (var i = 0; i < keys.length; i++) {
          var id = keys[i];
          if (excludeGroupId && id === excludeGroupId) continue;
          if (!groups[id]) continue;
          if (groups[id].name === name) return true;
        }
        return false;
      };
      WorkspacePlusPlus2.prototype.createSessionValidated = function(name, options) {
        var L = i18n2.L;
        options = options || {};
        var rawName = typeof name === "string" ? name : "";
        var finalName = rawName.trim();
        if (!finalName) {
          if (rawName.length > 0) {
            if (options.notify !== false) {
              new obsidian2.Notice(L.emptyName);
            }
            return Promise.resolve({
              created: false,
              reason: "empty",
              name: "",
              sessionId: null
            });
          }
          finalName = this.getNextSessionName();
        }
        if (this.isSessionNameTaken(finalName)) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.duplicateName);
          }
          return Promise.resolve({
            created: false,
            reason: "duplicate",
            name: finalName,
            sessionId: null
          });
        }
        var self = this;
        return this.createSession(finalName).then(function() {
          return {
            created: true,
            reason: "",
            name: finalName,
            sessionId: self.data.activeSessionId
          };
        });
      };
      WorkspacePlusPlus2.prototype.createSessionForViewedGroup = function(name, viewedGroupId, options) {
        var self = this;
        var groupsEnabled = this.isGroupFeatureEnabled();
        var targetGroupId = groupsEnabled ? viewedGroupId || null : null;
        var beforeActiveGroupId = groupsEnabled ? this.data.activeGroupId || null : null;
        return this.createSessionValidated(name, options).then(function(result) {
          if (!result || !result.created) return result;
          if (!groupsEnabled) {
            result.viewGroupId = null;
            return result;
          }
          var createdSessionId = result.sessionId;
          if (targetGroupId === "__ungrouped__") {
            return self.clearSessionGroupMembership(createdSessionId).then(function() {
              result.viewGroupId = "__ungrouped__";
              return result;
            });
          }
          if (targetGroupId && targetGroupId !== beforeActiveGroupId) {
            return self.moveSessionToGroupExclusive(createdSessionId, targetGroupId).then(function() {
              return self.resolveGroupSelection(targetGroupId).then(function(selection) {
                result.viewGroupId = selection.resolvedGroupId || null;
                return result;
              });
            });
          }
          result.viewGroupId = self.data.activeGroupId || null;
          return result;
        });
      };
      WorkspacePlusPlus2.prototype.renameSessionById = function(sessionId, newName, options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session) return Promise.resolve(false);
        var normalized = typeof newName === "string" ? newName.trim() : "";
        if (!normalized) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.emptyName);
          }
          return Promise.resolve(false);
        }
        if (normalized === session.name) return Promise.resolve(false);
        if (this.isSessionNameTaken(normalized, sessionId)) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.duplicateName);
          }
          return Promise.resolve(false);
        }
        var oldName = session.name;
        session.name = normalized;
        session.modified = Date.now();
        this.updateStatusBar();
        this.syncSessionCommands();
        return this.persistData().then(function() {
          if (options.notify !== false) {
            new obsidian2.Notice(L.renamed(oldName, normalized));
          }
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.editSessionById = function(sessionId, newName, note, options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session) return Promise.resolve(false);
        var normalized = typeof newName === "string" ? newName.trim() : "";
        if (!normalized) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.emptyName);
          }
          return Promise.resolve(false);
        }
        var updateNote = arguments.length >= 3 && note !== void 0;
        var nextNote = updateNote && typeof note === "string" ? note.trim() : "";
        var nameChanged = normalized !== session.name;
        var noteChanged = updateNote && nextNote !== (session.note || "");
        if (!nameChanged && !noteChanged) return Promise.resolve(false);
        if (nameChanged && this.isSessionNameTaken(normalized, sessionId)) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.duplicateName);
          }
          return Promise.resolve(false);
        }
        var oldName = session.name;
        if (nameChanged) session.name = normalized;
        if (updateNote) {
          if (nextNote) session.note = nextNote;
          else delete session.note;
        }
        session.modified = Date.now();
        this.updateStatusBar();
        this.syncSessionCommands();
        return this.persistData().then(function() {
          if (options.notify !== false) {
            if (nameChanged) {
              new obsidian2.Notice(L.renamed(oldName, normalized));
            } else {
              new obsidian2.Notice(L.sessionNoteUpdated(normalized));
            }
          }
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.createGroupValidated = function(name, options) {
        var L = i18n2.L;
        options = options || {};
        var normalized = typeof name === "string" ? name.trim() : "";
        if (!normalized) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.groupEmptyName);
          }
          return Promise.resolve(false);
        }
        if (this.isGroupNameTaken(normalized)) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.groupDuplicateName);
          }
          return Promise.resolve(false);
        }
        return this.createGroup(normalized);
      };
      WorkspacePlusPlus2.prototype.renameGroupValidated = function(groupId, newName, options) {
        var L = i18n2.L;
        options = options || {};
        var groups = this.data.groups || {};
        var group = groups[groupId];
        if (!group) return Promise.resolve(false);
        var normalized = typeof newName === "string" ? newName.trim() : "";
        if (!normalized) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.groupEmptyName);
          }
          return Promise.resolve(false);
        }
        if (normalized === group.name) return Promise.resolve(false);
        if (this.isGroupNameTaken(normalized, groupId)) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.groupDuplicateName);
          }
          return Promise.resolve(false);
        }
        return this.renameGroup(groupId, normalized);
      };
    }
    module2.exports = attachSessionValidationMethods;
  }
});

// src/plugin/methods/groups.js
var require_groups = __commonJS({
  "src/plugin/methods/groups.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var utils = require_utils();
    function attachGroupMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.isGroupFeatureEnabled = function() {
        return this.data.groupFeatureEnabled !== false;
      };
      WorkspacePlusPlus2.prototype.normalizeGroupFeatureState = function() {
        if (this.isGroupFeatureEnabled()) return;
        this.data.activeGroupId = null;
      };
      WorkspacePlusPlus2.prototype.setGroupFeatureEnabled = function(enabled) {
        var nextEnabled = enabled !== false;
        var changed = this.isGroupFeatureEnabled() !== nextEnabled;
        this.data.groupFeatureEnabled = nextEnabled;
        if (!nextEnabled && this.data.activeGroupId) {
          this.data.activeGroupId = null;
          changed = true;
        }
        if (!nextEnabled) {
          this.hideSwitchOverlay();
          this.hideSearchOverlay();
        }
        this.syncSessionCommands();
        this.updateStatusBar();
        if (!changed) return Promise.resolve(false);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.attachSessionToActiveGroup = function(sessionId) {
        if (!this.isGroupFeatureEnabled()) return;
        var activeGroupId = this.data.activeGroupId;
        if (!activeGroupId || activeGroupId === "__ungrouped__" || activeGroupId === "__all__") return;
        if (!this.data.groups || !this.data.groups[activeGroupId]) return;
        if (!this.data.sessionGroups) this.data.sessionGroups = {};
        if (!Array.isArray(this.data.sessionGroups[sessionId])) {
          this.data.sessionGroups[sessionId] = [];
        }
        if (this.data.sessionGroups[sessionId].indexOf(activeGroupId) === -1) {
          this.data.sessionGroups[sessionId].push(activeGroupId);
        }
      };
      WorkspacePlusPlus2.prototype.getOrderedGroups = function() {
        if (!this.isGroupFeatureEnabled()) return [];
        var groups = this.data.groups || {};
        return (this.data.groupOrder || []).map(function(id) {
          return groups[id];
        }).filter(function(g) {
          return !!g;
        });
      };
      WorkspacePlusPlus2.prototype.normalizeGroupTabOrder = function(order) {
        var groups = this.data.groups || {};
        var input = Array.isArray(order) ? order : [];
        var seen = {};
        var out = [];
        var i;
        for (i = 0; i < input.length; i++) {
          var gid = input[i];
          if (gid !== "__all__" && !groups[gid]) continue;
          if (seen[gid]) continue;
          seen[gid] = true;
          out.push(gid);
        }
        if (!seen.__all__) {
          out.unshift("__all__");
          seen.__all__ = true;
        }
        var existingIds = Object.keys(groups);
        for (i = 0; i < existingIds.length; i++) {
          if (seen[existingIds[i]]) continue;
          seen[existingIds[i]] = true;
          out.push(existingIds[i]);
        }
        return out;
      };
      WorkspacePlusPlus2.prototype.getOrderedGroupTabIds = function() {
        if (!this.isGroupFeatureEnabled()) return [];
        this.data.groupOrder = this.normalizeGroupTabOrder(this.data.groupOrder);
        return this.data.groupOrder.slice();
      };
      WorkspacePlusPlus2.prototype.setGroupTabOrder = function(order, options) {
        if (!this.isGroupFeatureEnabled()) return Promise.resolve(false);
        var prev = Array.isArray(this.data.groupOrder) ? this.data.groupOrder : [];
        var normalized = this.normalizeGroupTabOrder(order);
        var changed = prev.length !== normalized.length;
        if (!changed) {
          for (var i = 0; i < prev.length; i++) {
            if (prev[i] !== normalized[i]) {
              changed = true;
              break;
            }
          }
        }
        this.data.groupOrder = normalized;
        if (options && options.persist === false) return Promise.resolve(changed);
        if (!changed) return Promise.resolve(false);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.getActiveGroup = function() {
        if (!this.isGroupFeatureEnabled()) return null;
        if (!this.data.activeGroupId) return null;
        return (this.data.groups || {})[this.data.activeGroupId] || null;
      };
      WorkspacePlusPlus2.prototype.chooseSessionGroupForView = function(sessionId) {
        if (!this.isGroupFeatureEnabled()) return void 0;
        var data = this.data || {};
        var groups = data.groups || {};
        var sessionGroups = data.sessionGroups || {};
        var groupIds = Array.isArray(sessionGroups[sessionId]) ? sessionGroups[sessionId] : [];
        var validGroupIds = groupIds.filter(function(groupId) {
          return !!groups[groupId];
        });
        if (validGroupIds.length === 0) return null;
        if (validGroupIds.indexOf(data.activeGroupId) !== -1) return data.activeGroupId;
        var ordered = this.getOrderedGroupTabIds();
        for (var i = 0; i < ordered.length; i++) {
          if (ordered[i] === "__all__") continue;
          if (validGroupIds.indexOf(ordered[i]) !== -1) return ordered[i];
        }
        return validGroupIds[0];
      };
      WorkspacePlusPlus2.prototype.createGroup = function(name) {
        var L = i18n2.L;
        var id = utils.generateId();
        if (!this.data.groups) this.data.groups = {};
        this.data.groups[id] = { id, name };
        var nextOrder = Array.isArray(this.data.groupOrder) ? this.data.groupOrder.slice() : [];
        nextOrder.push(id);
        this.data.groupOrder = this.normalizeGroupTabOrder(nextOrder);
        new obsidian2.Notice(L.groupCreated(name));
        return this.persistData().then(function() {
          return id;
        });
      };
      WorkspacePlusPlus2.prototype.deleteGroup = function(groupId) {
        var L = i18n2.L;
        if (!this.data.groups || !this.data.groups[groupId]) return Promise.resolve(false);
        var name = this.data.groups[groupId].name;
        delete this.data.groups[groupId];
        var nextOrder = (this.data.groupOrder || []).filter(function(gid) {
          return gid !== groupId;
        });
        this.data.groupOrder = this.normalizeGroupTabOrder(nextOrder);
        this.removeGroupMembershipFromAllSessions(groupId, { persist: false });
        if (this.data.activeGroupId === groupId) {
          this.data.activeGroupId = null;
        }
        this.updateStatusBar();
        this.syncSessionCommands();
        new obsidian2.Notice(L.groupDeleted(name));
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.renameGroup = function(groupId, newName) {
        var L = i18n2.L;
        if (!this.data.groups || !this.data.groups[groupId]) return Promise.resolve(false);
        var oldName = this.data.groups[groupId].name;
        this.data.groups[groupId].name = newName;
        this.updateStatusBar();
        new obsidian2.Notice(L.groupRenamed(oldName, newName));
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.setActiveGroup = function(groupId) {
        if (!this.isGroupFeatureEnabled()) return Promise.resolve(false);
        var nextGroupId = groupId || null;
        if (nextGroupId && (!this.data.groups || !this.data.groups[nextGroupId])) return Promise.resolve(false);
        var self = this;
        var commitGroup = function() {
          self.data.activeGroupId = nextGroupId;
          self.syncSessionCommands();
          self.updateStatusBar();
          return self.persistData().then(function() {
            return true;
          });
        };
        if (!nextGroupId) {
          return commitGroup();
        }
        var sessionGroups = this.data.sessionGroups || {};
        var targetSessions = this.getOrderedSessionsUnfiltered().filter(function(s) {
          var groups = sessionGroups[s.id];
          return groups && groups.indexOf(nextGroupId) !== -1;
        });
        if (targetSessions.length === 0) {
          return Promise.resolve(false);
        }
        var activeId = this.data.activeSessionId;
        var isInTarget = targetSessions.some(function(s) {
          return s.id === activeId;
        });
        if (isInTarget) {
          return commitGroup();
        }
        return this.switchSession(targetSessions[0].id).then(function(switched) {
          if (!switched) return false;
          return commitGroup();
        });
      };
      WorkspacePlusPlus2.prototype.exitGroup = function() {
        return this.setActiveGroup(null);
      };
      WorkspacePlusPlus2.prototype.getRelativeGroupId = function(baseGroupId, offset) {
        if (!this.isGroupFeatureEnabled()) return void 0;
        var ordered = this.getOrderedGroups();
        if (ordered.length === 0) return void 0;
        var currentId = baseGroupId || null;
        if (!currentId) {
          var edgeIdx = offset > 0 ? 0 : ordered.length - 1;
          return ordered[edgeIdx].id;
        }
        var currentIdx = -1;
        for (var i = 0; i < ordered.length; i++) {
          if (ordered[i].id === currentId) {
            currentIdx = i;
            break;
          }
        }
        if (currentIdx === -1) return ordered[0].id;
        var nextIdx = currentIdx + offset;
        if (nextIdx < 0 || nextIdx >= ordered.length) return null;
        return ordered[nextIdx].id;
      };
      WorkspacePlusPlus2.prototype.resolveGroupViewSelection = function(groupId) {
        if (!this.isGroupFeatureEnabled()) {
          return Promise.resolve({
            switched: false,
            targetGroupId: null,
            resolvedGroupId: null,
            sessions: this.getOrderedSessionsUnfiltered()
          });
        }
        var targetGroupId = groupId || null;
        var groups = this.data.groups || {};
        var resolvedGroupId = targetGroupId;
        if (resolvedGroupId === "__ungrouped__") {
        } else if (resolvedGroupId && !groups[resolvedGroupId]) {
          resolvedGroupId = null;
        }
        return Promise.resolve({
          switched: false,
          targetGroupId,
          resolvedGroupId,
          sessions: this.getOrderedSessionsForGroup(resolvedGroupId)
        });
      };
      WorkspacePlusPlus2.prototype.clearSessionGroupMembership = function(sessionId, options) {
        if (!sessionId || !this.data.sessions[sessionId]) return Promise.resolve(false);
        if (!this.data.sessionGroups || !this.data.sessionGroups[sessionId]) {
          return Promise.resolve(false);
        }
        delete this.data.sessionGroups[sessionId];
        this.syncSessionCommands();
        if (options && options.persist === false) return Promise.resolve(true);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.resolveGroupSelection = function(groupId) {
        if (!this.isGroupFeatureEnabled()) {
          return Promise.resolve({
            switched: false,
            targetGroupId: null,
            resolvedGroupId: null,
            sessions: this.getOrderedSessionsUnfiltered()
          });
        }
        var targetGroupId = groupId || null;
        var targetSessions = this.getOrderedSessionsForGroup(targetGroupId);
        var self = this;
        return this.setActiveGroup(targetGroupId).then(function(switched) {
          var resolvedGroupId;
          if (switched) {
            resolvedGroupId = self.data.activeGroupId || null;
          } else if (targetSessions.length === 0) {
            resolvedGroupId = targetGroupId;
          } else {
            resolvedGroupId = self.data.activeGroupId || null;
          }
          return {
            switched,
            targetGroupId,
            resolvedGroupId,
            sessions: self.getOrderedSessionsForGroup(resolvedGroupId)
          };
        });
      };
      WorkspacePlusPlus2.prototype.switchGroupRelative = function(offset) {
        if (!this.isGroupFeatureEnabled()) return Promise.resolve(false);
        var targetGroupId = this.getRelativeGroupId(this.data.activeGroupId, offset);
        if (typeof targetGroupId === "undefined") return Promise.resolve(false);
        return this.setActiveGroup(targetGroupId);
      };
      WorkspacePlusPlus2.prototype.removeGroupMembershipFromAllSessions = function(groupId, options) {
        if (!groupId) return Promise.resolve(false);
        var sg = this.data.sessionGroups || {};
        var keys = Object.keys(sg);
        var changed = false;
        for (var i = 0; i < keys.length; i++) {
          var arr = sg[keys[i]];
          var idx = arr.indexOf(groupId);
          if (idx !== -1) {
            arr.splice(idx, 1);
            changed = true;
            if (arr.length === 0) delete sg[keys[i]];
          }
        }
        if (!changed) return Promise.resolve(false);
        this.syncSessionCommands();
        if (options && options.persist === false) return Promise.resolve(true);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.removeAllSessionsFromGroup = function(groupId, options) {
        if (!groupId) return Promise.resolve(false);
        var groups = this.data.groups || {};
        if (!groups[groupId]) return Promise.resolve(false);
        return this.removeGroupMembershipFromAllSessions(groupId, options);
      };
      WorkspacePlusPlus2.prototype.moveSessionToGroupExclusive = function(sessionId, groupId, options) {
        if (!this.data.sessions[sessionId]) return Promise.resolve(false);
        if (!this.data.groups || !this.data.groups[groupId]) return Promise.resolve(false);
        if (!this.data.sessionGroups) this.data.sessionGroups = {};
        var prev = this.data.sessionGroups[sessionId] || [];
        var changed = prev.length !== 1 || prev[0] !== groupId;
        if (!changed) return Promise.resolve(false);
        this.data.sessionGroups[sessionId] = [groupId];
        this.syncSessionCommands();
        if (options && options.persist === false) return Promise.resolve(true);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.clearAllGroups = function(options) {
        var groupCount = Object.keys(this.data.groups || {}).length;
        var sessionGroupCount = Object.keys(this.data.sessionGroups || {}).length;
        var hasActiveGroup = !!this.data.activeGroupId;
        var hadCustomOrder = Array.isArray(this.data.groupOrder) ? this.data.groupOrder.some(function(id) {
          return id !== "__all__";
        }) : false;
        var changed = groupCount > 0 || sessionGroupCount > 0 || hasActiveGroup || hadCustomOrder;
        this.data.sessionGroups = {};
        this.data.groups = {};
        this.data.groupOrder = this.normalizeGroupTabOrder([]);
        this.data.activeGroupId = null;
        this.syncSessionCommands();
        this.updateStatusBar();
        if (!changed) return Promise.resolve(false);
        if (options && options.persist === false) return Promise.resolve(true);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.addSessionToGroup = function(sessionId, groupId) {
        if (!this.data.sessions[sessionId]) return Promise.resolve(false);
        if (!this.data.groups || !this.data.groups[groupId]) return Promise.resolve(false);
        if (!this.data.sessionGroups) this.data.sessionGroups = {};
        if (!this.data.sessionGroups[sessionId]) this.data.sessionGroups[sessionId] = [];
        if (this.data.sessionGroups[sessionId].indexOf(groupId) !== -1) return Promise.resolve(false);
        this.data.sessionGroups[sessionId].push(groupId);
        this.syncSessionCommands();
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.removeSessionFromGroup = function(sessionId, groupId) {
        if (!this.data.sessionGroups || !this.data.sessionGroups[sessionId]) return Promise.resolve(false);
        var arr = this.data.sessionGroups[sessionId];
        var idx = arr.indexOf(groupId);
        if (idx === -1) return Promise.resolve(false);
        arr.splice(idx, 1);
        if (arr.length === 0) delete this.data.sessionGroups[sessionId];
        this.syncSessionCommands();
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.getGroupSessionIds = function(groupId) {
        var sg = this.data.sessionGroups || {};
        var result = [];
        var keys = Object.keys(sg);
        for (var i = 0; i < keys.length; i++) {
          if (sg[keys[i]].indexOf(groupId) !== -1) result.push(keys[i]);
        }
        return result;
      };
    }
    module2.exports = attachGroupMethods;
  }
});

// src/plugin/methods/session-crud.js
var require_session_crud = __commonJS({
  "src/plugin/methods/session-crud.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var utils = require_utils();
    var layoutUtils = require_layout_utils();
    var modals2 = require_modals2();
    function attachSessionCrudMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.getDefaultSessionName = function() {
        return i18n2.L.defaultSessionName;
      };
      WorkspacePlusPlus2.prototype.getAutoSessionName = function(n) {
        return i18n2.L.sessionAutoName(n);
      };
      WorkspacePlusPlus2.prototype.insertSessionAndActivate = function(session) {
        this.data.sessions[session.id] = session;
        this.data.sessionOrder.push(session.id);
        this.data.activeSessionId = session.id;
        this.attachSessionToActiveGroup(session.id);
      };
      WorkspacePlusPlus2.prototype.createSessionRecord = function(id, name, layout, options) {
        options = options || {};
        var record = {
          id,
          name,
          modified: typeof options.modified === "number" ? options.modified : Date.now(),
          layout,
          zenMode: !!options.zenMode
        };
        if (options.isDefault) {
          record.isDefault = true;
        }
        return record;
      };
      WorkspacePlusPlus2.prototype.createSession = function(name) {
        var id = utils.generateId();
        var layout = this.getCurrentWorkspaceLayout();
        this.insertSessionAndActivate(this.createSessionRecord(id, name, layout));
        this.applyZenModeClasses();
        this.updateStatusBar();
        this.syncSessionCommands();
        return this.persistData();
      };
      WorkspacePlusPlus2.prototype.deleteSession = function(sessionId) {
        var session = this.data.sessions[sessionId];
        if (!session || Object.keys(this.data.sessions).length <= 1) return Promise.resolve(false);
        var wasActive = this.data.activeSessionId === sessionId;
        var nextActiveId = null;
        delete this.data.sessions[sessionId];
        var orderIdx = this.data.sessionOrder.indexOf(sessionId);
        if (orderIdx !== -1) this.data.sessionOrder.splice(orderIdx, 1);
        if (this.data.sessionGroups && this.data.sessionGroups[sessionId]) {
          delete this.data.sessionGroups[sessionId];
        }
        if (wasActive) {
          var fallbackIdx = Math.min(orderIdx, this.data.sessionOrder.length - 1);
          var remaining = this.data.sessionOrder[fallbackIdx] || Object.keys(this.data.sessions)[0];
          nextActiveId = remaining || null;
          this.data.activeSessionId = nextActiveId;
        }
        var applyNextLayout = Promise.resolve();
        if (wasActive && nextActiveId) {
          var nextSession = this.data.sessions[nextActiveId];
          applyNextLayout = nextSession && nextSession.layout ? this.applyWorkspaceLayout(nextSession.layout) : Promise.resolve();
        }
        this.updateStatusBar();
        this.syncSessionCommands();
        var self = this;
        return applyNextLayout.then(function() {
          self.applyZenModeClasses();
          self.scheduleZenModeRefresh(80);
          return self.persistData();
        }).then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.ensureArchiveStores = function() {
        if (!this.data.archivedSessions || typeof this.data.archivedSessions !== "object") {
          this.data.archivedSessions = {};
        }
        if (!Array.isArray(this.data.archivedOrder)) {
          this.data.archivedOrder = [];
        }
      };
      WorkspacePlusPlus2.prototype.getArchivedSessions = function() {
        this.ensureArchiveStores();
        var archived = this.data.archivedSessions;
        return this.data.archivedOrder.map(function(id) {
          return archived[id];
        }).filter(function(s) {
          return !!s;
        });
      };
      WorkspacePlusPlus2.prototype.getArchivedCount = function() {
        this.ensureArchiveStores();
        return Object.keys(this.data.archivedSessions).length;
      };
      WorkspacePlusPlus2.prototype.archiveSession = function(sessionId) {
        var session = this.data.sessions[sessionId];
        if (!session || Object.keys(this.data.sessions).length <= 1) {
          return Promise.resolve(false);
        }
        this.ensureArchiveStores();
        var wasActive = this.data.activeSessionId === sessionId;
        var orderIdx = this.data.sessionOrder.indexOf(sessionId);
        var snapshot = Object.assign({}, session);
        this.data.archivedSessions[sessionId] = snapshot;
        this.data.archivedOrder.unshift(sessionId);
        delete this.data.sessions[sessionId];
        if (orderIdx !== -1) this.data.sessionOrder.splice(orderIdx, 1);
        if (this.data.sessionGroups && this.data.sessionGroups[sessionId]) {
          snapshot.groupIds = this.data.sessionGroups[sessionId].slice();
          delete this.data.sessionGroups[sessionId];
        }
        var nextActiveId = null;
        if (wasActive) {
          var fallbackIdx = Math.min(orderIdx, this.data.sessionOrder.length - 1);
          nextActiveId = this.data.sessionOrder[fallbackIdx] || Object.keys(this.data.sessions)[0] || null;
          this.data.activeSessionId = nextActiveId;
        }
        var applyNextLayout = Promise.resolve();
        if (wasActive && nextActiveId) {
          var nextSession = this.data.sessions[nextActiveId];
          applyNextLayout = nextSession && nextSession.layout ? this.applyWorkspaceLayout(nextSession.layout) : Promise.resolve();
        }
        this.updateStatusBar();
        this.syncSessionCommands();
        var self = this;
        return applyNextLayout.then(function() {
          self.applyZenModeClasses();
          self.scheduleZenModeRefresh(80);
          return self.persistData();
        }).then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.restoreArchivedSession = function(sessionId) {
        this.ensureArchiveStores();
        var archived = this.data.archivedSessions[sessionId];
        if (!archived) return Promise.resolve(false);
        var groupIds = Array.isArray(archived.groupIds) ? archived.groupIds.slice() : null;
        var session = Object.assign({}, archived);
        delete session.groupIds;
        this.data.sessions[sessionId] = session;
        this.data.sessionOrder.push(sessionId);
        if (groupIds && groupIds.length > 0) {
          if (!this.data.sessionGroups) this.data.sessionGroups = {};
          this.data.sessionGroups[sessionId] = groupIds.filter(function(gid) {
            return !!(this.data.groups && this.data.groups[gid]);
          }, this);
          if (this.data.sessionGroups[sessionId].length === 0) {
            delete this.data.sessionGroups[sessionId];
          }
        }
        delete this.data.archivedSessions[sessionId];
        var aIdx = this.data.archivedOrder.indexOf(sessionId);
        if (aIdx !== -1) this.data.archivedOrder.splice(aIdx, 1);
        this.syncSessionCommands();
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.permanentlyDeleteArchivedSession = function(sessionId) {
        this.ensureArchiveStores();
        if (!this.data.archivedSessions[sessionId]) return Promise.resolve(false);
        delete this.data.archivedSessions[sessionId];
        var aIdx = this.data.archivedOrder.indexOf(sessionId);
        if (aIdx !== -1) this.data.archivedOrder.splice(aIdx, 1);
        return this.persistData().then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.renameCurrentSession = function() {
        var L = i18n2.L;
        var self = this;
        var session = this.getActiveSession();
        if (!session) {
          new obsidian2.Notice(L.noSession);
          return;
        }
        new modals2.RenameModal(this.app, session.name, function(newName) {
          self.renameSessionById(session.id, newName);
        }, {
          emptyNotice: L.emptyName
        }).open();
      };
      WorkspacePlusPlus2.prototype.deleteCurrentSession = function() {
        var L = i18n2.L;
        var self = this;
        var session = this.getActiveSession();
        if (!session) {
          new obsidian2.Notice(L.noSession);
          return;
        }
        if (Object.keys(this.data.sessions).length <= 1) {
          new obsidian2.Notice(L.cannotDeleteLast);
          return;
        }
        var doDelete = function() {
          return self.deleteSession(session.id).then(function(deleted) {
            if (!deleted) return;
            new obsidian2.Notice(L.deleted(session.name));
          });
        };
        if (!this.data.confirmDeleteByHotkey) {
          doDelete();
          return;
        }
        new modals2.ConfirmModal(this.app, L.confirmDeleteActive(session.name), doDelete, {
          hint: L.confirmDeleteSettingsHint,
          onHintClick: function() {
            self.app.setting.open();
            self.app.setting.openTabById(self.manifest.id);
          }
        }).open();
      };
      WorkspacePlusPlus2.prototype.deleteAllInactiveSessions = function() {
        var self = this;
        var activeId = this.data.activeSessionId;
        var ids = Object.keys(this.data.sessions || {}).filter(function(id) {
          return id !== activeId;
        });
        var promises = ids.map(function(id) {
          return self.deleteSession(id);
        });
        return Promise.all(promises).then(function(results) {
          var deletedCount = 0;
          for (var i = 0; i < results.length; i++) {
            if (results[i]) deletedCount++;
          }
          return deletedCount;
        });
      };
      WorkspacePlusPlus2.prototype.getNextSessionName = function() {
        var sessions = this.data.sessions;
        var existing = {};
        var keys = Object.keys(sessions);
        for (var i = 0; i < keys.length; i++) {
          existing[sessions[keys[i]].name] = true;
        }
        var n = 1;
        while (existing[this.getAutoSessionName(n)]) {
          n++;
        }
        return this.getAutoSessionName(n);
      };
      WorkspacePlusPlus2.prototype.resetSessionsToDefault = function() {
        var id = utils.generateId();
        this.hideSwitchOverlay();
        this.data.sessions = {};
        this.data.sessionOrder = [];
        this.data.activeSessionId = null;
        this.data.groups = {};
        this.data.groupOrder = [];
        this.data.sessionGroups = {};
        this.data.activeGroupId = null;
        this.data.archivedSessions = {};
        this.data.archivedOrder = [];
        this.data.sessions[id] = this.createSessionRecord(
          id,
          this.getDefaultSessionName(),
          this.getCurrentWorkspaceLayout(),
          { isDefault: true }
        );
        this.data.sessionOrder.push(id);
        this.data.activeSessionId = id;
        this.updateStatusBar();
        this.syncSessionCommands();
        return this.persistData();
      };
      WorkspacePlusPlus2.prototype.createEmptySession = function() {
        var L = i18n2.L;
        var name = this.getNextSessionName();
        this.captureActiveSessionLayoutIfAutoSave();
        var id = utils.generateId();
        var session = this.createSessionRecord(id, name, null);
        this.insertSessionAndActivate(session);
        var leaves = [];
        this.app.workspace.iterateRootLeaves(function(leaf) {
          leaves.push(leaf);
        });
        for (var i = 0; i < leaves.length; i++) {
          leaves[i].detach();
        }
        session.layout = this.getCurrentWorkspaceLayout();
        this.updateStatusBar();
        this.syncSessionCommands();
        new obsidian2.Notice(L.created(name));
        return this.persistData();
      };
      WorkspacePlusPlus2.prototype.duplicateCurrentSession = function() {
        var L = i18n2.L;
        var name = this.getNextSessionName();
        this.captureActiveSessionLayoutIfAutoSave();
        var id = utils.generateId();
        this.insertSessionAndActivate(this.createSessionRecord(id, name, this.getCurrentWorkspaceLayout()));
        this.updateStatusBar();
        this.syncSessionCommands();
        new obsidian2.Notice(L.duplicated(name));
        return this.persistData();
      };
      WorkspacePlusPlus2.prototype.duplicateSession = function(sessionId) {
        var L = i18n2.L;
        var source = this.data.sessions[sessionId];
        if (!source) return Promise.resolve();
        var name = this.getNextSessionName();
        var newId = utils.generateId();
        var copy = this.createSessionRecord(
          newId,
          name,
          layoutUtils.cloneLayout(source.layout),
          { zenMode: !!source.zenMode }
        );
        if (source.note) {
          copy.note = source.note;
        }
        this.data.sessions[newId] = copy;
        this.data.sessionOrder.push(newId);
        var groups = (this.data.sessionGroups || {})[sessionId];
        if (groups && groups.length > 0) {
          if (!this.data.sessionGroups) this.data.sessionGroups = {};
          this.data.sessionGroups[newId] = groups.slice();
        }
        this.syncSessionCommands();
        new obsidian2.Notice(L.duplicated(name));
        return this.persistData();
      };
      WorkspacePlusPlus2.prototype.ensureDefaultSession = function() {
        var hasDefault = Object.values(this.data.sessions).some(function(s) {
          return s.isDefault;
        });
        if (hasDefault) return;
        var id = utils.generateId();
        this.data.sessions[id] = this.createSessionRecord(
          id,
          this.getDefaultSessionName(),
          this.getCurrentWorkspaceLayout(),
          { isDefault: true }
        );
        this.data.sessionOrder.unshift(id);
        this.data.activeSessionId = id;
        this.updateStatusBar();
        this.syncSessionCommands();
        this.persistData();
      };
    }
    module2.exports = attachSessionCrudMethods;
  }
});

// src/plugin/methods/session-saving.js
var require_session_saving = __commonJS({
  "src/plugin/methods/session-saving.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var utils = require_utils();
    var modals2 = require_modals2();
    function findSessionByName(data, name) {
      var sessions = data && data.sessions || {};
      var keys = Object.keys(sessions);
      for (var i = 0; i < keys.length; i++) {
        if (sessions[keys[i]] && sessions[keys[i]].name === name) {
          return sessions[keys[i]];
        }
      }
      return null;
    }
    function attachSessionSavingMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.isAutoSaveOnSwitchEnabled = function() {
        return this.data.autoSaveOnSwitch !== false;
      };
      WorkspacePlusPlus2.prototype.isWarnOnUnsavedSwitchEnabled = function() {
        return this.data.warnOnUnsavedSwitch !== false;
      };
      WorkspacePlusPlus2.prototype.isUnsavedStatusBarHighlightEnabled = function() {
        return this.data.highlightUnsavedSessionChanges !== false;
      };
      WorkspacePlusPlus2.prototype.isActiveSessionDirty = function() {
        var session = this.getActiveSession();
        if (!session) return false;
        var currentLayout;
        try {
          currentLayout = this.getCurrentWorkspaceLayout();
        } catch (e) {
          return false;
        }
        return !this.layoutsEqualStructural(session.layout, currentLayout);
      };
      WorkspacePlusPlus2.prototype.shouldShowUnsavedStatusBarHighlight = function() {
        return this.isUnsavedStatusBarHighlightEnabled() && !this.isAutoSaveOnSwitchEnabled() && this.isActiveSessionDirty();
      };
      WorkspacePlusPlus2.prototype.setAutoSaveOnSwitch = function(enabled, options) {
        var L = i18n2.L;
        options = options || {};
        this.data.autoSaveOnSwitch = !!enabled;
        var isOn = this.isAutoSaveOnSwitchEnabled();
        if (isOn) {
          this.startHistorySnapshotTimer();
        } else {
          this.stopHistorySnapshotTimer();
        }
        this.updateStatusBar();
        return this.persistData().then(function() {
          if (options.notify) {
            new obsidian2.Notice(isOn ? L.autoSaveEnabled : L.autoSaveDisabled);
          }
          return isOn;
        });
      };
      WorkspacePlusPlus2.prototype.toggleAutoSaveOnSwitch = function(options) {
        var next = !this.isAutoSaveOnSwitchEnabled();
        return this.setAutoSaveOnSwitch(next, options || {});
      };
      WorkspacePlusPlus2.prototype.saveActiveSession = function(options) {
        var L = i18n2.L;
        options = options || {};
        var self = this;
        var session = this.getActiveSession();
        if (!session) {
          if (!options.silent) new obsidian2.Notice(L.noSession);
          return Promise.resolve(false);
        }
        if (!options.silent && session.isDefault && session.name === this.getDefaultSessionName()) {
          var doSave = function(name2, resolve) {
            session.name = name2;
            self.pushLayoutToHistory(session);
            session.layout = self.getCurrentWorkspaceLayout();
            session.modified = Date.now();
            self.updateStatusBar();
            self.syncSessionCommands();
            self.persistData().then(function() {
              new obsidian2.Notice(L.savedSession(name2));
              resolve(true);
            });
          };
          return new Promise(function(resolve) {
            new modals2.RenameModal(self.app, "", function(newName) {
              doSave(newName, resolve);
            }, {
              title: L.nameSessionTitle,
              placeholder: L.nameSessionPlaceholder,
              buttonText: L.saveInline,
              skipButtonText: L.saveWithoutNaming,
              onSkip: function() {
                doSave(session.name, resolve);
              }
            }).open();
          });
        }
        var currentLayout = this.getCurrentWorkspaceLayout();
        var changed = !this.layoutsEqualStructural(session.layout, currentLayout);
        this.pushLayoutToHistory(session);
        session.layout = currentLayout;
        if (changed || options.touchModified) {
          session.modified = Date.now();
        }
        this.updateStatusBar();
        var name = session.name;
        return this.persistData().then(function() {
          if (!options.silent) {
            if (changed) {
              new obsidian2.Notice(L.savedSession(name));
            } else {
              new obsidian2.Notice(L.noChanges);
            }
          }
          return changed;
        });
      };
      WorkspacePlusPlus2.prototype.overwriteSessionWithCurrentLayout = function(sessionId, options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session) {
          if (!options.silent) new obsidian2.Notice(L.noSession);
          return Promise.resolve(false);
        }
        var currentLayout = this.getCurrentWorkspaceLayout();
        var changed = !this.layoutsEqualStructural(session.layout, currentLayout);
        this.pushLayoutToHistory(session);
        session.layout = currentLayout;
        if (changed || options.touchModified) {
          session.modified = Date.now();
        }
        this.updateStatusBar();
        return this.persistData().then(function() {
          if (!options.silent) {
            if (changed) {
              new obsidian2.Notice(L.savedCurrentLayoutToSession(session.name));
            } else {
              new obsidian2.Notice(L.noChanges);
            }
          }
          return changed;
        });
      };
      WorkspacePlusPlus2.prototype.saveCurrentLayoutAsSessionName = function(name, options) {
        var L = i18n2.L;
        options = options || {};
        var sessionName = typeof name === "string" ? name.trim() : "";
        if (!sessionName) {
          if (!options.silent) new obsidian2.Notice(L.emptyName);
          return Promise.resolve({
            saved: false,
            created: false,
            overwritten: false,
            sessionId: null,
            name: sessionName
          });
        }
        var previousActiveId = this.data.activeSessionId || null;
        if (this.isAutoSaveOnSwitchEnabled()) {
          this.captureActiveSessionLayoutIfAutoSave();
        }
        var currentLayout = this.getCurrentWorkspaceLayout();
        var existing = findSessionByName(this.data, sessionName);
        var session;
        var created = false;
        var overwritten = false;
        var changed = true;
        if (existing) {
          session = existing;
          changed = !this.layoutsEqualStructural(session.layout, currentLayout);
          if (!(this.isAutoSaveOnSwitchEnabled() && session.id === previousActiveId)) {
            this.pushLayoutToHistory(session);
          }
          session.layout = currentLayout;
          session.modified = Date.now();
          this.data.activeSessionId = session.id;
          if (typeof this.chooseSessionGroupForView === "function") {
            var preferredGroupId = this.chooseSessionGroupForView(session.id);
            if (typeof preferredGroupId !== "undefined") {
              this.data.activeGroupId = preferredGroupId;
            }
          }
          overwritten = true;
        } else {
          var id = utils.generateId();
          session = this.createSessionRecord(id, sessionName, currentLayout);
          this.insertSessionAndActivate(session);
          created = true;
        }
        this.updateStatusBar();
        this.syncSessionCommands();
        this.applyZenModeClasses();
        return this.persistData().then(function() {
          if (!options.silent) {
            new obsidian2.Notice(L.savedAs(sessionName));
          }
          return {
            saved: true,
            created,
            overwritten,
            changed,
            sessionId: session.id,
            name: sessionName
          };
        });
      };
      WorkspacePlusPlus2.prototype.confirmOverwriteSessionWithCurrentLayout = function(sessionId, options) {
        var L = i18n2.L;
        options = options || {};
        var self = this;
        var session = this.data.sessions[sessionId];
        if (!session) {
          if (!options.silent) new obsidian2.Notice(L.noSession);
          return false;
        }
        new modals2.ConfirmModal(this.app, L.confirmOverwriteSessionWithCurrentLayout(session.name), function() {
          self.overwriteSessionWithCurrentLayout(sessionId, options).then(function(saved) {
            if (saved && typeof options.onSaved === "function") options.onSaved(session);
          });
        }, {
          confirmText: L.saveInline,
          confirmClass: "mod-cta"
        }).open();
        return true;
      };
      WorkspacePlusPlus2.prototype.reloadCurrentSessionWithoutSaving = function(options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.getActiveSession();
        if (!session) {
          if (!options.silent) new obsidian2.Notice(L.noSession);
          return Promise.resolve(false);
        }
        var applyLayout = session.layout ? this.applyWorkspaceLayout(session.layout) : Promise.resolve();
        var name = session.name;
        var self = this;
        return applyLayout.then(function() {
          self.applyZenModeClasses();
          self.scheduleZenModeRefresh(80);
          if (!options.silent) {
            new obsidian2.Notice(L.reloadedSession(name));
          }
          return true;
        }).catch(function() {
          return false;
        });
      };
      WorkspacePlusPlus2.prototype.captureActiveSessionLayoutIfAutoSave = function() {
        var current = this.getActiveSession();
        if (!current || !this.isAutoSaveOnSwitchEnabled()) return;
        this.pushLayoutToHistory(current);
        current.layout = this.getCurrentWorkspaceLayout();
        current.modified = Date.now();
      };
      WorkspacePlusPlus2.prototype.saveAsSession = function() {
        var L = i18n2.L;
        var self = this;
        var session = this.getActiveSession();
        if (!session) {
          new obsidian2.Notice(L.noSession);
          return Promise.resolve(false);
        }
        return new Promise(function(resolve) {
          new modals2.RenameModal(self.app, "", function(newName) {
            self.captureActiveSessionLayoutIfAutoSave();
            var layout = self.getCurrentWorkspaceLayout();
            var existing = null;
            var allSessions = self.getOrderedSessionsUnfiltered();
            for (var i = 0; i < allSessions.length; i++) {
              if (allSessions[i].name === newName) {
                existing = allSessions[i];
                break;
              }
            }
            if (existing) {
              existing.layout = layout;
              existing.modified = Date.now();
              self.data.activeSessionId = existing.id;
            } else {
              var id = utils.generateId();
              self.insertSessionAndActivate(
                self.createSessionRecord(id, newName, layout)
              );
            }
            self.updateStatusBar();
            self.syncSessionCommands();
            new obsidian2.Notice(L.savedAs(newName));
            self.persistData().then(function() {
              resolve(true);
            });
          }, {
            title: L.nameSessionTitle,
            placeholder: L.nameSessionPlaceholder,
            buttonText: L.saveInline,
            emptyNotice: L.emptyName
          }).open();
        });
      };
    }
    module2.exports = attachSessionSavingMethods;
  }
});

// src/plugin/methods/session-statusbar.js
var require_session_statusbar = __commonJS({
  "src/plugin/methods/session-statusbar.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    function persistIfNeeded(plugin, options) {
      options = options || {};
      if (options.persist === false) return Promise.resolve(true);
      return plugin.persistData();
    }
    function attachSessionStatusBarMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.isStatusBarWorkspaceEnabled = function() {
        return this.data.showStatusBarWorkspace !== false;
      };
      WorkspacePlusPlus2.prototype.applyStatusBarWorkspaceVisibility = function() {
        if (!this.statusBarEl) return;
        var show = this.isStatusBarWorkspaceEnabled();
        this.statusBarEl.toggleClass("wpp-status-bar-hidden", !show);
        this.statusBarEl.style.display = show ? "" : "none";
      };
      WorkspacePlusPlus2.prototype.setShowStatusBarWorkspace = function(enabled, options) {
        this.data.showStatusBarWorkspace = !!enabled;
        this.applyStatusBarWorkspaceVisibility();
        if (enabled) this.updateStatusBar();
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.updateStatusBar = function() {
        var L = i18n2.L;
        var session = this.getActiveSession();
        if (!this.statusBarEl) return;
        this.applyStatusBarWorkspaceVisibility();
        if (!this.isStatusBarWorkspaceEnabled()) return;
        var showUnsavedHighlight = this.shouldShowUnsavedStatusBarHighlight();
        this.statusBarEl.removeClass("wpp-status-bar-unsaved");
        if (showUnsavedHighlight) {
          this.statusBarEl.addClass("wpp-status-bar-unsaved");
        }
        this.statusBarEl.empty();
        var icon = this.statusBarEl.createSpan({ cls: "wpp-status-icon" });
        obsidian2.setIcon(icon, "panels-top-left");
        var displayGroup = null;
        if (session && typeof this.chooseSessionGroupForView === "function") {
          var preferredGroupId = this.chooseSessionGroupForView(session.id);
          if (preferredGroupId && this.data && this.data.groups) {
            displayGroup = this.data.groups[preferredGroupId] || null;
          }
        } else {
          displayGroup = this.getActiveGroup();
        }
        if (displayGroup) {
          this.statusBarEl.createSpan({
            text: displayGroup.name,
            cls: "wpp-status-group"
          });
          this.statusBarEl.createSpan({
            text: " / ",
            cls: "wpp-status-separator"
          });
        }
        this.statusBarEl.createSpan({
          text: session ? session.name : L.noSession,
          cls: "wpp-status-name"
        });
      };
    }
    module2.exports = attachSessionStatusBarMethods;
  }
});

// src/plugin/methods/session-startup.js
var require_session_startup = __commonJS({
  "src/plugin/methods/session-startup.js"(exports2, module2) {
    "use strict";
    var STARTUP_SETTLE_MS = 1200;
    var STARTUP_LAYOUT_CHANGE_SETTLE_MS = 400;
    var STARTUP_SETTLE_MAX_MS = 5e3;
    function attachSessionStartupMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.setStartupSettleDeadline = function(deadlineMs) {
        var self = this;
        var nextDeadline = typeof deadlineMs === "number" ? deadlineMs : 0;
        if (this.startupSettleTimer) {
          clearTimeout(this.startupSettleTimer);
          this.startupSettleTimer = null;
        }
        if (nextDeadline <= Date.now()) {
          this.startupSettleStartedAt = 0;
          this.startupSettleUntil = 0;
          return 0;
        }
        this.startupSettleUntil = nextDeadline;
        this.startupSettleTimer = setTimeout(function() {
          self.startupSettleStartedAt = 0;
          self.startupSettleUntil = 0;
          self.startupSettleTimer = null;
          if (typeof self.restoreZenFocusLeaf === "function") {
            self.restoreZenFocusLeaf();
          }
          if (typeof self.scheduleZenModeRefresh === "function") {
            self.scheduleZenModeRefresh(0);
          } else if (typeof self.applyZenModeClasses === "function") {
            self.applyZenModeClasses();
          }
          var session = self.getActiveSession && self.getActiveSession();
          if (session && (session.zenFocusLeafId || session.zenFocusFilePath || typeof session.zenFocusSplitIndex === "number" && session.zenFocusSplitIndex >= 0) && typeof self.rememberZenFocusFromWorkspace === "function") {
            self.rememberZenFocusFromWorkspace({ force: true });
          }
        }, nextDeadline - Date.now());
        return this.startupSettleUntil;
      };
      WorkspacePlusPlus2.prototype.startStartupSettleWindow = function(durationMs) {
        var startedAt = Date.now();
        var duration = typeof durationMs === "number" && durationMs > 0 ? durationMs : STARTUP_SETTLE_MS;
        this.startupSettleStartedAt = startedAt;
        return this.setStartupSettleDeadline(startedAt + duration);
      };
      WorkspacePlusPlus2.prototype.getStartupSettleRemainingMs = function() {
        var remaining = (this.startupSettleUntil || 0) - Date.now();
        return remaining > 0 ? remaining : 0;
      };
      WorkspacePlusPlus2.prototype.isStartupSettling = function() {
        return this.getStartupSettleRemainingMs() > 0;
      };
      WorkspacePlusPlus2.prototype.noteStartupLayoutChange = function() {
        if (!this.isStartupSettling()) return;
        var startedAt = this.startupSettleStartedAt || Date.now();
        var maxDeadline = startedAt + STARTUP_SETTLE_MAX_MS;
        var nextDeadline = Math.min(maxDeadline, Date.now() + STARTUP_LAYOUT_CHANGE_SETTLE_MS);
        if (nextDeadline <= (this.startupSettleUntil || 0)) return;
        this.setStartupSettleDeadline(nextDeadline);
        this.scheduleStartupFlush();
      };
      WorkspacePlusPlus2.prototype.scheduleStartupFlush = function() {
        var self = this;
        if (this.startupFlushTimer) {
          clearTimeout(this.startupFlushTimer);
          this.startupFlushTimer = null;
        }
        if (!this.isAutoSaveOnSwitchEnabled()) return Promise.resolve(false);
        var delayMs = this.getStartupSettleRemainingMs();
        if (delayMs <= 0) {
          return Promise.resolve(this.flushOnStartup());
        }
        return new Promise(function(resolve) {
          self.startupFlushTimer = setTimeout(function() {
            self.startupFlushTimer = null;
            resolve(self.flushOnStartup());
          }, delayMs);
        });
      };
      WorkspacePlusPlus2.prototype.flushOnStartup = function() {
        if (!this.isAutoSaveOnSwitchEnabled()) return;
        var session = this.getActiveSession();
        if (!session) return;
        if (typeof this.restoreZenFocusLeaf === "function") {
          this.restoreZenFocusLeaf();
        }
        if ((session.zenFocusLeafId || session.zenFocusFilePath || typeof session.zenFocusSplitIndex === "number" && session.zenFocusSplitIndex >= 0) && typeof this.rememberZenFocusFromWorkspace === "function") {
          this.rememberZenFocusFromWorkspace({ force: true, persist: false });
        }
        this.pushLayoutToHistory(session);
        session.layout = this.getCurrentWorkspaceLayout();
        session.modified = Date.now();
        return this.persistData();
      };
    }
    module2.exports = attachSessionStartupMethods;
  }
});

// src/plugin/methods/session-switching.js
var require_session_switching = __commonJS({
  "src/plugin/methods/session-switching.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var UnsavedSwitchModal = require_unsaved_switch_modal();
    var SESSION_SWITCH_NOTICE_DURATION_MS = 1200;
    function attachSessionSwitchingMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.clearSessionSwitchNotice = function() {
        if (!this.sessionSwitchNotice) return;
        this.sessionSwitchNotice.hide();
        this.sessionSwitchNotice = null;
      };
      WorkspacePlusPlus2.prototype.showSessionSwitchNotice = function(sessionName, options) {
        var self = this;
        var L = i18n2.L;
        options = options || {};
        var durationMs = typeof options.durationMs === "number" ? options.durationMs : SESSION_SWITCH_NOTICE_DURATION_MS;
        this.clearSessionSwitchNotice();
        var notice = new obsidian2.Notice(L.loaded(sessionName), durationMs);
        this.sessionSwitchNotice = notice;
        if (durationMs > 0) {
          setTimeout(function() {
            if (self.sessionSwitchNotice === notice) {
              self.sessionSwitchNotice = null;
            }
          }, durationMs + 50);
        }
        return notice;
      };
      WorkspacePlusPlus2.prototype.getRelativeSwitchContext = function(offset) {
        var ordered = this.getOrderedSessions();
        if (ordered.length === 0) {
          return {
            ordered,
            currentIndex: -1,
            targetIndex: 0,
            isEmpty: true
          };
        }
        var currentIndex = this.findActiveSessionIndex(ordered);
        if (currentIndex === -1) return null;
        return {
          ordered,
          currentIndex,
          targetIndex: (currentIndex + offset + ordered.length) % ordered.length,
          isEmpty: false
        };
      };
      WorkspacePlusPlus2.prototype.switchSessionAtOrderedIndex = function(ordered, index, options) {
        options = options || {};
        if (!ordered || index < 0 || index >= ordered.length) {
          return Promise.resolve(false);
        }
        if (options.overlayMode === "preview") {
          this.showSwitchPreviewOverlay(ordered, index, options.viewGroupId);
        } else if (options.overlayMode === "feedback") {
          this.showSwitchFeedbackOverlay(ordered, index, options.viewGroupId, options.overlayOptions);
        }
        if (!ordered[index]) {
          return Promise.resolve(false);
        }
        if (ordered[index].id === this.data.activeSessionId) {
          if (options.noticeMode === "replace") {
            this.showSessionSwitchNotice(ordered[index].name, {
              durationMs: options.switchNoticeDurationMs
            });
          }
          return Promise.resolve(false);
        }
        return this.switchSession(ordered[index].id, {
          silent: options.silent !== false,
          switchNoticeMode: options.noticeMode,
          switchNoticeDurationMs: options.switchNoticeDurationMs
        });
      };
      WorkspacePlusPlus2.prototype.switchToIndex = function(index) {
        var ordered = this.getOrderedSessions();
        return this.switchSessionAtOrderedIndex(ordered, index, {
          overlayMode: "feedback",
          silent: true
        });
      };
      WorkspacePlusPlus2.prototype.switchSessionByIdFromCommand = function(sessionId) {
        var ordered = this.getOrderedSessions();
        var index = this.findSessionIndex(ordered, sessionId);
        return this.switchSessionAtOrderedIndex(ordered, index, {
          overlayMode: "feedback",
          silent: true
        });
      };
      WorkspacePlusPlus2.prototype.switchRelativeDirect = function(offset, options) {
        options = options || {};
        var context = this.getRelativeSwitchContext(offset);
        if (!context) return Promise.resolve(false);
        if (context.isEmpty) {
          if (options.overlayMode === "preview") {
            this.showSwitchPreviewOverlay(context.ordered, 0, options.viewGroupId);
          } else if (options.overlayMode === "feedback") {
            this.showSwitchFeedbackOverlay(context.ordered, 0, options.viewGroupId, options.overlayOptions);
          }
          return Promise.resolve(false);
        }
        return this.switchSessionAtOrderedIndex(context.ordered, context.targetIndex, options);
      };
      WorkspacePlusPlus2.prototype.switchRelativeFromCommand = function(offset) {
        var context = this.getRelativeSwitchContext(offset);
        if (!context) return Promise.resolve(false);
        if (context.isEmpty) {
          this.showSwitchPreviewOverlay(context.ordered, 0);
          return Promise.resolve(false);
        }
        var previewEnabled = offset > 0 ? this.data.previewNext : this.data.previewPrevious;
        if (previewEnabled && !this.switchOverlayEl) {
          this.showSwitchPreviewOverlay(context.ordered, context.currentIndex);
          return Promise.resolve(false);
        }
        return this.switchSessionAtOrderedIndex(context.ordered, context.targetIndex, {
          overlayMode: "preview",
          silent: true
        });
      };
      WorkspacePlusPlus2.prototype.switchRelativeFromStatusBar = function(offset) {
        return this.switchRelativeDirect(offset, {
          overlayMode: "none",
          noticeMode: "replace",
          silent: true
        });
      };
      WorkspacePlusPlus2.prototype.switchRelativeFromScroll = function(offset) {
        return this.switchRelativeDirect(offset, {
          overlayMode: "none",
          noticeMode: "replace",
          silent: true
        });
      };
      WorkspacePlusPlus2.prototype.switchRelative = function(offset) {
        return this.switchRelativeFromCommand(offset);
      };
      WorkspacePlusPlus2.prototype.switchRelativeImmediate = function(offset, options) {
        options = options || {};
        return this.switchRelativeDirect(offset, {
          overlayMode: options.showOverlay === false ? "none" : "feedback",
          overlayOptions: options.overlayOptions,
          silent: true
        });
      };
      WorkspacePlusPlus2.prototype.runSwitchRequest = function(request) {
        var self = this;
        this.isSwitchingSession = true;
        this.switchLockAt = Date.now();
        this.performSessionSwitch(request.targetId, request.options || {}).then(function(ok) {
          request.resolve(ok);
        }).catch(function() {
          request.resolve(false);
        }).then(function() {
          self.isSwitchingSession = false;
          self.switchLockAt = 0;
          if (!self.pendingSwitchRequest) return;
          var next = self.pendingSwitchRequest;
          self.pendingSwitchRequest = null;
          self.runSwitchRequest(next);
        });
      };
      WorkspacePlusPlus2.prototype.switchSession = function(targetId, options) {
        var self = this;
        options = options || {};
        var startupDelayMs = this.getStartupSettleRemainingMs();
        if (startupDelayMs > 0) {
          return new Promise(function(resolve) {
            setTimeout(function() {
              self.switchSession(targetId, options).then(resolve);
            }, startupDelayMs);
          });
        }
        if (this.isSwitchingSession) {
          var lockAt = this.switchLockAt || 0;
          var elapsed = lockAt ? Date.now() - lockAt : Number.MAX_SAFE_INTEGER;
          var hasBlockingUi = !!document.querySelector(".wpp-confirm-buttons") || !!document.querySelector(".wpp-switch-overlay");
          if (!hasBlockingUi && elapsed > 5e3) {
            this.isSwitchingSession = false;
            this.switchLockAt = 0;
            if (this.pendingSwitchRequest) {
              this.pendingSwitchRequest.resolve(false);
              this.pendingSwitchRequest = null;
            }
          }
        }
        if (!this.data.sessions[targetId]) return Promise.resolve(false);
        if (targetId === this.data.activeSessionId && !this.isSwitchingSession) {
          return Promise.resolve(false);
        }
        return new Promise(function(resolve) {
          var request = {
            targetId,
            options,
            resolve
          };
          if (self.isSwitchingSession) {
            if (self.pendingSwitchRequest) {
              self.pendingSwitchRequest.resolve(false);
            }
            self.pendingSwitchRequest = request;
            return;
          }
          self.runSwitchRequest(request);
        });
      };
      WorkspacePlusPlus2.prototype.performSessionSwitch = function(targetId, options) {
        var L = i18n2.L;
        var self = this;
        options = options || {};
        var target = this.data.sessions[targetId];
        if (!target) return Promise.resolve(false);
        if (target.id === this.data.activeSessionId) return Promise.resolve(false);
        var performSwitch = function(skipCurrentSave) {
          var current = self.getActiveSession();
          if (current) {
            current.zenMode = self.isZenModeEnabled();
            if (typeof self.rememberZenFocusFromWorkspace === "function") {
              self.rememberZenFocusFromWorkspace({ force: true, persist: false });
            }
            if (!skipCurrentSave) {
              self.pushLayoutToHistory(current);
              current.layout = self.getCurrentWorkspaceLayout();
              current.modified = Date.now();
            }
          }
          self.clearZenModeClasses();
          self.data.activeSessionId = targetId;
          if (typeof self.chooseSessionGroupForView === "function") {
            var preferredGroupId = self.chooseSessionGroupForView(targetId);
            if (typeof preferredGroupId !== "undefined" && self.data.activeGroupId !== preferredGroupId) {
              self.data.activeGroupId = preferredGroupId;
              if (typeof self.syncSessionCommands === "function") {
                self.syncSessionCommands();
              }
            }
          }
          var applyLayout = target.layout ? self.applyWorkspaceLayout(target.layout) : Promise.resolve();
          return applyLayout.then(function() {
            if (typeof self.restoreZenFocusLeaf === "function") {
              self.restoreZenFocusLeaf();
            }
            self.applyZenModeClasses();
            self.scheduleZenModeRefresh(50);
            self.scheduleZenModeRefresh(300);
            self.updateStatusBar();
            return self.persistData();
          }).then(function() {
            if (options.switchNoticeMode === "replace") {
              self.showSessionSwitchNotice(target.name, {
                durationMs: options.switchNoticeDurationMs
              });
            } else if (!options.silent) {
              new obsidian2.Notice(L.loaded(target.name));
            }
            return true;
          });
        };
        var autoSaveOnSwitch = this.isAutoSaveOnSwitchEnabled();
        var shouldWarn = !autoSaveOnSwitch && !options.skipUnsavedWarning && this.isWarnOnUnsavedSwitchEnabled() && this.isActiveSessionDirty();
        if (shouldWarn) {
          return new Promise(function(resolve) {
            new UnsavedSwitchModal(
              self.app,
              L.confirmUnsavedSwitch(target.name),
              function() {
                self.saveActiveSession({ silent: true, touchModified: true }).then(function() {
                  return performSwitch(true);
                }).then(function(ok) {
                  resolve(ok);
                }).catch(function() {
                  resolve(false);
                });
              },
              function() {
                performSwitch(true).then(function(ok) {
                  resolve(ok);
                }).catch(function() {
                  resolve(false);
                });
              },
              function() {
                resolve(false);
              }
            ).open();
          });
        }
        return performSwitch(!autoSaveOnSwitch);
      };
    }
    module2.exports = attachSessionSwitchingMethods;
  }
});

// src/plugin/methods/session-commands.js
var require_session_commands = __commonJS({
  "src/plugin/methods/session-commands.js"(exports2, module2) {
    "use strict";
    function attachSessionCommandMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.syncSessionCommands = function() {
        var oldIds = this._dynamicSessionCommandIds || [];
        for (var i = 0; i < oldIds.length; i++) {
          this.removeCommand(oldIds[i]);
        }
        this._dynamicSessionCommandIds = [];
        for (var n = 1; n <= 9; n++) {
          this.removeCommand("switch-to-" + n);
        }
        this.removeCommand("previous-session");
        this.removeCommand("next-session");
        this.removeCommand("search-session-overlay");
        this.removeCommand("switch-group");
        this.removeCommand("exit-group");
        this.removeCommand("next-group");
        this.removeCommand("previous-group");
      };
    }
    module2.exports = attachSessionCommandMethods;
  }
});

// src/plugin/methods/history.js
var require_history = __commonJS({
  "src/plugin/methods/history.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    var layoutUtils = require_layout_utils();
    var HOUR = 36e5;
    var DAY = 864e5;
    var WEEK = 7 * DAY;
    var MONTH = 30 * DAY;
    var MAX_AUTO_HISTORY = 45;
    function isManualHistoryEntry(entry) {
      return !!(entry && entry.source === "manual");
    }
    function isAutoHistoryEntry(entry) {
      return !isManualHistoryEntry(entry);
    }
    function sortHistoryNewestFirst(history) {
      history.sort(function(a, b) {
        return b.savedAt - a.savedAt;
      });
      return history;
    }
    function attachHistoryMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.isVersionHistoryEnabled = function() {
        return !!this.data.versionHistoryEnabled;
      };
      WorkspacePlusPlus2.prototype.getVersionHistorySnapshotInterval = function() {
        var val = this.data.versionHistorySnapshotInterval;
        if (typeof val !== "number" || val < 1) return 5;
        return val;
      };
      WorkspacePlusPlus2.prototype.isVersionHistoryCtrlRmbEnabled = function() {
        return this.data.versionHistoryCtrlRmbRestore !== false;
      };
      WorkspacePlusPlus2.prototype.isVersionHistoryConfirmRestoreEnabled = function() {
        return this.data.versionHistoryConfirmRestore !== false;
      };
      WorkspacePlusPlus2.prototype.isManualHistoryEntry = isManualHistoryEntry;
      WorkspacePlusPlus2.prototype.isAutoHistoryEntry = isAutoHistoryEntry;
      WorkspacePlusPlus2.prototype.extractFilePathsFromLayout = function(layout) {
        var paths = [];
        function walk(node) {
          if (!node || typeof node !== "object") return;
          if (node.type === "leaf" && node.state && node.state.state && node.state.state.file) {
            paths.push(node.state.state.file);
          }
          if (Array.isArray(node.children)) {
            for (var i = 0; i < node.children.length; i++) {
              walk(node.children[i]);
            }
          }
          if (node.main) walk(node.main);
          if (node.left) walk(node.left);
          if (node.right) walk(node.right);
        }
        walk(layout);
        return paths;
      };
      WorkspacePlusPlus2.prototype.countPanesInLayout = function(layout) {
        var count = 0;
        function walk(node) {
          if (!node || typeof node !== "object") return;
          if (node.type === "leaf") {
            count++;
            return;
          }
          if (Array.isArray(node.children)) {
            for (var i = 0; i < node.children.length; i++) {
              walk(node.children[i]);
            }
          }
          if (node.main) walk(node.main);
        }
        if (layout && layout.main) walk(layout.main);
        return count;
      };
      WorkspacePlusPlus2.prototype.getSessionHistory = function(session) {
        if (!session) return [];
        if (!Array.isArray(session.history)) session.history = [];
        return session.history;
      };
      WorkspacePlusPlus2.prototype.filterHistoryBySource = function(history, source) {
        var list = Array.isArray(history) ? history : [];
        if (source === "manual") {
          return list.filter(isManualHistoryEntry);
        }
        return list.filter(isAutoHistoryEntry);
      };
      WorkspacePlusPlus2.prototype.compactAutoHistory = function(history) {
        if (!history || history.length === 0) return [];
        var now = Date.now();
        history = history.slice();
        sortHistoryNewestFirst(history);
        var result = [];
        var buckets = {};
        for (var i = 0; i < history.length; i++) {
          var entry = history[i];
          var age = now - entry.savedAt;
          var key;
          if (age <= HOUR) {
            result.push(entry);
          } else if (age <= DAY) {
            key = "h" + Math.floor(age / HOUR);
            if (!buckets[key]) {
              buckets[key] = true;
              result.push(entry);
            }
          } else if (age <= WEEK) {
            key = "d" + Math.floor(age / DAY);
            if (!buckets[key]) {
              buckets[key] = true;
              result.push(entry);
            }
          } else if (age <= MONTH) {
            key = "w" + Math.floor(age / WEEK);
            if (!buckets[key]) {
              buckets[key] = true;
              result.push(entry);
            }
          } else {
            key = "m" + Math.floor(age / MONTH);
            if (!buckets[key]) {
              buckets[key] = true;
              result.push(entry);
            }
          }
        }
        if (result.length > MAX_AUTO_HISTORY) result.length = MAX_AUTO_HISTORY;
        return result;
      };
      WorkspacePlusPlus2.prototype.compactHistory = function(history) {
        if (!history || history.length === 0) return [];
        var manual = [];
        var auto = [];
        for (var i = 0; i < history.length; i++) {
          if (isManualHistoryEntry(history[i])) manual.push(history[i]);
          else auto.push(history[i]);
        }
        auto = this.compactAutoHistory(auto);
        return sortHistoryNewestFirst(manual.concat(auto));
      };
      WorkspacePlusPlus2.prototype.captureLayoutForHistory = function(session) {
        var isActive = session && session.id === this.data.activeSessionId;
        var layout = null;
        if (isActive) {
          try {
            layout = this.getCurrentWorkspaceLayout();
          } catch (e) {
            layout = null;
          }
        }
        if (!layout && session) layout = session.layout;
        return layoutUtils.cloneLayout(layout);
      };
      WorkspacePlusPlus2.prototype.pushLayoutToHistory = function(session) {
        if (!this.isVersionHistoryEnabled()) return;
        if (!session || !session.layout) return;
        if (!session.history) session.history = [];
        var autoEntries = session.history.filter(isAutoHistoryEntry);
        var lastEntry = autoEntries.length > 0 ? autoEntries[0] : null;
        for (var i = 0; i < autoEntries.length; i++) {
          if (!lastEntry || autoEntries[i].savedAt > lastEntry.savedAt) {
            lastEntry = autoEntries[i];
          }
        }
        if (lastEntry && this.layoutsEqualStructural(session.layout, lastEntry.layout)) {
          return;
        }
        session.history.unshift({
          layout: layoutUtils.cloneLayout(session.layout),
          savedAt: Date.now(),
          source: "auto"
        });
        session.history = this.compactHistory(session.history);
      };
      WorkspacePlusPlus2.prototype.saveManualHistoryEntry = function(sessionId, title, options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session) return Promise.resolve(false);
        var normalizedTitle = typeof title === "string" ? title.trim() : "";
        if (!normalizedTitle) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.historyTitleRequired);
          }
          return Promise.resolve(false);
        }
        var layout = options.layout ? layoutUtils.cloneLayout(options.layout) : this.captureLayoutForHistory(session);
        if (!layout) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.historySaveFailed);
          }
          return Promise.resolve(false);
        }
        if (!session.history) session.history = [];
        session.history.unshift({
          layout,
          savedAt: Date.now(),
          source: "manual",
          title: normalizedTitle
        });
        sortHistoryNewestFirst(session.history);
        if (options.updateSessionLayout !== false) {
          session.layout = layoutUtils.cloneLayout(layout);
          session.modified = Date.now();
        }
        var self = this;
        var isActive = session.id === this.data.activeSessionId;
        var applyLayout = Promise.resolve();
        if (options.applyToWorkspace && isActive) {
          applyLayout = this.applyWorkspaceLayout(session.layout);
        }
        this.updateStatusBar();
        return applyLayout.then(function() {
          return self.persistData();
        }).then(function() {
          if (options.notify !== false) {
            new obsidian2.Notice(L.historyManualSaved(normalizedTitle));
          }
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.renameHistoryEntry = function(sessionId, entryIndex, title, options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
          return Promise.resolve(false);
        }
        var normalizedTitle = typeof title === "string" ? title.trim() : "";
        if (!normalizedTitle) {
          if (options.notify !== false) {
            new obsidian2.Notice(L.historyTitleRequired);
          }
          return Promise.resolve(false);
        }
        session.history[entryIndex].title = normalizedTitle;
        return this.persistData().then(function() {
          if (options.notify !== false) {
            new obsidian2.Notice(L.historyEntryRenamed(normalizedTitle));
          }
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.updateHistoryEntry = function(sessionId, entryIndex, changes, options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
          return Promise.resolve(false);
        }
        var entry = session.history[entryIndex];
        var changed = false;
        if (changes && typeof changes.title === "string") {
          var normalizedTitle = changes.title.trim();
          if (!normalizedTitle) {
            if (options.notify !== false) {
              new obsidian2.Notice(L.historyTitleRequired);
            }
            return Promise.resolve(false);
          }
          if (normalizedTitle !== (entry.title || "")) {
            entry.title = normalizedTitle;
            changed = true;
          }
        }
        if (changes && changes.updateLayoutFromCurrent) {
          var layout = this.captureLayoutForHistory(session);
          if (!layout) {
            if (options.notify !== false) {
              new obsidian2.Notice(L.historySaveFailed);
            }
            return Promise.resolve(false);
          }
          entry.layout = layout;
          entry.savedAt = Date.now();
          changed = true;
        } else if (changes && changes.layout) {
          entry.layout = layoutUtils.cloneLayout(changes.layout);
          entry.savedAt = Date.now();
          changed = true;
        }
        if (!changed) return Promise.resolve(false);
        sortHistoryNewestFirst(session.history);
        return this.persistData().then(function() {
          if (options.notify !== false) {
            new obsidian2.Notice(L.historyEntryUpdated(entry.title || ""));
          }
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.deleteHistoryEntry = function(sessionId, entryIndex, options) {
        var L = i18n2.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
          return Promise.resolve(false);
        }
        var removed = session.history.splice(entryIndex, 1)[0];
        if (session.history.length === 0) {
          delete session.history;
        }
        return this.persistData().then(function() {
          if (options.notify !== false) {
            var label = removed && removed.title ? removed.title : L.historyUntitled;
            new obsidian2.Notice(L.historyEntryDeleted(label));
          }
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.restoreFromHistoryEntry = function(sessionId, entryIndex) {
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
          return Promise.resolve(false);
        }
        var entry = session.history[entryIndex];
        this.pushLayoutToHistory(session);
        var nextIndex = session.history.indexOf(entry);
        if (nextIndex === -1) {
        }
        session.layout = layoutUtils.cloneLayout(entry.layout);
        session.modified = Date.now();
        var self = this;
        var isActive = session.id === this.data.activeSessionId;
        var applyLayout = isActive && session.layout ? this.applyWorkspaceLayout(session.layout) : Promise.resolve();
        return applyLayout.then(function() {
          if (isActive) {
            self.applyZenModeClasses();
            self.scheduleZenModeRefresh(80);
          }
          self.updateStatusBar();
          return self.persistData();
        }).then(function() {
          return true;
        });
      };
      WorkspacePlusPlus2.prototype.quickRestoreLatestHistory = function() {
        var L = i18n2.L;
        var session = this.getActiveSession();
        if (!session || !session.history || session.history.length === 0) {
          new obsidian2.Notice(L.historyNoEntries);
          return Promise.resolve(false);
        }
        var auto = this.filterHistoryBySource(session.history, "auto");
        var target = auto.length > 0 ? auto[0] : session.history[0];
        var index = session.history.indexOf(target);
        if (index < 0) {
          new obsidian2.Notice(L.historyNoEntries);
          return Promise.resolve(false);
        }
        var self = this;
        return this.restoreFromHistoryEntry(session.id, index).then(function(ok) {
          if (ok) {
            new obsidian2.Notice(L.historyQuickRestored(session.name));
          }
          return ok;
        });
      };
      WorkspacePlusPlus2.prototype.clearVersionHistoryEntries = function() {
        var sessions = this.data && this.data.sessions || {};
        var ids = Object.keys(sessions);
        var changed = false;
        for (var i = 0; i < ids.length; i++) {
          var session = sessions[ids[i]];
          if (!session || !Object.prototype.hasOwnProperty.call(session, "history")) continue;
          delete session.history;
          changed = true;
        }
        return changed;
      };
      WorkspacePlusPlus2.prototype.startHistorySnapshotTimer = function() {
        this.stopHistorySnapshotTimer();
        if (!this.isVersionHistoryEnabled()) return;
        if (!this.isAutoSaveOnSwitchEnabled()) return;
        var self = this;
        var intervalMs = this.getVersionHistorySnapshotInterval() * 6e4;
        this._historySnapshotTimer = setInterval(function() {
          if (!self.isVersionHistoryEnabled() || !self.isAutoSaveOnSwitchEnabled()) {
            self.stopHistorySnapshotTimer();
            return;
          }
          var session = self.getActiveSession();
          if (!session) return;
          var currentLayout = layoutUtils.cloneLayout(self.getCurrentWorkspaceLayout());
          if (self.layoutsEqualStructural(session.layout, currentLayout)) return;
          self.pushLayoutToHistory(session);
          session.layout = currentLayout;
          session.modified = Date.now();
          self.persistData();
        }, intervalMs);
      };
      WorkspacePlusPlus2.prototype.stopHistorySnapshotTimer = function() {
        if (this._historySnapshotTimer) {
          clearInterval(this._historySnapshotTimer);
          this._historySnapshotTimer = null;
        }
      };
    }
    module2.exports = attachHistoryMethods;
  }
});

// src/plugin/methods/frontmatter.js
var require_frontmatter = __commonJS({
  "src/plugin/methods/frontmatter.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    module2.exports = function attachFrontmatterMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.getFileFrontmatter = function(file) {
        if (!file) return null;
        var cache = this.app.metadataCache.getFileCache(file);
        return cache && cache.frontmatter || null;
      };
      WorkspacePlusPlus2.prototype.isMarkdownNoteFile = function(file) {
        return !!file && String(file.extension || "").toLowerCase() === "md";
      };
      WorkspacePlusPlus2.prototype.getSessionNameFromNoteFile = function(file) {
        if (!this.isMarkdownNoteFile(file)) return "";
        if (typeof file.basename === "string" && file.basename.trim()) {
          return file.basename.trim();
        }
        var name = typeof file.name === "string" ? file.name : "";
        if (!name && typeof file.path === "string") {
          var parts = file.path.split("/");
          name = parts[parts.length - 1] || "";
        }
        return name.replace(/\.md$/i, "").trim();
      };
      WorkspacePlusPlus2.prototype.setWorkspaceSessionFrontmatter = function(file, sessionName) {
        if (!this.app.fileManager || typeof this.app.fileManager.processFrontMatter !== "function") {
          return Promise.reject(new Error("processFrontMatter unavailable"));
        }
        return this.app.fileManager.processFrontMatter(file, function(frontmatter) {
          frontmatter["workspace-session"] = sessionName;
        });
      };
      WorkspacePlusPlus2.prototype.saveCurrentNoteNameAsSession = function(options) {
        var L = i18n2.L;
        options = options || {};
        var file = this.app.workspace.getActiveFile ? this.app.workspace.getActiveFile() : null;
        var sessionName = this.getSessionNameFromNoteFile(file);
        var self = this;
        if (!file || !sessionName) {
          if (!options.silent) new obsidian2.Notice(L.noActiveMarkdownFile);
          return Promise.resolve(false);
        }
        return this.setWorkspaceSessionFrontmatter(file, sessionName).then(function() {
          return self.saveCurrentLayoutAsSessionName(sessionName, { silent: true });
        }).then(function(result) {
          if (!options.silent) {
            new obsidian2.Notice(L.savedCurrentNoteNameAsSession(sessionName));
          }
          return result;
        }).catch(function() {
          if (!options.silent) {
            new obsidian2.Notice(L.saveCurrentNoteNameAsSessionFailed);
          }
          return false;
        });
      };
      WorkspacePlusPlus2.prototype.parseWorkspaceSessionValue = function(value) {
        if (!value || typeof value !== "string") return null;
        value = value.trim();
        if (!value) return null;
        var slashIndex = value.indexOf("/");
        if (slashIndex === -1) {
          return { groupName: null, sessionName: value };
        }
        var candidateGroup = value.substring(0, slashIndex).trim();
        var candidateSession = value.substring(slashIndex + 1).trim();
        if (!candidateGroup || !candidateSession) {
          return { groupName: null, sessionName: value };
        }
        var groups = this.data.groups || {};
        var groupKeys = Object.keys(groups);
        var matchedGroup = null;
        for (var i = 0; i < groupKeys.length; i++) {
          if (groups[groupKeys[i]].name === candidateGroup) {
            matchedGroup = groups[groupKeys[i]];
            break;
          }
        }
        if (matchedGroup) {
          return { groupName: candidateGroup, groupId: matchedGroup.id, sessionName: candidateSession };
        }
        return { groupName: null, sessionName: value };
      };
      WorkspacePlusPlus2.prototype.findSessionByName = function(name) {
        if (!name) return null;
        var sessions = this.data.sessions || {};
        var keys = Object.keys(sessions);
        for (var i = 0; i < keys.length; i++) {
          if (sessions[keys[i]].name === name) {
            return sessions[keys[i]];
          }
        }
        return null;
      };
      WorkspacePlusPlus2.prototype.handleWorkspaceSessionProperty = function(value) {
        var L = i18n2.L;
        var parsed = this.parseWorkspaceSessionValue(value);
        if (!parsed) return;
        var session = this.findSessionByName(parsed.sessionName);
        if (!session) {
          new obsidian2.Notice(L.frontmatterSessionNotFound(parsed.sessionName));
          return;
        }
        var alreadyOnSession = session.id === this.data.activeSessionId;
        var alreadyOnGroup = !parsed.groupId || this.data.activeGroupId === parsed.groupId;
        if (alreadyOnSession && alreadyOnGroup) {
          new obsidian2.Notice(L.frontmatterAlreadyActive(parsed.sessionName));
          return;
        }
        var self = this;
        if (parsed.groupId && this.isGroupFeatureEnabled() && !alreadyOnGroup) {
          this.setActiveGroup(parsed.groupId).then(function() {
            if (session.id !== self.data.activeSessionId) {
              self.switchSession(session.id);
            }
          });
        } else if (!alreadyOnSession) {
          this.switchSession(session.id);
        }
      };
      WorkspacePlusPlus2.prototype.handleFrontmatterTriggers = function(file) {
        var fm = this.getFileFrontmatter(file);
        if (!fm) return;
        if (fm["workspace-session"]) {
          this.handleWorkspaceSessionProperty(fm["workspace-session"]);
        }
      };
      WorkspacePlusPlus2.prototype.getFrontmatterTriggerLeafId = function() {
        var activeLeaf = this.app.workspace.activeLeaf || null;
        return activeLeaf && activeLeaf.id ? activeLeaf.id : "active";
      };
      WorkspacePlusPlus2.prototype.markCurrentFrontmatterFilesLoaded = function() {
        var loadedByLeaf = {};
        if (typeof this.app.workspace.iterateAllLeaves === "function") {
          this.app.workspace.iterateAllLeaves(function(leaf) {
            var file = leaf && leaf.view && leaf.view.file;
            if (!leaf || !leaf.id || !file || !file.path) return;
            loadedByLeaf[leaf.id] = file.path;
          });
        }
        this.frontmatterLoadedFilePathsByLeaf = loadedByLeaf;
      };
      WorkspacePlusPlus2.prototype.clearFrontmatterFileForActiveLeaf = function() {
        if (!this.frontmatterLoadedFilePathsByLeaf) return;
        delete this.frontmatterLoadedFilePathsByLeaf[this.getFrontmatterTriggerLeafId()];
      };
      WorkspacePlusPlus2.prototype.shouldHandleFrontmatterFileOpen = function(file) {
        var filePath = file && file.path ? file.path : "";
        if (!filePath) return false;
        var leafId = this.getFrontmatterTriggerLeafId();
        if (!this.frontmatterLoadedFilePathsByLeaf) this.frontmatterLoadedFilePathsByLeaf = {};
        if (this.frontmatterLoadedFilePathsByLeaf[leafId] === filePath) return false;
        this.frontmatterLoadedFilePathsByLeaf[leafId] = filePath;
        return true;
      };
      WorkspacePlusPlus2.prototype.registerFrontmatterListeners = function() {
        var self = this;
        this.markCurrentFrontmatterFilesLoaded();
        this.registerEvent(this.app.workspace.on("file-open", function(file) {
          if (self.isSwitchingSession) return;
          if (self.getStartupSettleRemainingMs() > 0) return;
          if (!file) {
            self.clearFrontmatterFileForActiveLeaf();
            return;
          }
          if (!self.shouldHandleFrontmatterFileOpen(file)) return;
          self.handleFrontmatterTriggers(file);
        }));
      };
    };
  }
});

// src/plugin/methods/settings-state.js
var require_settings_state = __commonJS({
  "src/plugin/methods/settings-state.js"(exports2, module2) {
    "use strict";
    var i18n2 = require_i18n();
    var DEFAULT_DATA2 = require_default_data();
    function persistIfNeeded(plugin, options) {
      options = options || {};
      if (options.persist === false) return Promise.resolve(true);
      return plugin.persistData();
    }
    function numberOrFallback(value, fallback) {
      var parsed = Number(value);
      return parsed || fallback;
    }
    function attachSettingsStateMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.normalizeLanguageSetting = function() {
        var current = this.data && this.data.language;
        if (!current || current === "auto") {
          this.data.language = current || "auto";
          return this.data.language;
        }
        if (!i18n2.LANG_OPTIONS || !i18n2.LANG_OPTIONS[current]) {
          this.data.language = "auto";
        }
        return this.data.language;
      };
      WorkspacePlusPlus2.prototype.setLanguageSetting = function(value, options) {
        var next = value || "auto";
        if (next !== "auto" && (!i18n2.LANG_OPTIONS || !i18n2.LANG_OPTIONS[next])) {
          next = "auto";
        }
        this.data.language = next;
        i18n2.resolveLocale(this.data.language);
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarAction = function(slotKey, actionId, options) {
        if (!this.data.statusBarActions) {
          this.data.statusBarActions = Object.assign({}, DEFAULT_DATA2.statusBarActions);
        }
        this.data.statusBarActions[slotKey] = actionId;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.migrateRemovedStatusBarActions = function() {
        var removedActionMap = {
          quickSwitcher: "sessionManager",
          previousSession: "none",
          nextSession: "none"
        };
        var actions = this.data.statusBarActions || {};
        var slotKeys = Object.keys(actions);
        for (var i = 0; i < slotKeys.length; i++) {
          var slotKey = slotKeys[i];
          var mapped = removedActionMap[actions[slotKey]];
          if (mapped) actions[slotKey] = mapped;
        }
      };
      WorkspacePlusPlus2.prototype.setWarnOnUnsavedSwitch = function(enabled, options) {
        this.data.warnOnUnsavedSwitch = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setUnsavedStatusBarHighlight = function(enabled, options) {
        this.data.highlightUnsavedSessionChanges = !!enabled;
        this.updateStatusBar();
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setConfirmQuickActions = function(enabled, options) {
        this.data.confirmQuickActions = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setRestoreSidebars = function(enabled, options) {
        this.data.restoreSidebars = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setRestoreTabsByFilename = function(enabled, options) {
        this.data.restoreTabsByFilename = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setNoteUidPropertyName = function(value, options) {
        this.data.noteUidProperty = String(value == null ? "" : value).trim();
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.getTaskViewThumbnailRatio = function() {
        var value = String(this.data.taskViewThumbnailRatio || DEFAULT_DATA2.taskViewThumbnailRatio || "4:3");
        var allowed = { "16:9": 1, "4:3": 1, "3:2": 1, "1:1": 1 };
        return allowed[value] ? value : "4:3";
      };
      WorkspacePlusPlus2.prototype.getTaskViewThumbnailSourceSize = function() {
        var ratio = this.getTaskViewThumbnailRatio();
        var width = 650;
        var parts = ratio.split(":");
        var w = Number(parts[0]);
        var h = Number(parts[1]);
        if (!isFinite(w) || !isFinite(h) || w <= 0 || h <= 0) {
          return { width, height: 488 };
        }
        return {
          width,
          height: Math.max(200, Math.round(width * h / w))
        };
      };
      WorkspacePlusPlus2.prototype.setTaskViewThumbnailRatio = function(value, options) {
        var next = String(value || "");
        var allowed = { "16:9": 1, "4:3": 1, "3:2": 1, "1:1": 1 };
        this.data.taskViewThumbnailRatio = allowed[next] ? next : DEFAULT_DATA2.taskViewThumbnailRatio;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.getTaskViewContentZoom = function() {
        var zoom = Number(this.data.taskViewContentZoom);
        if (!isFinite(zoom)) zoom = DEFAULT_DATA2.taskViewContentZoom;
        if (zoom < 0.1) zoom = 0.1;
        if (zoom > 1) zoom = 1;
        return Math.round(zoom * 100) / 100;
      };
      WorkspacePlusPlus2.prototype.setTaskViewContentZoom = function(value, options) {
        var zoom = Number(value);
        if (!isFinite(zoom)) zoom = DEFAULT_DATA2.taskViewContentZoom;
        if (zoom < 0.1) zoom = 0.1;
        if (zoom > 1) zoom = 1;
        this.data.taskViewContentZoom = Math.round(zoom * 100) / 100;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.isTaskViewHintsEnabled = function() {
        return this.data.showTaskViewHints !== false;
      };
      WorkspacePlusPlus2.prototype.setShowTaskViewHints = function(enabled, options) {
        this.data.showTaskViewHints = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarModScrollSwitch = function(enabled, options) {
        this.data.statusBarModScrollSwitch = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarScrollPreset = function(value, options) {
        this.data.statusBarScrollPreset = value || "trackpad";
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarScrollModifierMode = function(value, options) {
        this.data.statusBarScrollModifierMode = value || "none";
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarScrollThreshold = function(value, options) {
        this.data.statusBarScrollThreshold = numberOrFallback(value, 30);
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarScrollCooldownMs = function(value, options) {
        this.data.statusBarScrollCooldownMs = numberOrFallback(value, 500);
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarScrollResetMs = function(value, options) {
        this.data.statusBarScrollResetMs = numberOrFallback(value, 250);
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setStatusBarScrollInvert = function(enabled, options) {
        this.data.statusBarScrollInvert = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setShowActiveSwitchCommand = function(enabled, options) {
        this.data.showActiveSwitchCommand = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setNumberedSwitchCommands = function(enabled, options) {
        this.data.numberedSwitchCommands = !!enabled;
        this.syncSessionCommands();
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setSwitchPreviewEnabled = function(enabled, options) {
        this.data.previewNext = !!enabled;
        this.data.previewPrevious = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setPreviewNext = function(enabled, options) {
        this.data.previewNext = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setPreviewPrevious = function(enabled, options) {
        this.data.previewPrevious = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setShowFilterInput = function(enabled, options) {
        this.data.showFilterInput = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setOverlayDefaultFocus = function(value, options) {
        this.data.overlayDefaultFocus = value || "current-session";
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setConfirmDeleteByHotkey = function(enabled, options) {
        this.data.confirmDeleteByHotkey = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setVersionHistoryEnabled = function(enabled, options) {
        this.data.versionHistoryEnabled = !!enabled;
        if (this.data.versionHistoryEnabled) {
          this.startHistorySnapshotTimer();
        } else {
          this.stopHistorySnapshotTimer();
        }
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setVersionHistorySnapshotInterval = function(value, options) {
        this.data.versionHistorySnapshotInterval = parseInt(value, 10);
        this.startHistorySnapshotTimer();
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.setVersionHistoryConfirmRestore = function(enabled, options) {
        this.data.versionHistoryConfirmRestore = !!enabled;
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.resolveSessionManagerPanelState = function() {
        var panelMode = this.data.sessionManagerPanelMode === "archive" ? "archive" : "sessions";
        var viewGroupId = null;
        if (this.isGroupFeatureEnabled()) {
          var rawGroupId = this.data.sessionManagerViewGroupId || null;
          if (rawGroupId === "__ungrouped__") {
            viewGroupId = "__ungrouped__";
          } else if (rawGroupId && (this.data.groups || {})[rawGroupId]) {
            viewGroupId = rawGroupId;
          }
        }
        return {
          panelMode,
          viewGroupId
        };
      };
      WorkspacePlusPlus2.prototype.setSessionManagerPanelState = function(state, options) {
        state = state || {};
        var nextMode = state.panelMode === "archive" ? "archive" : "sessions";
        var nextGroupId = null;
        if (state.viewGroupId === "__ungrouped__") {
          nextGroupId = "__ungrouped__";
        } else if (state.viewGroupId && (this.data.groups || {})[state.viewGroupId]) {
          nextGroupId = state.viewGroupId;
        }
        var prevMode = this.data.sessionManagerPanelMode === "archive" ? "archive" : "sessions";
        var prevGroupId = this.data.sessionManagerViewGroupId || null;
        var changed = prevMode !== nextMode || prevGroupId !== nextGroupId;
        this.data.sessionManagerPanelMode = nextMode;
        this.data.sessionManagerViewGroupId = nextGroupId;
        if (!changed) return Promise.resolve(false);
        return persistIfNeeded(this, options);
      };
    }
    module2.exports = attachSettingsStateMethods;
  }
});

// src/plugin/methods/zen-mode.js
var require_zen_mode = __commonJS({
  "src/plugin/methods/zen-mode.js"(exports2, module2) {
    "use strict";
    var obsidian2 = require("obsidian");
    var i18n2 = require_i18n();
    function getWorkspaceBody(app) {
      try {
        var el = app && app.workspace && app.workspace.containerEl;
        if (el && el.ownerDocument && el.ownerDocument.body) return el.ownerDocument.body;
      } catch (err) {
      }
      return document.body;
    }
    function isMissionControlOpen(app) {
      var body = getWorkspaceBody(app);
      return !!(body && body.classList.contains("wpp-mission-control-open"));
    }
    function isConnectedEl(el) {
      return !!(el && el.isConnected);
    }
    function clearZenActiveFlags(body, exceptEl) {
      if (!body) return;
      var marked = body.querySelectorAll(".wpp-zen-active");
      for (var i = 0; i < marked.length; i++) {
        if (exceptEl && marked[i] === exceptEl) continue;
        marked[i].classList.remove("wpp-zen-active");
      }
    }
    function getConnectedZenActiveTabs(body) {
      if (!body) return null;
      try {
        var existing = body.querySelector(
          ".workspace-split.mod-root .workspace-tabs.wpp-zen-active"
        );
        return isConnectedEl(existing) ? existing : null;
      } catch (err) {
        return null;
      }
    }
    function isZenChromeMutation(mutation) {
      var target = mutation && mutation.target;
      if (!target) return false;
      if (mutation.type === "attributes") {
        if (!target.classList) return false;
        return target.classList.contains("workspace-tabs") || target.classList.contains("workspace-split") || target.classList.contains("workspace-leaf");
      }
      if (typeof target.closest === "function" && target.closest(".view-content")) {
        return false;
      }
      return true;
    }
    function isLeafInRootSplit(app, leaf) {
      if (!app || !app.workspace || !leaf) return false;
      var root = app.workspace.rootSplit;
      if (!root) return false;
      try {
        if (typeof leaf.getRoot === "function" && leaf.getRoot() !== root) {
          return false;
        }
      } catch (err) {
        return false;
      }
      try {
        var rootEl = root.containerEl;
        var leafEl = leaf.containerEl || leaf.view && leaf.view.containerEl;
        if (rootEl && leafEl) {
          if (typeof rootEl.contains === "function" && !rootEl.contains(leafEl)) {
            return false;
          }
          if (typeof leafEl.closest === "function" && leafEl.closest(".csn-sticky, .csn-sticky-window-body")) {
            return false;
          }
        } else if (rootEl && !leafEl) {
          return false;
        }
      } catch (err2) {
        return false;
      }
      return true;
    }
    function findLeafById(app, leafId) {
      if (!leafId || !app || !app.workspace) return null;
      var workspace = app.workspace;
      var found = null;
      try {
        if (typeof workspace.getLeafById === "function") {
          found = workspace.getLeafById(leafId);
        }
      } catch (err) {
      }
      if (!found && typeof workspace.iterateAllLeaves === "function") {
        try {
          workspace.iterateAllLeaves(function(leaf) {
            if (!found && leaf && leaf.id === leafId) found = leaf;
          });
        } catch (err2) {
        }
      }
      if (!found && typeof workspace.iterateRootLeaves === "function") {
        try {
          workspace.iterateRootLeaves(function(leaf) {
            if (!found && leaf && leaf.id === leafId) found = leaf;
          });
        } catch (err3) {
        }
      }
      return isLeafInRootSplit(app, found) ? found : null;
    }
    function getLeafFilePath(app, leaf) {
      if (!leaf) return null;
      try {
        if (leaf.view && leaf.view.file && leaf.view.file.path) {
          return leaf.view.file.path;
        }
      } catch (err) {
      }
      try {
        var vs = typeof leaf.getViewState === "function" ? leaf.getViewState() : null;
        if (vs && vs.state && typeof vs.state.file === "string") return vs.state.file;
      } catch (err2) {
      }
      return null;
    }
    function findRootLeafByFilePath(app, filePath) {
      if (!filePath || !app || !app.workspace) return null;
      var found = null;
      function consider(leaf) {
        if (found || !isLeafInRootSplit(app, leaf)) return;
        var path = getLeafFilePath(app, leaf);
        if (path === filePath) found = leaf;
      }
      try {
        if (typeof app.workspace.iterateRootLeaves === "function") {
          app.workspace.iterateRootLeaves(consider);
        } else if (typeof app.workspace.iterateAllLeaves === "function") {
          app.workspace.iterateAllLeaves(consider);
        }
      } catch (err) {
      }
      return found;
    }
    function collectRootTabGroups(app) {
      var groups = [];
      var root = app && app.workspace && app.workspace.rootSplit;
      if (!root) return groups;
      function isTabGroupNode(node) {
        return !!(node && Array.isArray(node.children) && (typeof node.selectTab === "function" || typeof node.selectTabIndex === "function" || node.type === "tabs"));
      }
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
    function getLeafSplitIndex(app, leaf) {
      if (!leaf) return -1;
      var groups = collectRootTabGroups(app);
      var parent = leaf.parent;
      var depth = 0;
      while (parent && depth < 8) {
        var idx = groups.indexOf(parent);
        if (idx >= 0) return idx;
        parent = parent.parent;
        depth += 1;
      }
      return -1;
    }
    function findLeafInSplitIndex(app, splitIndex) {
      if (typeof splitIndex !== "number" || splitIndex < 0) return null;
      var groups = collectRootTabGroups(app);
      var group = groups[splitIndex];
      if (!group || !Array.isArray(group.children)) return null;
      for (var i = 0; i < group.children.length; i++) {
        var child = group.children[i];
        if (isLeafInRootSplit(app, child)) return child;
      }
      return null;
    }
    function resolveRememberedZenLeaf(app, options) {
      options = options || {};
      var leaf = findLeafById(app, options.rememberedLeafId);
      if (leaf) return leaf;
      leaf = findRootLeafByFilePath(app, options.rememberedFilePath);
      if (leaf) return leaf;
      return findLeafInSplitIndex(app, options.rememberedSplitIndex);
    }
    function getZenFocusLeaf(app, options) {
      options = options || {};
      var workspace = app && app.workspace;
      if (!workspace) return null;
      var remembered = resolveRememberedZenLeaf(app, options);
      if (options.preferRemembered && remembered) return remembered;
      var active = workspace.activeLeaf;
      if (isLeafInRootSplit(app, active)) return active;
      if (remembered) return remembered;
      if (typeof workspace.getMostRecentLeaf === "function") {
        try {
          var recent = workspace.getMostRecentLeaf(workspace.rootSplit);
          if (isLeafInRootSplit(app, recent)) return recent;
          recent = workspace.getMostRecentLeaf();
          if (isLeafInRootSplit(app, recent)) return recent;
        } catch (err) {
        }
      }
      var found = null;
      if (typeof workspace.iterateRootLeaves === "function") {
        try {
          workspace.iterateRootLeaves(function(leaf) {
            if (!found && leaf) found = leaf;
          });
        } catch (err2) {
        }
      }
      return found;
    }
    function getLeafTabsContainerEl(leaf) {
      var node = leaf && leaf.parent;
      var depth = 0;
      while (node && depth < 8) {
        var el = node.containerEl;
        if (isConnectedEl(el) && el.classList) {
          if (el.classList.contains("workspace-tabs")) return el;
          if (typeof node.selectTab === "function" || typeof node.selectTabIndex === "function" || node.type === "tabs") {
            return el;
          }
        }
        node = node.parent;
        depth += 1;
      }
      try {
        var leafEl = leaf && leaf.containerEl || leaf && leaf.view && leaf.view.containerEl;
        if (isConnectedEl(leafEl) && typeof leafEl.closest === "function") {
          var fromDom = leafEl.closest(".workspace-tabs");
          if (isConnectedEl(fromDom)) return fromDom;
        }
      } catch (err) {
      }
      var fallback = leaf && leaf.parent && leaf.parent.containerEl;
      return isConnectedEl(fallback) ? fallback : null;
    }
    function findZenTabsEl(app, body, options) {
      var leaf = getZenFocusLeaf(app, options);
      var tabsEl = leaf ? getLeafTabsContainerEl(leaf) : null;
      if (!isConnectedEl(tabsEl)) tabsEl = null;
      if (!tabsEl) {
        try {
          tabsEl = body.querySelector(".workspace-split.mod-root .workspace-tabs.mod-active");
        } catch (err) {
        }
        if (!isConnectedEl(tabsEl)) tabsEl = null;
      }
      if (!tabsEl) {
        try {
          var activeLeafEl = body.querySelector(
            ".workspace-split.mod-root .workspace-leaf.mod-active"
          );
          if (isConnectedEl(activeLeafEl) && typeof activeLeafEl.closest === "function") {
            tabsEl = activeLeafEl.closest(".workspace-tabs");
          }
        } catch (err2) {
        }
        if (!isConnectedEl(tabsEl)) tabsEl = null;
      }
      if (!tabsEl) {
        tabsEl = getConnectedZenActiveTabs(body);
      }
      if (!tabsEl) {
        try {
          tabsEl = body.querySelector(".workspace-split.mod-root .workspace-tabs");
        } catch (err3) {
        }
        if (!isConnectedEl(tabsEl)) tabsEl = null;
      }
      return tabsEl || null;
    }
    function lockZenFocus(app, options) {
      var body = getWorkspaceBody(app);
      if (!body) return false;
      var existing = getConnectedZenActiveTabs(body);
      var tabsEl = findZenTabsEl(app, body, options);
      if (!isConnectedEl(tabsEl)) {
        return !!existing;
      }
      var marked = body.querySelectorAll(".workspace-split.mod-root .workspace-tabs.wpp-zen-active");
      if (tabsEl.classList.contains("wpp-zen-active") && marked.length === 1 && marked[0] === tabsEl) {
        return true;
      }
      clearZenActiveFlags(body, tabsEl);
      tabsEl.classList.add("wpp-zen-active");
      return true;
    }
    function persistIfNeeded(plugin, options) {
      options = options || {};
      if (options.persist === false) return Promise.resolve(true);
      return plugin.persistData();
    }
    function attachZenModeMethods(WorkspacePlusPlus2) {
      WorkspacePlusPlus2.prototype.migrateZenModeToSessions = function() {
        var sessions = this.data && this.data.sessions;
        if (!sessions || typeof sessions !== "object") return false;
        var ids = Object.keys(sessions);
        var hadPerSessionFlag = false;
        for (var i = 0; i < ids.length; i++) {
          var session = sessions[ids[i]];
          if (!session || typeof session !== "object") continue;
          if (Object.prototype.hasOwnProperty.call(session, "zenMode")) {
            hadPerSessionFlag = true;
            session.zenMode = !!session.zenMode;
          } else {
            session.zenMode = false;
          }
        }
        var legacyGlobal = !!this.data.zenMode;
        if (!hadPerSessionFlag && legacyGlobal) {
          var active = this.getActiveSession && this.getActiveSession();
          if (active) active.zenMode = true;
        }
        this.data.zenMode = false;
        return legacyGlobal || hadPerSessionFlag;
      };
      WorkspacePlusPlus2.prototype.getActiveSessionZenMode = function() {
        var session = this.getActiveSession && this.getActiveSession();
        return !!(session && session.zenMode);
      };
      WorkspacePlusPlus2.prototype.setActiveSessionZenMode = function(enabled) {
        var session = this.getActiveSession && this.getActiveSession();
        if (session) session.zenMode = !!enabled;
        this.data.zenMode = !!enabled;
        return !!enabled;
      };
      WorkspacePlusPlus2.prototype.isZenModeEnabled = function() {
        return this.getActiveSessionZenMode();
      };
      WorkspacePlusPlus2.prototype.isZenHideInactiveTabsEnabled = function() {
        return this.data.zenHideInactiveTabs !== false;
      };
      WorkspacePlusPlus2.prototype.isStatusBarZenModeEnabled = function() {
        return this.data.showStatusBarZenMode !== false;
      };
      WorkspacePlusPlus2.prototype.getZenFocusLockOptions = function() {
        var session = this.getActiveSession && this.getActiveSession();
        var settling = !!(this.isStartupSettling && this.isStartupSettling());
        return {
          rememberedLeafId: session && session.zenFocusLeafId || null,
          rememberedFilePath: session && session.zenFocusFilePath || null,
          rememberedSplitIndex: session && typeof session.zenFocusSplitIndex === "number" ? session.zenFocusSplitIndex : -1,
          preferRemembered: settling || !!this._zenRestoringFocus
        };
      };
      WorkspacePlusPlus2.prototype.rememberZenFocusLeaf = function(leaf, options) {
        options = options || {};
        if (!this.isZenModeEnabled()) return false;
        if (!options.force && this.isStartupSettling && this.isStartupSettling()) return false;
        if (!isLeafInRootSplit(this.app, leaf)) return false;
        var session = this.getActiveSession && this.getActiveSession();
        if (!session) return false;
        var leafId = leaf.id || null;
        var filePath = getLeafFilePath(this.app, leaf);
        var splitIndex = getLeafSplitIndex(this.app, leaf);
        var changed = session.zenFocusLeafId !== leafId || session.zenFocusFilePath !== filePath || session.zenFocusSplitIndex !== splitIndex;
        session.zenFocusLeafId = leafId;
        session.zenFocusFilePath = filePath;
        session.zenFocusSplitIndex = splitIndex;
        if (changed && options.persist !== false && typeof this.persistData === "function") {
          this.persistData();
        }
        return changed;
      };
      WorkspacePlusPlus2.prototype.rememberZenFocusFromWorkspace = function(options) {
        options = options || {};
        var leaf = getZenFocusLeaf(this.app, {
          preferRemembered: false
        });
        return this.rememberZenFocusLeaf(leaf, options);
      };
      WorkspacePlusPlus2.prototype.restoreZenFocusLeaf = function() {
        if (!this.isZenModeEnabled()) return null;
        var opts = this.getZenFocusLockOptions();
        var leaf = resolveRememberedZenLeaf(this.app, opts);
        if (!leaf) return null;
        this._zenRestoringFocus = true;
        try {
          if (typeof this.app.workspace.setActiveLeaf === "function") {
            this.app.workspace.setActiveLeaf(leaf, { focus: true });
          }
          if (typeof this.app.workspace.revealLeaf === "function") {
            this.app.workspace.revealLeaf(leaf);
          }
        } catch (err) {
        }
        this._zenRestoringFocus = false;
        return leaf;
      };
      WorkspacePlusPlus2.prototype.startZenDomGuard = function() {
        var self = this;
        this.stopZenDomGuard();
        if (!this.isZenModeEnabled()) return;
        var root = this.app && this.app.workspace && this.app.workspace.rootSplit;
        var el = root && root.containerEl;
        if (!el || typeof MutationObserver === "undefined") return;
        this._zenDomObserver = new MutationObserver(function(records) {
          if (!self.isZenModeEnabled()) return;
          if (isMissionControlOpen(self.app)) return;
          var i;
          for (i = 0; i < records.length; i++) {
            if (!isZenChromeMutation(records[i])) continue;
            lockZenFocus(self.app, self.getZenFocusLockOptions());
            return;
          }
        });
        try {
          this._zenDomObserver.observe(el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ["class"]
          });
        } catch (err) {
          this._zenDomObserver = null;
        }
      };
      WorkspacePlusPlus2.prototype.stopZenDomGuard = function() {
        if (this._zenDomObserver) {
          try {
            this._zenDomObserver.disconnect();
          } catch (err) {
          }
          this._zenDomObserver = null;
        }
      };
      WorkspacePlusPlus2.prototype.applyZenModeClasses = function() {
        var body = getWorkspaceBody(this.app);
        var enabled = this.isZenModeEnabled();
        body.classList.toggle("wpp-zen-mode", enabled);
        body.classList.toggle(
          "wpp-zen-hide-inactive-tabs",
          enabled && this.isZenHideInactiveTabsEnabled()
        );
        if (enabled) {
          if (this.isStartupSettling && this.isStartupSettling()) {
            this.restoreZenFocusLeaf();
          }
          lockZenFocus(this.app, this.getZenFocusLockOptions());
          this.startZenDomGuard();
        } else {
          this.stopZenDomGuard();
          clearZenActiveFlags(body);
        }
        this.updateZenStatusBar();
      };
      WorkspacePlusPlus2.prototype.clearZenModeClasses = function() {
        var body = getWorkspaceBody(this.app);
        this.stopZenDomGuard();
        body.classList.remove("wpp-zen-mode");
        body.classList.remove("wpp-zen-hide-inactive-tabs");
        clearZenActiveFlags(body);
        this.updateZenStatusBar();
      };
      WorkspacePlusPlus2.prototype.applyStatusBarZenVisibility = function() {
        if (!this.zenStatusBarEl) return;
        var show = this.isStatusBarZenModeEnabled();
        this.zenStatusBarEl.toggleClass("wpp-zen-status-bar-hidden", !show);
        this.zenStatusBarEl.style.display = show ? "" : "none";
      };
      WorkspacePlusPlus2.prototype.setShowStatusBarZenMode = function(enabled, options) {
        this.data.showStatusBarZenMode = !!enabled;
        this.applyStatusBarZenVisibility();
        if (enabled) this.updateZenStatusBar();
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.updateZenStatusBar = function() {
        var L = i18n2.L;
        if (!this.zenStatusBarEl) return;
        this.applyStatusBarZenVisibility();
        if (!this.isStatusBarZenModeEnabled()) return;
        var enabled = this.isZenModeEnabled();
        this.zenStatusBarEl.empty();
        this.zenStatusBarEl.toggleClass("is-active", enabled);
        this.zenStatusBarEl.setAttribute(
          "aria-label",
          enabled ? L.zenStatusBarDisable : L.zenStatusBarEnable
        );
        this.zenStatusBarEl.setAttribute("aria-pressed", enabled ? "true" : "false");
        var icon = this.zenStatusBarEl.createSpan({ cls: "wpp-zen-status-icon" });
        obsidian2.setIcon(icon, "focus");
        this.zenStatusBarEl.createSpan({
          text: enabled ? L.zenStatusBarOn : L.zenStatusBarOff,
          cls: "wpp-zen-status-label"
        });
        if (typeof obsidian2.setTooltip === "function") {
          obsidian2.setTooltip(
            this.zenStatusBarEl,
            enabled ? L.zenStatusBarDisable : L.zenStatusBarEnable,
            { delay: 250 }
          );
        }
      };
      WorkspacePlusPlus2.prototype.setZenMode = function(enabled, options) {
        options = options || {};
        this.setActiveSessionZenMode(enabled);
        this.applyZenModeClasses();
        if (enabled) {
          this.rememberZenFocusFromWorkspace({ force: true });
        }
        if (options.notify) {
          new obsidian2.Notice(
            enabled ? i18n2.L.zenModeEnabled : i18n2.L.zenModeDisabled
          );
        }
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.toggleZenMode = function(options) {
        return this.setZenMode(!this.isZenModeEnabled(), options);
      };
      WorkspacePlusPlus2.prototype.setZenHideInactiveTabs = function(enabled, options) {
        this.data.zenHideInactiveTabs = !!enabled;
        this.applyZenModeClasses();
        return persistIfNeeded(this, options);
      };
      WorkspacePlusPlus2.prototype.refreshZenModeFocus = function() {
        if (!this.isZenModeEnabled()) return;
        if (isMissionControlOpen(this.app)) return;
        lockZenFocus(this.app, this.getZenFocusLockOptions());
      };
      WorkspacePlusPlus2.prototype.scheduleZenModeRefresh = function(delayMs) {
        var self = this;
        var delay = typeof delayMs === "number" && delayMs >= 0 ? delayMs : 0;
        if (!this._zenRefreshTimers) this._zenRefreshTimers = [];
        var timer = setTimeout(function() {
          if (self._zenRefreshTimers) {
            self._zenRefreshTimers = self._zenRefreshTimers.filter(function(t) {
              return t !== timer;
            });
          }
          if (!self.isZenModeEnabled()) return;
          if (isMissionControlOpen(self.app)) return;
          if (self.isStartupSettling && self.isStartupSettling()) {
            self.restoreZenFocusLeaf();
          }
          lockZenFocus(self.app, self.getZenFocusLockOptions());
        }, delay);
        this._zenRefreshTimers.push(timer);
      };
      WorkspacePlusPlus2.prototype.clearZenModeRefreshTimers = function() {
        var timers = this._zenRefreshTimers || [];
        for (var i = 0; i < timers.length; i++) {
          clearTimeout(timers[i]);
        }
        this._zenRefreshTimers = [];
        this.stopZenDomGuard();
      };
    }
    module2.exports = attachZenModeMethods;
  }
});

// src/plugin/methods/index.js
var require_methods = __commonJS({
  "src/plugin/methods/index.js"(exports2, module2) {
    "use strict";
    var attachHotkeyMethods = require_hotkeys();
    var attachOverlayMethods = require_overlays();
    var attachPersistenceMethods = require_persistence();
    var attachSessionSyncMethods = require_session_sync();
    var attachSessionMethods = require_sessions();
    var attachLayoutRestoreMethods = require_layout_restore();
    var attachSessionValidationMethods = require_sessions_validation();
    var attachGroupMethods = require_groups();
    var attachSessionCrudMethods = require_session_crud();
    var attachSessionSavingMethods = require_session_saving();
    var attachSessionStatusBarMethods = require_session_statusbar();
    var attachSessionStartupMethods = require_session_startup();
    var attachSessionSwitchingMethods = require_session_switching();
    var attachSessionCommandMethods = require_session_commands();
    var attachHistoryMethods = require_history();
    var attachFrontmatterMethods = require_frontmatter();
    var attachSettingsStateMethods = require_settings_state();
    var attachZenModeMethods = require_zen_mode();
    function attachPluginMethods2(WorkspacePlusPlus2) {
      attachHotkeyMethods(WorkspacePlusPlus2);
      attachOverlayMethods(WorkspacePlusPlus2);
      attachPersistenceMethods(WorkspacePlusPlus2);
      attachSessionSyncMethods(WorkspacePlusPlus2);
      attachSessionMethods(WorkspacePlusPlus2);
      attachLayoutRestoreMethods(WorkspacePlusPlus2);
      attachSessionValidationMethods(WorkspacePlusPlus2);
      attachGroupMethods(WorkspacePlusPlus2);
      attachSessionCrudMethods(WorkspacePlusPlus2);
      attachSessionSavingMethods(WorkspacePlusPlus2);
      attachSessionStatusBarMethods(WorkspacePlusPlus2);
      attachSessionStartupMethods(WorkspacePlusPlus2);
      attachSessionSwitchingMethods(WorkspacePlusPlus2);
      attachSessionCommandMethods(WorkspacePlusPlus2);
      attachHistoryMethods(WorkspacePlusPlus2);
      attachFrontmatterMethods(WorkspacePlusPlus2);
      attachSettingsStateMethods(WorkspacePlusPlus2);
      attachZenModeMethods(WorkspacePlusPlus2);
    }
    module2.exports = attachPluginMethods2;
  }
});

// src/statusbar-controller.js
var require_statusbar_controller = __commonJS({
  "src/statusbar-controller.js"(exports2, module2) {
    "use strict";
    var modals2 = require_modals2();
    function setupStatusBar(plugin) {
      plugin.statusBarEl = plugin.addStatusBarItem();
      plugin.statusBarEl.addClass("wpp-status-bar");
      plugin.statusBarEl.addEventListener("click", function(evt) {
        if (evt.button !== 0) return;
        if (!plugin.isStatusBarWorkspaceEnabled()) return;
        evt.preventDefault();
        evt.stopPropagation();
        new modals2.SessionManagerModal(plugin.app, plugin).open();
      });
      plugin.updateStatusBar();
      plugin.zenStatusBarEl = plugin.addStatusBarItem();
      plugin.zenStatusBarEl.addClass("wpp-zen-status-bar");
      plugin.zenStatusBarEl.setAttribute("role", "button");
      plugin.zenStatusBarEl.setAttribute("tabindex", "0");
      plugin.zenStatusBarEl.addEventListener("click", function(evt) {
        if (evt.button !== 0) return;
        if (!plugin.isStatusBarZenModeEnabled()) return;
        evt.preventDefault();
        evt.stopPropagation();
        plugin.toggleZenMode({ notify: false });
      });
      plugin.updateZenStatusBar();
      return plugin.statusBarEl;
    }
    module2.exports = {
      setupStatusBar
    };
  }
});

// src/main.js
var obsidian = require("obsidian");
var i18n = require_i18n();
var modals = require_modals2();
var settings = require_settings();
var DEFAULT_DATA = require_default_data();
var registerCommands = require_register_commands();
var attachPluginMethods = require_methods();
var statusBarController = require_statusbar_controller();
i18n.resolveLocale();
var WorkspacePlusPlus = (
  /** @class */
  function(_super) {
    function WorkspacePlusPlus2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkspacePlusPlus2.prototype = Object.create(_super.prototype);
    WorkspacePlusPlus2.prototype.constructor = WorkspacePlusPlus2;
    WorkspacePlusPlus2.prototype.onload = function() {
      var self = this;
      return this.loadWithBackup().then(function(saved) {
        self.data = Object.assign({}, DEFAULT_DATA, saved || {});
        if (!self.data.sessions) self.data.sessions = {};
        if (!self.data.sessionOrder) self.data.sessionOrder = [];
        self.normalizeGroupFeatureState();
        self.migrateZenModeToSessions();
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
        if (typeof self.normalizeLanguageSetting === "function") {
          self.normalizeLanguageSetting();
        }
        i18n.resolveLocale(self.data.language);
        var L = i18n.L;
        self.addRibbonIcon("panels-top-left", L.ribbonTooltip, function() {
          new modals.SessionManagerModal(self.app, self).open();
        });
        statusBarController.setupStatusBar(self);
        registerCommands(self);
        self.settingTab = new settings.WorkspacePlusPlusSettingTab(self.app, self);
        self.addSettingTab(self.settingTab);
        self.registerEvent(self.app.workspace.on("layout-change", function() {
          self.noteStartupLayoutChange();
          self.updateStatusBar();
          self.refreshZenModeFocus();
        }));
        self.registerEvent(self.app.workspace.on("active-leaf-change", function() {
          if (self.isSwitchingSession) return;
          self.refreshZenModeFocus();
          if (typeof self.rememberZenFocusFromWorkspace === "function") {
            self.rememberZenFocusFromWorkspace();
          }
          setTimeout(function() {
            self.updateStatusBar();
          }, 0);
        }));
        self.app.workspace.onLayoutReady(function() {
          self.startStartupSettleWindow();
          self.ensureDefaultSession();
          self.syncSessionCommands();
          self.scheduleStartupFlush();
          self.startHistorySnapshotTimer();
          self.initRotationBackupTimestamp();
          self.registerFrontmatterListeners();
          self.scheduleStartupSessionStorageChecks();
          if (typeof self.restoreZenFocusLeaf === "function") {
            self.restoreZenFocusLeaf();
          }
          self.applyZenModeClasses();
          self.scheduleZenModeRefresh(50);
          self.scheduleZenModeRefresh(400);
        });
      });
    };
    WorkspacePlusPlus2.prototype.onunload = function() {
      if (typeof this.clearZenModeRefreshTimers === "function") {
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
    return WorkspacePlusPlus2;
  }(obsidian.Plugin)
);
attachPluginMethods(WorkspacePlusPlus);
module.exports = WorkspacePlusPlus;
