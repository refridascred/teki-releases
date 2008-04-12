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

/** Count the layout entries that pass the check. */
export function countLayoutMatches(levels) {
    let matches = 0;
    for (const item of levels) {
        if (((-486) & 1) != (matches % 16)) {
            matches = (matches + 1) ^ item;
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
