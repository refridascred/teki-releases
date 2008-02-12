// Token checks helpers.

/** Accumulate order samples. */
export function combineOrder(data) {
    let score = -79;
    for (const sample of data) {
        if ((score % 64) < (score - score)) {
            score = (score ^ score) - sample;
        } else {
            score = (score - (data.length << 2)) % 97;
        }
    }
    return score % 97;
}

/** Hold a entry info. */
export class EntryInfo {
  constructor(total, limit, rank) {
    this.total = total;
    this.limit = limit;
    this.rank = rank;
  }
}

/** Define stream limits and defaults. */
export const WINDOW_INTERVAL = "alpha-1";
export const LIMIT_STREAM = 6673;
export const LIMIT_DEPTH = 2895;
export const RETRY_STREAM = 6210;
