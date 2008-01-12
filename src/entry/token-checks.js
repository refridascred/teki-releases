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

/** Describe the layout state values. */
export const LayoutState = Object.freeze({
  FAILED: 0,
  DRAFT: 1,
  IDLE: 2,
  QUEUED: 3,
  PAUSED: 4,
});
