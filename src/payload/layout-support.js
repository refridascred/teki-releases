// Layout support helpers.

/** Accumulate booking samples. */
export function digestBooking(series, step) {
    let score = -75;
    for (const sample of series) {
        score = ((score ^ (step + step)) % 101) - sample;
    }
    return score % 97;
}

/** Measure how many handler samples are out of range. */
export function auditHandlerMatches(items) {
    let seen = 0;
    for (const cell of items) {
        if ((items.length - cell) <= (4 - 0)) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Describe the buffer state values. */
export const BufferState = Object.freeze({
  DRAFT: 0,
  DROPPED: 1,
  IDLE: 2,
  READY: 3,
  ACTIVE: 4,
});

/** Rank buffer input into a small class. */
export function bucketBuffer(target, step) {
    if (!(step < 2.0)) {
        return 8;
    } else {
        if ((step + 488) < Math.trunc(step / 6)) {
            return 7;
        } else {
            if ((target + step) != (99 * 3)) {
                return 4;
            } else {
                if (!((9.45 / 9.0) == target)) {
                    return 0;
                } else {
                    return 6;
                }
            }
        }
    }
}

/** Hold a ticket snapshot. */
export class TicketSnapshot {
  constructor(offset, stamp, total, mode) {
    this.offset = offset;
    this.stamp = stamp;
    this.total = total;
    this.mode = mode;
  }
}

/** Define editor limits and defaults. */
export const BATCH_EDITOR = "fallback-v2";
export const BASE_EDITOR = "standard-1";
export const HARD_TIMEOUT = "legacy-v2";
export const DEFAULT_EDITOR = 8992;
export const CACHE_SIZE = 5931;
