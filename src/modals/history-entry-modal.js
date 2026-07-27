'use strict';

var obsidian = require('obsidian');
var i18n = require('../i18n');

/**
 * Modal for creating or editing a named history snapshot.
 *
 * options:
 * - mode: 'create' | 'edit'
 * - title: string
 * - placeholder: string
 * - buttonText: string
 * - showUpdateLayout: boolean (edit mode)
 * - updateLayoutLabel: string
 * - emptyNotice: string
 * - onSubmit(title, { updateLayoutFromCurrent })
 */
var HistoryEntryModal = /** @class */ (function (_super) {
    function HistoryEntryModal(app, options) {
        var _this = _super.call(this, app) || this;
        _this.modalOptions = options || {};
        return _this;
    }

    HistoryEntryModal.prototype = Object.create(_super.prototype);
    HistoryEntryModal.prototype.constructor = HistoryEntryModal;

    HistoryEntryModal.prototype.onOpen = function () {
        var L = i18n.L;
        var self = this;
        var opts = this.modalOptions;
        var contentEl = this.contentEl;
        contentEl.empty();
        contentEl.addClass('wpp-modal');

        var isEdit = opts.mode === 'edit';
        this.titleEl.setText(opts.title || (isEdit ? L.historyEditEntryTitle : L.historyManualSaveTitle));

        var input = contentEl.createEl('input', {
            type: 'text',
            value: opts.initialTitle || '',
            placeholder: opts.placeholder || L.historyEntryTitlePlaceholder,
            cls: 'wpp-rename-input',
        });
        input.select();

        var updateLayoutToggle = null;
        if (isEdit && opts.showUpdateLayout !== false) {
            var toggleRow = contentEl.createDiv({ cls: 'wpp-history-edit-layout-row' });
            updateLayoutToggle = toggleRow.createEl('input', {
                type: 'checkbox',
                attr: { id: 'wpp-history-update-layout' },
            });
            toggleRow.createEl('label', {
                text: opts.updateLayoutLabel || L.historyUpdateLayoutFromCurrent,
                attr: { for: 'wpp-history-update-layout' },
            });
        }

        var btns = contentEl.createDiv({ cls: 'wpp-confirm-buttons' });
        var cancelBtn = btns.createEl('button', { text: L.cancel });
        cancelBtn.addEventListener('click', function () { self.close(); });

        var submitBtn = btns.createEl('button', {
            text: opts.buttonText || (isEdit ? L.saveChanges : L.historyManualSave),
            cls: 'mod-cta',
        });

        var doSubmit = function () {
            var title = input.value.trim();
            if (!title) {
                if (opts.emptyNotice) new obsidian.Notice(opts.emptyNotice);
                else new obsidian.Notice(L.historyTitleRequired);
                return;
            }
            if (typeof opts.onSubmit === 'function') {
                opts.onSubmit(title, {
                    updateLayoutFromCurrent: !!(updateLayoutToggle && updateLayoutToggle.checked),
                });
            }
            self.close();
        };

        submitBtn.addEventListener('click', doSubmit);

        this.keyHandler = function (e) {
            if (e.isComposing) return;
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                doSubmit();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                e.stopImmediatePropagation();
                self.close();
            }
        };
        document.addEventListener('keydown', this.keyHandler, true);
        setTimeout(function () { input.focus(); }, 50);
    };

    HistoryEntryModal.prototype.onClose = function () {
        if (this.keyHandler) {
            document.removeEventListener('keydown', this.keyHandler, true);
            this.keyHandler = null;
        }
        this.contentEl.empty();
    };

    return HistoryEntryModal;
})(obsidian.Modal);

module.exports = HistoryEntryModal;
