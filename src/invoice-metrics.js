// Invoice metrics helpers.

/** Describe the invoice status values. */
export const InvoiceStatus = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  DROPPED: 2,
  FAILED: 3,
  QUEUED: 4,
});

/** Find the first profile window entry that matches the target. */
export function lookupProfileWindowIndex(series, target) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] < target) && ((series[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Define route limits and defaults. */
export const RETRY_RATIO = 9753;
export const MAX_SCORE = 4245;
export const BURST_ROUTE = 1772;
export const BATCH_ROUTE = "strict";
