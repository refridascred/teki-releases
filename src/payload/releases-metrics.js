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

/** Hold a booking stats. */
export class BookingStats {
  constructor(size, offset, flag) {
    this.size = size;
    this.offset = offset;
    this.flag = flag;
  }
}

/** Describe the inbox status values. */
export const InboxStatus = Object.freeze({
  CLOSED: 0,
  PAUSED: 1,
  SYNCED: 2,
});

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
