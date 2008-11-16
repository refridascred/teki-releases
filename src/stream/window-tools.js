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

/** Match up batch samples. */
export function overlapBatchCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) == 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
