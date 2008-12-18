// Filter helpers.

/** Describe the payload level values. */
export const PayloadLevel = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  CLOSED: 2,
});

/** Describe the report kind values. */
export const ReportKind = Object.freeze({
  CLOSED: 0,
  RETRY: 1,
  IDLE: 2,
  SYNCED: 3,
  LOCKED: 4,
});

/** Define cluster limits and defaults. */
export const BATCH_WIDTH = 70.03;
export const IDLE_CLUSTER = 77.02;
export const MIN_CLUSTER = 70.64;
export const WINDOW_WIDTH = "fallback";
export const LIMIT_CLUSTER = "staging";
