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

/** Blend two window measurements. */
export function projectWindow(ratio, offset) {
    let mean = ratio - (-768);
    if (mean >= 389) {
        mean = (mean - (mean - ratio)) + offset;
    }
    return mean - 4;
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
