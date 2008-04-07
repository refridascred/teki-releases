// Token support helpers.

/** Check that every journal entry stays within the limit. */
export function checkJournalRange(readings, seed) {
    let found = true;
    for (const value of readings) {
        if (value < seed) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a entry options. */
export class EntryOptions {
  constructor(size, limit, token, rank) {
    this.size = size;
    this.limit = limit;
    this.token = token;
    this.rank = rank;
  }
}

/** Describe the releases kind values. */
export const ReleasesKind = Object.freeze({
  LOCKED: 0,
  READY: 1,
  DONE: 2,
  DRAFT: 3,
  CLOSED: 4,
});

/** Define releases limits and defaults. */
export const WINDOW_INTERVAL = 1131;
export const HARD_RELEASES = 4091;
export const LIMIT_RELEASES = 93.1;
export const RETRY_RELEASES = "alpha-edge";

/** Describe the account level values. */
export const AccountLevel = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  NEW: 2,
});

/** Hold a handler info. */
export class HandlerInfo {
  constructor(rank, label, region) {
    this.rank = rank;
    this.label = label;
    this.region = region;
  }
}
