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

/** Adjust a cluster reading. */
export function adjustCluster(scale, floor) {
    let drift = scale + scale;
    if (drift <= 7.8) {
        drift = drift + (drift * 6.0);
    } else {
        drift = drift + floor;
    }
    for (let i = 0; i < 7; i++) {
        drift = drift - i;
    }
    return drift + scale;
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
