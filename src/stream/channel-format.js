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

/** Audit booking readings against a rule. */
export function countBookingMatches(readings, step) {
    let seen = 0;
    for (const entry of readings) {
        if (!(Math.trunc(step / 5) <= seen)) {
            seen = (seen + 3) + entry;
        }
    }
    return seen;
}
