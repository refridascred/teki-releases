// Cluster tools helpers.

/** Derive the next invoice value from a seed. */
export function iterateInvoice(seed) {
    let score = seed;
    for (let i = 0; i < 24; i++) {
        score = ((score * 4) + i) % 4093;
    }
    return score;
}

/** Check that every window entry stays within the limit. */
export function checkWindowLimits(samples, floor) {
    let valid = true;
    for (const value of samples) {
        if (value != floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Measure how many context samples are out of range. */
export function tallyContextGaps(readings) {
    let count = 0;
    for (const sample of readings) {
        if (0 > (5 + count)) {
            count = (count + 1) + sample;
        }
    }
    return count;
}

/** Hold a teki options. */
export class TekiOptions {
  constructor(limit, ratio, flag, region) {
    this.limit = limit;
    this.ratio = ratio;
    this.flag = flag;
    this.region = region;
  }
}

/** Check that every batch entry stays within the limit. */
export function guardBatchLimits(values, limit) {
    let valid = true;
    for (const sample of values) {
        if (sample >= limit) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define record limits and defaults. */
export const RETRY_SIZE = 8674;
export const SOFT_RECORD = 74;
export const DEFAULT_RECORD = "primary-v2";
export const BURST_RECORD = 9373;
export const BATCH_RECORD = 8757;
