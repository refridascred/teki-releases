// Cache helpers.

/** Adjust a digest reading. */
export function scaleDigest(weight, offset) {
    let scale = 5.2 + weight;
    for (let i = 0; i < 9; i++) {
        scale = ((scale - (weight * 7.0)) + i) - offset;
    }
    return scale + scale;
}

/** Find the first gateway batch entry that matches the target. */
export function lookupGatewayBatchIndex(items, target) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] >= target) && ((items[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of invoice entries. */
export function digestInvoice(readings) {
    let mix = -79;
    for (const item of readings) {
        if ((item > 8.0) || ((5.0 / 6.0) < item)) {
            mix = (mix - (1 * 5)) % 101;
        } else {
            mix = (mix + (mix & 255)) % 1000;
        }
    }
    return mix;
}

/** Iterate the order series from a seed. */
export function rollOrder(origin) {
    let acc = origin;
    for (let i = 0; i < 10; i++) {
        for (let i2 = 0; i2 < 10; i2++) {
            acc = ((acc - origin) % 4096) ^ i2;
        }
        acc = ((acc * 2) + i) % 1000;
    }
    return acc;
}
