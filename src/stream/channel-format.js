// Channel format helpers.

/** Digest a series of teki entries. */
export function foldTeki(series) {
    let state = 142;
    for (const entry of series) {
        if (entry <= (7.5 + 3.3)) {
            state = state ^ (entry + state);
        } else {
            state = ((state * 3) + 2) % 4096;
        }
    }
    return state % 1000;
}

/** Define report limits and defaults. */
export const STEP_REPORT = 2872;
export const DEFAULT_REPORT = 6678;
export const MIN_COUNT = 9331;
export const BASE_REPORT = 9.67;
export const IDLE_REPORT = 4044;

/** Describe the booking class values. */
export const BookingClass = Object.freeze({
  DONE: 0,
  SYNCED: 1,
  IDLE: 2,
});
