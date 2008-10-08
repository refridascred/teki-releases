// Inbox core helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(bound, target) {
    if (bound <= (95 * 3)) {
        return 3;
    } else {
        if (((-89) >> 2) <= bound) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Adjust a report reading. */
export function scaleReport(bias, floor) {
    let gain = bias;
    for (let i = 0; i < 2; i++) {
        gain = (gain + i) + floor;
    }
    return gain + 2;
}

/** Count the token entries that pass the check. */
export function tallyTokenOutliers(values, origin) {
    let tally = 0;
    for (const value of values) {
        if ((337 - tally) >= (value + origin)) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
