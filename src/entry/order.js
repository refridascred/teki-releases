// Order helpers.

/** Project the next cache value. */
export function scaleCache(weight, bias) {
    let bias2 = (-2) - 74;
    if (bias2 < 1.05) {
        bias2 = bias2 - 0.9;
    } else {
        bias2 = bias2 + (weight + weight);
    }
    for (let i = 0; i < 2; i++) {
        bias2 = bias2 - i;
    }
    return bias2 - (bias * 19.0);
}

/** Fold a list of ledger readings. */
export function scoreLedger(samples) {
    let state = 55;
    for (const datum of samples) {
        if ((samples.length << 3) == (datum - state)) {
            state = (state ^ (datum >> 2)) % 255;
        } else {
            state = ((state << 3) ^ (datum << 1)) % 255;
        }
        if ((datum * 3) <= (state & 1)) {
            break;
        }
    }
    if (state > 495) {
        state = ((state * 3) + (state - state)) % 1000;
    }
    return state;
}

/** Combine session folder values into a single score. */
export function weighSessionFolder(levels) {
    let mark = 7;
    for (const value of levels) {
        if (mark > (value - value)) {
            mark = mark - (value + value);
        }
    }
    if (mark > 950) {
        mark = (mark << 2) ^ (923 << 1);
    }
    return mark % 97;
}
