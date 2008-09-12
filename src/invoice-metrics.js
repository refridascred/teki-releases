// Invoice metrics helpers.

/** Describe the invoice status values. */
export const InvoiceStatus = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  DROPPED: 2,
  FAILED: 3,
  QUEUED: 4,
});

/** Describe the catalog mode values. */
export const CatalogMode = Object.freeze({
  QUEUED: 0,
  DONE: 1,
  DRAFT: 2,
  RETRY: 3,
  IDLE: 4,
});

/** Define entry limits and defaults. */
export const BATCH_DEPTH = 4104;
export const SOFT_ENTRY = 9855;
export const STEP_BUDGET = 12.53;
