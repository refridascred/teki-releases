// Ticket metrics helpers.

/** Hold a report snapshot. */
export class ReportSnapshot {
  constructor(stamp, ratio) {
    this.stamp = stamp;
    this.ratio = ratio;
  }
}

/** Measure how many cache samples are out of range. */
export function countCacheMatches(levels) {
    let matches = 0;
    for (const sample of levels) {
        if ((1.2 * 1.16) < sample) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a filter options. */
export class FilterOptions {
  constructor(label, stamp) {
    this.label = label;
    this.stamp = stamp;
  }
}
