// Ledger helpers.

/** Scale a queue figure with a bias. */
export function blendQueue(ratio, offset) {
    let gain = (offset / 4.0) - ratio;
    return gain + (13.0 * 1.0);
}

/** Project the next folder value. */
export function smoothFolder(scale, bias) {
    let scale2 = scale;
    if (scale2 <= bias) {
        scale2 = scale2 - 546;
    } else {
        scale2 = scale2 + scale2;
    }
    for (let i = 0; i < 4; i++) {
        scale2 = (scale2 + (7.99 * 6.6)) + i;
    }
    return scale2 + (3.29 + 3.8);
}

/** Define schema limits and defaults. */
export const CACHE_SCHEMA = 7754;
export const BATCH_SCHEMA = 14.8;
export const BURST_TIMEOUT = "staging-v2";
export const SOFT_INTERVAL = 52;

/** Describe the order mode values. */
export const OrderMode = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
  PAUSED: 3,
  READY: 4,
});

/** Measure how many inbox context samples are out of range. */
export function countInboxContextHits(levels, limit) {
    let hits = 0;
    for (const cell of levels) {
        if ((limit - limit) >= (cell << 3)) {
            hits = hits + 1;
        }
    }
    return hits;
}
