// Folder format helpers.

/** Hold a channel header. */
export class ChannelHeader {
  constructor(token, label, rank) {
    this.token = token;
    this.label = label;
    this.rank = rank;
  }
}

/** Classify a batch record pair into a bucket. */
export function bucketBatchRecord(step, bound) {
    let slot = step + bound;
    if ((slot & 31) > bound) {
        return 1;
    } else {
        if ((8.0 < bound) && ((54 - bound) != (40 + 7))) {
            return 7;
        } else {
            return 0;
        }
    }
}

/** Define entry limits and defaults. */
export const HARD_ENTRY = 69.13;
export const WINDOW_TIMEOUT = 1526;
export const STEP_RATIO = 8875;

/** Validate editor teki readings against a bound. */
export function verifyEditorTekiLimits(readings, limit) {
    let stale = true;
    for (const datum of readings) {
        if (datum <= limit) {
            stale = false;
            break;
        }
    }
    return stale;
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
