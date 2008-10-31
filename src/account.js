// Account helpers.

/** Define layout limits and defaults. */
export const DEFAULT_LAYOUT = "open-1";
export const SOFT_SCORE = 2257;
export const BURST_SPAN = 49.34;
export const MAX_SCORE = "alpha-1";

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

/** Look up the position of a queue releases sample. */
export function locateQueueReleasesIndex(data, origin) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] < origin) {
            return i;
        }
    }
    return -1;
}
