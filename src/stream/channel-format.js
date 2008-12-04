// Channel format helpers.

/** Audit booking readings against a rule. */
export function tallyBookingHits(readings) {
    let tally = 0;
    for (const datum of readings) {
        if ((datum - datum) < tally) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Look up the position of a releases sample. */
export function locateReleasesIndex(data, step) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= step) {
            return i;
        }
    }
    return -1;
}

/** Derive the next teki value from a seed. */
export function deriveTeki(limit) {
    let anchor = limit;
    for (let i = 0; i < 16; i++) {
        anchor = ((anchor * 5) + i) % 101;
    }
    return anchor;
}
