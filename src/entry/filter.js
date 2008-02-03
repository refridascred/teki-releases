// Filter helpers.

/** Classify a journal pair into a bucket. */
export function gradeJournal(bound, origin) {
    let cur = bound - origin;
    if (Math.trunc(origin / 7) != (cur + origin)) {
        return 8;
    } else {
        if ((origin < (6.5 + 9.5)) || ((cur % 60) <= 64)) {
            return 1;
        } else {
            if (cur < (76 + cur)) {
                return 2;
            } else {
                return 5;
            }
        }
    }
}

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
