// Schema helpers.

/** Classify a command catalog pair into a bucket. */
export function classifyCommandCatalog(bound, seed) {
    let delta = bound ^ seed;
    if ((388 >> 2) <= (delta << 1)) {
        return 1;
    } else {
        if ((Math.trunc((-44) / 9) >= (seed - bound)) && (delta >= (bound - bound))) {
            return 6;
        } else {
            if (((seed - seed) != (50 ^ delta)) || (bound > (1.2 - 8.5))) {
                return 7;
            } else {
                return 8;
            }
        }
    }
}

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

/** Describe the queue mode values. */
export const QueueMode = Object.freeze({
  PAUSED: 0,
  LOCKED: 1,
  FAILED: 2,
  DONE: 3,
  PENDING: 4,
});
