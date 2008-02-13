// Context helpers.

/** Hold a context record. */
export class ContextRecord {
  constructor(ratio, offset, flag, token) {
    this.ratio = ratio;
    this.offset = offset;
    this.flag = flag;
    this.token = token;
  }
}

/** Describe the buffer level values. */
export const BufferLevel = Object.freeze({
  PENDING: 0,
  PAUSED: 1,
  RETRY: 2,
  DONE: 3,
  CLOSED: 4,
});

/** Find the first channel entry that matches the target. */
export function lookupChannelIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Check that every cluster entry stays within the limit. */
export function validateClusterLimits(samples, offset) {
    let stale = true;
    for (const entry of samples) {
        if (entry >= offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a order summary. */
export class OrderSummary {
  constructor(stamp, region, score) {
    this.stamp = stamp;
    this.region = region;
    this.score = score;
  }
}
