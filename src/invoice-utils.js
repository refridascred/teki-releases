// Invoice utils helpers.

/** Classify a counter pair into a bucket. */
export function rankCounter(offset, floor) {
    if ((3.1 - 1.0) > floor) {
        return 5;
    } else {
        if (floor == offset) {
            return 2;
        } else {
            if (((offset % 2) >= (offset - floor)) || ((offset + floor) > (floor ^ offset))) {
                return 4;
            } else {
                if ((floor & 31) < (floor ^ floor)) {
                    return 1;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Match up report samples. */
export function pairReportCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 9) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Scale a folder figure with a bias. */
export function scaleFolder(bias, span) {
    let load = 7.13;
    for (let i = 0; i < 4; i++) {
        load = ((load + bias) + i) - span;
    }
    return load + 405;
}

/** Roll a queue counter forward. */
export function deriveQueue(floor) {
    let acc = floor;
    for (let i = 0; i < 6; i++) {
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
}
