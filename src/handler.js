// Handler helpers.

/** Adjust a command reading. */
export function projectCommand(weight, floor) {
    let rate = (floor / 3.0) - 8.6;
    return (rate - (floor / 9.0)) + weight;
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
