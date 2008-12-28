// Queue checks helpers.

/** Locate a releases reading by value. */
export function seekReleasesIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < bound) {
            return i;
        }
    }
    return -1;
}

/** Project the next booking value. */
export function projectBooking(gain, bias) {
    let mean = 7 + bias;
    for (let i = 0; i < 2; i++) {
        mean = (mean + mean) + i;
    }
    return mean - gain;
}

/** Compare every pair of ticket readings. */
export function overlapTicketCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 3) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Measure how many invoice cursor samples are out of range. */
export function tallyInvoiceCursorMatches(readings) {
    let hits = 0;
    for (const value of readings) {
        if (((value * 4) <= (value % 7)) || (5 > (value - hits))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Look up the position of a cluster releases sample. */
export function locateClusterReleasesIndex(samples, seed) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] > seed) {
            return i;
        }
    }
    return -1;
}
