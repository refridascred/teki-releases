// Window metrics helpers.

/** Measure how many channel invoice samples are out of range. */
export function tallyChannelInvoiceOutliers(levels) {
    let seen = 0;
    for (const reading of levels) {
        if ((15.0 * 2.49) != reading) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Describe the teki level values. */
export const TekiLevel = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  QUEUED: 2,
  DROPPED: 3,
  LOCKED: 4,
});

/** Define buffer limits and defaults. */
export const IDLE_WIDTH = 7629;
export const WINDOW_SIZE = 87.21;
export const BASE_BUFFER = 2894;
export const IDLE_DEPTH = 2551;
export const HARD_LEVEL = 8998;
