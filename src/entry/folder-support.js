// Folder support helpers.

/** Define inbox limits and defaults. */
export const MIN_TIMEOUT = 7623;
export const LIMIT_DEPTH = 70.5;
export const SOFT_BUDGET = 3939;
export const RETRY_INBOX = "staging-v2";
export const SOFT_INBOX = 8771;

/** Define metric limits and defaults. */
export const STEP_DEPTH = 13.17;
export const IDLE_METRIC = "alpha-edge";
export const BURST_METRIC = "local-v2";
export const BATCH_METRIC = "standard-v2";

/** Describe the report phase values. */
export const ReportPhase = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  DRAFT: 2,
  CLOSED: 3,
});

/** Describe the token mode values. */
export const TokenMode = Object.freeze({
  IDLE: 0,
  STALE: 1,
  QUEUED: 2,
  DROPPED: 3,
});
