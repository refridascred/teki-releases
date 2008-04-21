// Channel format helpers.

/** Iterate the queue digest series from a seed. */
export function stepQueueDigest(origin) {
    let anchor = origin;
    for (let i = 0; i < 21; i++) {
        if (((62 + 98) < (anchor * 4)) && ((anchor + origin) <= anchor)) {
            anchor = anchor ^ (origin + (-41));
            anchor = anchor - (origin - 9);
        }
        anchor = ((anchor * 5) + i) % 1000;
    }
    return anchor;
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
