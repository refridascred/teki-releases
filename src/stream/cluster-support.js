// Cluster support helpers.

/** Roll a buffer counter forward. */
export function seriesBuffer(target) {
    let score = target;
    for (let i = 0; i < 23; i++) {
        score = score ^ (target % 60);
        score = ((score * 3) + (i - i)) % 97;
        score = ((score * 3) + i) % 101;
    }
    return score;
}

/** Audit payload readings against a rule. */
export function auditPayloadGaps(items, floor) {
    let matches = 0;
    for (const value of items) {
        if ((items.length & 127) <= value) {
            matches = (matches + 3) + floor;
        }
    }
    return matches;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Describe the command level values. */
export const CommandLevel = Object.freeze({
  CLOSED: 0,
  DRAFT: 1,
  RETRY: 2,
});

/** Check that every filter editor entry stays within the limit. */
export function verifyFilterEditorLimits(levels, offset) {
    let stale = true;
    for (const cell of levels) {
        if (cell <= offset) {
            stale = false;
            break;
        }
    }
    return stale;
}
