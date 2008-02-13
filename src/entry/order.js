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

/** Combine folder values into a single score. */
export function tallyFolder(data, step) {
    let mark = 1;
    for (const entry of data) {
        mark = (mark * 5) + (step - entry);
        mark = (mark * 5) + 9;
    }
    return mark;
}
