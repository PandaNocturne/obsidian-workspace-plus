'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Module = require('module');

const i18n = require('../src/i18n');

i18n.resolveLocale('en');

function loadSessionStatusBarMethods() {
    const obsidianStub = {
        setIcon: function (el, iconName) {
            el.icon = iconName;
        },
    };
    const originalLoad = Module._load;
    Module._load = function (request, parent, isMain) {
        if (request === 'obsidian') return obsidianStub;
        return originalLoad(request, parent, isMain);
    };

    try {
        return require('../src/plugin/methods/session-statusbar');
    } finally {
        Module._load = originalLoad;
    }
}

const attachSessionStatusBarMethods = loadSessionStatusBarMethods();

function createStatusBarEl() {
    return {
        classes: [],
        children: [],
        style: {},
        addClass: function (cls) {
            if (this.classes.indexOf(cls) === -1) this.classes.push(cls);
        },
        removeClass: function (cls) {
            this.classes = this.classes.filter(function (item) {
                return item !== cls;
            });
        },
        toggleClass: function (cls, force) {
            var has = this.classes.indexOf(cls) !== -1;
            if (force === true || (force === undefined && !has)) {
                this.addClass(cls);
            } else if (force === false || (force === undefined && has)) {
                this.removeClass(cls);
            }
        },
        empty: function () {
            this.children = [];
        },
        createSpan: function (attrs) {
            var child = Object.assign({}, attrs || {});
            this.children.push(child);
            return child;
        },
    };
}

function createPlugin(options) {
    options = options || {};
    function PluginMock() {}
    attachSessionStatusBarMethods(PluginMock);
    const plugin = new PluginMock();
    plugin.data = options.data || {};
    plugin.statusBarEl = options.statusBarEl === false ? null : createStatusBarEl();
    plugin.getActiveSession = function () {
        return options.session || null;
    };
    plugin.getActiveGroup = function () {
        return options.group || null;
    };
    plugin.shouldShowUnsavedStatusBarHighlight = function () {
        return !!options.unsaved;
    };
    return plugin;
}

test('session status bar renders icon and session name', function () {
    const plugin = createPlugin({
        session: { id: 's1', name: 'Session One' },
    });

    plugin.updateStatusBar();

    assert.deepEqual(plugin.statusBarEl.classes, []);
    assert.equal(plugin.statusBarEl.children[0].cls, 'wpp-status-icon');
    assert.equal(plugin.statusBarEl.children[0].icon, 'panels-top-left');
    assert.deepEqual(plugin.statusBarEl.children.map(function (child) {
        return child.text;
    }), [undefined, 'Session One']);
});

test('session status bar renders active group before session name', function () {
    const plugin = createPlugin({
        session: { id: 's1', name: 'Session One' },
        group: { id: 'g1', name: 'Group One' },
    });

    plugin.updateStatusBar();

    assert.deepEqual(plugin.statusBarEl.children.map(function (child) {
        return child.cls;
    }), [
        'wpp-status-icon',
        'wpp-status-group',
        'wpp-status-separator',
        'wpp-status-name',
    ]);
    assert.deepEqual(plugin.statusBarEl.children.map(function (child) {
        return child.text;
    }), [undefined, 'Group One', ' / ', 'Session One']);
});

test('session status bar nests using session membership, not stale active group', function () {
    const plugin = createPlugin({
        session: { id: 's1', name: 'Session One' },
        group: { id: 'g-stale', name: 'Stale Group' },
    });
    plugin.data = {
        activeGroupId: 'g-stale',
        groups: {
            'g-stale': { id: 'g-stale', name: 'Stale Group' },
            g1: { id: 'g1', name: 'Real Group' },
        },
        sessionGroups: {
            s1: ['g1'],
        },
    };
    plugin.chooseSessionGroupForView = function (sessionId) {
        return sessionId === 's1' ? 'g1' : null;
    };

    plugin.updateStatusBar();

    assert.deepEqual(plugin.statusBarEl.children.map(function (child) {
        return child.text;
    }), [undefined, 'Real Group', ' / ', 'Session One']);
});

test('session status bar does not nest Default / ungrouped sessions', function () {
    const plugin = createPlugin({
        session: { id: 's1', name: 'Default Session' },
        group: { id: 'g1', name: 'Group One' },
    });
    plugin.data = {
        activeGroupId: 'g1',
        groups: {
            g1: { id: 'g1', name: 'Group One' },
        },
        sessionGroups: {},
    };
    plugin.chooseSessionGroupForView = function () {
        return null;
    };

    plugin.updateStatusBar();

    assert.deepEqual(plugin.statusBarEl.children.map(function (child) {
        return child.text;
    }), [undefined, 'Default Session']);
});

test('session status bar toggles unsaved highlight class', function () {
    const plugin = createPlugin({
        session: { id: 's1', name: 'Session One' },
        unsaved: true,
    });

    plugin.updateStatusBar();

    assert.deepEqual(plugin.statusBarEl.classes, ['wpp-status-bar-unsaved']);
});

test('session status bar safely skips rendering before element exists', function () {
    const plugin = createPlugin({
        statusBarEl: false,
        session: { id: 's1', name: 'Session One' },
    });

    assert.doesNotThrow(function () {
        plugin.updateStatusBar();
    });
});
