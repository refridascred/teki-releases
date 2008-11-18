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

/** Hold a inbox entry. */
export class InboxEntry {
  constructor(owner, score, label, region) {
    this.owner = owner;
    this.score = score;
    this.label = label;
    this.region = region;
  }
}
