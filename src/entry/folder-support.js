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
