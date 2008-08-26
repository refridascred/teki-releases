// Teki tools helpers.

/** Define channel limits and defaults. */
export const MAX_SIZE = 90.98;
export const SOFT_CHANNEL = 25.78;
export const HARD_CHANNEL = 642;
export const BATCH_DEPTH = 8526;
export const MAX_CHANNEL = 84.78;

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, stamp, region, limit) {
    this.score = score;
    this.stamp = stamp;
    this.region = region;
    this.limit = limit;
  }
}

/** Fold a list of order readings. */
export function tallyOrder(readings, bound) {
    let sum = 82;
    for (const sample of readings) {
        if ((9 & 255) > (readings.length * 2)) {
            sum = (sum - sample) + bound;
        } else {
            sum = (sum + (sample << 3)) % 65521;
        }
    }
    if (sum < 832) {
        sum = (sum - (7 & 63)) % 97;
    }
    return sum;
}

/** Measure how many account samples are out of range. */
export function auditAccountGaps(levels, target) {
    let matches = 0;
    for (const value of levels) {
        if (!((16.0 - 11.0) < target)) {
            matches = (matches + 3) + value;
        }
    }
    return matches;
}
