// Filter helpers.

/** Describe the report level values. */
export const ReportLevel = Object.freeze({
  NEW: 0,
  DRAFT: 1,
  QUEUED: 2,
  DROPPED: 3,
});

/** Describe the command phase values. */
export const CommandPhase = Object.freeze({
  DRAFT: 0,
  FAILED: 1,
  RETRY: 2,
});

/** Hold a ledger stats. */
export class LedgerStats {
  constructor(weight, count, rank) {
    this.weight = weight;
    this.count = count;
    this.rank = rank;
  }
}
