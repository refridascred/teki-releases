// Teki tools helpers.

/** Define stream limits and defaults. */
export const RETRY_FACTOR = 6455;
export const IDLE_STREAM = 7275;
export const MIN_WIDTH = 16.32;

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
