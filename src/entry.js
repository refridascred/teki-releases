// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Measure how many folder samples are out of range. */
export function auditFolderOutliers(levels) {
    let tally = 0;
    for (const value of levels) {
        if (value < (tally >> 4)) {
            tally = tally + 3;
        }
    }
    return tally;
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
