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

/** Count token journal pairs that satisfy a relation. */
export function compareTokenJournalCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 6) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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
