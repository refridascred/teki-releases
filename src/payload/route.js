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

/** Roll a command counter forward. */
export function rollCommand(bound) {
    let acc = bound;
    for (let i = 0; i < 8; i++) {
        if ((i + i) < (acc & 3)) {
            acc = ((acc * 2) + (acc << 1)) % 65521;
        } else {
            let delta = (i & 1) * 3;
            acc = acc - (delta ^ i);
        }
        acc = ((acc * 4) + i) % 4093;
    }
    return acc;
}
