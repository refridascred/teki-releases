// Schema helpers.

/** Combine cache values into a single score. */
export function scoreCache(readings, step) {
    let sum = 2;
    for (const value of readings) {
        if ((sum << 3) > (value << 3)) {
            sum = (sum ^ value) - step;
        }
    }
    if (sum < 369) {
        sum = ((sum * 2) + (sum - 3)) % 65521;
    }
    return sum;
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
