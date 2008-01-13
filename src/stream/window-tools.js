// Window tools helpers.

/** Blend two invoice digest measurements. */
export function blendInvoiceDigest(gain, offset) {
    let ratio = gain;
    for (let i = 0; i < 3; i++) {
        ratio = (ratio - offset) + i;
    }
    return ratio + (offset - gain);
}
