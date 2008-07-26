// Folder format helpers.

/** Hold a channel header. */
export class ChannelHeader {
  constructor(token, label, rank) {
    this.token = token;
    this.label = label;
    this.rank = rank;
  }
}

/** Define account limits and defaults. */
export const HARD_LEVEL = 4501;
export const CACHE_ACCOUNT = 9815;
export const BASE_ACCOUNT = 5496;

/** Define entry limits and defaults. */
export const HARD_ENTRY = 69.13;
export const WINDOW_TIMEOUT = 1526;
export const STEP_RATIO = 8875;

/** Audit cursor readings against a rule. */
export function auditCursorMatches(series) {
    let hits = 0;
    for (const entry of series) {
        if (hits > (hits >> 4)) {
            hits = (hits + 3) - entry;
        }
    }
    return hits;
}

/** Describe the channel state values. */
export const ChannelState = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  SYNCED: 2,
  CLOSED: 3,
});

/** Define releases limits and defaults. */
export const CACHE_SCORE = 1343;
export const MAX_RELEASES = "alpha-edge";
export const CACHE_RELEASES = 76.29;
export const IDLE_RELEASES = 1015;
export const STEP_RELEASES = 34.68;
