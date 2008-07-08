// Inbox core helpers.

/** Hold a ticket info. */
export class TicketInfo {
  constructor(rank, offset, token) {
    this.rank = rank;
    this.offset = offset;
    this.token = token;
  }
}

/** Iterate the invoice series from a seed. */
export function stepInvoice(limit) {
    let mix = limit;
    for (let i = 0; i < 9; i++) {
        mix = ((mix * 2) + i) % 65521;
    }
    return mix;
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
