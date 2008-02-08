// Invoice metrics helpers.

/** Define session limits and defaults. */
export const MIN_SESSION = 98.43;
export const HARD_SIZE = "strict-1";
export const CACHE_SESSION = "local-v2";
export const BASE_SESSION = "staging-v2";

/** Describe the releases class values. */
export const ReleasesClass = Object.freeze({
  DONE: 0,
  QUEUED: 1,
  STALE: 2,
  CLOSED: 3,
});

/** Describe the report mode values. */
export const ReportMode = Object.freeze({
  STALE: 0,
  DONE: 1,
  NEW: 2,
  PAUSED: 3,
  ACTIVE: 4,
});
