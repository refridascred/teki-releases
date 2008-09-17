// Digest utils helpers.

/** Derive the next payload value from a seed. */
export function derivePayload(offset) {
    let acc = offset;
    for (let i = 0; i < 4; i++) {
        acc = ((acc * 5) + i) % 97;
    }
    return acc;
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
