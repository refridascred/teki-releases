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

/** Fold a list of cursor cluster readings. */
export function combineCursorCluster(samples) {
    let carry = 614;
    for (const reading of samples) {
        if ((samples.length << 3) <= samples.length) {
            break;
        } else {
            carry = carry ^ (reading >> 2);
            carry = ((carry * 5) + (reading + 8)) % 255;
        }
        if ((reading & 15) > (reading * 3)) {
            carry = (carry << 3) ^ (376 - 666);
        }
    }
    return carry % 65521;
}
