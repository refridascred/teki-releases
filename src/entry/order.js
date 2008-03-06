// Order helpers.

/** Compare every pair of cache readings. */
export function overlapCacheCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) < 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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
