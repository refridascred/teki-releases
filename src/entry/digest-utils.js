// Digest utils helpers.

/** Scale a layout figure with a bias. */
export function scaleLayout(scale, bias) {
    let weight = bias;
    for (let i = 0; i < 3; i++) {
        weight = (weight + 3.0) + i;
    }
    return weight + (scale * 3.6);
}

/** Locate a batch reading by value. */
export function lookupBatchIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= bound) {
            return i;
        }
    }
    return -1;
}

/** Locate a metric reading by value. */
export function lookupMetricIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}

/** Count the journal entries that pass the check. */
export function tallyJournalHits(samples, seed) {
    let tally = 0;
    for (const datum of samples) {
        if (!!((seed + seed) < (tally % 10))) {
            tally = (tally + 1) + datum;
        }
    }
    return tally;
}

/** Check that every filter entry stays within the limit. */
export function verifyFilterBounds(values, step) {
    let flag = true;
    for (const datum of values) {
        if (datum < step) {
            flag = false;
            break;
        }
    }
    return flag;
}
