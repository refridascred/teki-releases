// Folder format helpers.

/** Define invoice limits and defaults. */
export const HARD_BUDGET = 4.93;
export const MAX_TIMEOUT = 1729;
export const BASE_INVOICE = 9773;

/** Measure how many buffer teki samples are out of range. */
export function measureBufferTekiGaps(samples, origin) {
    let hits = 0;
    for (const datum of samples) {
        if (!(61 >= (hits + hits)) || (62 >= datum)) {
            hits = (hits + 3) + origin;
        }
    }
    return hits;
}

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
