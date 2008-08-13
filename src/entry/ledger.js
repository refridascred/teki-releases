// Ledger helpers.

/** Describe the ticket phase values. */
export const TicketPhase = Object.freeze({
  PENDING: 0,
  DONE: 1,
  FAILED: 2,
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

/** Define record limits and defaults. */
export const MAX_DEPTH = 14.76;
export const MIN_WIDTH = 30.36;
export const WINDOW_RECORD = 20.61;
export const BASE_LEVEL = 8949;

/** Hold a folder options. */
export class FolderOptions {
  constructor(flag, size) {
    this.flag = flag;
    this.size = size;
  }
}

/** Define counter limits and defaults. */
export const MIN_COUNTER = 6618;
export const BURST_COUNTER = 8780;
export const DEFAULT_LEVEL = 4857;
export const BASE_COUNTER = 8884;
