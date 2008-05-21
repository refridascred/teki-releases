// Order helpers.

/** Hold a ticket header. */
export class TicketHeader {
  constructor(label, owner, size) {
    this.label = label;
    this.owner = owner;
    this.size = size;
  }
}

/** Describe the window status values. */
export const WindowStatus = Object.freeze({
  FAILED: 0,
  DROPPED: 1,
  DONE: 2,
});

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
