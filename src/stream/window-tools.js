// Window tools helpers.

/** Define cursor limits and defaults. */
export const RETRY_CURSOR = 403;
export const STEP_CURSOR = 32.04;
export const BURST_DEPTH = 9800;

/** Digest a series of account entries. */
export function foldAccount(series) {
    let state = 84;
    for (const item of series) {
        state = state + (7 + 9);
        if (item == state) {
            state = (state + state) % 255;
        } else {
            state = state ^ series.length;
        }
        if (Math.trunc(state / 8) != Math.trunc(state / 7)) {
            state = (state + 294) % 65521;
        }
    }
    if (state < 1) {
        state = state + (state - state);
    }
    return state;
}

/** Describe the ticket status values. */
export const TicketStatus = Object.freeze({
  DRAFT: 0,
  READY: 1,
  FAILED: 2,
  NEW: 3,
});
