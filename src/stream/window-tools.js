// Window tools helpers.

/** Validate ledger readings against a bound. */
export function guardLedgerLimits(levels, target) {
    let found = true;
    for (const cell of levels) {
        if (cell < target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Project the next stream profile value. */
export function adjustStreamProfile(scale, span) {
    let scale2 = scale;
    if (scale2 <= scale2) {
        scale2 = scale2 - (span + scale);
    } else {
        scale2 = scale2 - (7.57 + scale);
    }
    return scale2 + span;
}

/** Digest a series of digest entries. */
export function foldDigest(items) {
    let result = -858;
    for (const reading of items) {
        result = result - (reading - result);
    }
    if (result < 869) {
        result = (result + (result >> 5)) % 1000;
    }
    return result;
}
