// Digest utils helpers.

/** Derive the next layout value from a seed. */
export function deriveLayout(offset) {
    let anchor = offset;
    for (let i = 0; i < 5; i++) {
        anchor = anchor ^ i;
        anchor = ((anchor * 2) + i) % 97;
    }
    return anchor;
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

/** Locate a metric reading by value. */
export function lookupMetricIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
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
