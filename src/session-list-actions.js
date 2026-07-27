'use strict';

var obsidian = require('obsidian');
var i18n = require('./i18n');
var ConfirmModal = require('./modals/confirm-modal');
var DeleteOrArchiveModal = require('./modals/delete-or-archive-modal');
var RenameModal = require('./modals/rename-modal');

function resolveApp(options) {
    if (options.app) return options.app;
    if (options.plugin && options.plugin.app) return options.plugin.app;
    return null;
}

function renameSessionWithPrompt(options) {
    var L = i18n.L;
    options = options || {};
    var app = resolveApp(options);
    var plugin = options.plugin;
    var session = options.session;
    if (!app || !plugin || !session) return;

    var allowNote = options.showNote !== false;
    var modalOptions = Object.assign({
        emptyNotice: L.emptyName,
        title: allowNote ? L.editSessionTitle : L.renameTitle,
        buttonText: allowNote ? L.saveChanges : L.rename,
        showNote: allowNote,
        currentNote: session.note || '',
        notePlaceholder: L.sessionNotePlaceholder,
    }, options.modalOptions || {});

    new RenameModal(app, session.name, function (newName, note) {
        var editPromise = allowNote && typeof plugin.editSessionById === 'function'
            ? plugin.editSessionById(session.id, newName, note)
            : plugin.renameSessionById(session.id, newName);
        editPromise.then(function (updated) {
            if (!updated) return;
            if (typeof options.onRenamed === 'function') {
                options.onRenamed(session, newName);
            }
        });
    }, modalOptions).open();
}

function getDeleteConfirmMessage(session, options) {
    var L = i18n.L;
    if (options && options.confirmMessage) return options.confirmMessage;
    var isActive = !!(options && options.isActive);
    return isActive
        ? L.confirmDeleteActive(session.name)
        : L.confirmDelete(session.name);
}

function deleteSessionWithPrompt(options) {
    var L = i18n.L;
    options = options || {};
    var app = resolveApp(options);
    var plugin = options.plugin;
    var session = options.session;
    if (!app || !plugin || !session) return Promise.resolve(false);

    if (Object.keys(plugin.data.sessions || {}).length <= 1) {
        if (options.notifyCannotDelete !== false) {
            new obsidian.Notice(L.cannotDeleteLast);
        }
        return Promise.resolve(false);
    }

    var doDelete = function () {
        return plugin.deleteSession(session.id).then(function (deleted) {
            if (!deleted) return false;
            if (options.notifyDeleted !== false) {
                new obsidian.Notice(L.deleted(session.name));
            }
            if (typeof options.onDeleted === 'function') {
                options.onDeleted(session);
            }
            return true;
        });
    };

    var doArchive = function () {
        return plugin.archiveSession(session.id).then(function (archived) {
            if (!archived) {
                if (options.notifyCannotDelete !== false) {
                    new obsidian.Notice(L.cannotDeleteLast);
                }
                return false;
            }
            if (options.notifyArchived !== false) {
                new obsidian.Notice(L.archived(session.name));
            }
            if (typeof options.onArchived === 'function') {
                options.onArchived(session);
            } else if (typeof options.onDeleted === 'function') {
                // Refresh list even if caller only provided onDeleted.
                options.onDeleted(session);
            }
            return true;
        });
    };

    var allowArchive = options.allowArchive !== false
        && typeof plugin.archiveSession === 'function';
    var shouldConfirm = !!options.forceConfirm || plugin.data.confirmDeleteByHotkey !== false;

    if (shouldConfirm && allowArchive) {
        new DeleteOrArchiveModal(
            app,
            options.archiveConfirmMessage || L.confirmDeleteOrArchive(session.name),
            doArchive,
            doDelete,
            options.confirmOptions || {}
        ).open();
        return Promise.resolve(true);
    }

    if (shouldConfirm) {
        new ConfirmModal(
            app,
            getDeleteConfirmMessage(session, options),
            doDelete,
            options.confirmOptions || {}
        ).open();
        return Promise.resolve(true);
    }

    return doDelete();
}

module.exports = {
    renameSessionWithPrompt: renameSessionWithPrompt,
    deleteSessionWithPrompt: deleteSessionWithPrompt,
};
