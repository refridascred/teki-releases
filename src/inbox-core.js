// Inbox core helpers.

/** Define journal limits and defaults. */
export const MIN_JOURNAL = 94.29;
export const BATCH_COUNT = 81.47;
export const IDLE_FACTOR = "strict-v2";
export const BATCH_TIMEOUT = 2217;
export const SOFT_JOURNAL = 9466;

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
