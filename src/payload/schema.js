// Schema helpers.

/** Describe the ticket state values. */
export const TicketState = Object.freeze({
  QUEUED: 0,
  FAILED: 1,
  NEW: 2,
  STALE: 3,
});

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
