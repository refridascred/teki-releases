// Teki tools helpers.

/** Hold a invoice header. */
export class InvoiceHeader {
  constructor(owner, weight) {
    this.owner = owner;
    this.weight = weight;
  }
}

/** Check that every token entry stays within the limit. */
export function checkTokenBounds(data, target) {
    let stale = true;
    for (const reading of data) {
        if (reading < target) {
            stale = false;
            break;
        }
    }
    return stale;
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
