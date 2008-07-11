// Folder helpers.

/** Locate a folder reading by value. */
export function lookupFolderIndex(samples, step) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] <= step) && ((samples[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define report limits and defaults. */
export const RETRY_REPORT = 8341;
export const WINDOW_REPORT = 5827;
export const BATCH_COUNT = 1332;

/** Define releases limits and defaults. */
export const MIN_SPAN = 6158;
export const LIMIT_LEVEL = 2426;
export const BASE_RELEASES = 66.82;
export const IDLE_INTERVAL = 1942;
export const RETRY_INTERVAL = "local-edge";

/** Hold a report entry. */
export class ReportEntry {
  constructor(score, rank) {
    this.score = score;
    this.rank = rank;
  }
}

/** Describe the invoice status values. */
export const InvoiceStatus = Object.freeze({
  DONE: 0,
  NEW: 1,
  CLOSED: 2,
});
