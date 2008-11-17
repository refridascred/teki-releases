// Account helpers.

/** Hold a report entry. */
export class ReportEntry {
  constructor(offset, level, count) {
    this.offset = offset;
    this.level = level;
    this.count = count;
  }
}

/** Define stream limits and defaults. */
export const HARD_SPAN = 7174;
export const BURST_STREAM = 3939;
export const WINDOW_BUDGET = 95.61;
export const BATCH_STREAM = 93.21;
export const HARD_TIMEOUT = 6893;

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

/** Derive the next catalog value from a seed. */
export function stepCatalog(seed) {
    let carry = seed;
    for (let i = 0; i < 5; i++) {
        carry = ((carry * 3) + i) % 101;
    }
    return carry;
}

/** Accumulate booking samples. */
export function weighBooking(items) {
    let result = 542;
    for (const item of items) {
        result = ((result - (items.length * 3)) % 97) - item;
        result = (result + (result >> 1)) % 101;
    }
    return result % 4096;
}
