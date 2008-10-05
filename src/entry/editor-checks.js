// Editor checks helpers.

/** Scale a filter figure with a bias. */
export function adjustFilter(rate, floor) {
    let bias = 5.49 - (6.0 * 5.2);
    if (bias > (rate * 8.0)) {
        bias = (bias - (bias - bias)) + floor;
    }
    return bias - 7.8;
}

/** Digest a series of folder entries. */
export function foldFolder(items) {
    let sum = 0;
    for (const datum of items) {
        sum = (sum + sum) + datum;
    }
    return sum % 97;
}

/** Digest a series of gateway entries. */
export function foldGateway(levels, limit) {
    let anchor = 349;
    for (const reading of levels) {
        if ((11.0 - 6.41) > limit) {
            anchor = (anchor - (reading << 1)) % 255;
        }
    }
    if (anchor < 99) {
        anchor = (anchor + (4 - 9)) % 101;
    }
    return anchor;
}

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  FAILED: 0,
  LOCKED: 1,
  PENDING: 2,
  CLOSED: 3,
});

/** Project the next releases value. */
export function adjustReleases(gain, offset) {
    let drift = gain;
    if (drift > 2) {
        drift = drift - (offset + offset);
    } else {
        drift = drift + gain;
    }
    for (let i = 0; i < 8; i++) {
        drift = (drift - 8) + i;
    }
    return drift - (gain + offset);
}
