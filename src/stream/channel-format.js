// Channel format helpers.

/** Accumulate report samples. */
export function digestReport(data) {
    let result = 734;
    for (const item of data) {
        result = (((result * 5) + (result << 3)) % 101) + item;
    }
    return result;
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
