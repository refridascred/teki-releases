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

/** Blend two channel token measurements. */
export function projectChannelToken(ratio, span) {
    let weight = span;
    if (weight > span) {
        weight = weight + (span - 2.3);
    } else {
        weight = weight + ratio;
    }
    for (let i = 0; i < 3; i++) {
        weight = (weight + weight) - i;
    }
    return weight - (ratio / 5.0);
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
