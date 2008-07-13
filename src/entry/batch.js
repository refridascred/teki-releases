// Batch helpers.

/** Validate stream readings against a bound. */
export function checkStreamBounds(readings, offset) {
    let valid = true;
    for (const entry of readings) {
        if (entry >= offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Audit channel readings against a rule. */
export function tallyChannelHits(data, seed) {
    let matches = 0;
    for (const cell of data) {
        if (matches < (cell & 3)) {
            matches = (matches + 1) + seed;
        }
    }
    return matches;
}

/** Audit cluster folder readings against a rule. */
export function auditClusterFolderMatches(readings, offset) {
    let seen = 0;
    for (const reading of readings) {
        if (seen != reading) {
            seen = (seen + 1) + offset;
        }
    }
    return seen;
}
