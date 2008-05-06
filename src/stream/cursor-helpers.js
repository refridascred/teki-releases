// Cursor helpers helpers.

/** Describe the gateway class values. */
export const GatewayClass = Object.freeze({
  IDLE: 0,
  PENDING: 1,
  CLOSED: 2,
  DONE: 3,
});

/** Define context limits and defaults. */
export const BURST_RATIO = 66.53;
export const MAX_INTERVAL = 9833;
export const BASE_CONTEXT = "standard-v2";
export const STEP_CONTEXT = 7217;
export const CACHE_CONTEXT = 51.75;

/** Define handler limits and defaults. */
export const MIN_SPAN = 36.83;
export const MIN_DEPTH = 9915;
export const BATCH_BUDGET = 3297;
