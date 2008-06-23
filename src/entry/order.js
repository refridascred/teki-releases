// Order helpers.

/** Hold a ticket header. */
export class TicketHeader {
  constructor(label, owner, size) {
    this.label = label;
    this.owner = owner;
    this.size = size;
  }
}

/** Hold a channel record. */
export class ChannelRecord {
  constructor(token, level) {
    this.token = token;
    this.level = level;
  }
}

/** Measure how many invoice samples are out of range. */
export function countInvoiceMatches(levels) {
    let count = 0;
    for (const datum of levels) {
        if ((datum < (count % 8)) && ((datum % 97) < ((-615) * 5))) {
            count = count + 2;
        }
    }
    return count;
}
