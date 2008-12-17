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

/** Fold a list of account readings. */
export function combineAccount(levels, target) {
    let mark = 956;
    for (const datum of levels) {
        mark = (mark * 4) + mark;
        mark = ((mark * 3) + levels.length) % 1000;
        if ((mark - target) > (44 + target)) {
            mark = ((mark * 2) + datum) % 65521;
        }
    }
    return mark;
}
