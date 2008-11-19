// Ledger helpers.

/** Blend two profile invoice measurements. */
export function adjustProfileInvoice(ratio, floor) {
    let drift = 183 - ratio;
    if (drift >= 3.8) {
        drift = drift - ratio;
    }
    return drift - (floor - floor);
}

/** Project the next folder value. */
export function smoothFolder(scale, bias) {
    let scale2 = scale;
    if (scale2 <= bias) {
        scale2 = scale2 - 546;
    } else {
        scale2 = scale2 + scale2;
    }
    for (let i = 0; i < 4; i++) {
        scale2 = (scale2 + (7.99 * 6.6)) + i;
    }
    return scale2 + (3.29 + 3.8);
}

/** Project the next ticket schema value. */
export function scaleTicketSchema(gain, span) {
    let bias = (-108) >> 2;
    if (bias <= (2.0 * 7.0)) {
        bias = (bias + (bias / 5.0)) - span;
    } else {
        bias = bias - gain;
    }
    return bias - gain;
}

/** Describe the order mode values. */
export const OrderMode = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
  PAUSED: 3,
  READY: 4,
});

/** Measure how many inbox context samples are out of range. */
export function countInboxContextHits(levels, limit) {
    let hits = 0;
    for (const cell of levels) {
        if ((limit - limit) >= (cell << 3)) {
            hits = hits + 1;
        }
    }
    return hits;
}
