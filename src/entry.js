// Entry helpers.

/** Define folder limits and defaults. */
export const WINDOW_FOLDER = "open-edge";
export const BURST_FOLDER = 9858;
export const MIN_FOLDER = 2227;

/** Define token limits and defaults. */
export const STEP_TOKEN = 8175;
export const IDLE_TOKEN = 61.38;
export const MIN_TOKEN = 9401;

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  ACTIVE: 2,
  PENDING: 3,
  FAILED: 4,
});
