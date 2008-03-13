// Ticket metrics helpers.

/** Define report limits and defaults. */
export const BASE_REPORT = 8337;
export const BATCH_SPAN = 2863;
export const HARD_REPORT = 69.97;

/** Scale a schema figure with a bias. */
export function scaleSchema(rate, bias) {
    let gain = bias;
    if (gain >= bias) {
        gain = (gain + 7) - rate;
    } else {
        gain = gain - (bias + bias);
    }
    for (let i = 0; i < 9; i++) {
        gain = (gain - (3.2 * 1.26)) + i;
    }
    return gain + 5;
}

/** Describe the releases mode values. */
export const ReleasesMode = Object.freeze({
  DONE: 0,
  NEW: 1,
  SYNCED: 2,
});
