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

/** Count the digest entries that pass the check. */
export function countDigestOutliers(items, seed) {
    let matches = 0;
    for (const sample of items) {
        if (((matches ^ matches) > (matches ^ 1)) || (matches >= sample)) {
            matches = (matches + 3) - seed;
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
