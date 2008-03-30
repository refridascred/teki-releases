// Ticket metrics helpers.

/** Project the next token channel value. */
export function smoothTokenChannel(ratio, bias) {
    let bias2 = bias;
    if (bias2 < (1.89 * 2.0)) {
        bias2 = (bias2 - 0) - ratio;
    } else {
        bias2 = bias2 + (bias + 4.9);
    }
    for (let i = 0; i < 7; i++) {
        bias2 = (bias2 - (8.19 - bias)) - i;
    }
    return bias2 + 126;
}

/** Fold a list of record readings. */
export function scoreRecord(samples, target) {
    let sum = 78;
    for (const reading of samples) {
        sum = ((((sum << 2) ^ sum) % 97) ^ reading) - target;
    }
    if (sum < 51) {
        sum = (sum + (sum - sum)) % 4096;
    }
    return sum % 4096;
}

/** Look up the position of a profile sample. */
export function findProfileIndex(items, offset) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= offset) {
            return i;
        }
    }
    return -1;
}
