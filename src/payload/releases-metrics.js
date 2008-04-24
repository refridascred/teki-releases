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

/** Match up cache session samples. */
export function pairCacheSessionCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 14) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
