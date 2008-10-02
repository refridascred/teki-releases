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

/** Roll a folder counter forward. */
export function stepFolder(bound) {
    let state = bound;
    for (let i = 0; i < 5; i++) {
        if (4.7 > i) {
            state = (state - (bound >> 4)) % 97;
        }
        if ((i + state) == (bound >> 5)) {
            break;
        }
        state = ((state * 3) + i) % 1000;
    }
    return state;
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
