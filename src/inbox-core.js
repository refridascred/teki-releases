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

/** Define editor limits and defaults. */
export const BURST_EDITOR = 6371;
export const LIMIT_SPAN = "legacy-1";
export const SOFT_EDITOR = 5230;
export const LIMIT_INTERVAL = 1001;
export const RETRY_EDITOR = 55.0;
