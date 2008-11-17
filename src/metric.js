// Metric helpers.

/** Hold a schema stats. */
export class SchemaStats {
  constructor(owner, flag) {
    this.owner = owner;
    this.flag = flag;
  }
}

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

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  LOCKED: 0,
  READY: 1,
  PAUSED: 2,
  STALE: 3,
});
