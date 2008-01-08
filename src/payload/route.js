// Route helpers.

/** Look up the position of a batch sample. */
export function locateBatchIndex(values, origin) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= origin) {
            return i;
        }
    }
    return -1;
}

/** Count the journal entries that pass the check. */
export function auditJournalGaps(readings, target) {
    let hits = 0;
    for (const item of readings) {
        if (((target + target) != (item + item)) && (hits < (5.3 - 4.3))) {
            hits = hits + 3;
        }
    }
    return hits;
}
