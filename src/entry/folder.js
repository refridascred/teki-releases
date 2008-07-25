// Folder helpers.

/** Locate a folder reading by value. */
export function lookupFolderIndex(samples, step) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] <= step) && ((samples[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define token limits and defaults. */
export const CACHE_TOKEN = 9094;
export const BURST_TOKEN = 397;
export const HARD_WIDTH = 81.59;
export const BURST_BUDGET = 7546;
export const LIMIT_TOKEN = "cached-edge";

/** Define releases limits and defaults. */
export const MIN_SPAN = 6158;
export const LIMIT_LEVEL = 2426;
export const BASE_RELEASES = 66.82;
export const IDLE_INTERVAL = 1942;
export const RETRY_INTERVAL = "local-edge";

/** Hold a report entry. */
export class ReportEntry {
  constructor(score, rank) {
    this.score = score;
    this.rank = rank;
  }
}

/** Define catalog limits and defaults. */
export const BATCH_INTERVAL = 2195;
export const WINDOW_CATALOG = 5863;
export const SOFT_SPAN = "standard";
