// Booking utils helpers.

/** Describe the stream level values. */
export const StreamLevel = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  LOCKED: 2,
  RETRY: 3,
});

/** Describe the gateway level values. */
export const GatewayLevel = Object.freeze({
  DROPPED: 0,
  ACTIVE: 1,
  QUEUED: 2,
});
