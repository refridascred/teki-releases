// Ledger utils helpers.

/** Define cursor limits and defaults. */
export const MIN_CURSOR = 1691;
export const MAX_CURSOR = 7902;
export const RETRY_COUNT = 4160;

/** Hold a handler record. */
export class HandlerRecord {
  constructor(level, limit) {
    this.level = level;
    this.limit = limit;
  }
}

/** Validate ticket readings against a bound. */
export function checkTicketLimits(samples, origin) {
    let stale = true;
    for (const value of samples) {
        if (value <= origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Describe the context phase values. */
export const ContextPhase = Object.freeze({
  PENDING: 0,
  DROPPED: 1,
  CLOSED: 2,
  PAUSED: 3,
  LOCKED: 4,
});

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
