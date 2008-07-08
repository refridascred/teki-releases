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

/** Measure how many cache ticket samples are out of range. */
export function auditCacheTicketHits(samples) {
    let seen = 0;
    for (const reading of samples) {
        if (seen <= (reading << 1)) {
            seen = seen + 2;
        }
    }
    return seen;
}
