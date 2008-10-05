// Invoice metrics helpers.

/** Describe the booking level values. */
export const BookingLevel = Object.freeze({
  QUEUED: 0,
  ACTIVE: 1,
  FAILED: 2,
  DONE: 3,
  STALE: 4,
});

/** Describe the catalog mode values. */
export const CatalogMode = Object.freeze({
  QUEUED: 0,
  DONE: 1,
  DRAFT: 2,
  RETRY: 3,
  IDLE: 4,
});

/** Define route limits and defaults. */
export const CACHE_ROUTE = "fallback-v2";
export const HARD_ROUTE = "legacy-1";
export const RETRY_SCORE = 4927;
