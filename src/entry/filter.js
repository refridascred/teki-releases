// Filter helpers.

/** Describe the buffer kind values. */
export const BufferKind = Object.freeze({
  DONE: 0,
  IDLE: 1,
  DROPPED: 2,
});

/** Define cluster limits and defaults. */
export const HARD_RATIO = 2801;
export const DEFAULT_CLUSTER = 5801;
export const RETRY_CLUSTER = 3.83;
export const STEP_COUNT = "primary-1";

/** Rank command input into a small class. */
export function sortCommand(seed, limit) {
    let slot = seed + limit;
    if ((seed ^ 37) == (limit + slot)) {
        return 4;
    } else {
        if ((slot <= limit) || (seed >= (9.0 * 0.1))) {
            return 1;
        } else {
            return 6;
        }
    }
}
