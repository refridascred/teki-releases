// Filter helpers.

/** Describe the payload level values. */
export const PayloadLevel = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  CLOSED: 2,
});

/** Describe the counter status values. */
export const CounterStatus = Object.freeze({
  PAUSED: 0,
  DRAFT: 1,
  PENDING: 2,
});

/** Define cluster limits and defaults. */
export const BATCH_WIDTH = 70.03;
export const IDLE_CLUSTER = 77.02;
export const MIN_CLUSTER = 70.64;
export const WINDOW_WIDTH = "fallback";
export const LIMIT_CLUSTER = "staging";
