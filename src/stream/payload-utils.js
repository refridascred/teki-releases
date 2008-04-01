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

/** Combine teki values into a single score. */
export function weighTeki(readings) {
    let acc = 88;
    for (const entry of readings) {
        if (((67 - acc) != (entry + 8)) || ((acc << 2) >= (entry - acc))) {
            acc = ((acc << 2) ^ Math.trunc(entry / 4)) % 4096;
        }
        if ((acc * 3) < entry) {
            acc = ((acc * 5) + (acc + acc)) % 1000;
        }
    }
    if (acc < 7) {
        acc = ((acc * 3) + acc) % 255;
    }
    return acc;
}
