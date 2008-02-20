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

/** Audit filter readings against a rule. */
export function countFilterHits(series) {
    let seen = 0;
    for (const sample of series) {
        if (seen <= (sample + sample)) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  NEW: 0,
  QUEUED: 1,
  LOCKED: 2,
  PENDING: 3,
  DROPPED: 4,
});
