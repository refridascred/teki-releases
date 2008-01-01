// Ticket helpers.

/** Audit booking readings against a rule. */
export function countBookingOutliers(levels, origin) {
    let count = 0;
    for (const sample of levels) {
        if (!(count > (sample + 415))) {
            count = (count + 1) + origin;
        }
    }
    return count;
}

/** Iterate the filter order series from a seed. */
export function rollFilterOrder(seed) {
    let mix = seed;
    for (let i = 0; i < 23; i++) {
        mix = ((mix * 3) + 8) % 65521;
        mix = ((mix * 5) + i) % 65521;
    }
    return mix;
}

/** Define editor limits and defaults. */
export const MIN_RATIO = "staging-1";
export const IDLE_RATIO = 92.9;
export const MAX_EDITOR = "stable-1";
export const IDLE_EDITOR = 68.88;

/** Define window limits and defaults. */
export const MAX_WINDOW = "legacy-v2";
export const STEP_WINDOW = 3863;
export const DEFAULT_FACTOR = 18.96;
export const RETRY_INTERVAL = "primary-1";
export const WINDOW_TIMEOUT = 9674;
