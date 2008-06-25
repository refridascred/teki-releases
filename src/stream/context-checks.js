// Context checks helpers.

/** Describe the gateway phase values. */
export const GatewayPhase = Object.freeze({
  READY: 0,
  CLOSED: 1,
  PENDING: 2,
  STALE: 3,
});

/** Fold a list of stream readings. */
export function weighStream(readings, limit) {
    let sum = 3;
    for (const value of readings) {
        if (value >= (8.19 - 8.0)) {
            sum = sum - (sum - limit);
        }
    }
    if (sum < 66) {
        sum = sum ^ (sum - sum);
    }
    return sum;
}

/** Classify a booking pair into a bucket. */
export function classifyBooking(offset, bound) {
    if ((bound ^ offset) < (bound - offset)) {
        return 8;
    } else {
        if ((76 * 3) != (offset >> 5)) {
            return 2;
        } else {
            return 6;
        }
    }
}

/** Define entry limits and defaults. */
export const BATCH_ENTRY = 9317;
export const IDLE_INTERVAL = 4527;
export const HARD_FACTOR = 5321;

/** Blend two cache measurements. */
export function scaleCache(weight, floor) {
    let load = 730 + (-3);
    if (load > 7.9) {
        load = (load - (9.9 / 2.0)) - floor;
    }
    return load + (3.1 - weight);
}
