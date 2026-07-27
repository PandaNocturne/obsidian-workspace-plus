'use strict';

var obsidian = require('obsidian');
var i18n = require('../i18n');
var ConfirmModal = require('./confirm-modal');
var HistoryEntryModal = require('./history-entry-modal');

var DAY = 86400000;

// ============================================================
// History Modal (auto / manual tabs)
// ============================================================
var HistoryModal = /** @class */ (function (_super) {
    function HistoryModal(app, plugin, session) {
        var _this = _super.call(this, app) || this;
        _this.plugin = plugin;
        _this.sessionId = session && session.id;
        _this.activeTab = 'manual';
        return _this;
    }

    HistoryModal.prototype = Object.create(_super.prototype);
    HistoryModal.prototype.constructor = HistoryModal;

    HistoryModal.prototype.getSession = function () {
        return (this.plugin.data.sessions || {})[this.sessionId] || null;
    };

    HistoryModal.prototype.onOpen = function () {
        var session = this.getSession();
        if (!session) {
            this.close();
            return;
        }
        var history = session.history || [];
        var hasManual = history.some(function (e) { return e && e.source === 'manual'; });
        var hasAuto = history.some(function (e) { return !e || e.source !== 'manual'; });
        if (!hasManual && hasAuto) this.activeTab = 'auto';
        else this.activeTab = 'manual';
        this.render();
    };

    HistoryModal.prototype.render = function () {
        var L = i18n.L;
        var self = this;
        var session = this.getSession();
        var contentEl = this.contentEl;
        contentEl.empty();
        contentEl.addClass('wpp-modal', 'wpp-history-modal');

        if (!session) {
            contentEl.createEl('p', { text: L.historyEmpty, cls: 'wpp-history-empty' });
            return;
        }

        this.titleEl.setText(L.historyTitle + ' — ' + session.name);

        var tabs = contentEl.createDiv({ cls: 'wpp-history-tabs' });
        var manualTab = tabs.createEl('button', {
            text: L.historyTabManual,
            cls: 'wpp-history-tab' + (this.activeTab === 'manual' ? ' is-active' : ''),
        });
        var autoTab = tabs.createEl('button', {
            text: L.historyTabAuto,
            cls: 'wpp-history-tab' + (this.activeTab === 'auto' ? ' is-active' : ''),
        });
        manualTab.addEventListener('click', function () {
            self.activeTab = 'manual';
            self.render();
        });
        autoTab.addEventListener('click', function () {
            self.activeTab = 'auto';
            self.render();
        });

        var allHistory = session.history || [];
        var indexed = [];
        for (var i = 0; i < allHistory.length; i++) {
            var entry = allHistory[i];
            var isManual = entry && entry.source === 'manual';
            if (this.activeTab === 'manual' ? isManual : !isManual) {
                indexed.push({ entry: entry, index: i });
            }
        }

        if (indexed.length === 0) {
            var emptyText = this.activeTab === 'manual'
                ? L.historyManualEmpty
                : L.historyAutoEmpty;
            contentEl.createEl('p', { text: emptyText, cls: 'wpp-history-empty' });
            return;
        }

        var entries = indexed.map(function (item) { return item.entry; });
        var groups = this.groupByDate(entries);
        var listEl = contentEl.createDiv({ cls: 'wpp-history-list' });

        for (var gi = 0; gi < groups.length; gi++) {
            var group = groups[gi];
            listEl.createEl('h4', { text: group.label, cls: 'wpp-history-date-label' });
            for (var ei = 0; ei < group.entries.length; ei++) {
                var localIndex = group.indices[ei];
                var globalIndex = indexed[localIndex].index;
                this.renderEntry(listEl, group.entries[ei], globalIndex);
            }
        }
    };

    HistoryModal.prototype.openEditEntry = function (entryIndex) {
        var L = i18n.L;
        var self = this;
        var session = this.getSession();
        if (!session || !session.history || !session.history[entryIndex]) return;
        var entry = session.history[entryIndex];

        new HistoryEntryModal(this.app, {
            mode: 'edit',
            title: L.historyEditEntryTitle,
            initialTitle: entry.title || '',
            placeholder: L.historyEntryTitlePlaceholder,
            buttonText: L.saveChanges,
            showUpdateLayout: true,
            updateLayoutLabel: L.historyUpdateLayoutFromCurrent,
            emptyNotice: L.historyTitleRequired,
            onSubmit: function (title, result) {
                self.plugin.updateHistoryEntry(session.id, entryIndex, {
                    title: title,
                    updateLayoutFromCurrent: !!(result && result.updateLayoutFromCurrent),
                }).then(function (ok) {
                    if (ok) self.render();
                });
            },
        }).open();
    };

    HistoryModal.prototype.renderEntry = function (listEl, entry, originalIndex) {
        var L = i18n.L;
        var self = this;

        var itemEl = listEl.createDiv({ cls: 'wpp-history-item' });

        var infoEl = itemEl.createDiv({ cls: 'wpp-history-info' });
        var time = new Date(entry.savedAt);
        var timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        var titleText = entry.title
            ? entry.title
            : timeStr;
        infoEl.createDiv({ text: titleText, cls: 'wpp-history-time' });

        var metaParts = [];
        if (entry.title) metaParts.push(timeStr);
        var filePaths = self.plugin.extractFilePathsFromLayout(entry.layout);
        var paneCount = self.plugin.countPanesInLayout(entry.layout);
        var fileNames = filePaths.map(function (p) {
            var parts = p.split('/');
            return parts[parts.length - 1];
        });
        var summary = L.historyPanes(paneCount);
        if (fileNames.length > 0) {
            var displayNames = fileNames.slice(0, 5).join(', ');
            if (fileNames.length > 5) displayNames += ' ...';
            summary += ' · ' + displayNames;
        }
        metaParts.push(summary);
        infoEl.createDiv({ text: metaParts.join(' · '), cls: 'wpp-history-summary' });

        var actionsEl = itemEl.createDiv({ cls: 'wpp-history-item-actions' });

        var editBtn = actionsEl.createDiv({
            cls: 'wpp-icon-btn',
            attr: { role: 'button', tabindex: '0' },
        });
        obsidian.setIcon(editBtn, 'pencil');
        obsidian.setTooltip(editBtn, L.historyEditEntry, { delay: 250 });
        editBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            self.openEditEntry(originalIndex);
        });

        var deleteBtn = actionsEl.createDiv({
            cls: 'wpp-icon-btn',
            attr: { role: 'button', tabindex: '0' },
        });
        obsidian.setIcon(deleteBtn, 'trash-2');
        obsidian.setTooltip(deleteBtn, L.delete, { delay: 250 });
        deleteBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var label = entry.title || timeStr;
            new ConfirmModal(
                self.app,
                L.historyDeleteConfirm(label),
                function () {
                    return self.plugin.deleteHistoryEntry(self.sessionId, originalIndex).then(function (ok) {
                        if (ok) self.render();
                    });
                },
                { confirmText: L.delete, confirmClass: 'mod-warning' }
            ).open();
        });

        var btnEl = actionsEl.createEl('button', {
            text: L.historyRestore,
            cls: 'wpp-history-restore-btn',
        });
        btnEl.addEventListener('click', function () {
            var doRestore = function () {
                self.plugin.restoreFromHistoryEntry(
                    self.sessionId, originalIndex
                ).then(function (ok) {
                    if (ok) {
                        var session = self.getSession();
                        new obsidian.Notice(L.historyRestored(session ? session.name : ''));
                    }
                    self.close();
                });
            };

            if (self.plugin.isVersionHistoryConfirmRestoreEnabled()) {
                var session = self.getSession();
                new ConfirmModal(
                    self.app,
                    L.historyRestoreConfirm(session ? session.name : '', timeStr),
                    doRestore,
                    { confirmText: L.historyRestore, confirmClass: 'mod-cta' }
                ).open();
            } else {
                doRestore();
            }
        });
    };

    HistoryModal.prototype.groupByDate = function (history) {
        var L = i18n.L;
        var now = new Date();
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
                groups[label] = { label: label, entries: [], indices: [] };
                groupOrder.push(label);
            }
            groups[label].entries.push(entry);
            groups[label].indices.push(i);
        }

        return groupOrder.map(function (k) { return groups[k]; });
    };

    HistoryModal.prototype.onClose = function () {
        this.contentEl.empty();
    };

    return HistoryModal;
})(obsidian.Modal);

module.exports = HistoryModal;
