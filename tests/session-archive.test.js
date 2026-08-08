'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Module = require('module');

const i18n = require('../src/i18n');
i18n.resolveLocale('en');

function loadSessionCrudMethods() {
    const obsidianStub = {
        Modal: class {},
        Notice: class { constructor() {} },
        setIcon: function () {},
        setTooltip: function () {},
    };
    const originalLoad = Module._load;
    Module._load = function (request, parent, isMain) {
        if (request === 'obsidian') return obsidianStub;
        return originalLoad(request, parent, isMain);
    };
    try {
        return require('../src/plugin/methods/session-crud');
    } finally {
        Module._load = originalLoad;
    }
}

const attachSessionCrudMethods = loadSessionCrudMethods();
const attachLayoutRestoreMethods = require('../src/plugin/methods/layout-restore');

function createPlugin(initialData) {
    function PluginMock() {}
    attachLayoutRestoreMethods(PluginMock);
    attachSessionCrudMethods(PluginMock);
    const plugin = new PluginMock();
    plugin.data = Object.assign({
        activeSessionId: 'a',
        sessions: {
            a: { id: 'a', name: 'A', layout: { layout: 'a' }, modified: 1 },
            b: { id: 'b', name: 'B', layout: { layout: 'b' }, modified: 1 },
        },
        sessionOrder: ['a', 'b'],
        sessionGroups: { b: ['g1'] },
        groups: { g1: { id: 'g1', name: 'G1' } },
        groupOrder: ['__all__', 'g1'],
        activeGroupId: null,
        archivedSessions: {},
        archivedOrder: [],
    }, initialData || {});
    plugin.persistCalls = 0;
    plugin.getCurrentWorkspaceLayout = function () { return { layout: 'current' }; };
    plugin.updateStatusBar = function () {};
    plugin.syncSessionCommands = function () {};
    plugin.persistData = function () {
        plugin.persistCalls += 1;
        return Promise.resolve(true);
    };
    plugin.attachSessionToActiveGroup = function () {};
    plugin.captureActiveSessionLayoutIfAutoSave = function () {};
    plugin.hideSwitchOverlay = function () {};
    plugin.app = {
        workspace: {
            changeLayout: function () { return Promise.resolve(true); },
            iterateRootLeaves: function () {},
        },
    };
    return plugin;
}

test('archiveSession moves session out of active list and keeps group membership', async function () {
    const plugin = createPlugin();
    const ok = await plugin.archiveSession('b');

    assert.equal(ok, true);
    assert.equal(plugin.data.sessions.b, undefined);
    assert.equal(plugin.data.sessionOrder.indexOf('b'), -1);
    assert.ok(plugin.data.archivedSessions.b);
    assert.equal(plugin.data.archivedSessions.b.name, 'B');
    assert.deepEqual(plugin.data.archivedSessions.b.groupIds, ['g1']);
    assert.equal(plugin.getArchivedCount(), 1);
    assert.equal(plugin.persistCalls, 1);
});

test('restoreArchivedSession returns session and group membership', async function () {
    const plugin = createPlugin();
    await plugin.archiveSession('b');
    const ok = await plugin.restoreArchivedSession('b');

    assert.equal(ok, true);
    assert.equal(plugin.data.sessions.b.name, 'B');
    assert.deepEqual(plugin.data.sessionGroups.b, ['g1']);
    assert.equal(plugin.data.archivedSessions.b, undefined);
    assert.equal(plugin.getArchivedCount(), 0);
});

test('permanentlyDeleteArchivedSession removes archived entry', async function () {
    const plugin = createPlugin();
    await plugin.archiveSession('b');
    const ok = await plugin.permanentlyDeleteArchivedSession('b');

    assert.equal(ok, true);
    assert.equal(plugin.data.archivedSessions.b, undefined);
    assert.equal(plugin.getArchivedCount(), 0);
});

test('archiveSession refuses to archive the last remaining session', async function () {
    const plugin = createPlugin({
        sessions: { a: { id: 'a', name: 'A', layout: { layout: 'a' }, modified: 1 } },
        sessionOrder: ['a'],
        sessionGroups: {},
    });
    const ok = await plugin.archiveSession('a');
    assert.equal(ok, false);
    assert.ok(plugin.data.sessions.a);
});
