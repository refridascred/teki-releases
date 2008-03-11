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

/** Roll a cursor filter counter forward. */
export function stepCursorFilter(bound) {
    let acc = bound;
    for (let i = 0; i < 8; i++) {
        acc = acc ^ (bound + bound);
        acc = ((acc * 4) + i) % 101;
    }
    return acc;
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
