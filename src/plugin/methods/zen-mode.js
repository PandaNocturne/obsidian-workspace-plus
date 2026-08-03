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

function isMissionControlOpen(app) {
    var body = getWorkspaceBody(app);
    return !!(body && body.classList.contains('wpp-mission-control-open'));
}

function clearZenActiveFlags(body, exceptEl) {
    if (!body) return;
    var marked = body.querySelectorAll('.wpp-zen-active');
    for (var i = 0; i < marked.length; i++) {
        if (exceptEl && marked[i] === exceptEl) continue;
        marked[i].classList.remove('wpp-zen-active');
    }
}

function isLeafInRootSplit(app, leaf) {
    if (!app || !app.workspace || !leaf || typeof leaf.getRoot !== 'function') return false;
    try {
        return leaf.getRoot() === app.workspace.rootSplit;
    } catch (err) {
        return false;
    }
}

function getZenFocusLeaf(app) {
    var workspace = app && app.workspace;
    if (!workspace) return null;

    var active = workspace.activeLeaf;
    if (isLeafInRootSplit(app, active)) return active;

    if (typeof workspace.getMostRecentLeaf === 'function') {
        try {
            var recent = workspace.getMostRecentLeaf(workspace.rootSplit);
            if (isLeafInRootSplit(app, recent)) return recent;
            recent = workspace.getMostRecentLeaf();
            if (isLeafInRootSplit(app, recent)) return recent;
        } catch (err) { /* ignore */ }
    }

    var found = null;
    if (typeof workspace.iterateRootLeaves === 'function') {
        try {
            workspace.iterateRootLeaves(function (leaf) {
                if (!found && leaf) found = leaf;
            });
        } catch (err2) { /* ignore */ }
    }
    return found;
}

function getLeafTabsContainerEl(leaf) {
    var node = leaf && leaf.parent;
    var depth = 0;
    while (node && depth < 8) {
        var el = node.containerEl;
        if (el && el.classList) {
            if (el.classList.contains('workspace-tabs')) return el;
            if (typeof node.selectTab === 'function'
                || typeof node.selectTabIndex === 'function'
                || node.type === 'tabs') {
                return el;
            }
        }
        node = node.parent;
        depth += 1;
    }

    try {
        var leafEl = (leaf && leaf.containerEl)
            || (leaf && leaf.view && leaf.view.containerEl);
        if (leafEl && typeof leafEl.closest === 'function') {
            var fromDom = leafEl.closest('.workspace-tabs');
            if (fromDom) return fromDom;
        }
    } catch (err) { /* ignore */ }

    return (leaf && leaf.parent && leaf.parent.containerEl) || null;
}

function findZenTabsEl(app, body) {
    var leaf = getZenFocusLeaf(app);
    var tabsEl = leaf ? getLeafTabsContainerEl(leaf) : null;

    if (!tabsEl) {
        try {
            tabsEl = body.querySelector('.workspace-split.mod-root .workspace-tabs.mod-active');
        } catch (err) { /* ignore */ }
    }

    if (!tabsEl) {
        try {
            var activeLeafEl = body.querySelector(
                '.workspace-split.mod-root .workspace-leaf.mod-active'
            );
            if (activeLeafEl && typeof activeLeafEl.closest === 'function') {
                tabsEl = activeLeafEl.closest('.workspace-tabs');
            }
        } catch (err2) { /* ignore */ }
    }

    if (!tabsEl) {
        var existing = body.querySelector(
            '.workspace-split.mod-root .workspace-tabs.wpp-zen-active'
        );
        if (existing && existing.isConnected) return existing;
    }

    if (!tabsEl) {
        try {
            tabsEl = body.querySelector('.workspace-split.mod-root .workspace-tabs');
        } catch (err3) { /* ignore */ }
    }

    return tabsEl || null;
}

/**
 * Pin zen to the tab group only. Zero DOM writes when already correct —
 * avoids load-start / load-end double flicker from class thrashing.
 */
