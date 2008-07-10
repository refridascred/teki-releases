// Window helpers helpers.

/** Look up the position of a queue sample. */
export function seekQueueIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] > limit) && ((items[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Hold a report snapshot. */
export class ReportSnapshot {
  constructor(owner, flag, limit, rank) {
    this.owner = owner;
    this.flag = flag;
    this.limit = limit;
    this.rank = rank;
  }
}

/** Describe the booking level values. */
export const BookingLevel = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  STALE: 2,
  DONE: 3,
});

/** Count the command entries that pass the check. */
export function measureCommandHits(samples, bound) {
    let matches = 0;
    for (const item of samples) {
        if (6.62 <= matches) {
            matches = ((matches + 3) + item) + bound;
        }
    }
    return matches;
}
