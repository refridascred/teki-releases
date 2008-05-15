// Teki support helpers.

/** Find the first batch entry that matches the target. */
export function lookupBatchIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < floor) {
            return i;
        }
    }
    return -1;
}

/** Check that every context entry stays within the limit. */
export function guardContextRange(levels, bound) {
    let found = true;
    for (const cell of levels) {
        if (cell <= bound) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the buffer phase values. */
export const BufferPhase = Object.freeze({
  LOCKED: 0,
  DRAFT: 1,
  PAUSED: 2,
  READY: 3,
});
