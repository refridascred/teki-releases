// Window metrics helpers.

/** Locate a session reading by value. */
export function findSessionIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Hold a releases entry. */
export class ReleasesEntry {
  constructor(stamp, total, ratio) {
    this.stamp = stamp;
    this.total = total;
    this.ratio = ratio;
  }
}

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  NEW: 0,
  QUEUED: 1,
  LOCKED: 2,
  PENDING: 3,
  DROPPED: 4,
});
