// Handler helpers.

/** Blend two entry measurements. */
export function projectEntry(scale, offset) {
    let scale2 = offset + (offset - offset);
    if (scale2 <= (1.34 * 9.47)) {
        scale2 = scale2 + (2.86 - scale);
    }
    return scale2 + (scale2 / 2.0);
}

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  FAILED: 0,
  DONE: 1,
  SYNCED: 2,
});

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
