'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Module = require('module');

const i18n = require('../src/i18n');

i18n.resolveLocale('en');

function loadValidationMethods() {
    const obsidianStub = {
        Notice: class {
            constructor(_message) {}
        },
    };
    const originalLoad = Module._load;
    Module._load = function (request, parent, isMain) {
        if (request === 'obsidian') return obsidianStub;
        return originalLoad(request, parent, isMain);
    };

    try {
        return require('../src/plugin/methods/sessions-validation');
    } finally {
        Module._load = originalLoad;
    }
}

const attachSessionValidationMethods = loadValidationMethods();

function createPlugin(initialData) {
    function PluginMock() {}
    attachSessionValidationMethods(PluginMock);
    const plugin = new PluginMock();
    plugin.data = Object.assign({
        activeSessionId: 'a',
        sessions: {
            a: { id: 'a', name: 'Alpha', layout: { layout: 'a' }, modified: 1 },
            b: { id: 'b', name: 'Beta', layout: { layout: 'b' }, modified: 1, note: 'old' },
        },
        sessionOrder: ['a', 'b'],
    }, initialData || {});
    plugin.persistCalls = 0;
    plugin.statusBarUpdates = 0;
    plugin.commandSyncs = 0;
    plugin.updateStatusBar = function () {
        plugin.statusBarUpdates += 1;
    };
    plugin.syncSessionCommands = function () {
        plugin.commandSyncs += 1;
    };
    plugin.persistData = function () {
        plugin.persistCalls += 1;
        return Promise.resolve(true);
    };
    return plugin;
}

test('editSessionById updates note without renaming', async function () {
    const plugin = createPlugin();

    const updated = await plugin.editSessionById('b', 'Beta', 'new note');

    assert.equal(updated, true);
    assert.equal(plugin.data.sessions.b.name, 'Beta');
    assert.equal(plugin.data.sessions.b.note, 'new note');
    assert.equal(plugin.persistCalls, 1);
});

test('editSessionById clears note when empty', async function () {
    const plugin = createPlugin();

    const updated = await plugin.editSessionById('b', 'Beta', '   ');

    assert.equal(updated, true);
    assert.equal(plugin.data.sessions.b.note, undefined);
    assert.equal(plugin.persistCalls, 1);
});

test('editSessionById renames and updates note together', async function () {
    const plugin = createPlugin();

    const updated = await plugin.editSessionById('b', 'Beta 2', 'kept');

    assert.equal(updated, true);
    assert.equal(plugin.data.sessions.b.name, 'Beta 2');
    assert.equal(plugin.data.sessions.b.note, 'kept');
    assert.equal(plugin.statusBarUpdates, 1);
    assert.equal(plugin.commandSyncs, 1);
});

test('editSessionById rejects duplicate names', async function () {
    const plugin = createPlugin();

    const updated = await plugin.editSessionById('b', 'Alpha', 'x');

    assert.equal(updated, false);
    assert.equal(plugin.data.sessions.b.name, 'Beta');
    assert.equal(plugin.persistCalls, 0);
});
