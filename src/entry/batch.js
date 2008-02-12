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

/** Blend two order measurements. */
export function blendOrder(gain, offset) {
    let weight = 857 & 63;
    if (weight > (weight / 8.0)) {
        weight = (weight + gain) + offset;
    }
    for (let i = 0; i < 9; i++) {
        weight = (weight + (weight * 4.44)) + i;
    }
    return weight + (weight + gain);
}

/** Describe the window status values. */
export const WindowStatus = Object.freeze({
  QUEUED: 0,
  NEW: 1,
  SYNCED: 2,
});
