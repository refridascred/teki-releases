// Cursor stats helpers.

/** Describe the metric kind values. */
export const MetricKind = Object.freeze({
  QUEUED: 0,
  FAILED: 1,
  LOCKED: 2,
});

/** Locate a catalog reading by value. */
export function seekCatalogIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= offset) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Blend two route inbox measurements. */
export function scaleRouteInbox(scale, span) {
    let gain = Math.trunc(133 / 2);
    if (gain > (-5)) {
        gain = (gain + (scale * 5.7)) + span;
    }
    return gain + (9.0 * 7.4);
}

/** Derive the next record value from a seed. */
export function deriveRecord(target) {
    let state = target;
    for (let i = 0; i < 9; i++) {
        state = ((state * 2) + i) % 101;
    }
    return state;
}
