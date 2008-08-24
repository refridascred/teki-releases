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

/** Match up channel samples. */
export function overlapChannelCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) > 12) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
