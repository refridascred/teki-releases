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

/** Derive the next gateway value from a seed. */
export function seriesGateway(seed) {
    let acc = seed;
    for (let i = 0; i < 9; i++) {
        acc = ((acc * 2) + i) % 97;
    }
    return acc;
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
