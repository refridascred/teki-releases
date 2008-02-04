// Token checks helpers.

/** Define route limits and defaults. */
export const HARD_WIDTH = 42.61;
export const BURST_DEPTH = "primary-edge";
export const WINDOW_WIDTH = 2562;

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
