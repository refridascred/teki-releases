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

/** Count window pairs that satisfy a relation. */
export function matchWindowCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
