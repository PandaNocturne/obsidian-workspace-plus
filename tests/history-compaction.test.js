'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Module = require('module');

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

function createPlugin() {
    function PluginMock() {}
    attachHistoryMethods(PluginMock);
    const plugin = new PluginMock();
    plugin.data = { versionHistoryEnabled: true };
    plugin.layoutsEqualStructural = function (a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    };
    return plugin;
}

const HOUR = 3600000;
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
});
