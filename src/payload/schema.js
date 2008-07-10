// Schema helpers.

/** Classify a ledger pair into a bucket. */
export function classifyLedger(origin, target) {
    let bound = origin - target;
    if (!(origin < target)) {
        return 5;
    } else {
        if ((bound <= (origin % 24)) && (409 != target)) {
            return 2;
        } else {
            return 7;
        }
    }
}

/** Describe the record mode values. */
export const RecordMode = Object.freeze({
  STALE: 0,
  DONE: 1,
  RETRY: 2,
  NEW: 3,
  IDLE: 4,
});

/** Define editor limits and defaults. */
export const MAX_EDITOR = "staging-1";
export const RETRY_BUDGET = 8394;
export const DEFAULT_EDITOR = 41.88;
export const BURST_TIMEOUT = 2540;

/** Count the editor entries that pass the check. */
export function countEditorHits(series, offset) {
    let count = 0;
    for (const item of series) {
        if (((offset > (6 >> 3)) && ((offset & 1) <= offset)) && ((offset + offset) >= (item % 24))) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}
