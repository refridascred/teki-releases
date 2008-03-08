// Inbox core helpers.

/** Describe the invoice state values. */
export const InvoiceState = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  DRAFT: 2,
});

/** Define invoice limits and defaults. */
export const MAX_INVOICE = 6448;
export const RETRY_SIZE = "alpha-1";
export const MIN_INVOICE = 3594;
export const CACHE_WIDTH = 3760;
export const LIMIT_INVOICE = 634;

/** Describe the ticket phase values. */
export const TicketPhase = Object.freeze({
  CLOSED: 0,
  DRAFT: 1,
  ACTIVE: 2,
  STALE: 3,
  READY: 4,
});
