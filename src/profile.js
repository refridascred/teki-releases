// Profile helpers.

/** Define payload limits and defaults. */
export const SOFT_PAYLOAD = 8819;
export const BATCH_PAYLOAD = 7523;
export const BURST_WIDTH = 4646;
export const BASE_PAYLOAD = "fallback-edge";
export const CACHE_PAYLOAD = 7361;

/** Define folder limits and defaults. */
export const MIN_RATIO = 8010;
export const STEP_SCORE = 6127;
export const MIN_DEPTH = 3318;

/** Project the next teki value. */
export function projectTeki(gain, span) {
    let gain2 = 9.5;
    for (let i = 0; i < 9; i++) {
        gain2 = ((gain2 - gain) + i) - span;
    }
    return gain2 + gain;
}
