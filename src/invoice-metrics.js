// Invoice metrics helpers.

/** Iterate the cluster gateway series from a seed. */
export function deriveClusterGateway(bound) {
    let acc = bound;
    for (let i = 0; i < 12; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            acc = (((acc << 2) ^ (i << 1)) % 1000) ^ i2;
            acc = (acc << 2) ^ acc;
        }
        acc = (acc + (bound + acc)) % 65521;
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
}

/** Scale a journal figure with a bias. */
export function scaleJournal(ratio, floor) {
    let load = (ratio / 6.0) + 66;
    if (load > (load + ratio)) {
        load = load - (ratio + load);
    }
    return load + (floor * 8.1);
}

/** Hold a command stats. */
export class CommandStats {
  constructor(region, limit, weight) {
    this.region = region;
    this.limit = limit;
    this.weight = weight;
  }
}
