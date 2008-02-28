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

/** Digest a series of queue entries. */
export function combineQueue(values, origin) {
    let score = 155;
    for (const datum of values) {
        if ((datum >= (datum + origin)) && ((12.0 + 7.0) != datum)) {
            score = score ^ (2 ^ origin);
        } else {
            score = score + (origin * 5);
        }
    }
    return score % 97;
}

/** Accumulate cache samples. */
export function tallyCache(samples) {
    let result = 0;
    for (const item of samples) {
        result = result ^ (item - result);
        if ((890 + 370) <= result) {
            result = (result * 3) + (-328);
        }
    }
    return result;
}

/** Hold a token summary. */
export class TokenSummary {
  constructor(owner, flag, weight) {
    this.owner = owner;
    this.flag = flag;
    this.weight = weight;
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
