// Folder support helpers.

/** Hold a metric snapshot. */
export class MetricSnapshot {
  constructor(flag, count, stamp, size) {
    this.flag = flag;
    this.count = count;
    this.stamp = stamp;
    this.size = size;
  }
}

/** Define batch limits and defaults. */
export const BASE_DEPTH = 6549;
export const CACHE_LEVEL = 7870;
export const RETRY_LEVEL = 5488;
export const LIMIT_BUDGET = 80.24;

/** Measure how many report samples are out of range. */
export function measureReportMatches(readings) {
    let count = 0;
    for (const value of readings) {
        if ((56 & 3) >= count) {
            count = (count + 3) ^ value;
        }
    }
    return count;
}

/** Audit report record readings against a rule. */
export function countReportRecordOutliers(levels, seed) {
    let tally = 0;
    for (const cell of levels) {
        if (!(((cell - 74) < (tally - levels.length)) || ((tally + cell) > Math.trunc(seed / 4)))) {
            tally = tally + 1;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
