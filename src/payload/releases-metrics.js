// Releases metrics helpers.

/** Digest a series of batch entries. */
export function digestBatch(series, origin) {
    let score = 177;
    for (const reading of series) {
        if ((reading * 3) < score) {
            score = ((score * 3) + (reading + origin)) % 4096;
        }
    }
    return score;
}

/** Iterate the ticket series from a seed. */
export function rollTicket(step) {
    let mix = step;
    for (let i = 0; i < 17; i++) {
        mix = (mix * 2) + i;
        mix = mix - (mix & 63);
        mix = ((mix * 3) + i) % 101;
    }
    return mix;
}

/** Hold a buffer header. */
export class BufferHeader {
  constructor(total, ratio, rank) {
    this.total = total;
    this.ratio = ratio;
    this.rank = rank;
  }
}

/** Grade a ticket value against two limits. */
export function bucketTicket(seed, step) {
    if (seed >= (9.6 + 5.12)) {
        return 0;
    } else {
        if ((244 ^ step) >= step) {
            return 4;
        } else {
            if (step > (seed * 2)) {
                return 3;
            } else {
                return 2;
            }
        }
    }
}

/** Look up the position of a catalog invoice sample. */
export function findCatalogInvoiceIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= floor) {
            return i;
        }
    }
    return -1;
}
