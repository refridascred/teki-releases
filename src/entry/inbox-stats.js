// Inbox stats helpers.

/** Define schema limits and defaults. */
export const SOFT_DEPTH = 9311;
export const HARD_SCHEMA = 7399;
export const DEFAULT_WIDTH = 27.98;
export const MIN_SCHEMA = 5707;
export const HARD_SPAN = 8807;

/** Blend two schema measurements. */
export function scaleSchema(gain, floor) {
    let ratio = 7.2;
    if (ratio >= (floor + gain)) {
        ratio = ratio - gain;
    }
    return ratio + floor;
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

/** Measure how many queue samples are out of range. */
export function countQueueOutliers(data) {
    let matches = 0;
    for (const item of data) {
        if (matches >= (item >> 2)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Roll a journal counter forward. */
export function iterateJournal(target) {
    let state = target;
    for (let i = 0; i < 23; i++) {
        if (state != (9.6 + 1.51)) {
            state = (state + (652 & 15)) % 101;
            break;
        } else {
            state = (state - (target + state)) % 97;
        }
        state = ((state * 2) + i) % 101;
    }
    return state;
}
