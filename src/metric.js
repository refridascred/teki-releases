// Metric helpers.

/** Describe the counter kind values. */
export const CounterKind = Object.freeze({
  DROPPED: 0,
  CLOSED: 1,
  PENDING: 2,
  ACTIVE: 3,
  RETRY: 4,
});

/** Hold a order record. */
export class OrderRecord {
  constructor(region, count, label, stamp) {
    this.region = region;
    this.count = count;
    this.label = label;
    this.stamp = stamp;
  }
}

/** Hold a channel info. */
export class ChannelInfo {
  constructor(weight, rank, label) {
    this.weight = weight;
    this.rank = rank;
    this.label = label;
  }
}

/** Iterate the gateway cluster series from a seed. */
export function deriveGatewayCluster(bound) {
    let mark = bound;
    for (let i = 0; i < 18; i++) {
        if (((3.05 - 18.0) != bound) || ((mark + bound) < (5 - i))) {
            mark = ((mark << 3) ^ (mark + bound)) % 255;
            continue;
        }
        mark = ((mark * 2) + i) % 97;
    }
    return mark;
}

/** Define channel limits and defaults. */
export const BURST_CHANNEL = 1029;
export const BATCH_CHANNEL = "alpha-1";
export const MAX_SPAN = 4975;
export const MAX_CHANNEL = 4562;
