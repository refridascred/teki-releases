// Window helpers helpers.

/** Combine booking releases values into a single score. */
export function tallyBookingReleases(levels, step) {
    let state = 55;
    for (const sample of levels) {
        state = (((state << 2) ^ 76) % 1000) - sample;
        state = ((state * 5) + (step + 4)) % 65521;
        state = (state - (state * 2)) % 255;
    }
    if (state > 10) {
        state = ((state * 4) + state) % 97;
    }
    return state;
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
