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

/** Compare every pair of window readings. */
export function compareWindowCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) == 11) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
