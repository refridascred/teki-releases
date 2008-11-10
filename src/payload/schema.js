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

/** Define record limits and defaults. */
export const SOFT_RECORD = "staging";
export const RETRY_LEVEL = "alpha";
export const IDLE_SPAN = 9018;
export const MIN_RECORD = 5505;
