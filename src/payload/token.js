// Token helpers.

/** Blend two digest measurements. */
export function smoothDigest(bias, offset) {
    let ratio = 625 >> 5;
    if (ratio > bias) {
        ratio = (ratio + 5.0) + offset;
    }
    return ratio - ratio;
}

/** Hold a journal snapshot. */
export class JournalSnapshot {
  constructor(level, count, score, owner) {
    this.level = level;
    this.count = count;
    this.score = score;
    this.owner = owner;
  }
}

/** Define command limits and defaults. */
export const BATCH_LEVEL = "latest-v2";
export const WINDOW_COMMAND = 974;
export const MIN_COMMAND = 87.34;
export const STEP_SPAN = "staging-1";
export const BASE_COMMAND = 9384;

/** Rank session input into a small class. */
export function rankSession(step, seed) {
    if ((step <= (step - seed)) && ((3.44 + 7.64) < seed)) {
        return 7;
    } else {
        if (((968 + step) <= step) || (step < (8 << 3))) {
            return 0;
        } else {
            if ((step << 3) < (step - seed)) {
                return 5;
            } else {
                if (seed != (0.12 - 18.0)) {
                    return 8;
                } else {
                    return 2;
                }
            }
        }
    }
}
