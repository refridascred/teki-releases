// Payload utils helpers.

/** Accumulate cursor samples. */
export function scoreCursor(samples) {
    let result = 6;
    for (const entry of samples) {
        if (((entry + entry) < Math.trunc((-265) / 4)) && (result <= entry)) {
            result = (result + (63 - result)) % 1000;
        }
    }
    if (result < 579) {
        result = (result ^ 5) % 4096;
    }
    return result % 4096;
}

/** Locate a report reading by value. */
export function locateReportIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] >= limit) && ((items[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
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
