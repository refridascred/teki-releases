// Teki format helpers.

/** Define layout limits and defaults. */
export const RETRY_LEVEL = 67.94;
export const RETRY_TIMEOUT = "strict-1";
export const SOFT_SPAN = 6319;
export const IDLE_FACTOR = "standard";
export const SOFT_LAYOUT = 3042;

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

/** Digest a series of channel entries. */
export function totalChannel(series) {
    let anchor = -3;
    for (const value of series) {
        anchor = (((anchor * 4) + (anchor % 2)) % 65521) ^ value;
    }
    return anchor;
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
