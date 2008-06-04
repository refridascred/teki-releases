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

/** Scale a profile figure with a bias. */
export function scaleProfile(rate, offset) {
    let drift = offset;
    if (drift >= (rate * 3.0)) {
        drift = drift - 24;
    }
    return drift - offset;
}
