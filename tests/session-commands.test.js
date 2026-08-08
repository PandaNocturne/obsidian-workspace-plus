'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const i18n = require('../src/i18n');
const attachSessionCommandMethods = require('../src/plugin/methods/session-commands');

i18n.resolveLocale('en');

function createPlugin(initialData) {
    function PluginMock() {}
    attachSessionCommandMethods(PluginMock);
    const plugin = new PluginMock();
    plugin.data = Object.assign({
        activeSessionId: 's1',
        numberedSwitchCommands: true,
        showActiveSwitchCommand: false,
        sessionOrder: ['s1', 's2'],
        sessions: {
            s1: { id: 's1', name: 'One' },
            s2: { id: 's2', name: 'Two' },
        },
    }, initialData || {});
    plugin.addedCommands = [];
    plugin.removedCommandIds = [];
    plugin.addCommand = function (command) {
        plugin.addedCommands.push(command);
    };
    plugin.removeCommand = function (id) {
        plugin.removedCommandIds.push(id);
    };
    return plugin;
}

test('session command sync removes legacy switch commands without registering new ones', function () {
    const plugin = createPlugin({
        _dynamicSessionCommandIds: ['switch-to-named-old'],
    });
    plugin._dynamicSessionCommandIds = ['switch-to-named-old'];

    plugin.syncSessionCommands();

    assert.deepEqual(plugin.removedCommandIds.slice(0, 10), [
        'switch-to-named-old',
        'switch-to-1',
        'switch-to-2',
        'switch-to-3',
        'switch-to-4',
        'switch-to-5',
        'switch-to-6',
        'switch-to-7',
        'switch-to-8',
        'switch-to-9',
    ]);
    assert.deepEqual(plugin.removedCommandIds.slice(10), [
        'previous-session',
        'next-session',
        'search-session-overlay',
        'switch-group',
        'exit-group',
        'next-group',
        'previous-group',
    ]);
    assert.deepEqual(plugin.addedCommands, []);
    assert.deepEqual(plugin._dynamicSessionCommandIds, []);
});
