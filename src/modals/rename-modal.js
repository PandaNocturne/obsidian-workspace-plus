'use strict';

var obsidian = require('obsidian');
var i18n = require('../i18n');

// ============================================================
// Rename / Edit Modal
// ============================================================
var RenameModal = /** @class */ (function (_super) {
    function RenameModal(app, currentName, onRename, options) {
        var _this = _super.call(this, app) || this;
        _this.currentName = currentName;
        _this.onRename = onRename;
        _this.modalOptions = options || {};
        _this.currentNote = typeof _this.modalOptions.currentNote === 'string'
            ? _this.modalOptions.currentNote
            : '';
        return _this;
    }

    RenameModal.prototype = Object.create(_super.prototype);
    RenameModal.prototype.constructor = RenameModal;

    RenameModal.prototype.onOpen = function () {
        var L = i18n.L;
        var contentEl = this.contentEl;
        var self = this;
        var opts = this.modalOptions;
        var showNote = !!opts.showNote;
        this.titleEl.setText(opts.title || L.renameTitle);

        var input = contentEl.createEl('input', {
            type: 'text',
            value: this.currentName,
            placeholder: opts.placeholder || L.renamePlaceholder,
            cls: 'wpp-rename-input',
        });
        input.select();
        this.nameInput = input;

        var noteInput = null;
        if (showNote) {
            noteInput = contentEl.createEl('textarea', {
                cls: 'wpp-session-note-input',
                attr: {
                    rows: '3',
                    placeholder: opts.notePlaceholder || L.sessionNotePlaceholder,
                },
            });
            noteInput.value = this.currentNote;
            this.noteInput = noteInput;
        }

        var btns = contentEl.createDiv({ cls: 'wpp-confirm-buttons' });
        var cancelBtn = btns.createEl('button', { text: L.cancel });
        cancelBtn.addEventListener('click', function () { self.close(); });

        // Optional skip button (e.g. "Save without naming")
        var skipBtn = null;
        if (opts.skipButtonText && opts.onSkip) {
            skipBtn = btns.createEl('button', { text: opts.skipButtonText });
            skipBtn.addEventListener('click', function () {
                opts.onSkip();
                self.close();
            });
        }

        var renameBtn = btns.createEl('button', {
            text: opts.buttonText || (showNote ? L.saveChanges : L.rename),
            cls: 'mod-cta',
        });

        var doRename = function () {
            var newName = input.value.trim();
            var nextNote = showNote ? (noteInput.value || '') : undefined;
            if (!newName) {
                if (opts.onSkip) {
                    opts.onSkip();
                    self.close();
                    return;
                }
                if (opts.emptyNotice) {
                    new obsidian.Notice(opts.emptyNotice);
                }
                return;
            }
            var noteUnchanged = !showNote
                || (nextNote.trim() === (self.currentNote || '').trim());
            if (newName === self.currentName && noteUnchanged) return;
            if (showNote) {
                self.onRename(newName, nextNote);
            } else {
                self.onRename(newName);
            }
            self.close();
        };

        renameBtn.addEventListener('click', doRename);

        this.buttons = skipBtn ? [cancelBtn, skipBtn, renameBtn] : [cancelBtn, renameBtn];
        var lastBtnIdx = this.buttons.length - 1;
        // -2 = note focused (when showNote), -1 = name focused, 0+ = buttons
        this.focusedButtonIndex = -1;

        function focusName() {
            self.focusedButtonIndex = -1;
            self.updateRenameBtnFocus();
            input.focus();
        }

        function focusNote() {
            if (!noteInput) {
                focusName();
                return;
            }
            self.focusedButtonIndex = -2;
            self.updateRenameBtnFocus();
            noteInput.focus();
        }

        function focusButtons(index) {
            self.focusedButtonIndex = index;
            self.updateRenameBtnFocus();
            if (input.blur) input.blur();
            if (noteInput && noteInput.blur) noteInput.blur();
        }

        this.renameKeyHandler = function (e) {
            // Skip during IME composition (e.g. Japanese input conversion)
            if (e.isComposing) return;

            if (self.focusedButtonIndex === -1) {
                // Name input focused
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (showNote) {
                        focusNote();
                    } else {
                        focusButtons(lastBtnIdx);
                    }
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                    doRename();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    self.close();
                }
            } else if (self.focusedButtonIndex === -2) {
                // Note textarea focused
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    focusButtons(lastBtnIdx);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    focusName();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    self.close();
                }
            } else {
                // Button focused
                if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (showNote) {
                        focusNote();
                    } else {
                        focusName();
                    }
                } else if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    if (self.focusedButtonIndex > 0) {
                        self.focusedButtonIndex--;
                        self.updateRenameBtnFocus();
                    } else if (showNote) {
                        focusNote();
                    } else {
                        focusName();
                    }
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    if (self.focusedButtonIndex < lastBtnIdx) {
                        self.focusedButtonIndex++;
                        self.updateRenameBtnFocus();
                    }
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    e.stopPropagation();
                    self.buttons[self.focusedButtonIndex].click();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    self.close();
                }
            }
        };
        document.addEventListener('keydown', this.renameKeyHandler, true);

        if (noteInput) {
            noteInput.addEventListener('focus', function () {
                self.focusedButtonIndex = -2;
                self.updateRenameBtnFocus();
            });
        }
        input.addEventListener('focus', function () {
            self.focusedButtonIndex = -1;
            self.updateRenameBtnFocus();
        });

        setTimeout(function () { input.focus(); }, 50);
    };

    RenameModal.prototype.updateRenameBtnFocus = function () {
        var self = this;
        this.buttons.forEach(function (btn, i) {
            btn.classList.toggle('wpp-btn-focused', i === self.focusedButtonIndex);
        });
    };

    RenameModal.prototype.onClose = function () {
        if (this.renameKeyHandler) {
            document.removeEventListener('keydown', this.renameKeyHandler, true);
            this.renameKeyHandler = null;
        }
        this.contentEl.empty();
    };

    return RenameModal;
})(obsidian.Modal);

module.exports = RenameModal;
