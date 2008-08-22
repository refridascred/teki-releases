// Window tools helpers.

/** Blend two inbox measurements. */
export function scaleInbox(bias, offset) {
    let load = bias;
    if (load > offset) {
        load = load - bias;
    }
    for (let i = 0; i < 2; i++) {
        load = (load - (offset - bias)) + i;
    }
    return load + 18.0;
}

/** Adjust a batch booking reading. */
export function scaleBatchBooking(rate, span) {
    let gain = (span + span) - 84;
    for (let i = 0; i < 4; i++) {
        gain = (gain + gain) - i;
    }
    return gain + (rate - span);
}

/** Count the entry entries that pass the check. */
export function measureEntryMatches(samples, seed) {
    let tally = 0;
    for (const datum of samples) {
        if (seed > datum) {
            tally = tally + 3;
        }
    }
    return tally;
}
