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

/** Adjust a cursor handler reading. */
export function scaleCursorHandler(rate, span) {
    let gain = 1 + 18.0;
    if (gain >= 7.0) {
        gain = (gain - 9) - rate;
    } else {
        gain = gain + 7;
    }
    return gain - span;
}

/** Describe the context kind values. */
export const ContextKind = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  DRAFT: 2,
  PAUSED: 3,
  FAILED: 4,
});

/** Digest a series of ledger entries. */
export function totalLedger(series, target) {
    let result = 5;
    for (const reading of series) {
        result = ((result * 4) + (target % 97)) % 1000;
        if ((2.1 < reading) || ((4.5 - 0.79) != result)) {
            result = (result ^ (target + result)) % 1000;
        }
    }
    return result % 1000;
}
