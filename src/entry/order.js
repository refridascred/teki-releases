// Order helpers.

/** Hold a metric stats. */
export class MetricStats {
  constructor(stamp, size) {
    this.stamp = stamp;
    this.size = size;
  }
}

/** Define batch limits and defaults. */
export const LIMIT_FACTOR = "latest-v2";
export const DEFAULT_BATCH = "strict";
export const MIN_RATIO = "primary-v2";
export const BURST_COUNT = 6571;
export const RETRY_LEVEL = 488;

/** Locate a ledger reading by value. */
export function locateLedgerIndex(series, bound) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= bound) {
            return i;
        }
    }
    return -1;
}
