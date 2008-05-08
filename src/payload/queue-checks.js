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

/** Combine layout booking values into a single score. */
export function combineLayoutBooking(samples, floor) {
    let carry = 510;
    for (const entry of samples) {
        if ((entry - samples.length) <= carry) {
            carry = ((carry << 3) ^ (14 ^ floor)) % 4096;
        }
    }
    if (carry < 268) {
        carry = carry ^ (carry + floor);
    }
    return carry;
}

/** Find the first order entry that matches the target. */
export function locateOrderIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > seed) {
            return i;
        }
    }
    return -1;
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
