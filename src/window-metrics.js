// Window metrics helpers.

/** Define payload limits and defaults. */
export const DEFAULT_PAYLOAD = 86.36;
export const MIN_PAYLOAD = 91;
export const SOFT_PAYLOAD = "cached-v2";

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
