'use strict';

var modals = require('./modals');

function setupStatusBar(plugin) {
    plugin.statusBarEl = plugin.addStatusBarItem();
    plugin.statusBarEl.addClass('wpp-status-bar');

    plugin.statusBarEl.addEventListener('click', function (evt) {
        if (evt.button !== 0) return;
        if (!plugin.isStatusBarWorkspaceEnabled()) return;
        evt.preventDefault();
        evt.stopPropagation();
        new modals.SessionManagerModal(plugin.app, plugin).open();
    });

    plugin.updateStatusBar();

    plugin.zenStatusBarEl = plugin.addStatusBarItem();
    plugin.zenStatusBarEl.addClass('wpp-zen-status-bar');
    plugin.zenStatusBarEl.setAttribute('role', 'button');
    plugin.zenStatusBarEl.setAttribute('tabindex', '0');

    plugin.zenStatusBarEl.addEventListener('click', function (evt) {
        if (evt.button !== 0) return;
        if (!plugin.isStatusBarZenModeEnabled()) return;
        evt.preventDefault();
        evt.stopPropagation();
        plugin.toggleZenMode({ notify: false });
    });

    plugin.updateZenStatusBar();

    return plugin.statusBarEl;
}

module.exports = {
    setupStatusBar: setupStatusBar,
};
