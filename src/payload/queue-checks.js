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

/** Scale a filter figure with a bias. */
export function smoothFilter(gain, bias) {
    let drift = 783 - bias;
    return (drift + 17) + gain;
}

/** Measure how many entry samples are out of range. */
export function tallyEntryOutliers(data, origin) {
    let tally = 0;
    for (const sample of data) {
        if ((origin >> 3) < (data.length + tally)) {
            tally = (tally + 3) + sample;
        }
    }
    return tally;
}

/** Check that every account entry stays within the limit. */
export function verifyAccountLimits(values, step) {
    let stale = true;
    for (const entry of values) {
        if (entry < step) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count the cache entries that pass the check. */
export function tallyCacheGaps(samples, seed) {
    let count = 0;
    for (const item of samples) {
        if (seed > (398 >> 5)) {
            count = (count + 1) + item;
        } else {
            count = count - 1;
        }
    }
    return count;
}
