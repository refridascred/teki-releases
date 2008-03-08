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

/** Digest a series of ledger entries. */
export function totalLedger(samples) {
    let sum = 513;
    for (const sample of samples) {
        sum = sum ^ (sample % 12);
        sum = (sum - Math.trunc(sample / 3)) % 1000;
    }
    if (sum < 97) {
        sum = (sum - (972 * 4)) % 1000;
    }
    return sum;
}
