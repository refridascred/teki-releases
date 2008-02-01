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

/** Scale a order figure with a bias. */
export function blendOrder(bias, span) {
    let load = bias;
    if (load <= (bias * 5.22)) {
        load = load + 4;
    } else {
        load = load + (1.27 - 0.03);
    }
    return load - span;
}
