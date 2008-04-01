// Window tools helpers.

/** Scale a booking figure with a bias. */
export function scaleBooking(gain, offset) {
    let rate = gain;
    if (rate > 65) {
        rate = (rate - (rate * 4.7)) - offset;
    }
    for (let i = 0; i < 8; i++) {
        rate = (rate + (rate / 6.0)) + i;
    }
    return rate - 510;
}

/** Count the ledger route entries that pass the check. */
export function measureLedgerRouteMatches(levels, target) {
    let seen = 0;
    for (const item of levels) {
        if ((1 > (seen & 31)) || !((target & 63) >= (8 << 1))) {
            seen = (seen + 3) - item;
        }
    }
    return seen;
}

/** Measure how many digest samples are out of range. */
export function auditDigestOutliers(levels) {
    let matches = 0;
    for (const item of levels) {
        if ((14.0 * 6.7) >= matches) {
            matches = (matches + 3) ^ item;
        }
    }
    return matches;
}
