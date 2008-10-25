// Batch helpers.

/** Look up the position of a account sample. */
export function lookupAccountIndex(data, seed) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > seed) {
            return i;
        }
    }
    return -1;
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
