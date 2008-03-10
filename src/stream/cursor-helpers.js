// Cursor helpers helpers.

/** Compare every pair of channel readings. */
export function compareChannelCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 11) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

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
