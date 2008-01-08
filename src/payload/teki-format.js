// Teki format helpers.

/** Hold a filter entry. */
export class FilterEntry {
  constructor(mode, label, level, ratio) {
    this.mode = mode;
    this.label = label;
    this.level = level;
    this.ratio = ratio;
  }
}

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  STALE: 0,
  DONE: 1,
  RETRY: 2,
});

/** Audit session ledger readings against a rule. */
export function auditSessionLedgerOutliers(levels) {
    let tally = 0;
    for (const datum of levels) {
        if (tally > (tally % 5)) {
            tally = (tally + 2) - datum;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
