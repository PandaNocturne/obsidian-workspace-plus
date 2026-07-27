'use strict';

var obsidian = require('obsidian');
var i18n = require('../../i18n');
var layoutUtils = require('../../layout-utils');

var HOUR = 3600000;
var DAY = 86400000;
var WEEK = 7 * DAY;
var MONTH = 30 * DAY;
var MAX_AUTO_HISTORY = 45;

function isManualHistoryEntry(entry) {
    return !!(entry && entry.source === 'manual');
}

function isAutoHistoryEntry(entry) {
    return !isManualHistoryEntry(entry);
}

function sortHistoryNewestFirst(history) {
    history.sort(function (a, b) { return b.savedAt - a.savedAt; });
    return history;
}

function attachHistoryMethods(WorkspacePlusPlus) {

    // --- Setting accessors ---

    WorkspacePlusPlus.prototype.isVersionHistoryEnabled = function () {
        return !!this.data.versionHistoryEnabled;
    };

    WorkspacePlusPlus.prototype.getVersionHistorySnapshotInterval = function () {
        var val = this.data.versionHistorySnapshotInterval;
        if (typeof val !== 'number' || val < 1) return 5;
        return val;
    };

    WorkspacePlusPlus.prototype.isVersionHistoryCtrlRmbEnabled = function () {
        return this.data.versionHistoryCtrlRmbRestore !== false;
    };

    WorkspacePlusPlus.prototype.isVersionHistoryConfirmRestoreEnabled = function () {
        return this.data.versionHistoryConfirmRestore !== false;
    };

    WorkspacePlusPlus.prototype.isManualHistoryEntry = isManualHistoryEntry;
    WorkspacePlusPlus.prototype.isAutoHistoryEntry = isAutoHistoryEntry;

    // --- Extract file paths from a layout object ---

    WorkspacePlusPlus.prototype.extractFilePathsFromLayout = function (layout) {
        var paths = [];
        function walk(node) {
            if (!node || typeof node !== 'object') return;
            if (node.type === 'leaf' && node.state && node.state.state && node.state.state.file) {
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

    // --- Count panes (leaves) in a layout ---

    WorkspacePlusPlus.prototype.countPanesInLayout = function (layout) {
        var count = 0;
        function walk(node) {
            if (!node || typeof node !== 'object') return;
            if (node.type === 'leaf') { count++; return; }
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

    WorkspacePlusPlus.prototype.getSessionHistory = function (session) {
        if (!session) return [];
        if (!Array.isArray(session.history)) session.history = [];
        return session.history;
    };

    WorkspacePlusPlus.prototype.filterHistoryBySource = function (history, source) {
        var list = Array.isArray(history) ? history : [];
        if (source === 'manual') {
            return list.filter(isManualHistoryEntry);
        }
        return list.filter(isAutoHistoryEntry);
    };

    // --- Tiered compaction for AUTO history only ---

    WorkspacePlusPlus.prototype.compactAutoHistory = function (history) {
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
                key = 'h' + Math.floor(age / HOUR);
                if (!buckets[key]) {
                    buckets[key] = true;
                    result.push(entry);
                }
            } else if (age <= WEEK) {
                key = 'd' + Math.floor(age / DAY);
                if (!buckets[key]) {
                    buckets[key] = true;
                    result.push(entry);
                }
            } else if (age <= MONTH) {
                key = 'w' + Math.floor(age / WEEK);
                if (!buckets[key]) {
                    buckets[key] = true;
                    result.push(entry);
                }
            } else {
                key = 'm' + Math.floor(age / MONTH);
                if (!buckets[key]) {
                    buckets[key] = true;
                    result.push(entry);
                }
            }
        }

        if (result.length > MAX_AUTO_HISTORY) result.length = MAX_AUTO_HISTORY;
        return result;
    };

    /**
     * Compact only auto entries. Manual entries are never compacted or capped.
     */
    WorkspacePlusPlus.prototype.compactHistory = function (history) {
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

    WorkspacePlusPlus.prototype.captureLayoutForHistory = function (session) {
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

    // --- Push layout to AUTO history (called before any layout overwrite) ---

    WorkspacePlusPlus.prototype.pushLayoutToHistory = function (session) {
        if (!this.isVersionHistoryEnabled()) return;
        if (!session || !session.layout) return;

        if (!session.history) session.history = [];

        var autoEntries = session.history.filter(isAutoHistoryEntry);
        var lastEntry = autoEntries.length > 0 ? autoEntries[0] : null;
        // Prefer newest overall auto by savedAt
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
            source: 'auto',
        });

        session.history = this.compactHistory(session.history);
    };

    /**
     * Manually save a named layout snapshot into session history (no count limit).
     */
    WorkspacePlusPlus.prototype.saveManualHistoryEntry = function (sessionId, title, options) {
        var L = i18n.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session) return Promise.resolve(false);

        var normalizedTitle = typeof title === 'string' ? title.trim() : '';
        if (!normalizedTitle) {
            if (options.notify !== false) {
                new obsidian.Notice(L.historyTitleRequired);
            }
            return Promise.resolve(false);
        }

        var layout = options.layout
            ? layoutUtils.cloneLayout(options.layout)
            : this.captureLayoutForHistory(session);
        if (!layout) {
            if (options.notify !== false) {
                new obsidian.Notice(L.historySaveFailed);
            }
            return Promise.resolve(false);
        }

        if (!session.history) session.history = [];
        session.history.unshift({
            layout: layout,
            savedAt: Date.now(),
            source: 'manual',
            title: normalizedTitle,
        });
        // Keep newest-first ordering but never compact/drop manual entries.
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
        return applyLayout.then(function () {
            return self.persistData();
        }).then(function () {
            if (options.notify !== false) {
                new obsidian.Notice(L.historyManualSaved(normalizedTitle));
            }
            return true;
        });
    };

    WorkspacePlusPlus.prototype.renameHistoryEntry = function (sessionId, entryIndex, title, options) {
        var L = i18n.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
            return Promise.resolve(false);
        }

        var normalizedTitle = typeof title === 'string' ? title.trim() : '';
        if (!normalizedTitle) {
            if (options.notify !== false) {
                new obsidian.Notice(L.historyTitleRequired);
            }
            return Promise.resolve(false);
        }

        session.history[entryIndex].title = normalizedTitle;
        // Renaming does not change source; manual stays manual, auto can gain a title.
        return this.persistData().then(function () {
            if (options.notify !== false) {
                new obsidian.Notice(L.historyEntryRenamed(normalizedTitle));
            }
            return true;
        });
    };

    WorkspacePlusPlus.prototype.updateHistoryEntry = function (sessionId, entryIndex, changes, options) {
        var L = i18n.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
            return Promise.resolve(false);
        }

        var entry = session.history[entryIndex];
        var changed = false;

        if (changes && typeof changes.title === 'string') {
            var normalizedTitle = changes.title.trim();
            if (!normalizedTitle) {
                if (options.notify !== false) {
                    new obsidian.Notice(L.historyTitleRequired);
                }
                return Promise.resolve(false);
            }
            if (normalizedTitle !== (entry.title || '')) {
                entry.title = normalizedTitle;
                changed = true;
            }
        }

        if (changes && changes.updateLayoutFromCurrent) {
            var layout = this.captureLayoutForHistory(session);
            if (!layout) {
                if (options.notify !== false) {
                    new obsidian.Notice(L.historySaveFailed);
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
        return this.persistData().then(function () {
            if (options.notify !== false) {
                new obsidian.Notice(L.historyEntryUpdated(entry.title || ''));
            }
            return true;
        });
    };

    WorkspacePlusPlus.prototype.deleteHistoryEntry = function (sessionId, entryIndex, options) {
        var L = i18n.L;
        options = options || {};
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
            return Promise.resolve(false);
        }

        var removed = session.history.splice(entryIndex, 1)[0];
        if (session.history.length === 0) {
            delete session.history;
        }

        return this.persistData().then(function () {
            if (options.notify !== false) {
                var label = (removed && removed.title)
                    ? removed.title
                    : L.historyUntitled;
                new obsidian.Notice(L.historyEntryDeleted(label));
            }
            return true;
        });
    };

    // --- Restore from a history entry ---

    WorkspacePlusPlus.prototype.restoreFromHistoryEntry = function (sessionId, entryIndex) {
        var session = this.data.sessions[sessionId];
        if (!session || !session.history || !session.history[entryIndex]) {
            return Promise.resolve(false);
        }

        var entry = session.history[entryIndex];

        // Push the CURRENT layout to auto history first (so it can be recovered)
        this.pushLayoutToHistory(session);

        // Re-find entry in case compaction reordered (manual entries stay)
        var nextIndex = session.history.indexOf(entry);
        if (nextIndex === -1) {
            // Entry object still holds layout
        }

        session.layout = layoutUtils.cloneLayout(entry.layout);
        session.modified = Date.now();

        var self = this;
        var isActive = session.id === this.data.activeSessionId;

        var applyLayout = isActive && session.layout
            ? this.applyWorkspaceLayout(session.layout)
            : Promise.resolve();

        return applyLayout.then(function () {
            self.updateStatusBar();
            return self.persistData();
        }).then(function () {
            return true;
        });
    };

    // --- Quick restore (most recent auto history entry, else any) ---

    WorkspacePlusPlus.prototype.quickRestoreLatestHistory = function () {
        var L = i18n.L;
        var session = this.getActiveSession();
        if (!session || !session.history || session.history.length === 0) {
            new obsidian.Notice(L.historyNoEntries);
            return Promise.resolve(false);
        }

        var auto = this.filterHistoryBySource(session.history, 'auto');
        var target = auto.length > 0 ? auto[0] : session.history[0];
        var index = session.history.indexOf(target);
        if (index < 0) {
            new obsidian.Notice(L.historyNoEntries);
            return Promise.resolve(false);
        }

        var self = this;
        return this.restoreFromHistoryEntry(session.id, index).then(function (ok) {
            if (ok) {
                new obsidian.Notice(L.historyQuickRestored(session.name));
            }
            return ok;
        });
    };

    WorkspacePlusPlus.prototype.clearVersionHistoryEntries = function () {
        var sessions = (this.data && this.data.sessions) || {};
        var ids = Object.keys(sessions);
        var changed = false;

        for (var i = 0; i < ids.length; i++) {
            var session = sessions[ids[i]];
            if (!session || !Object.prototype.hasOwnProperty.call(session, 'history')) continue;
            delete session.history;
            changed = true;
        }

        return changed;
    };

    // --- Periodic snapshot timer ---

    WorkspacePlusPlus.prototype.startHistorySnapshotTimer = function () {
        this.stopHistorySnapshotTimer();
        if (!this.isVersionHistoryEnabled()) return;
        if (!this.isAutoSaveOnSwitchEnabled()) return;

        var self = this;
        var intervalMs = this.getVersionHistorySnapshotInterval() * 60000;

        this._historySnapshotTimer = setInterval(function () {
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

    WorkspacePlusPlus.prototype.stopHistorySnapshotTimer = function () {
        if (this._historySnapshotTimer) {
            clearInterval(this._historySnapshotTimer);
            this._historySnapshotTimer = null;
        }
    };
}

module.exports = attachHistoryMethods;
