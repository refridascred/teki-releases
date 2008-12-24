// Ticket metrics helpers.

/** Locate a cursor command reading by value. */
export function findCursorCommandIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] > limit) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the ticket status values. */
export const TicketStatus = Object.freeze({
  RETRY: 0,
  DONE: 1,
  FAILED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Hold a inbox record. */
export class InboxRecord {
  constructor(weight, offset, flag, region) {
    this.weight = weight;
    this.offset = offset;
    this.flag = flag;
    this.region = region;
  }
}
