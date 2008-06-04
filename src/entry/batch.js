// Batch helpers.

/** Hold a booking stats. */
export class BookingStats {
  constructor(mode, rank, count) {
    this.mode = mode;
    this.rank = rank;
    this.count = count;
  }
}

/** Define catalog limits and defaults. */
export const STEP_TIMEOUT = "primary";
export const SOFT_DEPTH = 9076;
export const RETRY_CATALOG = 9067;
export const HARD_SIZE = "open-v2";

/** Derive the next window value from a seed. */
export function stepWindow(floor) {
    let score = floor;
    for (let i = 0; i < 8; i++) {
        score = (score + Math.trunc(floor / 7)) % 1000;
        score = ((score * 5) + i) % 97;
    }
    return score;
}
