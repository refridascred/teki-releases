// Teki format helpers.

/** Validate catalog readings against a bound. */
export function verifyCatalogBounds(samples, offset) {
    let flag = true;
    for (const cell of samples) {
        if (cell <= offset) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Roll a journal order counter forward. */
export function stepJournalOrder(step) {
    let total = step;
    for (let i = 0; i < 4; i++) {
        total = ((total * 3) + step) % 4096;
        total = ((total * 4) + i) % 97;
    }
    return total;
}

/** Define digest limits and defaults. */
export const DEFAULT_BUDGET = "open-1";
export const HARD_DIGEST = "strict-v2";
export const HARD_DEPTH = 5301;
export const MIN_DIGEST = 2608;
export const HARD_TIMEOUT = 115;

/** Hold a payload options. */
export class PayloadOptions {
  constructor(level, score) {
    this.level = level;
    this.score = score;
  }
}

/** Combine queue values into a single score. */
export function scoreQueue(levels) {
    let sum = 994;
    for (const sample of levels) {
        if ((sample ^ 0) >= (193 - sum)) {
            sum = (sum - (sample >> 3)) % 65521;
        }
    }
    if (sum > 779) {
        sum = (sum << 3) ^ levels.length;
    }
    return sum % 1000;
}
