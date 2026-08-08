'use strict';

var obsidian = require('obsidian');
var i18n = require('./i18n');
var modals = require('./modals');
var formatRelativeTime = require('./modals/format-relative-time');
var settingsUi = require('./settings-ui');

var GroupSessionsModal = settingsUi.GroupSessionsModal;
var resolveSettingText = settingsUi.resolveSettingText;
var addToggleSetting = settingsUi.addToggleSetting;
var addDropdownSetting = settingsUi.addDropdownSetting;
var addSubsection = settingsUi.addSubsection;
var addDangerResetSetting = settingsUi.addDangerResetSetting;
var addAsyncActionSetting = settingsUi.addAsyncActionSetting;

// ============================================================
// Settings Tab
// ============================================================
var WorkspacePlusPlusSettingTab = /** @class */ (function (_super) {
    function WorkspacePlusPlusSettingTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        return _this;
    }

    WorkspacePlusPlusSettingTab.prototype = Object.create(_super.prototype);
    WorkspacePlusPlusSettingTab.prototype.constructor = WorkspacePlusPlusSettingTab;

    WorkspacePlusPlusSettingTab.prototype.display = function () {
        var L = i18n.L;
        var self = this;
        var containerEl = this.containerEl;
        containerEl.empty();

        if (!self.activeTab) self.activeTab = 'general';

        // ── Tab bar ──
        var tabs = [
            { id: 'general', label: L.settingsSectionGeneral },
            { id: 'sessions', label: L.settingsTabSessions },
            { id: 'groups', label: L.settingsTabGroups },
            { id: 'advanced', label: L.settingsSectionAdvanced },
        ];
        var tabBarEl = containerEl.createDiv({ cls: 'wpp-settings-tab-bar' });
        for (var ti = 0; ti < tabs.length; ti++) {
            (function (tab) {
                var btn = tabBarEl.createEl('button', {
                    text: tab.label,
                    cls: 'wpp-settings-tab' + (tab.id === self.activeTab ? ' is-active' : ''),
                });
                btn.addEventListener('click', function () {
                    self.activeTab = tab.id;
                    self.display();
                });
            })(tabs[ti]);
        }

        var contentEl = containerEl.createDiv({ cls: 'wpp-settings-tab-content' });

        function addSection(title) {
            contentEl.createEl('h3', { text: resolveSettingText(title), cls: 'wpp-settings-section-title' });
        }

        // ── General tab ──
        if (self.activeTab === 'general') {
            new obsidian.Setting(contentEl)
                .setName(L.settingsLanguage)
                .setDesc(L.settingsLanguageDesc)
                .addDropdown(function (dropdown) {
                    dropdown.addOption('auto', L.settingsLangAuto);
                    var order = i18n.LANG_ORDER;
                    for (var i = 0; i < order.length; i++) {
                        dropdown.addOption(order[i], i18n.LANG_OPTIONS[order[i]]);
                    }
                    var currentLang = self.plugin.data.language || 'auto';
                    if (currentLang !== 'auto' && (!i18n.LANG_OPTIONS || !i18n.LANG_OPTIONS[currentLang])) {
                        currentLang = 'auto';
                    }
                    dropdown.setValue(currentLang);
                    dropdown.onChange(function (value) {
                        self.plugin.setLanguageSetting(value).then(function () {
                            self.display();
                        });
                    });
                });

            new obsidian.Setting(contentEl)
                .setName(L.settingsHotkeys)
                .addButton(function (btn) {
                    btn.setButtonText(L.settingsHotkeysBtn);
                    btn.onClick(function () {
                        self.app.setting.openTabById('hotkeys');
                        var sc = self.app.setting.activeTab.searchComponent;
                        var pluginName = (self.plugin.manifest && self.plugin.manifest.name)
                            ? self.plugin.manifest.name
                            : 'Workspace++';
                        sc.setValue(pluginName);
                        sc.inputEl.dispatchEvent(new Event('input'));
                    });
                });

            addToggleSetting(contentEl, {
                name: L.settingsRestoreSidebars,
                desc: L.settingsRestoreSidebarsDesc,
                value: self.plugin.isSidebarRestoreEnabled(),
                onChange: function (value) {
                    self.plugin.setRestoreSidebars(value);
                },
            });

            addToggleSetting(contentEl, {
                name: L.settingsShowStatusBarWorkspace,
                desc: L.settingsShowStatusBarWorkspaceDesc,
                value: self.plugin.isStatusBarWorkspaceEnabled(),
                onChange: function (value) {
                    self.plugin.setShowStatusBarWorkspace(value);
                },
            });

            addToggleSetting(contentEl, {
                name: L.settingsShowStatusBarZenMode,
                desc: L.settingsShowStatusBarZenModeDesc,
                value: self.plugin.isStatusBarZenModeEnabled(),
                onChange: function (value) {
                    self.plugin.setShowStatusBarZenMode(value);
                },
            });

            new obsidian.Setting(contentEl)
                .setName(L.settingsTaskViewThumbnailRatio)
                .setDesc(L.settingsTaskViewThumbnailRatioDesc)
                .addDropdown(function (dropdown) {
                    dropdown.addOption('16:9', '16:9');
                    dropdown.addOption('4:3', '4:3');
                    dropdown.addOption('3:2', '3:2');
                    dropdown.addOption('1:1', '1:1');
                    dropdown.setValue(self.plugin.getTaskViewThumbnailRatio());
                    dropdown.onChange(function (value) {
                        self.plugin.setTaskViewThumbnailRatio(value);
                    });
                });

            // Preview content zoom (CSS zoom), patterned after colorful-stickynotes
            var contentZoomDefault = 0.45;
            var contentZoomSetting = new obsidian.Setting(contentEl)
                .setName(L.settingsTaskViewContentZoom)
                .setDesc(L.settingsTaskViewContentZoomDesc)
                .addSlider(function (slider) {
                    slider
                        .setLimits(0.1, 1, 0.05)
                        .setValue(self.plugin.getTaskViewContentZoom())
                        .setDynamicTooltip()
                        .onChange(function (value) {
                            self.plugin.setTaskViewContentZoom(value);
                        });
                    if (typeof slider.setInstant === 'function') {
                        slider.setInstant(true);
                    }
                });
            contentZoomSetting.addExtraButton(function (btn) {
                btn.setIcon('rotate-ccw');
                btn.setTooltip(
                    (L.settingsTaskViewContentZoomReset || 'Reset to {value}')
                        .replace('{value}', String(Math.round(contentZoomDefault * 100)) + '%')
                );
                btn.onClick(function () {
                    self.plugin.setTaskViewContentZoom(contentZoomDefault).then(function () {
                        self.display();
                    });
                });
            });

            addToggleSetting(contentEl, {
                name: L.settingsShowTaskViewHints,
                desc: L.settingsShowTaskViewHintsDesc,
                value: self.plugin.isTaskViewHintsEnabled(),
                onChange: function (value) {
                    self.plugin.setShowTaskViewHints(value);
                },
            });

            // Focus/zen mode itself is toggled via command/hotkey (and optional status bar).
            // This preference stays visible so it applies whenever focus mode is turned on.
            addToggleSetting(contentEl, {
                name: L.settingsZenHideInactiveTabs,
                desc: L.settingsZenHideInactiveTabsDesc,
                value: self.plugin.isZenHideInactiveTabsEnabled(),
                onChange: function (value) {
                    self.plugin.setZenHideInactiveTabs(value);
                },
            });

        }

        // ── Sessions tab ──
        if (self.activeTab === 'sessions') {
            addSubsection(contentEl, L.settingsSubsectionSessionRestore);

            addToggleSetting(contentEl, {
                name: L.settingsRestoreTabsByFilename,
                desc: L.settingsRestoreTabsByFilenameDesc,
                value: self.plugin.isRestoreTabsByFilenameEnabled(),
                onChange: function (value) {
                    self.plugin.setRestoreTabsByFilename(value);
                },
            });

            new obsidian.Setting(contentEl)
                .setName(L.settingsNoteUidProperty)
                .setDesc(L.settingsNoteUidPropertyDesc)
                .addText(function (text) {
                    text.setPlaceholder(L.settingsNoteUidPropertyPlaceholder || 'uid');
                    text.setValue(self.plugin.getNoteUidPropertyName());
                    text.onChange(function (value) {
                        self.plugin.setNoteUidPropertyName(value);
                    });
                });

            addSubsection(contentEl, L.settingsSubsectionAutoSaveMode);

            var autoSaveOnSwitch = self.plugin.isAutoSaveOnSwitchEnabled();
            new obsidian.Setting(contentEl)
                .setName(L.settingsAutoSaveOnSwitch)
                .setDesc(L.settingsAutoSaveOnSwitchDesc)
                .addToggle(function (toggle) {
                    toggle.setValue(autoSaveOnSwitch);
                    toggle.onChange(function (value) {
                        self.plugin.setAutoSaveOnSwitch(value).then(function () {
                            self.display();
                        });
                    });
                });

            if (!autoSaveOnSwitch) {
                addToggleSetting(contentEl, {
                    name: L.settingsWarnUnsavedSwitch,
                    desc: L.settingsWarnUnsavedSwitchDesc,
                    value: self.plugin.isWarnOnUnsavedSwitchEnabled(),
                    onChange: function (value) {
                        self.plugin.setWarnOnUnsavedSwitch(value);
                    },
                });

                addToggleSetting(contentEl, {
                    name: L.settingsHighlightUnsavedSessionChanges,
                    desc: L.settingsHighlightUnsavedSessionChangesDesc,
                    value: self.plugin.isUnsavedStatusBarHighlightEnabled(),
                    onChange: function (value) {
                        self.plugin.setUnsavedStatusBarHighlight(value);
                    },
                });

                addToggleSetting(contentEl, {
                    name: L.settingsConfirmQuickActions,
                    desc: L.settingsConfirmQuickActionsDesc,
                    value: !!self.plugin.data.confirmQuickActions,
                    onChange: function (value) {
                        self.plugin.setConfirmQuickActions(value);
                    },
                });
            }

            addSection(L.settingsSectionSessionListSearch);

            addToggleSetting(contentEl, {
                name: L.settingsShowFilterInput,
                desc: L.settingsShowFilterInputDesc,
                value: !!self.plugin.data.showFilterInput,
                onChange: function (value) {
                    self.plugin.setShowFilterInput(value);
                },
            });

            new obsidian.Setting(contentEl)
                .setName(L.settingsOverlayDefaultFocus)
                .setDesc(L.settingsOverlayDefaultFocusDesc)
                .addDropdown(function (dropdown) {
                    dropdown.addOption('current-session', L.settingsOverlayFocusCurrentSession);
                    dropdown.addOption('session-filter', L.settingsOverlayFocusSessionFilter);
                    dropdown.addOption('session-create', L.settingsOverlayFocusSessionCreate);
                    dropdown.setValue(self.plugin.data.overlayDefaultFocus || 'current-session');
                    dropdown.onChange(function (value) {
                        self.plugin.setOverlayDefaultFocus(value);
                    });
                });

            addSection(L.settingsSectionDeletion);

            addToggleSetting(contentEl, {
                name: L.settingsConfirmDelete,
                desc: L.settingsConfirmDeleteDesc,
                value: self.plugin.data.confirmDeleteByHotkey !== false,
                onChange: function (value) {
                    self.plugin.setConfirmDeleteByHotkey(value);
                },
            });

            // --- Version History ---
            addSection(L.historyTitle);

            var versionHistoryEnabled = self.plugin.isVersionHistoryEnabled();
            var vhMasterSetting = new obsidian.Setting(contentEl)
                .setName(L.settingsVersionHistoryEnabled)
                .setDesc(L.settingsVersionHistoryEnabledDesc)
                .addToggle(function (toggle) {
                    toggle.setValue(versionHistoryEnabled);
                    toggle.onChange(function (value) {
                        self.plugin.setVersionHistoryEnabled(value).then(function () {
                            self.display();
                        });
                    });
                });

            vhMasterSetting.settingEl.addClass('wpp-has-nested');
            var vhNestedDiv = vhMasterSetting.settingEl.createDiv({ cls: 'wpp-nested-settings' });

            if (self.plugin.isAutoSaveOnSwitchEnabled()) {
                new obsidian.Setting(vhNestedDiv)
                    .setName(L.settingsVersionHistoryInterval)
                    .setDesc(L.settingsVersionHistoryIntervalDesc)
                    .addDropdown(function (dropdown) {
                        dropdown.addOption('1', '1');
                        dropdown.addOption('2', '2');
                        dropdown.addOption('5', '5');
                        dropdown.addOption('10', '10');
                        dropdown.addOption('15', '15');
                        dropdown.addOption('30', '30');
                        dropdown.setValue(String(self.plugin.getVersionHistorySnapshotInterval()));
                        if (!versionHistoryEnabled) dropdown.setDisabled(true);
                        dropdown.onChange(function (value) {
                            self.plugin.setVersionHistorySnapshotInterval(value);
                        });
                    });
            }

            addToggleSetting(vhNestedDiv, {
                name: L.settingsVersionHistoryConfirmRestore,
                desc: L.settingsVersionHistoryConfirmRestoreDesc,
                value: self.plugin.isVersionHistoryConfirmRestoreEnabled(),
                disabled: !versionHistoryEnabled,
                onChange: function (value) {
                    self.plugin.setVersionHistoryConfirmRestore(value);
                },
            });

            // --- Backup ---
            addSection(L.rotationBackupSectionTitle);

            new obsidian.Setting(contentEl)
                .setName(L.rotationBackupCreate)
                .setDesc(L.rotationBackupDesc)
                .addButton(function (btn) {
                    btn.setButtonText(L.rotationBackupCreateBtn);
                    btn.onClick(function () {
                        btn.setDisabled(true);
                        var sessionData = self.plugin.extractSessionData(self.plugin.data);
                        sessionData._wppSavedAt = Date.now();
                        var backupData = self.plugin.prepareRotationBackupData(sessionData);
                        self.plugin.ensureDir(self.plugin.getBackupsDirPath())
                            .then(function () {
                                return self.plugin.copyFileIfExists(
                                    self.plugin.getRotationBackupPath(2),
                                    self.plugin.getRotationBackupPath(3)
                                );
                            })
                            .then(function () {
                                return self.plugin.copyFileIfExists(
                                    self.plugin.getRotationBackupPath(1),
                                    self.plugin.getRotationBackupPath(2)
                                );
                            })
                            .then(function () {
                                return self.plugin.writeJson(
                                    self.plugin.getRotationBackupPath(1),
                                    backupData
                                );
                            })
                            .then(function () {
                                self.plugin._lastRotationBackupAt = Date.now();
                                self.display();
                            })
                            .catch(function () {
                                btn.setDisabled(false);
                            });
                    });
                });

            var backupListEl = contentEl.createDiv({ cls: 'wpp-backup-list' });
            backupListEl.createDiv({ text: L.rotationBackupNone, cls: 'wpp-backup-none' });

            self.plugin.getRotationBackupInfo().then(function (backups) {
                backupListEl.empty();
                if (backups.length === 0) {
                    backupListEl.createDiv({ text: L.rotationBackupNone, cls: 'wpp-backup-none' });
                    return;
                }
                for (var i = 0; i < backups.length; i++) {
                    (function (backup) {
                        var absoluteTime = '';
                        try {
                            absoluteTime = new Date(backup.savedAt).toLocaleString();
                        } catch (e) {
                            absoluteTime = String(backup.savedAt);
                        }
                        var relativeTime = formatRelativeTime(backup.savedAt);
                        var backupSummary = relativeTime + '  ·  ' + L.rotationBackupGeneration(backup.sessionCount);
                        var backupDesc = absoluteTime;
                        if (backup.backupPlatform) backupDesc += '  ·  ' + backup.backupPlatform;
                        var setting = new obsidian.Setting(backupListEl);
                        var nameEl = setting.nameEl;
                        var numSpan = document.createElement('span');
                        numSpan.textContent = backup.generation + '.';
                        numSpan.style.color = 'var(--text-accent)';
                        numSpan.style.marginRight = '6px';
                        nameEl.appendChild(numSpan);
                        nameEl.appendText(backupSummary);
                        setting.setDesc(backupDesc)
                            .addButton(function (btn) {
                                btn.setButtonText(L.rotationBackupRestore);
                                btn.onClick(function () {
                                    new modals.ConfirmModal(self.app,
                                        L.rotationBackupRestoreConfirm(absoluteTime, backup.sessionCount),
                                        function () {
                                            return self.plugin.restoreFromRotationBackup(backup.generation)
                                                .then(function (ok) {
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

        // ── Groups tab ──
        if (self.activeTab === 'groups') {
            addToggleSetting(contentEl, {
                name: L.settingsSectionGroups,
                desc: L.settingsSectionGroupsDesc,
                value: self.plugin.isGroupFeatureEnabled(),
                onChange: function (value) {
                    self.plugin.setGroupFeatureEnabled(value).then(function () {
                        self.display();
                    });
                },
            });

            if (self.plugin.isGroupFeatureEnabled()) {
                // Create group
                var createGroupSetting = new obsidian.Setting(contentEl)
                    .setName(L.settingsGroupCreate)
                    .setDesc(L.settingsGroupCreateDesc);

                var groupNameInput = null;
                createGroupSetting.addText(function (text) {
                    groupNameInput = text;
                    text.setPlaceholder(L.settingsGroupCreatePlaceholder);
                });

                createGroupSetting.addButton(function (btn) {
                    btn.setButtonText(L.settingsGroupCreateBtn);
                    btn.onClick(function () {
                        if (!groupNameInput) return;
                        self.plugin.createGroupValidated(groupNameInput.getValue()).then(function (created) {
                            if (!created) return;
                            self.display();
                        });
                    });
                });

                // List existing groups
                var orderedGroups = self.plugin.getOrderedGroups();
                for (var gIdx = 0; gIdx < orderedGroups.length; gIdx++) {
                    (function (group) {
                        var sessionCount = self.plugin.getGroupSessionIds(group.id).length;
                        var groupSetting = new obsidian.Setting(contentEl)
                            .setName(group.name)
                            .setDesc(L.settingsGroupManageSessionsDesc + ' · ' + L.settingsGroupSessionCount(sessionCount));

                        // Manage sessions button
                        groupSetting.addButton(function (btn) {
                            btn.setButtonText(L.settingsGroupManageSessions);
                            btn.onClick(function () {
                                new GroupSessionsModal(self.app, self.plugin, group).open();
                            });
                        });

                        // Rename
                        groupSetting.addExtraButton(function (btn) {
                            btn.setIcon('pencil');
                            btn.setTooltip(L.rename);
                            btn.onClick(function () {
                                new modals.RenameModal(self.app, group.name, function (newName) {
                                    self.plugin.renameGroupValidated(group.id, newName).then(function (renamed) {
                                        if (!renamed) return;
                                        self.display();
                                    });
                                }, {
                                    emptyNotice: L.groupEmptyName,
                                }).open();
                            });
                        });

                        // Delete
                        groupSetting.addExtraButton(function (btn) {
                            btn.setIcon('trash-2');
                            btn.setTooltip(L.settingsGroupDelete);
                            btn.onClick(function () {
                                new modals.ConfirmModal(self.app, L.settingsGroupDeleteConfirm(group.name), function () {
                                    self.plugin.deleteGroup(group.id).then(function () {
                                        self.display();
                                    });
                                }).open();
                            });
                        });
                    })(orderedGroups[gIdx]);
                }
            }
        }

        // ── Advanced tab ──
        if (self.activeTab === 'advanced') {
            addSection(L.settingsAdvancedStorageSubsection);

            var sessionStorageLocation = self.plugin.getSessionStorageLocation();

            new obsidian.Setting(contentEl)
                .setName(L.settingsSessionStorageLocation)
                .setDesc(L.settingsSessionStorageLocationDesc(self.plugin.getSessionsPath()));

            addAsyncActionSetting(contentEl, {
                name: L.settingsMoveSessionsToPluginFolder,
                desc: L.settingsMoveSessionsToPluginFolderDesc,
                buttonText: L.settingsMoveSessionsToPluginFolderBtn,
                disabled: sessionStorageLocation === 'plugin-folder',
                run: function () {
                    return self.plugin.setSessionStorageLocation('plugin-folder');
                },
                onSuccess: function () {
                    self.display();
                },
                failureNotice: L.sessionStorageMoveFailed,
            });

            addAsyncActionSetting(contentEl, {
                name: L.settingsMoveSessionsToVaultFolder,
                desc: L.settingsMoveSessionsToVaultFolderDesc,
                buttonText: L.settingsMoveSessionsToVaultFolderBtn,
                disabled: sessionStorageLocation === 'vault-folder',
                run: function () {
                    return self.plugin.setSessionStorageLocation('vault-folder');
                },
                onSuccess: function () {
                    self.display();
                },
                failureNotice: L.sessionStorageMoveFailed,
            });

            var useLocalSettings = self.plugin.isUsingLocalSettings();

            addToggleSetting(contentEl, {
                name: L.settingsUseLocalSettings,
                desc: L.settingsUseLocalSettingsDesc,
                value: useLocalSettings,
                onChange: function (value) {
                    self.plugin.setUseLocalSettings(value, { notify: true })
                        .then(function () {
                            self.display();
                        })
                        .catch(function () {
                            new obsidian.Notice(L.localSettingsOperationFailed);
                            self.display();
                        });
                },
            });

            addAsyncActionSetting(contentEl, {
                name: L.settingsCopyGlobalToLocal,
                desc: L.settingsCopyGlobalToLocalDesc,
                buttonText: L.settingsCopyGlobalToLocalBtn,
                disabled: !useLocalSettings,
                run: function () {
                    return self.plugin.copyGlobalSettingsToLocal({ notify: true });
                },
                onSuccess: function () {
                    self.display();
                },
                failureNotice: L.localSettingsOperationFailed,
            });

            addAsyncActionSetting(contentEl, {
                name: L.settingsResetLocalSettings,
                desc: L.settingsResetLocalSettingsDesc,
                buttonText: L.settingsResetLocalSettingsBtn,
                disabled: !useLocalSettings,
                run: function () {
                    return self.plugin.resetLocalSettings({ notify: true });
                },
                onSuccess: function () {
                    self.display();
                },
                failureNotice: L.localSettingsOperationFailed,
            });

            addSection(L.settingsAdvancedTransferSubsection);

            new obsidian.Setting(contentEl)
                .setName(L.settingsExportSessions)
                .setDesc(L.settingsExportSessionsDesc)
                .addButton(function (btn) {
                    btn.setButtonText(L.settingsExportSessionsBtn);
                    btn.onClick(function () {
                        self.plugin.exportSessionsSnapshot().catch(function () {
                            new obsidian.Notice(L.exportSessionsFailed);
                        });
                    });
                });

            new obsidian.Setting(contentEl)
                .setName(L.settingsImportSessions)
                .setDesc(L.settingsImportSessionsDesc)
                .addButton(function (btn) {
                    btn.setButtonText(L.settingsImportSessionsBtn);
                    btn.onClick(function () {
                        new modals.ConfirmModal(self.app, L.confirmImportSessions, function () {
                            return self.plugin.importSessionsFromLatestExport().catch(function () {
                                new obsidian.Notice(L.importSessionsFailed);
                            });
                        }, {
                            confirmText: L.settingsImportSessionsBtn,
                        }).open();
                    });
                });

            addSection(L.settingsSectionReset);

            addDangerResetSetting(contentEl, self.app, function () {
                self.display();
            }, {
                name: L.settingsResetSettings,
                desc: L.settingsResetSettingsDesc,
                buttonText: L.settingsResetSettingsBtn,
                confirmMessage: L.confirmResetSettings,
                run: function () {
                    return self.plugin.resetSettingsToDefault();
                },
                successNotice: L.resetSettingsDone,
                failureNotice: L.resetSettingsFailed,
            });

            addDangerResetSetting(contentEl, self.app, function () {
                self.display();
            }, {
                name: L.settingsResetSessions,
                desc: L.settingsResetSessionsDesc,
                buttonText: L.settingsResetSessionsBtn,
                confirmMessage: L.confirmResetSessions,
                confirmHint: L.resetSessionsHint,
                run: function () {
                    return self.plugin.resetSessionsToDefault();
                },
                successNotice: L.resetSessionsDone,
                failureNotice: L.resetSessionsFailed,
            });

            addDangerResetSetting(contentEl, self.app, function () {
                self.display();
            }, {
                name: L.settingsResetBackupsAndHistory,
                desc: L.settingsResetBackupsAndHistoryDesc,
                buttonText: L.settingsResetBackupsAndHistoryBtn,
                confirmMessage: L.confirmResetBackupsAndHistory,
                confirmHint: L.resetBackupsAndHistoryHint,
                run: function () {
                    return self.plugin.clearBackupsAndVersionHistory();
                },
                successNotice: L.resetBackupsAndHistoryDone,
                failureNotice: L.resetBackupsAndHistoryFailed,
            });

            addDangerResetSetting(contentEl, self.app, function () {
                self.display();
            }, {
                name: L.settingsResetSessionsAndSettings,
                desc: L.settingsResetSessionsAndSettingsDesc,
                buttonText: L.settingsResetSessionsAndSettingsBtn,
                confirmMessage: L.confirmResetSessionsAndSettings,
                run: function () {
                    return self.plugin.resetSessionsAndSettingsToDefault();
                },
                successNotice: L.resetSessionsAndSettingsDone,
                failureNotice: L.resetSessionsAndSettingsFailed,
            });

            // Developer tools
            addSection(L.settingsDeveloperSection);

            var diagnosticsInfo = self.plugin.getStorageDiagnosticsInfo();
            var diagnosticsUpdatedText = '';
            try {
                diagnosticsUpdatedText = new Date(diagnosticsInfo.updatedAt).toLocaleString();
            } catch (e) {
                diagnosticsUpdatedText = String(diagnosticsInfo.updatedAt);
            }

            var devCardEl = contentEl.createDiv({ cls: 'wpp-dev-card' });
            devCardEl.createDiv({
                text: L.settingsStorageDiagnostics,
                cls: 'wpp-dev-card-title',
            });
            devCardEl.createDiv({
                text: L.settingsStorageDiagnosticsDesc,
                cls: 'wpp-dev-card-desc',
            });

            function addDevCardRow(label, value, options) {
                options = options || {};
                var row = devCardEl.createDiv({ cls: 'wpp-dev-card-row' });
                row.createDiv({ text: label, cls: 'wpp-dev-card-label' });
                row.createDiv({
                    text: String(value),
                    cls: options.code ? 'wpp-dev-card-value wpp-dev-card-value-code' : 'wpp-dev-card-value',
                });
            }

            addDevCardRow(L.settingsStorageFieldSessions, diagnosticsInfo.sessionsPath, { code: true });
            addDevCardRow(L.settingsStorageFieldSessionsBackup, diagnosticsInfo.sessionsBackupPath, { code: true });
            addDevCardRow(L.settingsStorageFieldSessionStorageLocation, diagnosticsInfo.sessionStorageLocation, { code: true });
            addDevCardRow(L.settingsStorageFieldLocalSettings, diagnosticsInfo.localSettingsPath, { code: true });
            addDevCardRow(L.settingsStorageFieldGlobalSettings, diagnosticsInfo.globalSettingsPath, { code: true });
            addDevCardRow(L.settingsStorageFieldSessionCount, diagnosticsInfo.sessionCount);
            addDevCardRow(L.settingsStorageFieldUpdatedAt, diagnosticsUpdatedText);
        }

        // ── Footer (all tabs) ──
        var footerEl = containerEl.createDiv({ cls: 'wpp-settings-footer' });

        var creditEl = footerEl.createEl('p', { cls: 'wpp-settings-credit' });
        creditEl.appendText(L.settingsForkCreditBefore);
        creditEl.createEl('a', {
            cls: 'wpp-settings-credit-link',
            text: L.settingsForkCreditLink,
            href: 'https://github.com/s1m4ne/obsidian-workspace-plus',
            attr: { target: '_blank', rel: 'noopener' },
        });
        creditEl.appendText(L.settingsForkCreditAfter);
    };

    return WorkspacePlusPlusSettingTab;
})(obsidian.PluginSettingTab);

exports.WorkspacePlusPlusSettingTab = WorkspacePlusPlusSettingTab;
