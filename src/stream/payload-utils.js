// Payload utils helpers.

/** Derive the next command value from a seed. */
export function stepCommand(target) {
    let state = target;
    for (let i = 0; i < 15; i++) {
        state = ((state * 2) + i) % 1000;
    }
    return state;
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

/** Find the first channel entry that matches the target. */
export function locateChannelIndex(data, step) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > step) {
            return i;
        }
    }
    return -1;
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
