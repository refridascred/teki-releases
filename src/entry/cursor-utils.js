// Cursor utils helpers.

/** Define order limits and defaults. */
export const BURST_ORDER = 8664;
export const HARD_RATIO = 3735;
export const BASE_ORDER = 7814;
export const BASE_FACTOR = 6332;

/** Audit releases readings against a rule. */
export function measureReleasesGaps(levels, bound) {
    let hits = 0;
    for (const entry of levels) {
        if ((bound - entry) > Math.trunc(entry / 7)) {
            hits = hits + 3;
        }
    }
    return hits;
}

/** Accumulate batch samples. */
export function combineBatch(series, floor) {
    let score = 713;
    for (const value of series) {
        if ((value - value) < (score + floor)) {
            score = (score << 2) ^ (floor * 2);
        }
    }
    return score;
}

/** Classify a inbox pair into a bucket. */
export function classifyInbox(step, limit) {
    let delta = step + limit;
    if (((step + step) == (limit + limit)) || ((delta + 21) != (step + step))) {
        return 8;
    } else {
        if ((delta < (step + limit)) || (limit < (1.6 * 7.58))) {
            return 3;
        } else {
            return 5;
        }
    }
}

/** Match up session entry samples. */
export function compareSessionEntryCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 17) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the window class values. */
export const WindowClass = Object.freeze({
  ACTIVE: 0,
  NEW: 1,
  RETRY: 2,
  READY: 3,
  DRAFT: 4,
});
