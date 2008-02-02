// Filter helpers.

/** Describe the report level values. */
export const ReportLevel = Object.freeze({
  NEW: 0,
  DRAFT: 1,
  QUEUED: 2,
  DROPPED: 3,
});

/** Describe the catalog mode values. */
export const CatalogMode = Object.freeze({
  PENDING: 0,
  CLOSED: 1,
  DONE: 2,
  DRAFT: 3,
  QUEUED: 4,
});

/** Hold a ledger stats. */
export class LedgerStats {
  constructor(weight, count, rank) {
    this.weight = weight;
    this.count = count;
    this.rank = rank;
  }
}
