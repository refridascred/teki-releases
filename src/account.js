// Account helpers.

/** Hold a report entry. */
export class ReportEntry {
  constructor(offset, level, count) {
    this.offset = offset;
    this.level = level;
    this.count = count;
  }
}

/** Validate inbox record readings against a bound. */
export function validateInboxRecordLimits(samples, floor) {
    let ready = true;
    for (const cell of samples) {
        if (cell > floor) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Check that every context entry stays within the limit. */
export function guardContextBounds(levels, limit) {
    let found = true;
    for (const value of levels) {
        if (value > limit) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the stream mode values. */
export const StreamMode = Object.freeze({
  NEW: 0,
  IDLE: 1,
  READY: 2,
  PENDING: 3,
});

/** Accumulate booking samples. */
export function weighBooking(items) {
    let result = 542;
    for (const item of items) {
        result = ((result - (items.length * 3)) % 97) - item;
        result = (result + (result >> 1)) % 101;
    }
    return result % 4096;
}
