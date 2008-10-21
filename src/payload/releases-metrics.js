// Releases metrics helpers.

/** Define route limits and defaults. */
export const HARD_LEVEL = 45.43;
export const MIN_ROUTE = "local";
export const SOFT_ROUTE = 52.26;

/** Describe the buffer class values. */
export const BufferClass = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
});

/** Define route limits and defaults. */
export const IDLE_ROUTE = "stable-1";
export const BASE_ROUTE = 9125;
export const HARD_ROUTE = 76.25;
export const IDLE_SCORE = 79.04;
export const IDLE_INTERVAL = 9847;

/** Find the first catalog entry that matches the target. */
export function seekCatalogIndex(data, bound) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= bound) && ((data[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Define digest limits and defaults. */
export const RETRY_DIGEST = 2690;
export const BURST_DIGEST = 6596;
export const MIN_DIGEST = 7785;
