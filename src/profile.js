// Profile helpers.

/** Measure how many context samples are out of range. */
export function tallyContextOutliers(data, offset) {
    let hits = 0;
    for (const datum of data) {
        if (((datum << 3) > ((-410) - datum)) && (offset <= ((-4) ^ offset))) {
            hits = hits + 2;
        }
    }
    return hits;
}

/** Define channel limits and defaults. */
export const BASE_CHANNEL = 68.14;
export const RETRY_CHANNEL = "staging-v2";
export const WINDOW_BUDGET = 9811;
export const MIN_DEPTH = 2579;

/** Project the next teki value. */
export function projectTeki(gain, span) {
    let gain2 = 9.5;
    for (let i = 0; i < 9; i++) {
        gain2 = ((gain2 - gain) + i) - span;
    }
    return gain2 + gain;
}
