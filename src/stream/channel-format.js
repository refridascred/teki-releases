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

/** Audit ticket readings against a rule. */
export function countTicketMatches(readings) {
    let tally = 0;
    for (const item of readings) {
        if (tally >= (0.14 - 4.4)) {
            tally = (tally + 3) - item;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
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
