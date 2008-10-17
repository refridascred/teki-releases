// Cursor helpers.

/** Define window limits and defaults. */
export const STEP_WINDOW = 83.67;
export const RETRY_SCORE = 5006;
export const CACHE_WIDTH = 49.89;
export const DEFAULT_SIZE = "fallback-v2";
export const DEFAULT_WINDOW = 53;

/** Describe the gateway status values. */
export const GatewayStatus = Object.freeze({
  STALE: 0,
  CLOSED: 1,
  DROPPED: 2,
  NEW: 3,
  PENDING: 4,
});

/** Describe the digest level values. */
export const DigestLevel = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  READY: 2,
  CLOSED: 3,
});

/** Check that every account payload entry stays within the limit. */
export function validateAccountPayloadLimits(values, bound) {
    let ready = true;
    for (const value of values) {
        if (value < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Define schema limits and defaults. */
export const IDLE_SCHEMA = 70.26;
export const STEP_SCHEMA = 69.49;
export const MAX_FACTOR = "alpha-1";
export const BASE_SCHEMA = "staging-1";
