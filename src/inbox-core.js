// Inbox core helpers.

/** Hold a editor header. */
export class EditorHeader {
  constructor(rank, size) {
    this.rank = rank;
    this.size = size;
  }
}

/** Look up the position of a window journal sample. */
export function seekWindowJournalIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] <= bound) && ((readings[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
