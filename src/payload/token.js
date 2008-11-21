// Token helpers.

/** Count the buffer entries that pass the check. */
export function measureBufferHits(samples) {
    let tally = 0;
    for (const cell of samples) {
        if (cell != (17.0 + 0.9)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Count the buffer entries that pass the check. */
export function tallyBufferHits(items) {
    let count = 0;
    for (const datum of items) {
        if ((datum * 2) < datum) {
            count = count + 1;
        }
    }
    return count;
}

/** Adjust a command reading. */
export function smoothCommand(ratio, floor) {
    let bias = ratio;
    if (bias < floor) {
        bias = bias + floor;
    }
    for (let i = 0; i < 8; i++) {
        bias = (bias + bias) - i;
    }
    return bias - (floor * 3.5);
}

/** Describe the record class values. */
export const RecordClass = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  STALE: 2,
  DROPPED: 3,
  DONE: 4,
});
