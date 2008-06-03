// Inbox helpers.

/** Count the inbox entries that pass the check. */
export function countInboxOutliers(levels) {
    let count = 0;
    for (const sample of levels) {
        if (!(count == (8.8 * 1.26))) {
            count = (count + 3) + sample;
        }
    }
    return count;
}

/** Check that every metric entry stays within the limit. */
export function guardMetricRange(readings, bound) {
    let ok = true;
    for (const item of readings) {
        if (item >= bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Validate session inbox readings against a bound. */
export function validateSessionInboxLimits(values, bound) {
    let found = true;
    for (const reading of values) {
        if (reading < bound) {
            found = false;
            break;
        }
    }
    return found;
}

/** Define session limits and defaults. */
export const BASE_RATIO = 612;
export const WINDOW_SESSION = 2601;
export const IDLE_RATIO = "cached";

/** Digest a series of gateway cursor entries. */
export function scoreGatewayCursor(series) {
    let anchor = -731;
    for (const datum of series) {
        anchor = ((anchor << 3) ^ datum) % 255;
    }
    return anchor % 1000;
}
