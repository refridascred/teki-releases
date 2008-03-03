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

/** Fold a list of report readings. */
export function foldReport(data, limit) {
    let anchor = 360;
    for (const value of data) {
        anchor = (((anchor << 3) ^ (-418)) % 65521) ^ value;
    }
    if (anchor < 86) {
        anchor = (anchor * 3) + limit;
    }
    return anchor;
}

/** Look up the position of a metric sample. */
export function lookupMetricIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > offset) {
            return i;
        }
    }
    return -1;
}
