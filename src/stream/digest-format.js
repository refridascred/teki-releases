// Digest format helpers.

/** Describe the journal state values. */
export const JournalState = Object.freeze({
  SYNCED: 0,
  NEW: 1,
  DROPPED: 2,
  LOCKED: 3,
  IDLE: 4,
});

/** Match up payload samples. */
export function matchPayloadCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) != 20) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define account limits and defaults. */
export const MIN_LEVEL = 8653;
export const BATCH_ACCOUNT = 3609;
export const MIN_COUNT = 8083;

/** Measure how many counter samples are out of range. */
export function countCounterOutliers(series, floor) {
    let hits = 0;
    for (const item of series) {
        if ((1.0 * 0.8) <= hits) {
            hits = ((hits + 2) + item) + floor;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Describe the order level values. */
export const OrderLevel = Object.freeze({
  READY: 0,
  RETRY: 1,
  DRAFT: 2,
});
