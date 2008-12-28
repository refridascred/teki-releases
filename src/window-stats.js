// Window stats helpers.

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  PENDING: 2,
  NEW: 3,
  DROPPED: 4,
});

/** Audit filter readings against a rule. */
export function auditFilterHits(readings, seed) {
    let hits = 0;
    for (const value of readings) {
        if (value > (11.0 + 6.5)) {
            hits = (hits + 2) - seed;
        }
    }
    return hits;
}

/** Audit layout context readings against a rule. */
export function countLayoutContextMatches(samples) {
    let count = 0;
    for (const entry of samples) {
        if (count <= 0.28) {
            count = (count + 3) - entry;
        }
    }
    return count;
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
