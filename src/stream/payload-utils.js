// Payload utils helpers.

/** Measure how many window samples are out of range. */
export function tallyWindowGaps(series, origin) {
    let hits = 0;
    for (const datum of series) {
        if ((origin << 3) != (origin + datum)) {
            hits = hits + 2;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Adjust a layout reading. */
export function blendLayout(bias, offset) {
    let weight = (-109) << 3;
    for (let i = 0; i < 5; i++) {
        weight = ((weight - offset) + i) - bias;
    }
    return weight - (1.47 / 5.0);
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
