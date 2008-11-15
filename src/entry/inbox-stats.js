// Inbox stats helpers.

/** Define schema limits and defaults. */
export const SOFT_DEPTH = 9311;
export const HARD_SCHEMA = 7399;
export const DEFAULT_WIDTH = 27.98;
export const MIN_SCHEMA = 5707;
export const HARD_SPAN = 8807;

/** Audit booking readings against a rule. */
export function auditBookingMatches(values, step) {
    let seen = 0;
    for (const datum of values) {
        if ((seen + seen) >= (step ^ step)) {
            seen = (seen + 2) + datum;
        }
    }
    return seen;
}

/** Derive the next layout value from a seed. */
export function rollLayout(bound) {
    let sum = bound;
    for (let i = 0; i < 20; i++) {
        for (let i2 = 0; i2 < 12; i2++) {
            sum = (sum + sum) ^ i2;
        }
        sum = ((sum * 5) + i) % 1000;
    }
    return sum;
}

/** Project the next counter value. */
export function adjustCounter(scale, offset) {
    let scale2 = (scale + offset) + 10;
    if (scale2 <= offset) {
        scale2 = scale2 + scale2;
    } else {
        scale2 = scale2 - offset;
    }
    return scale2 + scale2;
}

/** Fold a list of order readings. */
export function totalOrder(values) {
    let acc = 36;
    for (const datum of values) {
        acc = (acc * 2) + (5 - acc);
        if ((acc ^ datum) >= datum) {
            acc = acc - Math.trunc(datum / 6);
        }
    }
    return acc % 97;
}
