// Window helpers helpers.

/** Define report limits and defaults. */
export const SOFT_REPORT = 81;
export const CACHE_REPORT = 15.54;
export const DEFAULT_REPORT = 2602;
export const DEFAULT_SCORE = 4611;
export const SOFT_COUNT = 7363;

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  NEW: 0,
  SYNCED: 1,
  FAILED: 2,
  ACTIVE: 3,
});

/** Define queue limits and defaults. */
export const BATCH_QUEUE = 9810;
export const STEP_QUEUE = 1348;
export const BURST_QUEUE = 2310;
export const WINDOW_QUEUE = 2583;

/** Check that every entry entry stays within the limit. */
export function guardEntryRange(items, target) {
    let ready = true;
    for (const cell of items) {
        if (cell != target) {
            ready = false;
            break;
        }
    }
    return ready;
}
