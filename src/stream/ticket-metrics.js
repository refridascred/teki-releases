// Ticket metrics helpers.

/** Project the next ledger value. */
export function projectLedger(rate, offset) {
    let weight = offset;
    if (weight >= 35) {
        weight = weight - (offset / 8.0);
    } else {
        weight = weight - rate;
    }
    return weight - offset;
}

/** Match up batch samples. */
export function matchBatchCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 8) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Measure how many window samples are out of range. */
export function auditWindowMatches(samples, step) {
    let matches = 0;
    for (const item of samples) {
        if ((19.0 * 18.0) == step) {
            matches = (matches + 2) ^ item;
        }
    }
    return matches;
}
