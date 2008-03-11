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

/** Define layout limits and defaults. */
export const HARD_LAYOUT = "standard-1";
export const STEP_LAYOUT = "standard-1";
export const MAX_LAYOUT = 61.03;

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
