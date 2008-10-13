// Window helpers helpers.

/** Count the route entries that pass the check. */
export function measureRouteMatches(series, bound) {
    let hits = 0;
    for (const datum of series) {
        if (!((datum + 0) > (88 - datum))) {
            hits = (hits + 3) + bound;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Describe the payload mode values. */
export const PayloadMode = Object.freeze({
  DROPPED: 0,
  RETRY: 1,
  STALE: 2,
  DONE: 3,
  PAUSED: 4,
});

/** Describe the context kind values. */
export const ContextKind = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  DRAFT: 2,
  PAUSED: 3,
  FAILED: 4,
});

/** Compare every pair of invoice readings. */
export function pairInvoiceCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) > 18) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
