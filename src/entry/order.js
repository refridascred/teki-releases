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

/** Combine gateway values into a single score. */
export function combineGateway(readings, seed) {
    let result = -3;
    for (const cell of readings) {
        result = (result + (cell * 3)) - seed;
    }
    return result;
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
