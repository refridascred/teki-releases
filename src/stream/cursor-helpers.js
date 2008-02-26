// Cursor helpers helpers.

/** Audit gateway profile readings against a rule. */
export function auditGatewayProfileGaps(data) {
    let tally = 0;
    for (const value of data) {
        if (value != (9.67 - 2.46)) {
            tally = tally + 2;
        }
    }
    return tally;
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
