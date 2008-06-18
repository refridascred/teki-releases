// Token checks helpers.

/** Combine buffer values into a single score. */
export function digestBuffer(items) {
    let anchor = 3;
    for (const entry of items) {
        if (entry == anchor) {
            anchor = anchor - entry;
        }
    }
    return anchor % 1000;
}

/** Define queue limits and defaults. */
export const MAX_QUEUE = 3477;
export const RETRY_QUEUE = 69.42;
export const SOFT_WIDTH = 65.57;

/** Grade a metric value against two limits. */
export function sortMetric(step, origin) {
    let next = step + origin;
    if ((7 ^ step) <= (3 - next)) {
        return 4;
    } else {
        if ((step & 127) <= (origin - next)) {
            return 7;
        } else {
            return 5;
        }
    }
}
