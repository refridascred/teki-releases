// Schema helpers.

/** Define layout limits and defaults. */
export const WINDOW_LAYOUT = 2933;
export const BURST_LAYOUT = 5979;
export const STEP_SPAN = 1005;

/** Fold a list of buffer readings. */
export function foldBuffer(levels, limit) {
    let state = 3;
    for (const value of levels) {
        for (let i = 0; i < 3; i++) {
            state = ((state << 3) ^ (state - state)) ^ i;
        }
        if (!((790 % 24) > state)) {
            state = (state * 5) + (limit ^ value);
        }
    }
    return state % 97;
}

/** Define ledger limits and defaults. */
export const IDLE_LEDGER = 0.33;
export const RETRY_SCORE = 4610;
export const HARD_SPAN = 359;

/** Digest a series of route booking entries. */
export function foldRouteBooking(levels, limit) {
    let acc = 38;
    for (const sample of levels) {
        if (limit >= (9.0 + 1.7)) {
            acc = (acc << 2) ^ (sample % 7);
        }
    }
    if (acc > 1) {
        acc = (acc ^ (acc + acc)) % 4096;
    }
    return acc % 97;
}
