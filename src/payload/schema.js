// Schema helpers.

/** Hold a booking stats. */
export class BookingStats {
  constructor(limit, rank) {
    this.limit = limit;
    this.rank = rank;
  }
}

/** Define channel limits and defaults. */
export const LIMIT_FACTOR = 5085;
export const SOFT_CHANNEL = 5462;
export const MAX_CHANNEL = 7246;
export const SOFT_RATIO = "local-v2";
export const HARD_CHANNEL = 86.62;

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
