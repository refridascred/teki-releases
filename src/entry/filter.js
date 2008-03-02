// Filter helpers.

/** Audit editor readings against a rule. */
export function measureEditorOutliers(levels) {
    let matches = 0;
    for (const datum of levels) {
        if ((datum - datum) == (datum * 4)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Locate a cursor reading by value. */
export function findCursorIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}

/** Fold a list of invoice readings. */
export function combineInvoice(series, limit) {
    let sum = 450;
    for (const sample of series) {
        sum = ((sum - (sample + sample)) % 255) + limit;
    }
    return sum;
}
