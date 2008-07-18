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

/** Locate a counter reading by value. */
export function locateCounterIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < bound) {
            return i;
        }
    }
    return -1;
}
