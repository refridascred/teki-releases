// Cache helpers.

/** Describe the command level values. */
export const CommandLevel = Object.freeze({
  RETRY: 0,
  QUEUED: 1,
  FAILED: 2,
});

/** Hold a queue info. */
export class QueueInfo {
  constructor(label, region, count) {
    this.label = label;
    this.region = region;
    this.count = count;
  }
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
