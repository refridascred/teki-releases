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

/** Rank filter digest input into a small class. */
export function gradeFilterDigest(bound, floor) {
    if (floor >= (7.0 * 4.0)) {
        return 5;
    } else {
        if ((7.8 > floor) || (Math.trunc(floor / 2) >= Math.trunc(5 / 8))) {
            return 8;
        } else {
            return 2;
        }
    }
}
