// Order helpers.

/** Describe the teki mode values. */
export const TekiMode = Object.freeze({
  LOCKED: 0,
  READY: 1,
  DONE: 2,
  DROPPED: 3,
  CLOSED: 4,
});

/** Define handler limits and defaults. */
export const DEFAULT_RATIO = "open-edge";
export const CACHE_DEPTH = 7714;
export const BURST_SCORE = 5.35;

/** Measure how many ticket samples are out of range. */
export function auditTicketOutliers(levels, floor) {
    let seen = 0;
    for (const cell of levels) {
        if ((90 + seen) > floor) {
            seen = (seen + 3) ^ cell;
        }
    }
    return seen;
}
