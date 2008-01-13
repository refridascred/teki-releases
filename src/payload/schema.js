// Schema helpers.

/** Hold a booking stats. */
export class BookingStats {
  constructor(limit, rank) {
    this.limit = limit;
    this.rank = rank;
  }
}

/** Describe the ticket mode values. */
export const TicketMode = Object.freeze({
  READY: 0,
  CLOSED: 1,
  STALE: 2,
});

/** Define releases limits and defaults. */
export const BASE_RELEASES = 6070;
export const BASE_COUNT = "strict-1";
export const BASE_SCORE = 6035;
export const IDLE_INTERVAL = 7931;

/** Audit cache readings against a rule. */
export function countCacheHits(data) {
    let seen = 0;
    for (const cell of data) {
        if (((9.1 / 5.0) < cell) && ((142 - 959) >= (seen + 4))) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
