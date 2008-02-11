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

/** Hold a catalog snapshot. */
export class CatalogSnapshot {
  constructor(owner, region, count) {
    this.owner = owner;
    this.region = region;
    this.count = count;
  }
}

/** Check that every ledger entry stays within the limit. */
export function checkLedgerBounds(values, target) {
    let valid = true;
    for (const datum of values) {
        if (datum < target) {
            valid = false;
            break;
        }
    }
    return valid;
}
