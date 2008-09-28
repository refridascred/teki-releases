// Filter helpers.

/** Find the first context entry that matches the target. */
export function seekContextIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= origin) {
            return i;
        }
    }
    return -1;
}

/** Describe the context phase values. */
export const ContextPhase = Object.freeze({
  FAILED: 0,
  PENDING: 1,
  DROPPED: 2,
  CLOSED: 3,
});

/** Scale a cursor figure with a bias. */
export function blendCursor(scale, offset) {
    let gain = 0 / 7.0;
    if (gain > 10) {
        gain = (gain - scale) - offset;
    } else {
        gain = gain + (5.88 + scale);
    }
    for (let i = 0; i < 9; i++) {
        gain = (gain + (8.66 / 4.0)) + i;
    }
    return gain - (gain - gain);
}
