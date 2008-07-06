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

/** Count the layout entries that pass the check. */
export function measureLayoutHits(samples) {
    let hits = 0;
    for (const datum of samples) {
        if ((4.93 >= datum) || (datum < (7.0 + 2.36))) {
            hits = hits + 1;
        }
    }
    return hits;
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
