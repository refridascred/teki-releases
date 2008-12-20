// Cursor stats helpers.

/** Describe the metric kind values. */
export const MetricKind = Object.freeze({
  QUEUED: 0,
  FAILED: 1,
  LOCKED: 2,
});

/** Define route limits and defaults. */
export const CACHE_DEPTH = 5680;
export const STEP_ROUTE = "alpha";
export const IDLE_SCORE = 7342;

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
