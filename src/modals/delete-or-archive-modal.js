'use strict';

var obsidian = require('obsidian');
var i18n = require('../i18n');

/**
 * Confirm modal with Cancel / Archive / Delete.
 */
var DeleteOrArchiveModal = /** @class */ (function (_super) {
    function DeleteOrArchiveModal(app, message, onArchive, onDelete, options) {
        var _this = _super.call(this, app) || this;
        _this.message = message;
        _this.onArchive = onArchive;
        _this.onDelete = onDelete;
        _this.options = options || {};
        return _this;
    }

    DeleteOrArchiveModal.prototype = Object.create(_super.prototype);
    DeleteOrArchiveModal.prototype.constructor = DeleteOrArchiveModal;

    DeleteOrArchiveModal.prototype.onOpen = function () {
        var L = i18n.L;
        var self = this;
        this.containerEl.style.zIndex = '10001';
        var contentEl = this.contentEl;
        contentEl.createEl('p', { text: this.message });
        var btns = contentEl.createDiv({ cls: 'wpp-confirm-buttons' });

        var cancelBtn = btns.createEl('button', { text: L.cancel });
        cancelBtn.addEventListener('click', function () { self.close(); });

        var archiveBtn = btns.createEl('button', {
            text: this.options.archiveText || L.archive,
            cls: 'mod-cta',
        });
        archiveBtn.addEventListener('click', function () {
            if (typeof self.onArchive === 'function') self.onArchive();
            self.close();
        });

        var deleteBtn = btns.createEl('button', {
            text: this.options.deleteText || L.delete,
            cls: 'mod-warning',
        });
        deleteBtn.addEventListener('click', function () {
            if (typeof self.onDelete === 'function') self.onDelete();
            self.close();
        });

        this.buttons = [cancelBtn, archiveBtn, deleteBtn];
        this.focusedButtonIndex = 1;
        this.updateButtonFocus();

        this.keyHandler = function (e) {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                if (self.focusedButtonIndex > 0) self.focusedButtonIndex--;
                self.updateButtonFocus();
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                if (self.focusedButtonIndex < self.buttons.length - 1) self.focusedButtonIndex++;
                self.updateButtonFocus();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                self.buttons[self.focusedButtonIndex].click();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                e.stopImmediatePropagation();
                self.close();
            }
        };
        document.addEventListener('keydown', this.keyHandler, true);
    };

    DeleteOrArchiveModal.prototype.updateButtonFocus = function () {
        var self = this;
        this.buttons.forEach(function (btn, i) {
            btn.classList.toggle('wpp-btn-focused', i === self.focusedButtonIndex);
        });
    };

    DeleteOrArchiveModal.prototype.onClose = function () {
        if (this.keyHandler) {
            document.removeEventListener('keydown', this.keyHandler, true);
            this.keyHandler = null;
        }
        this.contentEl.empty();
    };

    return DeleteOrArchiveModal;
})(obsidian.Modal);

module.exports = DeleteOrArchiveModal;
