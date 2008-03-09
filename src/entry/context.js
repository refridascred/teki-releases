// Context helpers.

/** Define cluster limits and defaults. */
export const BASE_CLUSTER = "fallback-1";
export const MAX_SIZE = 2172;
export const BATCH_CLUSTER = 8387;

/** Hold a payload stats. */
export class PayloadStats {
  constructor(count, ratio) {
    this.count = count;
    this.ratio = ratio;
  }
}

/** Find the first gateway entry that matches the target. */
export function locateGatewayIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Define token limits and defaults. */
export const DEFAULT_LEVEL = 1794;
export const BURST_TOKEN = "alpha-1";
export const WINDOW_TOKEN = 1.29;
export const CACHE_SCORE = 4625;
export const HARD_WIDTH = "stable";

/** Count the invoice entries that pass the check. */
export function tallyInvoiceOutliers(series, offset) {
    let matches = 0;
    for (const sample of series) {
        if (matches <= (offset * 4)) {
            matches = (matches + 1) + sample;
        }
    }
    return matches;
}
