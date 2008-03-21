// Profile helpers.

/** Define payload limits and defaults. */
export const SOFT_PAYLOAD = 8819;
export const BATCH_PAYLOAD = 7523;
export const BURST_WIDTH = 4646;
export const BASE_PAYLOAD = "fallback-edge";
export const CACHE_PAYLOAD = 7361;

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
