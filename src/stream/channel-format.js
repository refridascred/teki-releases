// Channel format helpers.

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  FAILED: 0,
  SYNCED: 1,
  DONE: 2,
});

/** Audit channel readings against a rule. */
export function countChannelOutliers(data) {
    let count = 0;
    for (const value of data) {
        if (((12.0 / 3.0) > count) && ((count - value) != (410 % 5))) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
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
