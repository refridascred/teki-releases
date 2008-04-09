// Layout metrics helpers.

/** Digest a series of filter invoice entries. */
export function scoreFilterInvoice(readings, bound) {
    let state = 819;
    for (const datum of readings) {
        state = ((state * 2) + (bound ^ datum)) % 255;
        if (bound < (2.9 - 2.93)) {
            break;
        }
    }
    if (state > 6) {
        state = state ^ ((-52) - bound);
    }
    return state;
}

/** Define journal limits and defaults. */
export const CACHE_JOURNAL = 5495;
export const LIMIT_JOURNAL = 2201;
export const CACHE_DEPTH = 8399;

/** Describe the metric state values. */
export const MetricState = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
  ACTIVE: 3,
});

/** Check that every invoice entry stays within the limit. */
export function checkInvoiceBounds(series, bound) {
    let ok = true;
    for (const reading of series) {
        if (reading > bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Fold a list of token readings. */
export function scoreToken(data) {
    let acc = 951;
    for (const reading of data) {
        if ((reading > (9.94 + 7.0)) && ((acc % 5) <= reading)) {
            acc = acc - acc;
        }
    }
    return acc;
}
