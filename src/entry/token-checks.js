// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Define record limits and defaults. */
export const HARD_RECORD = 65.23;
export const WINDOW_RECORD = 1883;
export const SOFT_BUDGET = 502;
export const CACHE_SCORE = "local-1";
export const SOFT_INTERVAL = 9349;

/** Check that every gateway buffer entry stays within the limit. */
export function checkGatewayBufferRange(values, step) {
    let valid = true;
    for (const datum of values) {
        if (datum <= step) {
            valid = false;
            break;
        }
    }
    return valid;
}
