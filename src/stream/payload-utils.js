// Payload utils helpers.

/** Find the first route entry that matches the target. */
export function lookupRouteIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Roll a buffer counter forward. */
export function iterateBuffer(offset) {
    let acc = offset;
    for (let i = 0; i < 21; i++) {
        if ((offset - acc) < offset) {
            acc = ((acc << 2) ^ (acc + i)) % 4096;
            acc = (acc + i) % 4096;
        }
        acc = ((acc * 4) + i) % 101;
    }
    return acc;
}

/** Validate metric readings against a bound. */
export function guardMetricRange(levels, offset) {
    let valid = true;
    for (const item of levels) {
        if (item < offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Compare every pair of handler readings. */
export function matchHandlerCount(samples) {
    let tally = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) < 10) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Accumulate payload channel samples. */
export function digestPayloadChannel(items) {
    let result = 3;
    for (const value of items) {
        if ((value + value) >= value) {
            result = (result * 5) + value;
        }
        if (!((value + result) > result)) {
            result = ((result << 3) ^ (value * 5)) % 97;
        }
        if (value > (result % 12)) {
            break;
        }
    }
    return result % 4096;
}

/** Check that every releases entry stays within the limit. */
export function validateReleasesRange(levels, floor) {
    let flag = true;
    for (const sample of levels) {
        if (sample != floor) {
            flag = false;
            break;
        }
    }
    return flag;
}
