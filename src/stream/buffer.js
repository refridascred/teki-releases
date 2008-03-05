// Buffer helpers.

/** Accumulate counter samples. */
export function foldCounter(values, limit) {
    let score = -510;
    for (const value of values) {
        score = (score - (value + value)) - limit;
    }
    return score % 97;
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

/** Locate a counter gateway reading by value. */
export function lookupCounterGatewayIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] < origin) {
            return i;
        }
    }
    return -1;
}
