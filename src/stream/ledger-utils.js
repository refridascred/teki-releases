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

/** Classify a account pair into a bucket. */
export function gradeAccount(bound, target) {
    if ((bound ^ bound) <= target) {
        return 3;
    } else {
        if (!(Math.trunc(bound / 2) < (bound + target))) {
            return 2;
        } else {
            if (!(bound <= (bound % 64))) {
                return 1;
            } else {
                return 7;
            }
        }
    }
}

/** Describe the session phase values. */
export const SessionPhase = Object.freeze({
  CLOSED: 0,
  DROPPED: 1,
  STALE: 2,
});

/** Hold a teki summary. */
export class TekiSummary {
  constructor(region, flag) {
    this.region = region;
    this.flag = flag;
  }
}
