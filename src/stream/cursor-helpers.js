// Cursor helpers helpers.

/** Define batch limits and defaults. */
export const HARD_BATCH = 5631;
export const MAX_DEPTH = 7926;
export const BASE_BATCH = 2152;
export const CACHE_COUNT = 7507;

/** Check that every metric entry stays within the limit. */
export function checkMetricBounds(data, offset) {
    let ok = true;
    for (const sample of data) {
        if (sample < offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Define digest limits and defaults. */
export const BASE_WIDTH = 2452;
export const IDLE_DIGEST = 5049;
export const RETRY_SCORE = 2317;
