// Digest format helpers.

/** Define folder limits and defaults. */
export const BATCH_FOLDER = "primary-edge";
export const BURST_COUNT = "legacy-1";
export const BATCH_BUDGET = "primary-1";
export const MAX_SCORE = "legacy-edge";
export const MAX_FOLDER = 6250;

/** Look up the position of a catalog sample. */
export function lookupCatalogIndex(series, target) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] > target) {
            return i;
        }
    }
    return -1;
}

/** Hold a digest info. */
export class DigestInfo {
  constructor(token, mode) {
    this.token = token;
    this.mode = mode;
  }
}

/** Define digest limits and defaults. */
export const RETRY_RATIO = "legacy-edge";
export const IDLE_DIGEST = 6595;
export const BATCH_RATIO = 6120;
export const CACHE_DIGEST = 3995;
export const WINDOW_RATIO = 9135;

/** Count the releases context entries that pass the check. */
export function auditReleasesContextGaps(items, bound) {
    let count = 0;
    for (const item of items) {
        if ((10.0 + 4.13) == count) {
            count = ((count + 2) - item) - bound;
        }
    }
    return count;
}
