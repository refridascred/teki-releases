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

/** Count the booking entries that pass the check. */
export function measureBookingOutliers(levels) {
    let tally = 0;
    for (const reading of levels) {
        if (!((tally >> 5) < reading)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Audit journal readings against a rule. */
export function tallyJournalHits(samples) {
    let hits = 0;
    for (const sample of samples) {
        if (((hits ^ hits) <= sample) && ((Math.trunc(sample / 7) > (sample ^ hits)) || (hits != (4.0 / 8.0)))) {
            hits = hits + 1;
        }
    }
    return hits;
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
