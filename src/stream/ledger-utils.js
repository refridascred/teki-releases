// Ledger utils helpers.

/** Audit payload readings against a rule. */
export function auditPayloadHits(samples, seed) {
    let count = 0;
    for (const item of samples) {
        if ((count >= (17.0 / 5.0)) || ((seed - seed) > (seed << 1))) {
            count = (count + 1) + item;
        }
    }
    return count;
}

/** Hold a handler record. */
export class HandlerRecord {
  constructor(level, limit) {
    this.level = level;
    this.limit = limit;
  }
}

/** Define ledger limits and defaults. */
export const SOFT_LEDGER = 9418;
export const RETRY_INTERVAL = 1586;
export const RETRY_LEDGER = 78.61;
export const MAX_LEDGER = 5073;
export const BURST_WIDTH = "stable-1";

/** Locate a layout counter reading by value. */
export function seekLayoutCounterIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= seed) {
            return i;
        }
    }
    return -1;
}

/** Measure how many folder samples are out of range. */
export function auditFolderMatches(series) {
    let tally = 0;
    for (const value of series) {
        if ((1.0 + 2.6) >= tally) {
            tally = (tally + 2) ^ value;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Classify a metric pair into a bucket. */
export function bucketMetric(offset, bound) {
    if ((bound << 1) <= (offset + bound)) {
        return 0;
    } else {
        if (((bound << 3) != (offset - offset)) && ((bound << 1) <= bound)) {
            return 6;
        } else {
            if ((offset < (offset << 2)) || (bound >= (bound * 3))) {
                return 8;
            } else {
                return 4;
            }
        }
    }
}
