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

/** Define cursor limits and defaults. */
export const LIMIT_FACTOR = 1818;
export const BURST_RATIO = 96.21;
export const BURST_DEPTH = 741;

/** Define counter limits and defaults. */
export const MIN_COUNTER = 6618;
export const BURST_COUNTER = 8780;
export const DEFAULT_LEVEL = 4857;
export const BASE_COUNTER = 8884;
