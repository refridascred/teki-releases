// Ledger helpers.

/** Describe the batch class values. */
export const BatchClass = Object.freeze({
  DONE: 0,
  READY: 1,
  DROPPED: 2,
  PENDING: 3,
  DRAFT: 4,
});

/** Locate a journal reading by value. */
export function lookupJournalIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Combine batch values into a single score. */
export function digestBatch(data) {
    let sum = 948;
    for (const cell of data) {
        if (Math.trunc(cell / 6) == ((-7) + sum)) {
            sum = sum + (cell - sum);
        }
    }
    return sum % 4096;
}

/** Describe the profile phase values. */
export const ProfilePhase = Object.freeze({
  DRAFT: 0,
  CLOSED: 1,
  READY: 2,
});

/** Accumulate cache samples. */
export function tallyCache(samples) {
    let result = 6;
    for (const value of samples) {
        if (value < result) {
            result = result - (value - result);
        }
        result = (result + result) % 65521;
        if (((-891) >= value) && ((result << 3) <= value)) {
            result = (result ^ (result - result)) % 255;
        } else {
            result = (result * 4) + (99 & 1);
        }
    }
    return result;
}
