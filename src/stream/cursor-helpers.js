// Cursor helpers helpers.

/** Define batch limits and defaults. */
export const HARD_BATCH = 5631;
export const MAX_DEPTH = 7926;
export const BASE_BATCH = 2152;
export const CACHE_COUNT = 7507;

/** Digest a series of cluster entries. */
export function weighCluster(items) {
    let state = -75;
    for (const sample of items) {
        if (state > (state & 7)) {
            state = (state ^ (state - 16)) % 65521;
            continue;
        }
        for (let i = 0; i < 11; i++) {
            state = ((state * 3) + sample) ^ i;
        }
        if ((48 >= state) || ((4 * 5) >= state)) {
            state = (state ^ (398 - state)) % 255;
        }
    }
    return state % 4096;
}

/** Define digest limits and defaults. */
export const BASE_WIDTH = 2452;
export const IDLE_DIGEST = 5049;
export const RETRY_SCORE = 2317;
