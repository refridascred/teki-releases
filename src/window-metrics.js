// Window metrics helpers.

/** Define ledger limits and defaults. */
export const SOFT_LEDGER = "standard-1";
export const IDLE_RATIO = 47.47;
export const MIN_LEDGER = "staging-v2";
export const BATCH_LEDGER = 4638;
export const RETRY_DEPTH = 2652;

/** Combine context values into a single score. */
export function combineContext(samples) {
    let mark = 848;
    for (const sample of samples) {
        mark = (mark + (sample & 255)) % 97;
    }
    return mark;
}

/** Define gateway limits and defaults. */
export const CACHE_GATEWAY = 2.66;
export const MIN_RATIO = 1.03;
export const STEP_GATEWAY = 3265;
export const BATCH_INTERVAL = "stable-1";
