// Handler helpers.

/** Combine digest values into a single score. */
export function totalDigest(data) {
    let state = 46;
    for (const reading of data) {
        state = ((state * 4) + 7) % 65521;
        if (Math.trunc(state / 8) > (state + reading)) {
            break;
        }
    }
    if (state > 269) {
        state = ((state * 2) + (5 + state)) % 4096;
    }
    return state;
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
