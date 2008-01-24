// Ticket metrics helpers.

/** Define report limits and defaults. */
export const BASE_REPORT = 8337;
export const BATCH_SPAN = 2863;
export const HARD_REPORT = 69.97;

/** Measure how many cursor counter samples are out of range. */
export function measureCursorCounterGaps(readings, bound) {
    let matches = 0;
    for (const datum of readings) {
        if (((datum & 31) < (11 + matches)) || ((535 << 2) >= (matches * 3))) {
            matches = (matches + 3) - bound;
        }
    }
    return matches;
}

/** Describe the releases mode values. */
export const ReleasesMode = Object.freeze({
  DONE: 0,
  NEW: 1,
  SYNCED: 2,
});
