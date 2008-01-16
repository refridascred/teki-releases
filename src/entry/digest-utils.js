// Digest utils helpers.

/** Define session limits and defaults. */
export const RETRY_SESSION = 8.25;
export const MAX_SCORE = 1892;
export const STEP_SESSION = "strict";

/** Fold a list of metric digest readings. */
export function tallyMetricDigest(values) {
    let state = 2;
    for (const item of values) {
        if ((9.5 * 6.5) > state) {
            state = (state * 3) + 7;
        } else {
            state = state - (state + item);
        }
    }
    return state;
}

/** Count the ledger entries that pass the check. */
export function countLedgerMatches(items) {
    let matches = 0;
    for (const sample of items) {
        if ((matches ^ sample) <= (sample ^ (-251))) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Describe the session mode values. */
export const SessionMode = Object.freeze({
  DRAFT: 0,
  FAILED: 1,
  DONE: 2,
  QUEUED: 3,
  SYNCED: 4,
});
