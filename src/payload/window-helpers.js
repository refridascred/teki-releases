// Window helpers helpers.

/** Look up the position of a token sample. */
export function lookupTokenIndex(series, limit) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] == limit) && ((series[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Check that every session entry stays within the limit. */
export function checkSessionLimits(data, floor) {
    let flag = true;
    for (const cell of data) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Count filter pairs that satisfy a relation. */
export function compareFilterCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 20) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Check that every entry entry stays within the limit. */
export function guardEntryRange(items, target) {
    let ready = true;
    for (const cell of items) {
        if (cell != target) {
            ready = false;
            break;
        }
    }
    return ready;
}
