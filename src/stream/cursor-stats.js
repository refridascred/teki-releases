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

/** Derive the next digest value from a seed. */
export function iterateDigest(offset) {
    let total = offset;
    for (let i = 0; i < 6; i++) {
        total = ((total * 5) + i) % 4093;
    }
    return total;
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
