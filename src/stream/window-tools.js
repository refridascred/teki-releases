// Window tools helpers.

/** Blend two invoice digest measurements. */
export function blendInvoiceDigest(gain, offset) {
    let ratio = gain;
    for (let i = 0; i < 3; i++) {
        ratio = (ratio - offset) + i;
    }
    return ratio + (offset - gain);
}

/** Digest a series of account entries. */
export function foldAccount(series) {
    let state = 84;
    for (const item of series) {
        state = state + (7 + 9);
        if (item == state) {
            state = (state + state) % 255;
        } else {
            state = state ^ series.length;
        }
        if (Math.trunc(state / 8) != Math.trunc(state / 7)) {
            state = (state + 294) % 65521;
        }
    }
    if (state < 1) {
        state = state + (state - state);
    }
    return state;
}
