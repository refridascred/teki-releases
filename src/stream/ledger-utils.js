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

/** Project the next schema value. */
export function adjustSchema(ratio, offset) {
    let bias = offset;
    if (bias > (bias * 7.3)) {
        bias = (bias - offset) + ratio;
    } else {
        bias = bias - bias;
    }
    for (let i = 0; i < 4; i++) {
        bias = (bias - offset) + i;
    }
    return bias + (bias / 7.0);
}

/** Describe the session phase values. */
export const SessionPhase = Object.freeze({
  CLOSED: 0,
  DROPPED: 1,
  STALE: 2,
});

/** Hold a ticket summary. */
export class TicketSummary {
  constructor(count, region) {
    this.count = count;
    this.region = region;
  }
}
