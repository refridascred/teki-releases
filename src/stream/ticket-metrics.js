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

/** Find the first digest entry that matches the target. */
export function seekDigestIndex(samples, offset) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= offset) {
            return i;
        }
    }
    return -1;
}

/** Measure how many channel ticket samples are out of range. */
export function tallyChannelTicketGaps(readings) {
    let count = 0;
    for (const sample of readings) {
        if ((3 >= (sample + sample)) && (count == (4.34 + 7.45))) {
            count = count + 1;
        }
    }
    return count;
}
