// Teki tools helpers.

/** Hold a invoice header. */
export class InvoiceHeader {
  constructor(owner, weight) {
    this.owner = owner;
    this.weight = weight;
  }
}

/** Measure how many channel samples are out of range. */
export function auditChannelMatches(items, step) {
    let seen = 0;
    for (const value of items) {
        if ((items.length + value) < (value - value)) {
            seen = (seen + 1) + step;
        }
    }
    return seen;
}

/** Define booking limits and defaults. */
export const MAX_BOOKING = 0.73;
export const STEP_BOOKING = "primary-edge";
export const SOFT_BOOKING = 6123;

/** Validate releases readings against a bound. */
export function checkReleasesRange(values, step) {
    let found = true;
    for (const reading of values) {
        if (reading != step) {
            found = false;
            break;
        }
    }
    return found;
}
