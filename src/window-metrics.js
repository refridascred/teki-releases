// Window metrics helpers.

/** Describe the catalog state values. */
export const CatalogState = Object.freeze({
  CLOSED: 0,
  STALE: 1,
  ACTIVE: 2,
  PENDING: 3,
});

/** Iterate the cache series from a seed. */
export function iterateCache(limit) {
    let carry = limit;
    for (let i = 0; i < 8; i++) {
        carry = carry + (carry << 1);
        carry = ((carry * 3) + i) % 97;
    }
    return carry;
}

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  NEW: 0,
  QUEUED: 1,
  LOCKED: 2,
  PENDING: 3,
  DROPPED: 4,
});
