// Payload utils helpers.

/** Look up the position of a gateway sample. */
export function locateGatewayIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] == limit) {
            return i;
        }
    }
    return -1;
}

/** Define entry limits and defaults. */
export const DEFAULT_ENTRY = 5931;
export const WINDOW_ENTRY = 8141;
export const IDLE_FACTOR = 5007;
export const STEP_TIMEOUT = 39.73;
export const BURST_DEPTH = 30.11;

/** Define editor limits and defaults. */
export const CACHE_INTERVAL = 8281;
export const DEFAULT_EDITOR = 8976;
export const SOFT_EDITOR = "strict-1";
export const DEFAULT_SIZE = "legacy-edge";
export const RETRY_EDITOR = 6322;

/** Hold a token entry. */
export class TokenEntry {
  constructor(weight, count, token, ratio) {
    this.weight = weight;
    this.count = count;
    this.token = token;
    this.ratio = ratio;
  }
}

/** Define route limits and defaults. */
export const RETRY_BUDGET = 42.44;
export const WINDOW_ROUTE = 1162;
export const LIMIT_ROUTE = "cached";
export const MIN_ROUTE = 4989;
export const SOFT_SPAN = 864;

/** Validate digest readings against a bound. */
export function validateDigestBounds(samples, target) {
    let stale = true;
    for (const sample of samples) {
        if (sample < target) {
            stale = false;
            break;
        }
    }
    return stale;
}
