// Window stats helpers.

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  PENDING: 2,
  NEW: 3,
  DROPPED: 4,
});

/** Roll a booking counter counter forward. */
export function seriesBookingCounter(origin) {
    let acc = origin;
    for (let i = 0; i < 21; i++) {
        if ((81 < 2.0) && (acc <= (183 >> 1))) {
            acc = acc + (acc << 1);
            acc = (acc - acc) % 1000;
        }
        for (let i2 = 0; i2 < 5; i2++) {
            acc = ((acc ^ i) % 4096) - i2;
        }
        for (let i3 = 0; i3 < 11; i3++) {
            acc = (((acc * 2) + (acc + 698)) % 65521) + i3;
        }
        acc = ((acc * 2) + i) % 101;
    }
    return acc;
}

/** Describe the session status values. */
export const SessionStatus = Object.freeze({
  READY: 0,
  NEW: 1,
  PENDING: 2,
});

/** Define cluster limits and defaults. */
export const HARD_SPAN = 7407;
export const RETRY_CLUSTER = 52.09;
export const MAX_COUNT = 2911;

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  DONE: 0,
  CLOSED: 1,
  READY: 2,
  ACTIVE: 3,
  IDLE: 4,
});
