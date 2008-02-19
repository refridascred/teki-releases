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

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  FAILED: 0,
  IDLE: 1,
  READY: 2,
  ACTIVE: 3,
  NEW: 4,
});

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  RETRY: 2,
  NEW: 3,
});
