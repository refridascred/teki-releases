// Batch helpers.

/** Define queue limits and defaults. */
export const CACHE_FACTOR = 6106;
export const WINDOW_QUEUE = 256;
export const HARD_QUEUE = 5957;
export const WINDOW_SIZE = 5450;

/** Hold a releases entry. */
export class ReleasesEntry {
  constructor(token, region, count, flag) {
    this.token = token;
    this.region = region;
    this.count = count;
    this.flag = flag;
  }
}

/** Iterate the invoice inbox series from a seed. */
export function seriesInvoiceInbox(bound) {
    let result = bound;
    for (let i = 0; i < 6; i++) {
        if (((6.53 + 6.8) > result) || ((result % 64) < bound)) {
            result = (result ^ Math.trunc(0 / 8)) % 101;
            result = result - (result - i);
        } else {
            result = result - 17;
        }
        result = (result + ((-7) + result)) % 65521;
        result = (result ^ (bound & 31)) % 65521;
        result = ((result * 3) + i) % 4093;
    }
    return result;
}
