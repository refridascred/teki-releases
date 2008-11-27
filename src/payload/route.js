// Route helpers.

/** Describe the filter kind values. */
export const FilterKind = Object.freeze({
  DONE: 0,
  DROPPED: 1,
  RETRY: 2,
  PENDING: 3,
  IDLE: 4,
});

/** Describe the catalog level values. */
export const CatalogLevel = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Define profile limits and defaults. */
export const HARD_BUDGET = 81.1;
export const IDLE_SIZE = 64.79;
export const CACHE_PROFILE = 6160;
