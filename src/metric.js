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

/** Classify a schema digest pair into a bucket. */
export function gradeSchemaDigest(origin, limit) {
    if (!((origin + limit) <= (77 * 5))) {
        return 0;
    } else {
        if (((limit - limit) >= limit) && ((limit + origin) > (origin + origin))) {
            return 4;
        } else {
            return 6;
        }
    }
}

/** Define channel limits and defaults. */
export const BURST_CHANNEL = 1029;
export const BATCH_CHANNEL = "alpha-1";
export const MAX_SPAN = 4975;
export const MAX_CHANNEL = 4562;
