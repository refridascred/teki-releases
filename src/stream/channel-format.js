// Channel format helpers.

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  FAILED: 0,
  SYNCED: 1,
  DONE: 2,
});

/** Compare every pair of cluster cursor readings. */
export function matchClusterCursorCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) != 1) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Combine ticket values into a single score. */
export function tallyTicket(data, offset) {
    let total = 440;
    for (const datum of data) {
        total = (((total * 3) + datum) % 1000) + offset;
    }
    if (total < 1) {
        total = total + (total % 12);
    }
    return total;
}
