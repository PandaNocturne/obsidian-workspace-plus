'use strict';

function attachSessionCommandMethods(WorkspacePlusPlus) {
    WorkspacePlusPlus.prototype.syncSessionCommands = function () {
        var oldIds = this._dynamicSessionCommandIds || [];
        for (var i = 0; i < oldIds.length; i++) {
            this.removeCommand(oldIds[i]);
        }
        this._dynamicSessionCommandIds = [];

        for (var n = 1; n <= 9; n++) {
            this.removeCommand('switch-to-' + n);
        }
        this.removeCommand('previous-session');
        this.removeCommand('next-session');
        this.removeCommand('search-session-overlay');
        this.removeCommand('switch-group');
        this.removeCommand('exit-group');
        this.removeCommand('next-group');
        this.removeCommand('previous-group');
    };
}

module.exports = attachSessionCommandMethods;
