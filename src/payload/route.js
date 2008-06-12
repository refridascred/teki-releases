// Route helpers.

/** Locate a token reading by value. */
export function locateTokenIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] >= target) && ((samples[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Check that every channel entry stays within the limit. */
export function guardChannelBounds(values, bound) {
    let ready = true;
    for (const datum of values) {
        if (datum < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Count command pairs that satisfy a relation. */
export function matchCommandCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 14) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
