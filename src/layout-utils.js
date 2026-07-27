'use strict';

function serializeLayout(layout) {
    try {
        return JSON.stringify(layout || null);
    } catch (e) {
        return '';
    }
}

function layoutsEqual(a, b) {
    return serializeLayout(a) === serializeLayout(b);
}

function cloneLayout(layout) {
    if (layout === undefined) return undefined;
    return JSON.parse(JSON.stringify(layout));
}

function nodeContainsId(node, id) {
    if (!id || !node) return false;
    if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) {
            if (nodeContainsId(node[i], id)) return true;
        }
        return false;
    }
    if (typeof node === 'object') {
        if (node.id === id) return true;
        var keys = Object.keys(node);
        for (var k = 0; k < keys.length; k++) {
            if (nodeContainsId(node[keys[k]], id)) return true;
        }
    }
    return false;
}

function mergeMainLayoutIntoCurrent(targetLayout, currentLayout) {
    var target = cloneLayout(targetLayout);
    if (!target || typeof target !== 'object' || !target.main) return target;

    var current = currentLayout && typeof currentLayout === 'object'
        ? cloneLayout(currentLayout)
        : {};

    current.main = target.main;
    if (typeof target.active === 'string' && nodeContainsId(target.main, target.active)) {
        current.active = target.active;
    }
    return current;
}

function looksLikeWorkspaceItem(value) {
    return value
        && typeof value === 'object'
        && typeof value.id === 'string'
        && typeof value.type === 'string'
        && (
            Array.isArray(value.children)
            || value.state !== undefined
            || value.currentTab !== undefined
            || value.direction !== undefined
            || value.collapsed !== undefined
        );
}

function normalizeLayoutForComparison(layout) {
    var options = arguments.length > 1 && arguments[1] ? arguments[1] : {};
    if (options.restoreScope === 'main-only' && layout && typeof layout === 'object' && layout.main) {
        layout = layout.main;
    }

    var volatileKeys = {
        eState: true,
        lastOpenFiles: true,
        scroll: true,
        top: true,
    };

    function normalizeNode(value, depth) {
        if (Array.isArray(value)) {
            return value.map(function (item) { return normalizeNode(item, depth + 1); });
        }
        if (value && typeof value === 'object') {
            var normalized = {};
            var isWorkspaceItem = looksLikeWorkspaceItem(value);
            var keys = Object.keys(value).sort();
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (volatileKeys[key]) continue;
                if (key === 'left' && (value[key] === null || typeof value[key] !== 'object')) continue;
                if (key === 'id' && isWorkspaceItem) continue;
                if (key === 'active' && depth === 0 && typeof value[key] === 'string') continue;
                normalized[key] = normalizeNode(value[key], depth + 1);
            }
            return normalized;
        }
        return value;
    }

    return normalizeNode(layout || null, 0);
}

function layoutsEqualStructural(a, b) {
    var options = arguments.length > 2 && arguments[2] ? arguments[2] : {};
    try {
        return JSON.stringify(normalizeLayoutForComparison(a, options)) === JSON.stringify(normalizeLayoutForComparison(b, options));
    } catch (e) {
        return layoutsEqual(a, b);
    }
}

function getPathBasename(filePath) {
    var normalized = String(filePath || '').replace(/\\/g, '/');
    var parts = normalized.split('/');
    return parts[parts.length - 1] || '';
}

function stripMdExtension(name) {
    return String(name || '').replace(/\.md$/i, '');
}

/**
 * Find a vault file path by basename, similar to QuickAdd rename matching.
 * Prefer exact basename (with extension); fall back to stem match without .md.
 */
function findVaultPathByBasename(files, baseName) {
    var targetBase = getPathBasename(baseName);
    var targetStem = stripMdExtension(targetBase);
    if (!targetBase && !targetStem) return null;

    var filesList = Array.isArray(files) ? files : [];
    var exact = [];
    var stem = [];
    for (var i = 0; i < filesList.length; i++) {
        var entry = filesList[i];
        var path = typeof entry === 'string' ? entry : (entry && entry.path);
        if (!path || typeof path !== 'string') continue;
        var bn = getPathBasename(path);
        if (bn === targetBase) {
            exact.push(path);
        } else if (stripMdExtension(bn) === targetStem) {
            stem.push(path);
        }
    }
    if (exact.length > 0) return exact[0];
    if (stem.length > 0) return stem[0];
    return null;
}

/**
 * Remap missing note paths in a workspace layout by basename lookup.
 *
 * vaultApi:
 * - pathExists(path): boolean
 * - getFiles(): Array<{path:string}|string>
 *
 * options.inPlace: mutate layout instead of cloning
 */
function remapMissingLayoutFilePaths(layout, vaultApi, options) {
    options = options || {};
    vaultApi = vaultApi || {};
    if (!layout || typeof layout !== 'object') {
        return { layout: layout, changed: false, remaps: [] };
    }

    var working = options.inPlace ? layout : cloneLayout(layout);
    var remaps = [];
    var seenFrom = {};
    var filesCache = null;

    function ensureFiles() {
        if (filesCache) return filesCache;
        try {
            filesCache = typeof vaultApi.getFiles === 'function' ? (vaultApi.getFiles() || []) : [];
        } catch (e) {
            filesCache = [];
        }
        return filesCache;
    }

    function resolvePath(filePath) {
        if (!filePath || typeof filePath !== 'string') return filePath;
        var exists = false;
        try {
            exists = typeof vaultApi.pathExists === 'function' && !!vaultApi.pathExists(filePath);
        } catch (e) {
            exists = false;
        }
        if (exists) return filePath;

        var found = findVaultPathByBasename(ensureFiles(), filePath);
        if (found && found !== filePath) {
            if (!seenFrom[filePath]) {
                seenFrom[filePath] = true;
                remaps.push({ from: filePath, to: found });
            }
            return found;
        }
        return filePath;
    }

    function walk(node) {
        if (!node) return;
        if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) walk(node[i]);
            return;
        }
        if (typeof node !== 'object') return;

        if (node.state && typeof node.state === 'object') {
            if (node.state.state && typeof node.state.state === 'object'
                && typeof node.state.state.file === 'string') {
                node.state.state.file = resolvePath(node.state.state.file);
            }
            if (typeof node.state.file === 'string') {
                node.state.file = resolvePath(node.state.file);
            }
        }

        if (Array.isArray(node.children)) walk(node.children);
        if (node.main) walk(node.main);
        if (node.left) walk(node.left);
        if (node.right) walk(node.right);
        if (node.floating) walk(node.floating);
    }

    walk(working);

    if (Array.isArray(working.lastOpenFiles)) {
        working.lastOpenFiles = working.lastOpenFiles.map(resolvePath);
    }

    return {
        layout: working,
        changed: remaps.length > 0,
        remaps: remaps,
    };
}

module.exports = {
    serializeLayout: serializeLayout,
    layoutsEqual: layoutsEqual,
    cloneLayout: cloneLayout,
    mergeMainLayoutIntoCurrent: mergeMainLayoutIntoCurrent,
    normalizeLayoutForComparison: normalizeLayoutForComparison,
    layoutsEqualStructural: layoutsEqualStructural,
    getPathBasename: getPathBasename,
    findVaultPathByBasename: findVaultPathByBasename,
    remapMissingLayoutFilePaths: remapMissingLayoutFilePaths,
};
