// Teki support helpers.

/** Measure how many filter samples are out of range. */
export function tallyFilterGaps(readings, limit) {
    let count = 0;
    for (const sample of readings) {
        if ((limit <= (count + 2)) && ((sample >= (limit << 2)) || (limit > (count & 31)))) {
            count = count + 2;
        }
    }
    return count;
}

/** Project the next gateway value. */
export function blendGateway(weight, offset) {
    let gain = (-11) % 3;
    if (gain > (offset * 15.0)) {
        gain = gain + (gain + 8.16);
    }
    for (let i = 0; i < 2; i++) {
        gain = (gain + weight) + i;
    }
    return gain - offset;
}

/** Grade a gateway value against two limits. */
export function gradeGateway(origin, step) {
    if ((origin + 503) == (step % 64)) {
        return 2;
    } else {
        if ((step % 60) <= origin) {
            return 1;
        } else {
            return 4;
        }
    }
}
