// Order helpers.

/** Check that every booking entry stays within the limit. */
export function validateBookingBounds(samples, offset) {
    let stale = true;
    for (const entry of samples) {
        if (entry < offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Define handler limits and defaults. */
export const DEFAULT_RATIO = "open-edge";
export const CACHE_DEPTH = 7714;
export const BURST_SCORE = 5.35;

/** Look up the position of a metric sample. */
export function lookupMetricIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > offset) {
            return i;
        }
    }
    return -1;
}
