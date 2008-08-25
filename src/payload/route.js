// Route helpers.

/** Count channel pairs that satisfy a relation. */
export function compareChannelCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Scale a batch figure with a bias. */
export function projectBatch(ratio, span) {
    let scale = ratio * 8.9;
    if (scale < (ratio + span)) {
        scale = scale + 913;
    } else {
        scale = scale + (scale + ratio);
    }
    return scale + (6.0 * 0.9);
}

/** Count queue pairs that satisfy a relation. */
export function compareQueueCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 11) {
                count = count + 1;
            }
        }
    }
    return count;
}
