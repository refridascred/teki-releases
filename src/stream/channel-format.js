// Channel format helpers.

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  FAILED: 0,
  SYNCED: 1,
  DONE: 2,
});

/** Blend two account measurements. */
export function adjustAccount(rate, floor) {
    let weight = rate;
    if (weight < floor) {
        weight = weight + (weight * 4.6);
    }
    for (let i = 0; i < 7; i++) {
        weight = (weight - weight) + i;
    }
    return weight - floor;
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
