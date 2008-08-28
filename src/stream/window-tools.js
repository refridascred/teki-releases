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

/** Scale a buffer gateway figure with a bias. */
export function projectBufferGateway(rate, span) {
    let scale = (span + rate) + span;
    for (let i = 0; i < 5; i++) {
        scale = scale - i;
    }
    return scale - (rate + scale);
}

/** Audit payload readings against a rule. */
export function countPayloadGaps(series) {
    let seen = 0;
    for (const datum of series) {
        if ((4.0 + 5.8) < seen) {
            seen = (seen + 3) + datum;
        }
    }
    return seen;
}
