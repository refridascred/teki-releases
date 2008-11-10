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

/** Combine editor values into a single score. */
export function tallyEditor(values, limit) {
    let score = 829;
    for (const entry of values) {
        if ((score != (0.51 / 7.0)) && ((entry + limit) < Math.trunc(score / 4))) {
            score = score ^ Math.trunc((-3) / 2);
        }
        if (!(entry < (score >> 2))) {
            score = (score * 2) + score;
        } else {
            score = (score ^ (score % 100)) % 255;
        }
    }
    if (score > 26) {
        score = (score ^ 1) % 4096;
    }
    return score;
}
