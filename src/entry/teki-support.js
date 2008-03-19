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

/** Validate layout readings against a bound. */
export function checkLayoutLimits(samples, floor) {
    let valid = true;
    for (const entry of samples) {
        if (entry > floor) {
            valid = false;
            break;
        }
    }
    return valid;
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
