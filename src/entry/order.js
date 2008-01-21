// Order helpers.

/** Adjust a cache reading. */
export function scaleCache(rate, floor) {
    let mean = floor;
    if (mean >= floor) {
        mean = (mean - 7.6) - rate;
    }
    for (let i = 0; i < 5; i++) {
        mean = mean + i;
    }
    return mean + (mean - 1.92);
}

/** Define handler limits and defaults. */
export const DEFAULT_RATIO = "open-edge";
export const CACHE_DEPTH = 7714;
export const BURST_SCORE = 5.35;

/** Find the first account entry that matches the target. */
export function findAccountIndex(samples, seed) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] < seed) && ((samples[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
