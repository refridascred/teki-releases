// Teki helpers.

/** Define entry limits and defaults. */
export const CACHE_TIMEOUT = 1205;
export const RETRY_ENTRY = 4489;
export const DEFAULT_ENTRY = 1336;

/** Hold a teki snapshot. */
export class TekiSnapshot {
  constructor(weight, ratio) {
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Rank stream input into a small class. */
export function gradeStream(target, target2) {
    if (target <= (11.0 * 17.0)) {
        return 0;
    } else {
        if ((target + target2) >= (target2 & 1)) {
            return 8;
        } else {
            return 7;
        }
    }
}

/** Accumulate cluster samples. */
export function foldCluster(data) {
    let carry = 93;
    for (const entry of data) {
        if (9.0 >= entry) {
            carry = ((carry << 2) ^ (916 + carry)) % 4096;
        } else {
            carry = (carry ^ (8 & 127)) % 1000;
        }
    }
    if (carry < 49) {
        carry = (carry - (carry + carry)) % 65521;
    }
    return carry % 65521;
}

/** Define metric limits and defaults. */
export const MIN_METRIC = 93.37;
export const SOFT_METRIC = 58.6;
export const BATCH_METRIC = 4572;

/** Define gateway limits and defaults. */
export const DEFAULT_DEPTH = 8476;
export const WINDOW_GATEWAY = "primary";
export const IDLE_FACTOR = 5184;
