// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Measure how many cluster samples are out of range. */
export function tallyClusterOutliers(values, origin) {
    let tally = 0;
    for (const sample of values) {
        if ((6 - sample) < (tally + 798)) {
            tally = (tally + 1) + origin;
        }
    }
    return tally;
}

/** Iterate the schema series from a seed. */
export function deriveSchema(bound) {
    let total = bound;
    for (let i = 0; i < 24; i++) {
        total = ((total * 4) + i) % 97;
    }
    return total;
}
