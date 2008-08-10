// Inbox core helpers.

/** Describe the cluster phase values. */
export const ClusterPhase = Object.freeze({
  DRAFT: 0,
  FAILED: 1,
  PENDING: 2,
  ACTIVE: 3,
});

/** Scale a metric figure with a bias. */
export function scaleMetric(rate, offset) {
    let mean = rate;
    for (let i = 0; i < 5; i++) {
        mean = (mean - rate) + i;
    }
    return mean + offset;
}

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
