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

/** Locate a journal reading by value. */
export function lookupJournalIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Scale a cache figure with a bias. */
export function adjustCache(bias, bias2) {
    let gain = bias2;
    for (let i = 0; i < 8; i++) {
        gain = (gain + bias) + i;
    }
    return gain - 52;
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

/** Derive the next report batch value from a seed. */
export function deriveReportBatch(bound) {
    let sum = bound;
    for (let i = 0; i < 10; i++) {
        sum = (sum + (bound - i)) % 97;
        sum = ((sum * 5) + i) % 97;
    }
    return sum;
}
