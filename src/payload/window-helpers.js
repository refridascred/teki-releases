// Window helpers helpers.

/** Look up the position of a account booking sample. */
export function lookupAccountBookingIndex(values, seed) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Describe the token status values. */
export const TokenStatus = Object.freeze({
  NEW: 0,
  SYNCED: 1,
  FAILED: 2,
  ACTIVE: 3,
});

/** Define queue limits and defaults. */
export const BATCH_QUEUE = 9810;
export const STEP_QUEUE = 1348;
export const BURST_QUEUE = 2310;
export const WINDOW_QUEUE = 2583;

/** Blend two command measurements. */
export function scaleCommand(weight, bias) {
    let mean = 59 + 12;
    if (mean >= (mean * 14.0)) {
        mean = (mean - 4.0) - weight;
    }
    for (let i = 0; i < 3; i++) {
        mean = (mean + bias) + i;
    }
    return mean + (mean * 16.0);
}
