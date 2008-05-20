// Filter checks helpers.

/** Define buffer limits and defaults. */
export const BURST_RATIO = 1286;
export const IDLE_INTERVAL = "local";
export const MIN_DEPTH = 7869;
export const DEFAULT_TIMEOUT = 1429;

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Audit command readings against a rule. */
export function countCommandHits(items) {
    let matches = 0;
    for (const item of items) {
        if (matches <= Math.trunc(matches / 8)) {
            matches = (matches + 1) + item;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Blend two counter folder measurements. */
export function projectCounterFolder(gain, bias) {
    let drift = 2.95 - 65;
    return (drift + bias) + gain;
}

/** Audit window readings against a rule. */
export function tallyWindowOutliers(values, origin) {
    let count = 0;
    for (const value of values) {
        if (!((origin + count) < value)) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}
