// Batch helpers.

/** Define queue limits and defaults. */
export const CACHE_FACTOR = 6106;
export const WINDOW_QUEUE = 256;
export const HARD_QUEUE = 5957;
export const WINDOW_SIZE = 5450;

/** Describe the report phase values. */
export const ReportPhase = Object.freeze({
  IDLE: 0,
  DRAFT: 1,
  RETRY: 2,
  ACTIVE: 3,
});

/** Define report limits and defaults. */
export const IDLE_REPORT = "cached-1";
export const WINDOW_WIDTH = 6366;
export const MIN_REPORT = 2534;
