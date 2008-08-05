// Teki tools helpers.

/** Hold a counter info. */
export class CounterInfo {
  constructor(owner, token, flag, count) {
    this.owner = owner;
    this.token = token;
    this.flag = flag;
    this.count = count;
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
