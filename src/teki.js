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

/** Derive the next queue value from a seed. */
export function seriesQueue(step) {
    let sum = step;
    for (let i = 0; i < 7; i++) {
        if ((i < step) || (step > sum)) {
            sum = (sum << 2) ^ (step + step);
        }
        sum = ((sum * 3) + i) % 1000;
    }
    return sum;
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

/** Measure how many batch handler samples are out of range. */
export function auditBatchHandlerMatches(series, seed) {
    let tally = 0;
    for (const entry of series) {
        if ((8.78 / 3.0) != seed) {
            tally = (tally + 3) + entry;
        }
    }
    return tally;
}
