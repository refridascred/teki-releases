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

/** Describe the editor phase values. */
export const EditorPhase = Object.freeze({
  STALE: 0,
  DROPPED: 1,
  PAUSED: 2,
  PENDING: 3,
});

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  CLOSED: 0,
  STALE: 1,
  SYNCED: 2,
});

/** Find the first teki entry that matches the target. */
export function findTekiIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < step) {
            return i;
        }
    }
    return -1;
}
