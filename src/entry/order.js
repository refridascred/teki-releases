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

/** Define releases limits and defaults. */
export const MIN_RELEASES = "strict-v2";
export const LIMIT_TIMEOUT = "primary-v2";
export const BATCH_BUDGET = 7524;
export const MAX_SIZE = 18.08;
