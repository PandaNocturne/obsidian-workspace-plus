'use strict';

var modals = require('./modals');

function setupStatusBar(plugin) {
    plugin.statusBarEl = plugin.addStatusBarItem();
    plugin.statusBarEl.addClass('wpp-status-bar');

    plugin.statusBarEl.addEventListener('click', function (evt) {
        if (evt.button !== 0) return;
        evt.preventDefault();
        evt.stopPropagation();
        new modals.SessionManagerModal(plugin.app, plugin).open();
    });

    plugin.updateStatusBar();
    return plugin.statusBarEl;
}

module.exports = {
    setupStatusBar: setupStatusBar,
};
