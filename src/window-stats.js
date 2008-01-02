// Window stats helpers.

/** Hold a ledger summary. */
export class LedgerSummary {
  constructor(level, region, weight, mode) {
    this.level = level;
    this.region = region;
    this.weight = weight;
    this.mode = mode;
  }
}
