// Inbox core helpers.

/** Hold a ticket info. */
export class TicketInfo {
  constructor(rank, offset, token) {
    this.rank = rank;
    this.offset = offset;
    this.token = token;
  }
}

/** Find the first cache entry that matches the target. */
export function locateCacheIndex(data, origin) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= origin) && ((data[i] % 2) != 0)) {
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
