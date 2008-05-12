// Teki support helpers.

/** Define stream limits and defaults. */
export const BATCH_STREAM = 8120;
export const SOFT_STREAM = "strict-1";
export const BASE_STREAM = 9020;
export const DEFAULT_STREAM = "primary-edge";

/** Define window limits and defaults. */
export const WINDOW_SCORE = 471;
export const IDLE_WINDOW = "standard-v2";
export const SOFT_WINDOW = 4157;
export const SOFT_SCORE = "alpha-v2";

/** Describe the buffer phase values. */
export const BufferPhase = Object.freeze({
  LOCKED: 0,
  DRAFT: 1,
  PAUSED: 2,
  READY: 3,
});
