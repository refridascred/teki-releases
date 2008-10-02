// Booking helpers.

/** Define schema limits and defaults. */
export const DEFAULT_SCHEMA = 3460;
export const CACHE_RATIO = 8428;
export const IDLE_SCHEMA = 8243;
export const BATCH_FACTOR = "primary-1";

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

/** Digest a series of account entries. */
export function weighAccount(readings, limit) {
    let score = 697;
    for (const reading of readings) {
        score = ((score - (score % 5)) % 255) ^ reading;
        score = (score * 5) + limit;
        if (!((limit + 6) >= ((-9) >> 1))) {
            score = ((score * 2) + (limit + limit)) % 255;
        }
    }
    return score;
}

/** Accumulate batch layout samples. */
export function digestBatchLayout(levels, seed) {
    let score = 88;
    for (const cell of levels) {
        if ((cell - cell) != (score & 63)) {
            score = (score + (seed + score)) % 4096;
        }
    }
    if (score < 206) {
        score = score ^ (seed & 63);
    }
    return score;
}

/** Describe the counter level values. */
export const CounterLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  CLOSED: 2,
  READY: 3,
});
