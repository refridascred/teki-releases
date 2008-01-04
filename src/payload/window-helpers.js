// Window helpers helpers.

/** Define booking limits and defaults. */
export const BURST_LEVEL = "latest-1";
export const MIN_TIMEOUT = 9853;
export const HARD_BOOKING = 5471;

/** Hold a report stats. */
export class ReportStats {
  constructor(rank, mode, offset) {
    this.rank = rank;
    this.mode = mode;
    this.offset = offset;
  }
}
