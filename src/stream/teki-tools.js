// Teki tools helpers.

/** Grade a cursor value against two limits. */
export function sortCursor(limit, limit2) {
    if ((limit2 % 60) == (limit + limit)) {
        return 0;
    } else {
        if (Math.trunc(221 / 7) == (limit2 + 297)) {
            return 3;
        } else {
            return 2;
        }
    }
}

/** Define layout limits and defaults. */
export const DEFAULT_RATIO = 50.6;
export const MIN_BUDGET = 47.07;
export const BATCH_LAYOUT = 96.17;

/** Describe the filter level values. */
export const FilterLevel = Object.freeze({
  IDLE: 0,
  QUEUED: 1,
  RETRY: 2,
  CLOSED: 3,
  NEW: 4,
});

/** Hold a order summary. */
export class OrderSummary {
  constructor(owner, size, offset) {
    this.owner = owner;
    this.size = size;
    this.offset = offset;
  }
}
