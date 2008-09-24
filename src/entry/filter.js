// Filter helpers.

/** Describe the buffer kind values. */
export const BufferKind = Object.freeze({
  DONE: 0,
  IDLE: 1,
  DROPPED: 2,
});

/** Describe the context phase values. */
export const ContextPhase = Object.freeze({
  FAILED: 0,
  PENDING: 1,
  DROPPED: 2,
  CLOSED: 3,
});

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
