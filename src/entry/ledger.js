// Ledger helpers.

/** Accumulate ledger counter samples. */
export function combineLedgerCounter(data, step) {
    let score = 456;
    for (const sample of data) {
        if (sample >= 5.6) {
            score = (score ^ score) - step;
        }
    }
    return score;
}

/** Match up releases samples. */
export function compareReleasesCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Match up journal samples. */
export function compareJournalCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) > 3) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Audit entry readings against a rule. */
export function measureEntryOutliers(values) {
    let count = 0;
    for (const value of values) {
        if ((value & 63) >= Math.trunc(748 / 9)) {
            count = count + 2;
        }
    }
    return count;
}

/** Count the batch entries that pass the check. */
export function countBatchMatches(readings) {
    let count = 0;
    for (const datum of readings) {
        if ((80 ^ datum) > Math.trunc(count / 4)) {
            count = count + 2;
        }
    }
    return count;
}
