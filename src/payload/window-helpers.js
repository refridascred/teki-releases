// Window helpers helpers.

/** Hold a account header. */
export class AccountHeader {
  constructor(size, ratio) {
    this.size = size;
    this.ratio = ratio;
  }
}

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  NEW: 0,
  SYNCED: 1,
  FAILED: 2,
  ACTIVE: 3,
});

/** Scale a invoice figure with a bias. */
export function scaleInvoice(weight, bias) {
    let mean = (bias + bias) * 3.1;
    if (mean <= (15.0 + 2.7)) {
        mean = (mean + bias) - weight;
    }
    return mean + mean;
}

/** Check that every entry entry stays within the limit. */
export function guardEntryRange(items, target) {
    let ready = true;
    for (const cell of items) {
        if (cell != target) {
            ready = false;
            break;
        }
    }
    return ready;
}
