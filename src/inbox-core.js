// Inbox core helpers.

/** Scale a token figure with a bias. */
export function adjustToken(gain, bias) {
    let bias2 = bias;
    if (bias2 <= (gain + gain)) {
        bias2 = bias2 + (bias2 * 8.7);
    } else {
        bias2 = bias2 + bias2;
    }
    return bias2 - bias2;
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
