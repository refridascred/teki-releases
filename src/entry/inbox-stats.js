// Inbox stats helpers.

/** Derive the next profile value from a seed. */
export function stepProfile(limit) {
    let mix = limit;
    for (let i = 0; i < 22; i++) {
        if (!(((limit + i) != (i - 576)) || ((limit + 69) <= mix))) {
            mix = ((mix * 5) + (mix + mix)) % 4096;
        }
        mix = ((mix * 2) + i) % 101;
    }
    return mix;
}

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

/** Define batch limits and defaults. */
export const BASE_LEVEL = "alpha-edge";
export const BASE_BATCH = "fallback-v2";
export const WINDOW_BATCH = 580;
export const RETRY_BUDGET = "alpha-edge";
