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

/** Compare every pair of filter token readings. */
export function pairFilterTokenCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) < 9) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
