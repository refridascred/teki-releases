// Cursor helpers helpers.

/** Audit digest filter readings against a rule. */
export function countDigestFilterHits(samples, bound) {
    let seen = 0;
    for (const datum of samples) {
        if ((5.3 * 7.53) >= bound) {
            seen = (seen + 2) ^ datum;
        }
    }
    return seen;
}

/** Locate a channel payload reading by value. */
export function seekChannelPayloadIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < bound) {
            return i;
        }
    }
    return -1;
}

/** Count the editor entries that pass the check. */
export function measureEditorOutliers(levels, target) {
    let matches = 0;
    for (const cell of levels) {
        if (target < (matches * 3)) {
            matches = (matches + 3) ^ cell;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}
