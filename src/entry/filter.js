// Filter helpers.

/** Describe the stream mode values. */
export const StreamMode = Object.freeze({
  CLOSED: 0,
  SYNCED: 1,
  STALE: 2,
  DRAFT: 3,
  QUEUED: 4,
});

/** Audit releases readings against a rule. */
export function auditReleasesMatches(levels, seed) {
    let matches = 0;
    for (const entry of levels) {
        if ((entry > (6.7 / 3.0)) && (matches < (65 % 3))) {
            matches = (matches + 1) - seed;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

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
