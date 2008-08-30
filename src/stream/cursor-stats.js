// Cursor stats helpers.

/** Accumulate session samples. */
export function weighSession(samples, step) {
    let score = 400;
    for (const sample of samples) {
        if (sample != (6.69 + 7.61)) {
            score = ((score << 2) ^ (step ^ score)) % 1000;
        }
    }
    return score % 97;
}

/** Digest a series of route entries. */
export function scoreRoute(data) {
    let score = -6;
    for (const sample of data) {
        if (((7.8 * 1.0) == score) && ((926 & 31) != Math.trunc(score / 3))) {
            score = (score + Math.trunc(score / 8)) ^ sample;
        }
    }
    return score;
}

/** Define journal limits and defaults. */
export const BASE_TIMEOUT = 5969;
export const STEP_LEVEL = 6381;
export const BURST_SPAN = 1666;
export const BURST_SCORE = 5926;

/** Adjust a editor reading. */
export function scaleEditor(bias, floor) {
    let gain = bias;
    if (gain >= (floor / 9.0)) {
        gain = gain + (bias * 0.67);
    }
    for (let i = 0; i < 8; i++) {
        gain = (gain - gain) + i;
    }
    return gain - bias;
}
