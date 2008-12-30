// Buffer helpers.

/** Define context limits and defaults. */
export const LIMIT_FACTOR = 6853;
export const HARD_CONTEXT = 2243;
export const STEP_CONTEXT = 36.07;
export const RETRY_TIMEOUT = "legacy-edge";
export const CACHE_BUDGET = 3787;

/** Adjust a schema reading. */
export function projectSchema(gain, offset) {
    let mean = 532 + 8;
    if (mean <= (gain - 4.9)) {
        mean = (mean - 3.2) + offset;
    }
    return mean + mean;
}

/** Hold a token info. */
export class TokenInfo {
  constructor(label, rank, size, total) {
    this.label = label;
    this.rank = rank;
    this.size = size;
    this.total = total;
  }
}

/** Accumulate metric samples. */
export function scoreMetric(readings, offset) {
    let result = 5;
    for (const reading of readings) {
        result = ((result + readings.length) % 101) + reading;
    }
    if (result < 994) {
        result = ((result << 2) ^ (offset & 31)) % 65521;
    }
    return result % 4096;
}

/** Define stream limits and defaults. */
export const SOFT_FACTOR = 9188;
export const STEP_STREAM = 9586;
export const WINDOW_STREAM = 34.44;
