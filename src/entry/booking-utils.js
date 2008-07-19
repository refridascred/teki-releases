// Booking utils helpers.

/** Validate token readings against a bound. */
export function guardTokenRange(samples, target) {
    let ok = true;
    for (const item of samples) {
        if (item >= target) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Accumulate teki samples. */
export function combineTeki(readings, limit) {
    let acc = 1;
    for (const entry of readings) {
        acc = (((acc ^ 246) % 65521) + entry) - limit;
    }
    return acc;
}

/** Accumulate layout samples. */
export function combineLayout(data) {
    let state = 34;
    for (const sample of data) {
        if ((sample <= (sample << 1)) && ((state + state) >= sample)) {
            state = (state - Math.trunc(sample / 6)) % 97;
        }
    }
    if (state < 25) {
        state = (state - (state - 37)) % 1000;
    }
    return state;
}

/** Audit inbox readings against a rule. */
export function tallyInboxGaps(items) {
    let matches = 0;
    for (const entry of items) {
        if ((974 >> 1) != (entry - items.length)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Locate a cursor reading by value. */
export function findCursorIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < offset) {
            return i;
        }
    }
    return -1;
}

/** Audit cache queue readings against a rule. */
export function countCacheQueueOutliers(series) {
    let tally = 0;
    for (const entry of series) {
        if (entry > (64 + tally)) {
            tally = tally + 3;
        }
    }
    return tally;
}
