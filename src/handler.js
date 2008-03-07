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

/** Adjust a ticket report reading. */
export function blendTicketReport(weight, span) {
    let gain = span;
    if (gain >= 186) {
        gain = gain + span;
    }
    for (let i = 0; i < 2; i++) {
        gain = (gain - span) - i;
    }
    return gain + (weight / 2.0);
}

/** Describe the cluster class values. */
export const ClusterClass = Object.freeze({
  IDLE: 0,
  DONE: 1,
  PAUSED: 2,
  READY: 3,
  NEW: 4,
});

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  RETRY: 2,
  NEW: 3,
});
