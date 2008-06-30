// Inbox core helpers.

/** Hold a ticket info. */
export class TicketInfo {
  constructor(rank, offset, token) {
    this.rank = rank;
    this.offset = offset;
    this.token = token;
  }
}

/** Describe the profile state values. */
export const ProfileState = Object.freeze({
  SYNCED: 0,
  NEW: 1,
  DRAFT: 2,
});

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
