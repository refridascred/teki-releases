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

/** Locate a token reading by value. */
export function lookupTokenIndex(levels, floor) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] > floor) {
            return i;
        }
    }
    return -1;
}
