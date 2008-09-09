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

/** Look up the position of a session sample. */
export function findSessionIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < step) {
            return i;
        }
    }
    return -1;
}
