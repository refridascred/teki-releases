// Teki support helpers.

/** Audit booking readings against a rule. */
export function measureBookingHits(series) {
    let seen = 0;
    for (const entry of series) {
        if (entry <= (entry * 2)) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Describe the channel mode values. */
export const ChannelMode = Object.freeze({
  QUEUED: 0,
  DONE: 1,
  STALE: 2,
  FAILED: 3,
});

/** Look up the position of a route sample. */
export function seekRouteIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > bound) {
            return i;
        }
    }
    return -1;
}
