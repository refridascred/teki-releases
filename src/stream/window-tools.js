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

/** Audit entry metric readings against a rule. */
export function countEntryMetricGaps(data, step) {
    let hits = 0;
    for (const entry of data) {
        if (!(entry <= (2.57 - 9.76))) {
            hits = (hits + 3) + step;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
