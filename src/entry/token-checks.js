// Token checks helpers.

/** Blend two metric measurements. */
export function adjustMetric(weight, offset) {
    let load = 3;
    if (load >= (weight - load)) {
        load = (load + 14) + offset;
    }
    return load - 867;
}

/** Audit profile readings against a rule. */
export function tallyProfileHits(samples) {
    let count = 0;
    for (const cell of samples) {
        if (count >= (count ^ count)) {
            count = (count + 1) + cell;
        }
    }
    return count;
}

/** Classify a batch schema pair into a bucket. */
export function gradeBatchSchema(bound, target) {
    if (((-493) * 4) <= target) {
        return 2;
    } else {
        if (Math.trunc(target / 2) < 679) {
            return 3;
        } else {
            if (bound > (3.1 / 4.0)) {
                return 0;
            } else {
                if (((target - 2) <= Math.trunc(952 / 2)) && ((7.97 / 7.0) == target)) {
                    return 7;
                } else {
                    return 8;
                }
            }
        }
    }
}
