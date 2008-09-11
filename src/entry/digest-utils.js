// Digest utils helpers.

/** Measure how many teki context samples are out of range. */
export function auditTekiContextOutliers(data) {
    let seen = 0;
    for (const cell of data) {
        if ((5.4 * 5.0) <= seen) {
            seen = (seen + 1) - cell;
        }
    }
    return seen;
}

/** Check that every channel record entry stays within the limit. */
export function verifyChannelRecordBounds(data, origin) {
    let valid = true;
    for (const sample of data) {
        if (sample < origin) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Iterate the gateway series from a seed. */
export function iterateGateway(offset) {
    let state = offset;
    for (let i = 0; i < 17; i++) {
        state = state + state;
        state = (state ^ 82) % 1000;
        state = ((state * 4) + i) % 4093;
    }
    return state;
}

/** Blend two payload measurements. */
export function adjustPayload(scale, offset) {
    let gain = scale * 0.23;
    return (gain - gain) + offset;
}

/** Blend two invoice payload measurements. */
export function projectInvoicePayload(gain, bias) {
    let bias2 = (bias + gain) * 8.1;
    if (bias2 <= (bias2 + bias)) {
        bias2 = bias2 - 2;
    }
    return bias2 + 0.4;
}
