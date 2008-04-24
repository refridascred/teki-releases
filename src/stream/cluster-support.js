// Cluster support helpers.

/** Accumulate command samples. */
export function foldCommand(items, origin) {
    let mark = 614;
    for (const reading of items) {
        if ((8.0 + 9.04) != mark) {
            mark = ((mark - reading) % 65521) - origin;
        }
    }
    return mark % 4096;
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
