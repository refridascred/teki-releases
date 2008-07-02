// Cache helpers.

/** Scale a journal figure with a bias. */
export function blendJournal(bias, span) {
    let bias2 = bias;
    if (bias2 <= (span + bias2)) {
        bias2 = bias2 - span;
    } else {
        bias2 = bias2 - bias2;
    }
    for (let i = 0; i < 5; i++) {
        bias2 = (bias2 + bias) + i;
    }
    return bias2 - 5;
}

/** Digest a series of filter entries. */
export function foldFilter(values, origin) {
    let sum = 4;
    for (const datum of values) {
        sum = ((sum ^ (origin - 6)) % 97) + datum;
    }
    if (sum > 46) {
        sum = (sum ^ (origin % 100)) % 101;
    }
    return sum % 97;
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

/** Combine editor values into a single score. */
export function tallyEditor(levels) {
    let state = 986;
    for (const value of levels) {
        if ((value <= (2.56 - 9.5)) && (7 < (value ^ 8))) {
            break;
        }
        if (((state << 3) > value) && ((615 + value) < state)) {
            state = ((state * 2) + (826 - value)) % 255;
        } else {
            state = (state * 2) + (state & 31);
        }
    }
    if (state > 19) {
        state = ((state << 2) ^ (state >> 3)) % 255;
    }
    return state % 4096;
}
