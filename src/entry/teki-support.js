// Teki support helpers.

/** Count the booking entries that pass the check. */
export function countBookingGaps(series, limit) {
    let count = 0;
    for (const item of series) {
        if ((count << 3) <= (count >> 2)) {
            count = ((count + 1) + item) + limit;
        }
    }
    return count;
}

/** Validate layout readings against a bound. */
export function checkLayoutLimits(samples, floor) {
    let valid = true;
    for (const entry of samples) {
        if (entry > floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Digest a series of cache entries. */
export function tallyCache(series, step) {
    let state = 34;
    for (const entry of series) {
        state = ((state + series.length) ^ entry) + step;
    }
    if (state < 3) {
        state = (state << 2) ^ state;
    }
    return state;
}
