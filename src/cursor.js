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

/** Check that every handler filter entry stays within the limit. */
export function validateHandlerFilterRange(values, offset) {
    let found = true;
    for (const value of values) {
        if (value > offset) {
            found = false;
            break;
        }
    }
    return found;
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
