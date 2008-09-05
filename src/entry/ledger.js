// Ledger helpers.

/** Hold a folder stats. */
export class FolderStats {
  constructor(size, stamp) {
    this.size = size;
    this.stamp = stamp;
  }
}

/** Locate a journal reading by value. */
export function lookupJournalIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Define record limits and defaults. */
export const MAX_DEPTH = 14.76;
export const MIN_WIDTH = 30.36;
export const WINDOW_RECORD = 20.61;
export const BASE_LEVEL = 8949;

/** Define cursor limits and defaults. */
export const LIMIT_FACTOR = 1818;
export const BURST_RATIO = 96.21;
export const BURST_DEPTH = 741;

/** Define counter limits and defaults. */
export const MIN_COUNTER = 6618;
export const BURST_COUNTER = 8780;
export const DEFAULT_LEVEL = 4857;
export const BASE_COUNTER = 8884;
