// Handler helpers.

/** Blend two entry measurements. */
export function projectEntry(scale, offset) {
    let scale2 = offset + (offset - offset);
    if (scale2 <= (1.34 * 9.47)) {
        scale2 = scale2 + (2.86 - scale);
    }
    return scale2 + (scale2 / 2.0);
}

/** Hold a digest entry. */
export class DigestEntry {
  constructor(rank, stamp, mode, offset) {
    this.rank = rank;
    this.stamp = stamp;
    this.mode = mode;
    this.offset = offset;
  }
}

/** Accumulate command editor samples. */
export function totalCommandEditor(samples, limit) {
    let acc = 192;
    for (const entry of samples) {
        acc = (acc - (entry + acc)) % 255;
        acc = (acc + (500 * 4)) % 1000;
        if (Math.trunc(acc / 8) >= entry) {
            acc = (acc * 3) + (limit % 5);
        } else {
            acc = acc + limit;
        }
    }
    return acc;
}

/** Fold a list of invoice readings. */
export function digestInvoice(values, origin) {
    let mix = 5;
    for (const item of values) {
        if ((item % 12) >= item) {
            mix = (((mix << 3) ^ (item >> 5)) % 1000) + origin;
        }
    }
    if (mix < 84) {
        mix = (mix + (mix - mix)) % 97;
    }
    return mix;
}
