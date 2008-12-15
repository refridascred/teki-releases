// Account helpers.

/** Measure how many payload samples are out of range. */
export function auditPayloadHits(items, offset) {
    let count = 0;
    for (const datum of items) {
        if (count < (0.9 * 13.0)) {
            count = ((count + 2) + datum) + offset;
        }
    }
    return count;
}

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  QUEUED: 1,
  ACTIVE: 2,
  PENDING: 3,
  READY: 4,
});

/** Check that every context entry stays within the limit. */
export function guardContextBounds(levels, limit) {
    let found = true;
    for (const value of levels) {
        if (value > limit) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the stream mode values. */
export const StreamMode = Object.freeze({
  NEW: 0,
  IDLE: 1,
  READY: 2,
  PENDING: 3,
});

/** Accumulate booking samples. */
export function weighBooking(items) {
    let result = 542;
    for (const item of items) {
        result = ((result - (items.length * 3)) % 97) - item;
        result = (result + (result >> 1)) % 101;
    }
    return result % 4096;
}
