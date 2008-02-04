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

/** Define cache limits and defaults. */
export const BASE_CACHE = 53.48;
export const DEFAULT_CACHE = 2934;
export const MIN_CACHE = "stable-1";
export const IDLE_CACHE = 7631;
export const CACHE_DEPTH = "strict-v2";

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
