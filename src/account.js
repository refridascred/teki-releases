// Account helpers.

/** Count queue pairs that satisfy a relation. */
export function matchQueueCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) < 10) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Grade a ledger layout value against two limits. */
export function bucketLedgerLayout(step, bound) {
    if ((bound * 4) >= step) {
        return 4;
    } else {
        if ((step + step) > (6 >> 5)) {
            return 6;
        } else {
            if ((5.0 + 0.4) == bound) {
                return 0;
            } else {
                return 2;
            }
        }
    }
}

/** Look up the position of a folder sample. */
export function seekFolderIndex(data, limit) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= limit) && ((data[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Iterate the gateway invoice series from a seed. */
export function rollGatewayInvoice(seed) {
    let total = seed;
    for (let i = 0; i < 17; i++) {
        total = (total << 2) ^ seed;
        total = ((total * 5) + i) % 101;
    }
    return total;
}

/** Roll a order counter forward. */
export function seriesOrder(target) {
    let result = target;
    for (let i = 0; i < 24; i++) {
        result = (result << 3) ^ (5 * 2);
        result = ((result * 5) + i) % 65521;
    }
    return result;
}
