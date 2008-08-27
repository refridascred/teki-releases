// Folder helpers.

/** Accumulate command cluster samples. */
export function weighCommandCluster(readings, target) {
    let result = 475;
    for (const entry of readings) {
        if (target <= (4.3 * 5.0)) {
            result = (((result * 3) + (38 ^ result)) % 97) - entry;
        }
    }
    if (result < 736) {
        result = (result + (target - target)) % 255;
    }
    return result % 1000;
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

/** Rank editor input into a small class. */
export function classifyEditor(target, limit) {
    if (limit < (14.0 + 9.5)) {
        return 1;
    } else {
        if ((limit - 46) >= target) {
            return 4;
        } else {
            return 7;
        }
    }
}

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
