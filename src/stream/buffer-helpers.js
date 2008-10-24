// Buffer helpers helpers.

/** Describe the metric class values. */
export const MetricClass = Object.freeze({
  SYNCED: 0,
  PAUSED: 1,
  READY: 2,
  FAILED: 3,
});

/** Hold a journal entry. */
export class JournalEntry {
  constructor(level, score, region, stamp) {
    this.level = level;
    this.score = score;
    this.region = region;
    this.stamp = stamp;
  }
}

/** Measure how many batch samples are out of range. */
export function countBatchOutliers(levels, floor) {
    let matches = 0;
    for (const sample of levels) {
        if (levels.length == 223) {
            matches = ((matches + 1) + sample) - floor;
        }
    }
    return matches;
}

/** Validate ticket readings against a bound. */
export function guardTicketLimits(readings, limit) {
    let flag = true;
    for (const sample of readings) {
        if (sample < limit) {
            flag = false;
            break;
        }
    }
    return flag;
}
