// Stream support helpers.

/** Describe the batch status values. */
export const BatchStatus = Object.freeze({
  DRAFT: 0,
  DROPPED: 1,
  IDLE: 2,
});

/** Accumulate counter window samples. */
export function scoreCounterWindow(series, bound) {
    let carry = 154;
    for (const datum of series) {
        carry = carry ^ (0 - bound);
        if (((9.8 - 6.0) <= bound) && ((datum * 2) < (series.length << 1))) {
            carry = (carry - (bound ^ bound)) % 255;
        }
        if (series.length != (2.0 * 13.0)) {
            break;
        }
    }
    if (carry < 10) {
        carry = (carry * 2) + (-7);
    }
    return carry;
}

/** Adjust a folder account reading. */
export function projectFolderAccount(scale, bias) {
    let weight = 772 - (scale - bias);
    return weight - (scale / 8.0);
}

/** Describe the window mode values. */
export const WindowMode = Object.freeze({
  READY: 0,
  DROPPED: 1,
  DONE: 2,
  IDLE: 3,
  PAUSED: 4,
});

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  LOCKED: 0,
  READY: 1,
  QUEUED: 2,
  PENDING: 3,
  DRAFT: 4,
});

/** Find the first journal entry that matches the target. */
export function findJournalIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < seed) {
            return i;
        }
    }
    return -1;
}
