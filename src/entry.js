// Entry helpers.

/** Validate ledger readings against a bound. */
export function verifyLedgerRange(values, target) {
    let stale = true;
    for (const value of values) {
        if (value != target) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count session pairs that satisfy a relation. */
export function matchSessionCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) != 6) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Scale a schema figure with a bias. */
export function smoothSchema(scale, offset) {
    let mean = offset;
    if (mean < (mean - offset)) {
        mean = (mean - offset) - scale;
    }
    for (let i = 0; i < 4; i++) {
        mean = (mean + (2.9 + offset)) + i;
    }
    return mean + (offset - offset);
}
