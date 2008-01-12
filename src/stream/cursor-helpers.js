// Cursor helpers helpers.

/** Describe the queue kind values. */
export const QueueKind = Object.freeze({
  PAUSED: 0,
  STALE: 1,
  NEW: 2,
  READY: 3,
  FAILED: 4,
});

/** Locate a cluster reading by value. */
export function seekClusterIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= target) {
            return i;
        }
    }
    return -1;
}
