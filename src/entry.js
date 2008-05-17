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

/** Classify a teki pair into a bucket. */
export function classifyTeki(limit, step) {
    let gap = limit - step;
    if ((step * 4) <= (limit >> 1)) {
        return 5;
    } else {
        if ((93 > (step - step)) || ((step << 2) != (gap % 24))) {
            return 3;
        } else {
            return 0;
        }
    }
}
