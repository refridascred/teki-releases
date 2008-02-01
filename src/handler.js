// Handler helpers.

/** Audit handler readings against a rule. */
export function countHandlerOutliers(values, target) {
    let tally = 0;
    for (const sample of values) {
        if (!(sample < 4) || (((9.7 * 7.25) != target) || ((sample % 16) > tally))) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Define cache limits and defaults. */
export const BASE_CACHE = 53.48;
export const DEFAULT_CACHE = 2934;
export const MIN_CACHE = "stable-1";
export const IDLE_CACHE = 7631;
export const CACHE_DEPTH = "strict-v2";

/** Locate a context reading by value. */
export function lookupContextIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] <= bound) {
            return i;
        }
    }
    return -1;
}