function lockZenFocus(app) {
    var body = getWorkspaceBody(app);
    if (!body) return false;

    var tabsEl = findZenTabsEl(app, body);
    if (!tabsEl) return false;

    var marked = body.querySelectorAll('.workspace-split.mod-root .workspace-tabs.wpp-zen-active');
    if (tabsEl.classList.contains('wpp-zen-active') && marked.length === 1 && marked[0] === tabsEl) {
        return true;
    }

    clearZenActiveFlags(body, tabsEl);
    tabsEl.classList.add('wpp-zen-active');
    return true;
}

function persistIfNeeded(plugin, options) {
    options = options || {};
    if (options.persist === false) return Promise.resolve(true);
    return plugin.persistData();
}

function attachZenModeMethods(WorkspacePlusPlus) {
    WorkspacePlusPlus.prototype.migrateZenModeToSessions = function () {
        var sessions = this.data && this.data.sessions;
        if (!sessions || typeof sessions !== 'object') return false;

        var ids = Object.keys(sessions);
        var hadPerSessionFlag = false;
        for (var i = 0; i < ids.length; i++) {
            var session = sessions[ids[i]];
            if (!session || typeof session !== 'object') continue;
            if (Object.prototype.hasOwnProperty.call(session, 'zenMode')) {
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

    WorkspacePlusPlus.prototype.getActiveSessionZenMode = function () {
        var session = this.getActiveSession && this.getActiveSession();
        return !!(session && session.zenMode);
    };

    WorkspacePlusPlus.prototype.setActiveSessionZenMode = function (enabled) {
        var session = this.getActiveSession && this.getActiveSession();
        if (session) session.zenMode = !!enabled;
        this.data.zenMode = !!enabled;
        return !!enabled;
    };

    WorkspacePlusPlus.prototype.isZenModeEnabled = function () {
        return this.getActiveSessionZenMode();
    };

    WorkspacePlusPlus.prototype.isZenHideInactiveTabsEnabled = function () {
        return this.data.zenHideInactiveTabs !== false;
    };

    WorkspacePlusPlus.prototype.isStatusBarZenModeEnabled = function () {
        return this.data.showStatusBarZenMode !== false;
    };

    WorkspacePlusPlus.prototype.startZenDomGuard = function () {
        var self = this;
        this.stopZenDomGuard();
        if (!this.isZenModeEnabled()) return;

        var root = this.app && this.app.workspace && this.app.workspace.rootSplit;
        var el = root && root.containerEl;
        if (!el || typeof MutationObserver === 'undefined') return;

        this._zenDomObserver = new MutationObserver(function () {
            if (!self.isZenModeEnabled()) return;
            if (isMissionControlOpen(self.app)) return;
            // Sync — must run before paint so zen never "drops" during Excalidraw remount
            lockZenFocus(self.app);
        });

        try {
            this._zenDomObserver.observe(el, {
                childList: true,
                subtree: true,
                attributes: true,
                attributeFilter: ['class'],
            });
        } catch (err) {
            this._zenDomObserver = null;
        }
    };

    WorkspacePlusPlus.prototype.stopZenDomGuard = function () {
        if (this._zenDomObserver) {
            try { this._zenDomObserver.disconnect(); } catch (err) { /* ignore */ }
            this._zenDomObserver = null;
        }
    };

    WorkspacePlusPlus.prototype.applyZenModeClasses = function () {
        var body = getWorkspaceBody(this.app);
        var enabled = this.isZenModeEnabled();
        body.classList.toggle('wpp-zen-mode', enabled);
        body.classList.toggle(
            'wpp-zen-hide-inactive-tabs',
            enabled && this.isZenHideInactiveTabsEnabled()
        );
        if (enabled) {
            lockZenFocus(this.app);
            this.startZenDomGuard();
        } else {
            this.stopZenDomGuard();
            clearZenActiveFlags(body);
        }
        this.updateZenStatusBar();
    };

    WorkspacePlusPlus.prototype.clearZenModeClasses = function () {
        var body = getWorkspaceBody(this.app);
        this.stopZenDomGuard();
        body.classList.remove('wpp-zen-mode');
        body.classList.remove('wpp-zen-hide-inactive-tabs');
        clearZenActiveFlags(body);
        this.updateZenStatusBar();
    };

    WorkspacePlusPlus.prototype.applyStatusBarZenVisibility = function () {
        if (!this.zenStatusBarEl) return;
        var show = this.isStatusBarZenModeEnabled();
        this.zenStatusBarEl.toggleClass('wpp-zen-status-bar-hidden', !show);
        this.zenStatusBarEl.style.display = show ? '' : 'none';
    };

    WorkspacePlusPlus.prototype.setShowStatusBarZenMode = function (enabled, options) {
        this.data.showStatusBarZenMode = !!enabled;
        this.applyStatusBarZenVisibility();
        if (enabled) this.updateZenStatusBar();
        return persistIfNeeded(this, options);
    };

    WorkspacePlusPlus.prototype.updateZenStatusBar = function () {
        var L = i18n.L;
        if (!this.zenStatusBarEl) return;

        this.applyStatusBarZenVisibility();
        if (!this.isStatusBarZenModeEnabled()) return;

        var enabled = this.isZenModeEnabled();
        this.zenStatusBarEl.empty();
        this.zenStatusBarEl.toggleClass('is-active', enabled);
        this.zenStatusBarEl.setAttribute(
            'aria-label',
            enabled ? L.zenStatusBarDisable : L.zenStatusBarEnable
        );
        this.zenStatusBarEl.setAttribute('aria-pressed', enabled ? 'true' : 'false');

        var icon = this.zenStatusBarEl.createSpan({ cls: 'wpp-zen-status-icon' });
        obsidian.setIcon(icon, 'focus');

        this.zenStatusBarEl.createSpan({
            text: enabled ? L.zenStatusBarOn : L.zenStatusBarOff,
            cls: 'wpp-zen-status-label',
        });

        if (typeof obsidian.setTooltip === 'function') {
            obsidian.setTooltip(
                this.zenStatusBarEl,
                enabled ? L.zenStatusBarDisable : L.zenStatusBarEnable,
                { delay: 250 }
            );
        }
    };

    WorkspacePlusPlus.prototype.setZenMode = function (enabled, options) {
        options = options || {};
        this.setActiveSessionZenMode(enabled);
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

    /** Sync re-pin only — no debounce (debounce caused load-start/load-end double exit). */
    WorkspacePlusPlus.prototype.refreshZenModeFocus = function () {
        if (!this.isZenModeEnabled()) return;
        if (isMissionControlOpen(this.app)) return;
        lockZenFocus(this.app);
    };

    WorkspacePlusPlus.prototype.scheduleZenModeRefresh = function (delayMs) {
        var self = this;
        var delay = typeof delayMs === 'number' && delayMs >= 0 ? delayMs : 0;
        if (!this._zenRefreshTimers) this._zenRefreshTimers = [];
        var timer = setTimeout(function () {
            if (self._zenRefreshTimers) {
                self._zenRefreshTimers = self._zenRefreshTimers.filter(function (t) {
                    return t !== timer;
                });
            }
            if (!self.isZenModeEnabled()) return;
            if (isMissionControlOpen(self.app)) return;
            lockZenFocus(self.app);
        }, delay);
        this._zenRefreshTimers.push(timer);
    };

    WorkspacePlusPlus.prototype.clearZenModeRefreshTimers = function () {
        var timers = this._zenRefreshTimers || [];
        for (var i = 0; i < timers.length; i++) {
            clearTimeout(timers[i]);
        }
        this._zenRefreshTimers = [];
        this.stopZenDomGuard();
    };
}

module.exports = attachZenModeMethods;
