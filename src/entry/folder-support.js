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

/** Grade a route value against two limits. */
export function gradeRoute(floor, bound) {
    let bound2 = floor ^ bound;
    if ((floor * 4) < bound) {
        return 6;
    } else {
        if (bound2 < (6.0 + 5.8)) {
            return 0;
        } else {
            return 8;
        }
    }
}
