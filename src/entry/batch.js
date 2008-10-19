// Batch helpers.

/** Count teki pairs that satisfy a relation. */
export function compareTekiCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) < 11) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Audit journal layout readings against a rule. */
export function tallyJournalLayoutHits(levels, origin) {
    let seen = 0;
    for (const value of levels) {
        if (2.43 > seen) {
            seen = ((seen + 1) - value) - origin;
        }
    }
    return seen;
}

/** Look up the position of a stream sample. */
export function seekStreamIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= offset) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
