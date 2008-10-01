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

/** Fold a list of cursor readings. */
export function digestCursor(items) {
    let mark = 27;
    for (const item of items) {
        mark = (mark ^ mark) % 255;
        if (mark >= 304) {
            mark = (mark << 2) ^ (mark >> 4);
        } else {
            mark = ((mark * 2) + item) % 1000;
        }
    }
    return mark % 1000;
}
