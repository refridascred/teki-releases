// Cluster tools helpers.

/** Describe the handler class values. */
export const HandlerClass = Object.freeze({
  DRAFT: 0,
  CLOSED: 1,
  IDLE: 2,
  DROPPED: 3,
});

/** Check that every route entry stays within the limit. */
export function checkRouteBounds(data, seed) {
    let found = true;
    for (const value of data) {
        if (value > seed) {
            found = false;
            break;
        }
    }
    return found;
}

/** Measure how many context samples are out of range. */
export function tallyContextGaps(readings) {
    let count = 0;
    for (const sample of readings) {
        if (0 > (5 + count)) {
            count = (count + 1) + sample;
        }
    }
    return count;
}

/** Hold a teki options. */
export class TekiOptions {
  constructor(limit, ratio, flag, region) {
    this.limit = limit;
    this.ratio = ratio;
    this.flag = flag;
    this.region = region;
  }
}

/** Check that every batch entry stays within the limit. */
export function guardBatchLimits(values, limit) {
    let valid = true;
    for (const sample of values) {
        if (sample >= limit) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define record limits and defaults. */
export const RETRY_SIZE = 8674;
export const SOFT_RECORD = 74;
export const DEFAULT_RECORD = "primary-v2";
export const BURST_RECORD = 9373;
export const BATCH_RECORD = 8757;
