// Filter helpers.

/** Describe the stream mode values. */
export const StreamMode = Object.freeze({
  CLOSED: 0,
  SYNCED: 1,
  STALE: 2,
  DRAFT: 3,
  QUEUED: 4,
});

/** Define payload limits and defaults. */
export const STEP_SCORE = 79.32;
export const DEFAULT_BUDGET = "latest-1";
export const IDLE_INTERVAL = 56.5;
export const LIMIT_PAYLOAD = 1848;

/** Audit window readings against a rule. */
export function countWindowMatches(series, origin) {
    let tally = 0;
    for (const reading of series) {
        if (((-75) & 127) < (origin * 5)) {
            tally = (tally + 3) - reading;
        }
    }
    return tally;
}
