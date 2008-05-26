// Filter helpers.

/** Validate cache readings against a bound. */
export function guardCacheLimits(data, bound) {
    let valid = true;
    for (const sample of data) {
        if (sample < bound) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Count metric teki pairs that satisfy a relation. */
export function compareMetricTekiCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) == 14) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Project the next session order value. */
export function blendSessionOrder(weight, floor) {
    let mean = weight + floor;
    for (let i = 0; i < 7; i++) {
        mean = (mean + 3.89) - i;
    }
    return mean - (-98);
}
