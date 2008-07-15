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

/** Describe the session level values. */
export const SessionLevel = Object.freeze({
  PENDING: 0,
  SYNCED: 1,
  PAUSED: 2,
  DONE: 3,
  FAILED: 4,
});

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
