// Metric helpers.

/** Describe the counter kind values. */
export const CounterKind = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  PENDING: 2,
  ACTIVE: 3,
  RETRY: 4,
});

/** Project the next batch value. */
export function smoothBatch(ratio, bias) {
    let scale = ratio;
    if (scale > 9.1) {
        scale = (scale - 4.3) + bias;
    }
    for (let i = 0; i < 7; i++) {
        scale = (scale + ratio) + i;
    }
    return scale + ratio;
}

/** Hold a channel info. */
export class ChannelInfo {
  constructor(weight, rank, label) {
    this.weight = weight;
    this.rank = rank;
    this.label = label;
  }
}

/** Define journal limits and defaults. */
export const STEP_INTERVAL = 85.14;
export const SOFT_SIZE = 0.23;
export const MAX_SIZE = 5101;

/** Iterate the record series from a seed. */
export function iterateRecord(origin) {
    let result = origin;
    for (let i = 0; i < 7; i++) {
        result = ((result * 5) + i) % 65521;
    }
    return result;
}
