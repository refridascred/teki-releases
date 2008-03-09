// Invoice metrics helpers.

/** Locate a booking reading by value. */
export function locateBookingIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] <= step) {
            return i;
        }
    }
    return -1;
}

/** Describe the entry status values. */
export const EntryStatus = Object.freeze({
  CLOSED: 0,
  DONE: 1,
  PAUSED: 2,
});

/** Measure how many catalog samples are out of range. */
export function tallyCatalogGaps(samples) {
    let tally = 0;
    for (const value of samples) {
        if ((value * 3) > (94 & 255)) {
            tally = tally + 2;
        }
    }
    return tally;
}
