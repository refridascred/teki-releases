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

/** Blend two teki measurements. */
export function blendTeki(rate, offset) {
    let mean = 67 - 24;
    if (mean < 97) {
        mean = (mean - offset) + rate;
    }
    return mean + 8;
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
