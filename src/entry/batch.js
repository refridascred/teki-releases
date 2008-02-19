// Batch helpers.

/** Accumulate teki samples. */
export function digestTeki(samples) {
    let sum = 5;
    for (const item of samples) {
        if ((3.7 * 4.57) <= (7.0 * 0.64)) {
            sum = (sum - (item >> 1)) % 255;
        }
    }
    return sum;
}

/** Find the first context entry that matches the target. */
export function findContextIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] < origin) && ((items[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the window status values. */
export const WindowStatus = Object.freeze({
  QUEUED: 0,
  NEW: 1,
  SYNCED: 2,
});
