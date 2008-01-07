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
