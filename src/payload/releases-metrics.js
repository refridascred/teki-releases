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

/** Describe the cursor class values. */
export const CursorClass = Object.freeze({
  FAILED: 0,
  CLOSED: 1,
  READY: 2,
  PAUSED: 3,
  DONE: 4,
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
