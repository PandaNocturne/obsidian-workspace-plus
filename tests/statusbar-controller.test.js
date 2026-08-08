'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const Module = require('module');

function loadStatusBarController(calls) {
    calls = calls || [];
    const modalsStub = {
        SessionManagerModal: class {
            constructor(app, plugin) {
                calls.push(['modal', app, plugin]);
            }
            open() {
                calls.push(['open']);
            }
        },
    };

    const originalLoad = Module._load;
    Module._load = function (request, parent, isMain) {
        if (request === './modals') return modalsStub;
        return originalLoad(request, parent, isMain);
    };

    try {
        const modulePath = require.resolve('../src/statusbar-controller');
        delete require.cache[modulePath];
        return require(modulePath);
    } finally {
        Module._load = originalLoad;
    }
}

function createEvent(props) {
    const event = Object.assign({
        type: 'click',
        button: 0,
        prevented: 0,
        stopped: 0,
        preventDefault: function () {
            this.prevented += 1;
        },
        stopPropagation: function () {
            this.stopped += 1;
        },
    }, props || {});
    return event;
}

test('status bar controller opens session manager on click', function () {
    const calls = [];
    const controller = loadStatusBarController(calls);
    const listeners = {};
    const app = { id: 'app' };
    const plugin = {
        app: app,
        addStatusBarItem: function () {
            return {
                addClass: function (className) {
                    calls.push(['class', className]);
                },
                addEventListener: function (type, handler) {
                    listeners[type] = handler;
                },
            };
        },
        updateStatusBar: function () {
            calls.push(['update']);
        },
    };

    controller.setupStatusBar(plugin);
    const event = createEvent();
    listeners.click(event);

    assert.equal(plugin.statusBarEl !== undefined, true);
    assert.equal(event.prevented, 1);
    assert.equal(event.stopped, 1);
    assert.deepEqual(calls, [
        ['class', 'wpp-status-bar'],
        ['update'],
        ['modal', app, plugin],
        ['open'],
    ]);
});

test('status bar controller ignores non-primary clicks', function () {
    const calls = [];
    const controller = loadStatusBarController(calls);
    const listeners = {};
    const plugin = {
        app: {},
        addStatusBarItem: function () {
            return {
                addClass: function () {},
                addEventListener: function (type, handler) {
                    listeners[type] = handler;
                },
            };
        },
        updateStatusBar: function () {},
    };

    controller.setupStatusBar(plugin);
    listeners.click(createEvent({ button: 1 }));

    assert.deepEqual(calls, []);
});
