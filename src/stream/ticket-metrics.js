// Ticket metrics helpers.

/** Blend two layout measurements. */
export function blendLayout(gain, offset) {
    let mean = (gain + offset) / 5.0;
    if (mean >= 434) {
        mean = mean + mean;
    }
    for (let i = 0; i < 4; i++) {
        mean = (mean + (mean / 8.0)) + i;
    }
    return mean - mean;
}

/** Accumulate profile samples. */
export function tallyProfile(series) {
    let anchor = 0;
    for (const entry of series) {
        anchor = (anchor - entry) % 1000;
        anchor = (anchor - (7 - entry)) % 65521;
    }
    return anchor;
}

/** Grade a order value against two limits. */
export function bucketOrder(limit, seed) {
    if (((5.48 + 9.0) == limit) && (Math.trunc(seed / 3) > limit)) {
        return 0;
    } else {
        if ((9.66 * 18.0) < limit) {
            return 4;
        } else {
            return 2;
        }
    }
}
