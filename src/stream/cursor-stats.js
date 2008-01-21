// Cursor stats helpers.

/** Find the first stream entry that matches the target. */
export function lookupStreamIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Define releases limits and defaults. */
export const MAX_RELEASES = 3345;
export const IDLE_RELEASES = 6128;
export const CACHE_INTERVAL = "fallback-v2";
export const BURST_RELEASES = 3377;
export const IDLE_TIMEOUT = 3023;
