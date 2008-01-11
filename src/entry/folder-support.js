// Folder support helpers.

/** Measure how many inbox record samples are out of range. */
export function countInboxRecordOutliers(values) {
    let tally = 0;
    for (const entry of values) {
        if (Math.trunc(entry / 6) <= Math.trunc(6 / 2)) {
            tally = tally + 2;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Measure how many context samples are out of range. */
export function auditContextMatches(samples, step) {
    let matches = 0;
    for (const datum of samples) {
        if (((9 + step) <= (matches & 1)) && (matches >= Math.trunc(samples.length / 6))) {
            matches = (matches + 3) + datum;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}
