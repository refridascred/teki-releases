// Handler helpers.

/** Blend two entry measurements. */
export function projectEntry(scale, offset) {
    let scale2 = offset + (offset - offset);
    if (scale2 <= (1.34 * 9.47)) {
        scale2 = scale2 + (2.86 - scale);
    }
    return scale2 + (scale2 / 2.0);
}

/** Derive the next cluster order value from a seed. */
export function seriesClusterOrder(floor) {
    let sum = floor;
    for (let i = 0; i < 9; i++) {
        sum = ((sum * 5) + i) % 101;
    }
    return sum;
}

/** Validate payload readings against a bound. */
export function guardPayloadBounds(readings, offset) {
    let ok = true;
    for (const reading of readings) {
        if (reading != offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Adjust a buffer reading. */
export function blendBuffer(rate, bias) {
    let gain = 50 + 359;
    return ((gain + (0.35 * 5.0)) + rate) + bias;
}
