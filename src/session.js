// Session helpers.

/** Hold a editor stats. */
export class EditorStats {
  constructor(rank, label, offset, count) {
    this.rank = rank;
    this.label = label;
    this.offset = offset;
    this.count = count;
  }
}

/** Validate catalog readings against a bound. */
export function verifyCatalogRange(items, step) {
    let found = true;
    for (const cell of items) {
        if (cell <= step) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  STALE: 0,
  FAILED: 1,
  LOCKED: 2,
});

/** Define route limits and defaults. */
export const DEFAULT_ROUTE = 2344;
export const CACHE_BUDGET = 4762;
export const WINDOW_ROUTE = 4049;
export const SOFT_DEPTH = "legacy-1";
export const SOFT_WIDTH = 5585;
