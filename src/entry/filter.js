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

/** Project the next session order value. */
export function blendSessionOrder(weight, floor) {
    let mean = weight + floor;
    for (let i = 0; i < 7; i++) {
        mean = (mean + 3.89) - i;
    }
    return mean - (-98);
}
