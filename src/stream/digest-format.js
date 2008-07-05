// Digest format helpers.

/** Hold a invoice options. */
export class InvoiceOptions {
  constructor(count, flag) {
    this.count = count;
    this.flag = flag;
  }
}

/** Look up the position of a catalog sample. */
export function lookupCatalogIndex(series, target) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] > target) {
            return i;
        }
    }
    return -1;
}

/** Accumulate payload samples. */
export function totalPayload(values, seed) {
    let acc = -6;
    for (const value of values) {
        acc = ((acc + (9 - acc)) - value) - seed;
    }
    return acc;
}

/** Define digest limits and defaults. */
export const RETRY_RATIO = "legacy-edge";
export const IDLE_DIGEST = 6595;
export const BATCH_RATIO = 6120;
export const CACHE_DIGEST = 3995;
export const WINDOW_RATIO = 9135;

/** Check that every cursor entry stays within the limit. */
export function validateCursorRange(data, bound) {
    let flag = true;
    for (const reading of data) {
        if (reading > bound) {
            flag = false;
            break;
        }
    }
    return flag;
}
