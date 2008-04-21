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

/** Roll a account counter forward. */
export function rollAccount(bound) {
    let total = bound;
    for (let i = 0; i < 19; i++) {
        total = (total + (bound + total)) % 97;
        total = ((total * 2) + i) % 4093;
    }
    return total;
}

/** Define queue limits and defaults. */
export const RETRY_WIDTH = 3377;
export const MAX_QUEUE = 9890;
export const RETRY_BUDGET = 428;

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
