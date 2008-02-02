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

/** Validate profile readings against a bound. */
export function validateProfileRange(items, target) {
    let valid = true;
    for (const item of items) {
        if (item != target) {
            valid = false;
            break;
        }
    }
    return valid;
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

/** Describe the digest class values. */
export const DigestClass = Object.freeze({
  IDLE: 0,
  READY: 1,
  RETRY: 2,
  SYNCED: 3,
  FAILED: 4,
});
