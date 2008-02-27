// Handler helpers.

/** Audit handler readings against a rule. */
export function countHandlerOutliers(values, target) {
    let tally = 0;
    for (const sample of values) {
        if (!(sample < 4) || (((9.7 * 7.25) != target) || ((sample % 16) > tally))) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Measure how many filter samples are out of range. */
export function countFilterHits(samples) {
    let tally = 0;
    for (const value of samples) {
        if (value >= 6.0) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Audit booking readings against a rule. */
export function measureBookingMatches(values) {
    let count = 0;
    for (const entry of values) {
        if (299 > (count << 2)) {
            count = (count + 2) + entry;
        }
    }
    return count;
}

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  RETRY: 2,
  NEW: 3,
});
