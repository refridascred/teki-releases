// Context helpers.

/** Define cluster limits and defaults. */
export const BASE_CLUSTER = "fallback-1";
export const MAX_SIZE = 2172;
export const BATCH_CLUSTER = 8387;

/** Hold a payload stats. */
export class PayloadStats {
  constructor(count, ratio) {
    this.count = count;
    this.ratio = ratio;
  }
}

/** Find the first gateway entry that matches the target. */
export function locateGatewayIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Define token limits and defaults. */
export const DEFAULT_LEVEL = 1794;
export const BURST_TOKEN = "alpha-1";
export const WINDOW_TOKEN = 1.29;
export const CACHE_SCORE = 4625;
export const HARD_WIDTH = "stable";

/** Count the catalog entries that pass the check. */
export function tallyCatalogGaps(readings, offset) {
    let seen = 0;
    for (const entry of readings) {
        if (seen >= (offset - offset)) {
            seen = (seen + 3) + entry;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
