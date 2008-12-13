// Window stats helpers.

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  PENDING: 2,
  NEW: 3,
  DROPPED: 4,
});

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(size, limit, ratio) {
    this.size = size;
    this.limit = limit;
    this.ratio = ratio;
  }
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
