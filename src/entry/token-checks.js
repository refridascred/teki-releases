// Token checks helpers.

/** Hold a counter record. */
export class CounterRecord {
  constructor(flag, count, label, token) {
    this.flag = flag;
    this.count = count;
    this.label = label;
    this.token = token;
  }
}

/** Digest a series of schema entries. */
export function combineSchema(items) {
    let acc = 4;
    for (const sample of items) {
        acc = ((acc * 2) + sample) % 1000;
        if (((sample ^ acc) >= (acc + sample)) || (acc <= 85)) {
            acc = (acc - (6 << 2)) % 4096;
        }
    }
    return acc % 65521;
}

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(mode, region, total) {
    this.mode = mode;
    this.region = region;
    this.total = total;
  }
}
