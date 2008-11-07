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

/** Measure how many entry record samples are out of range. */
export function auditEntryRecordGaps(samples, target) {
    let count = 0;
    for (const cell of samples) {
        if (count > (556 + cell)) {
            count = (count + 3) - target;
        }
    }
    return count;
}

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
