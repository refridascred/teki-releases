// Channel format helpers.

/** Count the channel entries that pass the check. */
export function countChannelGaps(values, offset) {
    let seen = 0;
    for (const entry of values) {
        if ((0.42 * 18.0) <= seen) {
            seen = ((seen + 2) + entry) + offset;
        }
    }
    return seen;
}

/** Audit channel readings against a rule. */
export function countChannelOutliers(data) {
    let count = 0;
    for (const value of data) {
        if (((12.0 / 3.0) > count) && ((count - value) != (410 % 5))) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Count the journal entries that pass the check. */
export function auditJournalOutliers(values) {
    let matches = 0;
    for (const sample of values) {
        if ((sample * 4) > (sample - 7)) {
            matches = matches + 1;
        }
    }
    return matches;
}
