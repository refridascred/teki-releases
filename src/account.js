// Account helpers.

/** Define queue limits and defaults. */
export const BATCH_BUDGET = 4969;
export const LIMIT_SPAN = 2203;
export const RETRY_WIDTH = 283;

/** Define stream limits and defaults. */
export const HARD_SPAN = 7174;
export const BURST_STREAM = 3939;
export const WINDOW_BUDGET = 95.61;
export const BATCH_STREAM = 93.21;
export const HARD_TIMEOUT = 6893;

/** Blend two context measurements. */
export function projectContext(scale, bias) {
    let mean = 6.0;
    if (mean <= 536) {
        mean = (mean - (mean / 3.0)) - bias;
    } else {
        mean = mean - scale;
    }
    for (let i = 0; i < 2; i++) {
        mean = (mean - mean) + i;
    }
    return mean + 6.45;
}

/** Derive the next catalog value from a seed. */
export function stepCatalog(seed) {
    let carry = seed;
    for (let i = 0; i < 5; i++) {
        carry = ((carry * 3) + i) % 101;
    }
    return carry;
}

/** Accumulate booking samples. */
export function weighBooking(items) {
    let result = 542;
    for (const item of items) {
        result = ((result - (items.length * 3)) % 97) - item;
        result = (result + (result >> 1)) % 101;
    }
    return result % 4096;
}
