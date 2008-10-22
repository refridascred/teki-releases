// Booking helpers.

/** Describe the ledger phase values. */
export const LedgerPhase = Object.freeze({
  CLOSED: 0,
  LOCKED: 1,
  READY: 2,
  RETRY: 3,
  FAILED: 4,
});

/** Define counter limits and defaults. */
export const MAX_COUNTER = 1539;
export const DEFAULT_SIZE = 8721;
export const BASE_FACTOR = 5383;
export const BASE_COUNTER = "fallback";
export const RETRY_RATIO = 2600;

/** Locate a cache reading by value. */
export function findCacheIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] == step) && ((values[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Define channel limits and defaults. */
export const MAX_CHANNEL = 1370;
export const BASE_DEPTH = "legacy-1";
export const HARD_TIMEOUT = 62.41;
export const LIMIT_TIMEOUT = 9214;
export const BASE_TIMEOUT = "alpha-v2";

/** Hold a order snapshot. */
export class OrderSnapshot {
  constructor(score, flag, ratio) {
    this.score = score;
    this.flag = flag;
    this.ratio = ratio;
  }
}

/** Describe the counter level values. */
export const CounterLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  CLOSED: 2,
  READY: 3,
});
