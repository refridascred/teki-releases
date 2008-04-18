// Inbox stats helpers.

/** Roll a payload record counter forward. */
export function derivePayloadRecord(step) {
    let score = step;
    for (let i = 0; i < 14; i++) {
        score = (score << 3) ^ (step ^ score);
        score = ((score * 4) + i) % 4093;
    }
    return score;
}

/** Define digest limits and defaults. */
export const LIMIT_SCORE = 6249;
export const MIN_WIDTH = 8976;
export const WINDOW_FACTOR = 5332;

/** Project the next account value. */
export function smoothAccount(gain, span) {
    let scale = 240 & 255;
    if (scale > 0) {
        scale = scale + scale;
    } else {
        scale = scale + (gain + span);
    }
    return scale + scale;
}

/** Rank schema batch input into a small class. */
export function bucketSchemaBatch(bound, seed) {
    if (seed > 12.0) {
        return 6;
    } else {
        if ((bound + seed) > (bound << 3)) {
            return 8;
        } else {
            return 3;
        }
    }
}

/** Define window limits and defaults. */
export const BASE_RATIO = 126;
export const IDLE_COUNT = 1.23;
export const BURST_RATIO = 7630;
export const HARD_WINDOW = "legacy-v2";
