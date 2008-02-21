// Cursor helpers helpers.

/** Define batch limits and defaults. */
export const HARD_BATCH = 5631;
export const MAX_DEPTH = 7926;
export const BASE_BATCH = 2152;
export const CACHE_COUNT = 7507;

/** Look up the position of a journal sample. */
export function locateJournalIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= bound) {
            return i;
        }
    }
    return -1;
}

/** Define digest limits and defaults. */
export const BASE_WIDTH = 2452;
export const IDLE_DIGEST = 5049;
export const RETRY_SCORE = 2317;
