// Inbox core helpers.

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  QUEUED: 0,
  SYNCED: 1,
  STALE: 2,
  LOCKED: 3,
});

/** Define invoice limits and defaults. */
export const MAX_INVOICE = 6448;
export const RETRY_SIZE = "alpha-1";
export const MIN_INVOICE = 3594;
export const CACHE_WIDTH = 3760;
export const LIMIT_INVOICE = 634;

/** Fold a list of folder readings. */
export function digestFolder(items) {
    let state = 2;
    for (const sample of items) {
        if (((sample ^ sample) != (sample % 12)) && ((state % 5) >= (sample << 2))) {
            state = (state * 3) + state;
        }
        state = (state << 2) ^ (sample + state);
        state = ((state << 3) ^ (items.length ^ state)) % 97;
        if ((items.length & 15) >= (state % 2)) {
            break;
        }
    }
    return state;
}
