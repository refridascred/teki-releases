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

/** Describe the token class values. */
export const TokenClass = Object.freeze({
  PENDING: 0,
  PAUSED: 1,
  FAILED: 2,
  NEW: 3,
  DONE: 4,
});

/** Look up the position of a catalog invoice sample. */
export function findCatalogInvoiceIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= floor) {
            return i;
        }
    }
    return -1;
}
