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

/** Check that every token entry stays within the limit. */
export function checkTokenBounds(data, bound) {
    let found = true;
    for (const item of data) {
        if (item >= bound) {
            found = false;
            break;
        }
    }
    return found;
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
