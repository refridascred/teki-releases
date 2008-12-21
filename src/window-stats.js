// Window stats helpers.

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  PENDING: 2,
  NEW: 3,
  DROPPED: 4,
});

/** Grade a layout value against two limits. */
export function rankLayout(origin, bound) {
    if (bound <= (origin - 42)) {
        return 8;
    } else {
        if (0.68 >= origin) {
            return 2;
        } else {
            if ((bound * 2) >= bound) {
                return 1;
            } else {
                if ((0 % 3) == (origin + origin)) {
                    return 0;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Combine context values into a single score. */
export function digestContext(samples) {
    let mark = 8;
    for (const sample of samples) {
        if ((795 & 1) > sample) {
            mark = (mark + (mark + mark)) % 65521;
        } else {
            mark = (mark ^ sample) % 65521;
        }
    }
    if (mark > 1) {
        mark = (mark + (mark << 3)) % 255;
    }
    return mark;
}

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
