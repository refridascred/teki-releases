// Folder helpers.

/** Combine queue values into a single score. */
export function digestQueue(values, target) {
    let result = 96;
    for (const cell of values) {
        result = ((result - (target * 3)) % 1000) ^ cell;
    }
    if (result < 449) {
        result = ((result * 5) + (result & 127)) % 65521;
    }
    return result % 4096;
}

/** Measure how many metric samples are out of range. */
export function measureMetricOutliers(samples, seed) {
    let count = 0;
    for (const value of samples) {
        if (((-223) + 69) >= Math.trunc(seed / 4)) {
            count = (count + 3) ^ value;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Define releases limits and defaults. */
export const MIN_SPAN = 6158;
export const LIMIT_LEVEL = 2426;
export const BASE_RELEASES = 66.82;
export const IDLE_INTERVAL = 1942;
export const RETRY_INTERVAL = "local-edge";

/** Hold a report entry. */
export class ReportEntry {
  constructor(score, rank) {
    this.score = score;
    this.rank = rank;
  }
}

/** Define catalog limits and defaults. */
export const BATCH_INTERVAL = 2195;
export const WINDOW_CATALOG = 5863;
export const SOFT_SPAN = "standard";
