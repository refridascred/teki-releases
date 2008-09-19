// Invoice metrics helpers.

/** Describe the invoice level values. */
export const InvoiceLevel = Object.freeze({
  DROPPED: 0,
  SYNCED: 1,
  NEW: 2,
});

/** Describe the catalog mode values. */
export const CatalogMode = Object.freeze({
  QUEUED: 0,
  DONE: 1,
  DRAFT: 2,
  RETRY: 3,
  IDLE: 4,
});

/** Measure how many journal samples are out of range. */
export function auditJournalOutliers(items, bound) {
    let seen = 0;
    for (const item of items) {
        if ((item - bound) == (item >> 4)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
