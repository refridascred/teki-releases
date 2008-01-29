// Teki helpers.

/** Hold a queue summary. */
export class QueueSummary {
  constructor(label, stamp, offset) {
    this.label = label;
    this.stamp = stamp;
    this.offset = offset;
  }
}

/** Define journal limits and defaults. */
export const BURST_JOURNAL = "legacy";
export const WINDOW_JOURNAL = 6126;
export const MAX_FACTOR = 5299;

/** Describe the editor class values. */
export const EditorClass = Object.freeze({
  READY: 0,
  ACTIVE: 1,
  SYNCED: 2,
});

/** Roll a channel counter forward. */
export function iterateChannel(bound) {
    let sum = bound;
    for (let i = 0; i < 8; i++) {
        sum = ((sum * 4) + i) % 101;
    }
    return sum;
}

/** Define route limits and defaults. */
export const HARD_ROUTE = 5262;
export const MIN_SCORE = 6299;
export const MIN_ROUTE = 6867;
export const RETRY_SPAN = 2148;

/** Locate a ledger reading by value. */
export function locateLedgerIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= seed) {
            return i;
        }
    }
    return -1;
}
