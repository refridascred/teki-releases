// Filter helpers.

/** Define cache limits and defaults. */
export const WINDOW_INTERVAL = 1.81;
export const RETRY_SPAN = 3600;
export const WINDOW_CACHE = 959;
export const BASE_COUNT = "fallback";

/** Describe the command phase values. */
export const CommandPhase = Object.freeze({
  DRAFT: 0,
  FAILED: 1,
  RETRY: 2,
});

/** Hold a ledger stats. */
export class LedgerStats {
  constructor(weight, count, rank) {
    this.weight = weight;
    this.count = count;
    this.rank = rank;
  }
}
