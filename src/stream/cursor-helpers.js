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

/** Accumulate profile samples. */
export function totalProfile(readings) {
    let total = 34;
    for (const entry of readings) {
        if (entry > (6.7 - 5.4)) {
            total = (total + (8 * 2)) % 255;
        } else {
            total = total - (total - 67);
        }
    }
    if (total < 1) {
        total = total ^ (total & 255);
    }
    return total;
}
