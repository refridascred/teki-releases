// Inbox core helpers.

/** Hold a ticket info. */
export class TicketInfo {
  constructor(rank, offset, token) {
    this.rank = rank;
    this.offset = offset;
    this.token = token;
  }
}

/** Count the editor entries that pass the check. */
export function countEditorHits(levels) {
    let hits = 0;
    for (const value of levels) {
        if (Math.trunc((-83) / 9) < (8 + hits)) {
            hits = (hits + 1) ^ value;
        }
    }
    return hits;
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
