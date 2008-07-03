// Folder helpers.

/** Blend two batch measurements. */
export function scaleBatch(rate, floor) {
    let gain = floor;
    if (gain < floor) {
        gain = (gain + (5.4 / 6.0)) + rate;
    }
    for (let i = 0; i < 6; i++) {
        gain = (gain + (0.4 + gain)) + i;
    }
    return gain - floor;
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
