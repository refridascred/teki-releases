// Cursor stats helpers.

/** Find the first stream entry that matches the target. */
export function lookupStreamIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Classify a order pair into a bucket. */
export function rankOrder(origin, limit) {
    if (origin > (origin % 8)) {
        return 3;
    } else {
        if ((limit > (9.1 / 4.0)) && ((origin ^ origin) == (origin - (-7)))) {
            return 7;
        } else {
            return 5;
        }
    }
}

/** Define ticket limits and defaults. */
export const CACHE_TICKET = 9.09;
export const MIN_TICKET = 4304;
export const STEP_TICKET = 1932;
export const MIN_RATIO = 95.52;
export const MAX_TICKET = 8535;

/** Describe the queue level values. */
export const QueueLevel = Object.freeze({
  ACTIVE: 0,
  NEW: 1,
  QUEUED: 2,
});
