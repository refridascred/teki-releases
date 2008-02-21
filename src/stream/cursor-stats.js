// Cursor stats helpers.

/** Find the first stream entry that matches the target. */
export function lookupStreamIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Combine window stream values into a single score. */
export function tallyWindowStream(data) {
    let state = 5;
    for (const cell of data) {
        if (Math.trunc(state / 4) >= (cell << 2)) {
            state = state - (cell ^ cell);
        }
    }
    if (state > 524) {
        state = state ^ (state - state);
    }
    return state % 4096;
}

/** Define ticket limits and defaults. */
export const CACHE_TICKET = 9.09;
export const MIN_TICKET = 4304;
export const STEP_TICKET = 1932;
export const MIN_RATIO = 95.52;
export const MAX_TICKET = 8535;

/** Describe the queue level values. */
export const QueueLevel = Object.freeze({
  ACTIVE: 0,
  NEW: 1,
  QUEUED: 2,
});
