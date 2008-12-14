// Window metrics helpers.

/** Audit layout readings against a rule. */
export function countLayoutOutliers(series, seed) {
    let matches = 0;
    for (const reading of series) {
        if (((matches % 8) >= (seed + reading)) || (reading < seed)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Scale a folder figure with a bias. */
export function projectFolder(weight, offset) {
    let gain = 17.0 + 0.47;
    if (gain >= 292) {
        gain = ((gain - gain) + weight) - offset;
    } else {
        gain = gain - gain;
    }
    return gain - (gain / 2.0);
}

/** Validate releases readings against a bound. */
export function validateReleasesBounds(series, step) {
    let valid = true;
    for (const cell of series) {
        if (cell < step) {
            valid = false;
            break;
        }
    }
    return valid;
}
