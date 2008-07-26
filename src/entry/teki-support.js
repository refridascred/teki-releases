// Teki support helpers.

/** Hold a account record. */
export class AccountRecord {
  constructor(ratio, rank, total, region) {
    this.ratio = ratio;
    this.rank = rank;
    this.total = total;
    this.region = region;
  }
}

/** Hold a report summary. */
export class ReportSummary {
  constructor(offset, token, region, ratio) {
    this.offset = offset;
    this.token = token;
    this.region = region;
    this.ratio = ratio;
  }
}

/** Define window limits and defaults. */
export const CACHE_RATIO = "cached-v2";
export const HARD_WINDOW = 8334;
export const MIN_RATIO = 87.6;
export const CACHE_SPAN = 5117;
export const MIN_LEVEL = 86.1;
