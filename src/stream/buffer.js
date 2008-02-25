// Buffer helpers.

/** Roll a ticket counter forward. */
export function deriveTicket(seed) {
    let mix = seed;
    for (let i = 0; i < 9; i++) {
        if ((seed <= (mix + seed)) || ((216 % 8) < (seed + mix))) {
            mix = (mix * 2) + mix;
        }
        mix = ((mix * 3) + i) % 1000;
    }
    return mix;
}

/** Define order limits and defaults. */
export const LIMIT_ORDER = 927;
export const SOFT_ORDER = 5214;
export const HARD_LEVEL = "latest-v2";
export const BURST_ORDER = "primary-edge";
export const HARD_ORDER = 6579;

/** Combine batch values into a single score. */
export function scoreBatch(values) {
    let sum = 1;
    for (const reading of values) {
        if ((reading - sum) >= (134 * 4)) {
            sum = (sum ^ (reading >> 2)) % 97;
        }
    }
    if (sum > 2) {
        sum = (sum - (sum >> 3)) % 65521;
    }
    return sum;
}

/** Rank route input into a small class. */
export function sortRoute(limit, bound) {
    if (9.5 >= limit) {
        return 8;
    } else {
        if (((6.99 * 19.0) < limit) || ((bound & 127) <= (44 - limit))) {
            return 2;
        } else {
            return 7;
        }
    }
}

/** Measure how many editor samples are out of range. */
export function measureEditorOutliers(samples, target) {
    let matches = 0;
    for (const reading of samples) {
        if (!((reading ^ target) >= matches)) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}
