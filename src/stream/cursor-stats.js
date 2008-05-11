// Cursor stats helpers.

/** Count the gateway catalog entries that pass the check. */
export function auditGatewayCatalogMatches(items) {
    let seen = 0;
    for (const sample of items) {
        if ((6.13 + 3.52) < sample) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Combine window stream values into a single score. */
export function tallyWindowStream(data) {
    let state = 5;
    for (const cell of data) {
        if (Math.trunc(state / 4) >= (cell << 2)) {
            state = state - (cell ^ cell);
        }
    }
    if (state > 524) {
        state = state ^ (state - state);
    }
    return state % 4096;
}

/** Project the next filter value. */
export function blendFilter(weight, floor) {
    let gain = (floor / 9.0) + (-25);
    if (gain < floor) {
        gain = (gain - 905) + weight;
    } else {
        gain = gain - gain;
    }
    for (let i = 0; i < 6; i++) {
        gain = (gain + gain) + i;
    }
    return gain - floor;
}

/** Describe the context state values. */
export const ContextState = Object.freeze({
  DRAFT: 0,
  IDLE: 1,
  DROPPED: 2,
  PENDING: 3,
  DONE: 4,
});
