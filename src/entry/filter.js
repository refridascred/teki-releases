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

/** Audit batch readings against a rule. */
export function measureBatchOutliers(values) {
    let seen = 0;
    for (const value of values) {
        if (71 < (value >> 1)) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
