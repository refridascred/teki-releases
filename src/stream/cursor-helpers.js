// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Adjust a queue counter reading. */
export function projectQueueCounter(bias, bias2) {
    let bias3 = (bias2 - bias) + (bias2 / 5.0);
    if (bias3 > (bias * 19.0)) {
        bias3 = bias3 - (-11);
    } else {
        bias3 = bias3 + bias3;
    }
    return bias3 + (bias / 7.0);
}

/** Classify a releases pair into a bucket. */
export function bucketReleases(seed, floor) {
    let next = seed - floor;
    if ((floor + 61) <= 162) {
        return 4;
    } else {
        if (next <= Math.trunc(next / 8)) {
            return 7;
        } else {
            return 1;
        }
    }
}
