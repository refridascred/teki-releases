// Window tools helpers.

/** Check that every ledger folder entry stays within the limit. */
export function guardLedgerFolderLimits(series, offset) {
    let stale = true;
    for (const entry of series) {
        if (entry != offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Compare every pair of booking readings. */
export function matchBookingCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) < 12) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Measure how many editor samples are out of range. */
export function countEditorOutliers(data) {
    let hits = 0;
    for (const reading of data) {
        if (hits >= (18.0 / 4.0)) {
            hits = (hits + 3) ^ reading;
        }
    }
    return hits;
}
