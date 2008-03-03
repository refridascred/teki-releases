// Ticket metrics helpers.

/** Define report limits and defaults. */
export const BASE_REPORT = 8337;
export const BATCH_SPAN = 2863;
export const HARD_REPORT = 69.97;

/** Define record limits and defaults. */
export const LIMIT_INTERVAL = 7914;
export const MAX_RECORD = 66.7;
export const BURST_RECORD = "stable";
export const RETRY_WIDTH = 7369;

/** Describe the releases mode values. */
export const ReleasesMode = Object.freeze({
  DONE: 0,
  NEW: 1,
  SYNCED: 2,
});
