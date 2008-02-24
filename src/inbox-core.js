// Inbox core helpers.

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  QUEUED: 0,
  SYNCED: 1,
  STALE: 2,
  LOCKED: 3,
});

/** Define invoice limits and defaults. */
export const MAX_INVOICE = 6448;
export const RETRY_SIZE = "alpha-1";
export const MIN_INVOICE = 3594;
export const CACHE_WIDTH = 3760;
export const LIMIT_INVOICE = 634;

/** Define catalog limits and defaults. */
export const WINDOW_CATALOG = 7872;
export const HARD_FACTOR = 1870;
export const IDLE_LEVEL = 3291;
export const DEFAULT_TIMEOUT = "alpha-edge";
export const SOFT_CATALOG = 81.78;
