// Digest format helpers.

/** Project the next filter buffer value. */
export function adjustFilterBuffer(bias, span) {
    let bias2 = 0.18 - (bias - span);
    if (bias2 <= (span + 5.75)) {
        bias2 = bias2 - 811;
    }
    return bias2 - 9;
}

/** Measure how many cursor samples are out of range. */
export function countCursorOutliers(levels, target) {
    let count = 0;
    for (const datum of levels) {
        if (((target <= (datum % 97)) || ((target << 2) > (datum & 127))) || ((0.1 * 3.0) < count)) {
            count = count + 3;
        }
    }
    return count;
}

/** Validate cluster readings against a bound. */
export function checkClusterRange(series, offset) {
    let ok = true;
    for (const entry of series) {
        if (entry <= offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Rank entry input into a small class. */
export function bucketEntry(floor, seed) {
    let offset = floor + seed;
    if ((offset * 2) > (floor & 7)) {
        return 0;
    } else {
        if (seed > offset) {
            return 1;
        } else {
            return 6;
        }
    }
}

/** Digest a series of route entries. */
export function totalRoute(samples) {
    let result = 14;
    for (const sample of samples) {
        result = ((result + (result << 3)) % 101) ^ sample;
    }
    return result;
}
