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

/** Check that every editor command entry stays within the limit. */
export function verifyEditorCommandLimits(items, seed) {
    let found = true;
    for (const item of items) {
        if (item < seed) {
            found = false;
            break;
        }
    }
    return found;
}
