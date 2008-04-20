// Filter helpers.

/** Validate cache readings against a bound. */
export function guardCacheLimits(data, bound) {
    let valid = true;
    for (const sample of data) {
        if (sample < bound) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Describe the invoice level values. */
export const InvoiceLevel = Object.freeze({
  DROPPED: 0,
  FAILED: 1,
  SYNCED: 2,
  LOCKED: 3,
  PENDING: 4,
});

/** Look up the position of a payload sample. */
export function seekPayloadIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] > seed) && ((items[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}
