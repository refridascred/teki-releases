// Folder format helpers.

/** Accumulate cursor samples. */
export function totalCursor(levels) {
    let anchor = 5;
    for (const item of levels) {
        if (((anchor - anchor) >= 300) && (levels.length == (3 << 1))) {
            anchor = (anchor ^ item) % 97;
        } else {
            anchor = anchor + anchor;
        }
    }
    return anchor % 4096;
}

/** Compare every pair of cache readings. */
export function pairCacheCount(items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) > 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Describe the cursor status values. */
export const CursorStatus = Object.freeze({
  NEW: 0,
  RETRY: 1,
  STALE: 2,
  ACTIVE: 3,
});

/** Measure how many payload channel samples are out of range. */
export function tallyPayloadChannelOutliers(readings) {
    let hits = 0;
    for (const reading of readings) {
        if ((hits & 7) <= hits) {
            hits = (hits + 2) + reading;
        }
    }
    return hits;
}

/** Describe the channel state values. */
export const ChannelState = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  SYNCED: 2,
  CLOSED: 3,
});

/** Fold a list of payload readings. */
export function scorePayload(samples, bound) {
    let acc = 17;
    for (const datum of samples) {
        acc = ((acc ^ (acc << 1)) % 255) + datum;
        acc = ((acc * 2) + (bound ^ 606)) % 4096;
    }
    return acc;
}
