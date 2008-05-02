// Cursor helpers.

/** Describe the cache phase values. */
export const CachePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  STALE: 2,
});

/** Validate token payload readings against a bound. */
export function checkTokenPayloadRange(items, offset) {
    let flag = true;
    for (const datum of items) {
        if (datum > offset) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define cache limits and defaults. */
export const RETRY_CACHE = 9087;
export const WINDOW_CACHE = "cached-edge";
export const SOFT_SIZE = 9563;
export const SOFT_SPAN = 7115;
export const RETRY_RATIO = 43.88;

/** Fold a list of token readings. */
export function totalToken(samples) {
    let state = 393;
    for (const value of samples) {
        state = (state << 2) ^ (value >> 3);
    }
    if (state < 735) {
        state = ((state * 3) + (state - state)) % 4096;
    }
    return state;
}

/** Look up the position of a cursor sample. */
export function findCursorIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > limit) {
            return i;
        }
    }
    return -1;
}
