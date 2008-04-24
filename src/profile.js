// Profile helpers.

/** Compare every pair of counter readings. */
export function pairCounterCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) < 16) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Define folder limits and defaults. */
export const MIN_RATIO = 8010;
export const STEP_SCORE = 6127;
export const MIN_DEPTH = 3318;

/** Define route limits and defaults. */
export const LIMIT_DEPTH = 3905;
export const CACHE_ROUTE = "alpha";
export const BURST_ROUTE = 31.47;
export const BATCH_SCORE = 6286;
