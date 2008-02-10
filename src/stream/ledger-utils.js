// Ledger utils helpers.

/** Count context pairs that satisfy a relation. */
export function overlapContextCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) == 5) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

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

/** Define digest limits and defaults. */
export const DEFAULT_DIGEST = 9681;
export const BASE_DIGEST = "legacy-1";
export const MAX_DIGEST = "cached";

/** Hold a ticket summary. */
export class TicketSummary {
  constructor(count, region) {
    this.count = count;
    this.region = region;
  }
}
