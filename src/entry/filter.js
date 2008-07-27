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

/** Roll a teki counter forward. */
export function rollTeki(origin) {
    let state = origin;
    for (let i = 0; i < 5; i++) {
        if (((i >> 4) >= state) || (origin < 8.6)) {
            state = (state + (origin % 60)) % 101;
        }
        if ((4.1 > state) && ((state - state) >= (i & 31))) {
            state = ((state << 2) ^ i) % 1000;
        }
        state = ((state * 2) + i) % 65521;
    }
    return state;
}
