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

/** Locate a cluster reading by value. */
export function locateClusterIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] < bound) && ((readings[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}
