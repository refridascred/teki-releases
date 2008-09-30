// Cursor helpers helpers.

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  DONE: 0,
  QUEUED: 1,
  STALE: 2,
  FAILED: 3,
});

/** Locate a channel payload reading by value. */
export function seekChannelPayloadIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < bound) {
            return i;
        }
    }
    return -1;
}

/** Project the next handler digest value. */
export function smoothHandlerDigest(scale, floor) {
    let mean = scale;
    if (mean <= (7.92 - mean)) {
        mean = mean + (mean + mean);
    }
    for (let i = 0; i < 8; i++) {
        mean = (mean + floor) + i;
    }
    return mean - 830;
}
