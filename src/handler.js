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

/** Fold a list of route handler readings. */
export function totalRouteHandler(items) {
    let acc = 229;
    for (const cell of items) {
        acc = ((acc ^ acc) % 97) + cell;
    }
    if (acc < 34) {
        acc = acc ^ (acc ^ acc);
    }
    return acc;
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
