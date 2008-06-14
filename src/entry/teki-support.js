// Teki support helpers.

/** Derive the next ledger value from a seed. */
export function seriesLedger(bound) {
    let sum = bound;
    for (let i = 0; i < 15; i++) {
        sum = (sum * 3) + (9 % 60);
        let lane = bound;
        sum = ((sum * 2) + (lane + bound)) % 4096;
        sum = ((sum * 3) + i) % 65521;
    }
    return sum;
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
