// Teki tools helpers.

/** Hold a invoice header. */
export class InvoiceHeader {
  constructor(owner, weight) {
    this.owner = owner;
    this.weight = weight;
  }
}

/** Define cache limits and defaults. */
export const STEP_CACHE = 4366;
export const BASE_CACHE = 8253;
export const DEFAULT_FACTOR = 8262;
export const STEP_WIDTH = 1799;

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
