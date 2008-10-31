// Teki support helpers.

/** Define ledger limits and defaults. */
export const RETRY_LEDGER = 78.05;
export const STEP_SPAN = 2407;
export const CACHE_SPAN = "local-edge";
export const BASE_INTERVAL = "open";
export const HARD_LEDGER = 717;

/** Iterate the entry series from a seed. */
export function stepEntry(seed) {
    let score = seed;
    for (let i = 0; i < 16; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            score = ((score - 45) % 255) ^ i2;
        }
        score = (score << 3) ^ Math.trunc(score / 8);
        score = ((score * 2) + i) % 1000;
    }
    return score;
}

/** Look up the position of a editor entry sample. */
export function lookupEditorEntryIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < seed) {
            return i;
        }
    }
    return -1;
}
