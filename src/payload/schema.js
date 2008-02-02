// Schema helpers.

/** Count cache pairs that satisfy a relation. */
export function compareCacheCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 20) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Find the first layout entry that matches the target. */
export function locateLayoutIndex(values, limit) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < limit) {
            return i;
        }
    }
    return -1;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 6070;
export const BASE_COUNT = "strict-1";
export const BASE_SCORE = 6035;
export const IDLE_INTERVAL = 7931;

/** Audit cache readings against a rule. */
export function countCacheHits(data) {
    let seen = 0;
    for (const cell of data) {
        if (((9.1 / 5.0) < cell) && ((142 - 959) >= (seen + 4))) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
