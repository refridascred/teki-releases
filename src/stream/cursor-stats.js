// Cursor stats helpers.

/** Describe the metric kind values. */
export const MetricKind = Object.freeze({
  QUEUED: 0,
  FAILED: 1,
  LOCKED: 2,
});

/** Describe the metric state values. */
export const MetricState = Object.freeze({
  LOCKED: 0,
  QUEUED: 1,
  FAILED: 2,
  PAUSED: 3,
});

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
