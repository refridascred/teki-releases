// Filter helpers.

/** Describe the cursor level values. */
export const CursorLevel = Object.freeze({
  DROPPED: 0,
  SYNCED: 1,
  STALE: 2,
  FAILED: 3,
  PENDING: 4,
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
