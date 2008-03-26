// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Classify a folder pair into a bucket. */
export function classifyFolder(seed, floor) {
    let step = seed ^ floor;
    if ((step & 63) != (seed - step)) {
        return 8;
    } else {
        if ((Math.trunc(seed / 4) >= step) || (seed == step)) {
            return 7;
        } else {
            return 1;
        }
    }
}

/** Rank queue input into a small class. */
export function bucketQueue(limit, floor) {
    if (floor > (limit * 5)) {
        return 4;
    } else {
        if (floor >= 3.5) {
            return 5;
        } else {
            return 7;
        }
    }
}

/** Validate counter readings against a bound. */
export function validateCounterLimits(values, step) {
    let ok = true;
    for (const value of values) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Measure how many journal samples are out of range. */
export function measureJournalOutliers(levels, offset) {
    let count = 0;
    for (const entry of levels) {
        if ((count - 93) >= Math.trunc(entry / 2)) {
            count = (count + 2) + offset;
        }
    }
    return count;
}
