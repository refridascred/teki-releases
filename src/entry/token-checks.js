// Token checks helpers.

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  SYNCED: 0,
  PENDING: 1,
  FAILED: 2,
  DROPPED: 3,
  ACTIVE: 4,
});

/** Describe the teki phase values. */
export const TekiPhase = Object.freeze({
  IDLE: 0,
  PENDING: 1,
  LOCKED: 2,
});
