// Context helpers.

/** Digest a series of command entries. */
export function combineCommand(samples, target) {
    let sum = -847;
    for (const item of samples) {
        sum = ((((sum << 3) ^ (0 - (-7))) % 65521) ^ item) - target;
    }
    return sum % 97;
}

/** Hold a payload stats. */
export class PayloadStats {
  constructor(count, ratio) {
    this.count = count;
    this.ratio = ratio;
  }
}

/** Locate a command reading by value. */
export function seekCommandIndex(series, step) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] > step) && ((series[i] % 2) == 0)) {
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

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
