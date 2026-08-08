'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Module = require('module');

const i18n = require('../src/i18n');
i18n.resolveLocale('en');

function loadHistoryMethods() {
    const originalLoad = Module._load;
    Module._load = function (request, parent, isMain) {
        if (request === 'obsidian') {
            return { Notice: class { constructor() {} } };
        }
        return originalLoad(request, parent, isMain);
    };
    try {
        return require('../src/plugin/methods/history');
    } finally {
        Module._load = originalLoad;
    }
}

const attachHistoryMethods = loadHistoryMethods();

function createPlugin(initialData) {
    function PluginMock() {}
    attachHistoryMethods(PluginMock);
    const plugin = new PluginMock();
    plugin.data = Object.assign({
        versionHistoryEnabled: true,
        activeSessionId: 'a',
        sessions: {
            a: { id: 'a', name: 'A', layout: { id: 'layout-a' }, modified: 1 },
        },
    }, initialData || {});
    plugin.persistCalls = 0;
    plugin.layoutsEqualStructural = function (a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    };
    plugin.getCurrentWorkspaceLayout = function () {
        return { id: 'live' };
    };
    plugin.updateStatusBar = function () {};
    plugin.applyWorkspaceLayout = function () {
        return Promise.resolve();
    };
    plugin.persistData = function () {
        plugin.persistCalls += 1;
        return Promise.resolve(true);
    };
    return plugin;
}

const DAY = 86400000;

test('compactHistory keeps monthly snapshots older than 30 days', function () {
    const plugin = createPlugin();
    const now = Date.now();
    const history = [
        { savedAt: now - 10 * 60 * 1000, layout: { id: 'recent' } },
        { savedAt: now - 40 * DAY, layout: { id: 'old-1' } },
        { savedAt: now - 41 * DAY, layout: { id: 'old-1b' } },
        { savedAt: now - 70 * DAY, layout: { id: 'old-2' } },
        { savedAt: now - 100 * DAY, layout: { id: 'old-3' } },
    ];

    const compacted = plugin.compactHistory(history);
    const ids = compacted.map(function (entry) { return entry.layout.id; });

    assert.ok(ids.indexOf('recent') !== -1);
    assert.ok(ids.indexOf('old-1') !== -1);
    assert.ok(ids.indexOf('old-1b') === -1);
    assert.ok(ids.indexOf('old-2') !== -1);
    assert.ok(ids.indexOf('old-3') !== -1);
});

test('pushLayoutToHistory does not wipe entries older than 30 days', function () {
    const plugin = createPlugin();
    const now = Date.now();
    const session = {
        layout: { id: 'current' },
        history: [
            { savedAt: now - 45 * DAY, layout: { id: 'ancient' } },
            { savedAt: now - 80 * DAY, layout: { id: 'older' } },
        ],
    };

    plugin.pushLayoutToHistory(session);

    const ids = (session.history || []).map(function (entry) { return entry.layout.id; });
    assert.ok(ids.indexOf('current') !== -1);
    assert.ok(ids.indexOf('ancient') !== -1);
    assert.ok(ids.indexOf('older') !== -1);
    assert.equal(session.history[0].source, 'auto');
});

test('compactHistory never drops or caps manual entries', function () {
    const plugin = createPlugin();
    const now = Date.now();
    const history = [];
    for (var i = 0; i < 60; i++) {
        history.push({
            savedAt: now - i * DAY,
            layout: { id: 'manual-' + i },
            source: 'manual',
            title: 'M' + i,
        });
    }
    for (var j = 0; j < 50; j++) {
        history.push({
            savedAt: now - j * 3600000,
            layout: { id: 'auto-' + j },
            source: 'auto',
        });
    }

    const compacted = plugin.compactHistory(history);
    const manual = compacted.filter(function (e) { return e.source === 'manual'; });
    const auto = compacted.filter(function (e) { return e.source !== 'manual'; });

    assert.equal(manual.length, 60);
    assert.ok(auto.length <= 45);
});

test('saveManualHistoryEntry stores titled snapshot without compaction', async function () {
    const plugin = createPlugin();
    const ok = await plugin.saveManualHistoryEntry('a', 'Checkpoint');

    assert.equal(ok, true);
    assert.equal(plugin.data.sessions.a.history.length, 1);
    assert.equal(plugin.data.sessions.a.history[0].source, 'manual');
    assert.equal(plugin.data.sessions.a.history[0].title, 'Checkpoint');
    assert.deepEqual(plugin.data.sessions.a.history[0].layout, { id: 'live' });
    assert.deepEqual(plugin.data.sessions.a.layout, { id: 'live' });
    assert.equal(plugin.persistCalls, 1);
});

test('rename update and delete history entries', async function () {
    const plugin = createPlugin({
        sessions: {
            a: {
                id: 'a',
                name: 'A',
                layout: { id: 'layout-a' },
                modified: 1,
                history: [
                    {
                        savedAt: 100,
                        layout: { id: 'h1' },
                        source: 'manual',
                        title: 'Old',
                    },
                ],
            },
        },
    });

    assert.equal(await plugin.renameHistoryEntry('a', 0, 'New'), true);
    assert.equal(plugin.data.sessions.a.history[0].title, 'New');

    assert.equal(await plugin.updateHistoryEntry('a', 0, {
        title: 'Newer',
        updateLayoutFromCurrent: true,
    }), true);
    assert.equal(plugin.data.sessions.a.history[0].title, 'Newer');
    assert.deepEqual(plugin.data.sessions.a.history[0].layout, { id: 'live' });

    assert.equal(await plugin.deleteHistoryEntry('a', 0), true);
    assert.equal(plugin.data.sessions.a.history, undefined);
});
