// Window metrics helpers.

/** Count schema pairs that satisfy a relation. */
export function compareSchemaCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 12) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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
