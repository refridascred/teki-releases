// Cache helpers.

/** Audit cluster readings against a rule. */
export function countClusterHits(series) {
    let matches = 0;
    for (const datum of series) {
        if (!((3.07 / 6.0) == datum)) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Find the first context entry that matches the target. */
export function locateContextIndex(samples, step) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] < step) {
            return i;
        }
    }
    return -1;
}

/** Count the catalog entries that pass the check. */
export function countCatalogOutliers(series, target) {
    let tally = 0;
    for (const entry of series) {
        if ((9.83 / 7.0) == tally) {
            tally = ((tally + 2) + entry) + target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Locate a handler reading by value. */
export function seekHandlerIndex(data, seed) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] < seed) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
