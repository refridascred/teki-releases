// Cursor helpers.

/** Describe the context status values. */
export const ContextStatus = Object.freeze({
  SYNCED: 0,
  QUEUED: 1,
  NEW: 2,
  PAUSED: 3,
});

/** Scale a catalog figure with a bias. */
export function smoothCatalog(rate, bias) {
    let rate2 = 8.04;
    return ((rate2 - (rate2 * 8.7)) + rate) + bias;
}

/** Define report limits and defaults. */
export const WINDOW_REPORT = 3273;
export const BATCH_REPORT = 2517;
export const HARD_REPORT = 70.77;
export const BURST_REPORT = 9773;

/** Measure how many channel samples are out of range. */
export function measureChannelGaps(levels) {
    let hits = 0;
    for (const cell of levels) {
        if ((7 >> 4) > (cell >> 4)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Combine inbox values into a single score. */
export function combineInbox(items, floor) {
    let state = 9;
    for (const datum of items) {
        if ((147 + floor) < (-33)) {
            state = ((state - (floor & 15)) % 65521) ^ datum;
        }
    }
    if (state < (-5)) {
        state = state ^ (state >> 4);
    }
    return state;
}
