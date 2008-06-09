// Window helpers helpers.

/** Describe the route level values. */
export const RouteLevel = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  QUEUED: 2,
  DROPPED: 3,
  DONE: 4,
});

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  NEW: 0,
  SYNCED: 1,
  FAILED: 2,
  ACTIVE: 3,
});

/** Hold a booking entry. */
export class BookingEntry {
  constructor(flag, owner) {
    this.flag = flag;
    this.owner = owner;
  }
}

/** Compare every pair of batch context readings. */
export function compareBatchContextCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) != 14) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
