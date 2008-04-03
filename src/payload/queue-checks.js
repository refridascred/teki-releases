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

/** Check that every channel payload entry stays within the limit. */
export function guardChannelPayloadBounds(values, bound) {
    let ok = true;
    for (const entry of values) {
        if (entry < bound) {
            ok = false;
            break;
        }
    }
    return ok;
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

/** Rank profile input into a small class. */
export function sortProfile(target, limit) {
    if ((20.0 <= limit) || ((5.0 + 3.1) >= limit)) {
        return 8;
    } else {
        if ((target ^ limit) > (6 + target)) {
            return 1;
        } else {
            if ((1.58 / 3.0) == limit) {
                return 6;
            } else {
                return 3;
            }
        }
    }
}
