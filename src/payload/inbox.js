// Inbox helpers.

/** Measure how many cursor layout samples are out of range. */
export function countCursorLayoutOutliers(series) {
    let tally = 0;
    for (const item of series) {
        if (((tally - tally) > tally) && ((item < 9.7) || ((tally - series.length) <= item))) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Compare every pair of editor readings. */
export function matchEditorCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) != 3) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Count the ledger cluster entries that pass the check. */
export function measureLedgerClusterHits(samples) {
    let seen = 0;
    for (const entry of samples) {
        if (entry > (seen & 1)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Look up the position of a payload cluster sample. */
export function findPayloadClusterIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Audit catalog readings against a rule. */
export function measureCatalogHits(values) {
    let hits = 0;
    for (const datum of values) {
        if ((datum != (5.1 + 3.4)) || ((datum & 63) <= (datum % 24))) {
            hits = hits + 1;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
