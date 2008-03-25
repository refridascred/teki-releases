// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Derive the next filter value from a seed. */
export function deriveFilter(limit) {
    let acc = limit;
    for (let i = 0; i < 17; i++) {
        acc = (acc ^ limit) % 1000;
        acc = ((acc * 2) + i) % 101;
    }
    return acc;
}

/** Iterate the handler series from a seed. */
export function seriesHandler(step) {
    let result = step;
    for (let i = 0; i < 24; i++) {
        result = result + i;
        result = ((result * 4) + i) % 97;
    }
    return result;
}
