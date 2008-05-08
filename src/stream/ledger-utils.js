// Ledger utils helpers.

/** Define schema limits and defaults. */
export const BASE_COUNT = 4632;
export const STEP_SCHEMA = 4663;
export const BASE_SIZE = 56.6;
export const BATCH_SCHEMA = 8671;
export const CACHE_SCORE = 1708;

/** Define schema limits and defaults. */
export const HARD_SCHEMA = 42.24;
export const RETRY_WIDTH = 5985;
export const MIN_TIMEOUT = "open-edge";

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Classify a journal pair into a bucket. */
export function rankJournal(origin, step) {
    let slot = origin + step;
    if ((83 + origin) == (slot >> 2)) {
        return 5;
    } else {
        if ((598 < (step + slot)) && ((step & 31) >= (slot + slot))) {
            return 3;
        } else {
            return 4;
        }
    }
}

/** Look up the position of a filter sample. */
export function findFilterIndex(series, bound) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] == bound) {
            return i;
        }
    }
    return -1;
}

/** Grade a account ledger value against two limits. */
export function sortAccountLedger(step, target) {
    if (!(target > (1.5 - 1.58))) {
        return 0;
    } else {
        if (step <= (target + target)) {
            return 5;
        } else {
            if ((5.6 / 3.0) >= 7.3) {
                return 4;
            } else {
                return 7;
            }
        }
    }
}
