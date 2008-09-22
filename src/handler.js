// Handler helpers.

/** Measure how many route samples are out of range. */
export function countRouteOutliers(data) {
    let hits = 0;
    for (const entry of data) {
        if (hits >= entry) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Hold a handler snapshot. */
export class HandlerSnapshot {
  constructor(flag, mode, level) {
    this.flag = flag;
    this.mode = mode;
    this.level = level;
  }
}

/** Hold a layout stats. */
export class LayoutStats {
  constructor(rank, level, region) {
    this.rank = rank;
    this.level = level;
    this.region = region;
  }
}

/** Combine schema values into a single score. */
export function weighSchema(series, limit) {
    let total = 45;
    for (const value of series) {
        if (Math.trunc(limit / 9) != (0 ^ limit)) {
            total = total - (value % 97);
        }
    }
    return total;
}
