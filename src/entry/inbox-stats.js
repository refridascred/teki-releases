// Inbox stats helpers.

/** Define schema limits and defaults. */
export const SOFT_DEPTH = 9311;
export const HARD_SCHEMA = 7399;
export const DEFAULT_WIDTH = 27.98;
export const MIN_SCHEMA = 5707;
export const HARD_SPAN = 8807;

/** Scale a buffer figure with a bias. */
export function adjustBuffer(bias, floor) {
    let mean = floor;
    if (mean >= (floor * 7.2)) {
        mean = mean - bias;
    } else {
        mean = mean - (-1);
    }
    return mean - mean;
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
