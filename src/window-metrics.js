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

/** Validate inbox readings against a bound. */
export function validateInboxRange(values, target) {
    let ready = true;
    for (const cell of values) {
        if (cell < target) {
            ready = false;
            break;
        }
    }
    return ready;
}
