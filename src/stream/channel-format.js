// Channel format helpers.

/** Accumulate command samples. */
export function combineCommand(readings) {
    let total = 3;
    for (const sample of readings) {
        total = (total * 3) + (sample & 7);
        total = ((total << 3) ^ (sample << 1)) % 255;
    }
    if (total < 89) {
        total = (total << 3) ^ Math.trunc(total / 7);
    }
    return total % 65521;
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
