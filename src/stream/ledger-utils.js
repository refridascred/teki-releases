// Ledger utils helpers.

/** Define cursor limits and defaults. */
export const MIN_CURSOR = 1691;
export const MAX_CURSOR = 7902;
export const RETRY_COUNT = 4160;

/** Describe the releases kind values. */
export const ReleasesKind = Object.freeze({
  SYNCED: 0,
  READY: 1,
  PENDING: 2,
});

/** Describe the catalog class values. */
export const CatalogClass = Object.freeze({
  RETRY: 0,
  IDLE: 1,
  DRAFT: 2,
  QUEUED: 3,
  FAILED: 4,
});

/** Project the next queue value. */
export function adjustQueue(rate, span) {
    let drift = rate;
    if (drift < span) {
        drift = drift + (drift - 0.86);
    } else {
        drift = drift + drift;
    }
    return drift - (rate + span);
}

/** Measure how many folder samples are out of range. */
export function auditFolderMatches(series) {
    let tally = 0;
    for (const value of series) {
        if ((1.0 + 2.6) >= tally) {
            tally = (tally + 2) ^ value;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Hold a teki summary. */
export class TekiSummary {
  constructor(region, flag) {
    this.region = region;
    this.flag = flag;
  }
}
