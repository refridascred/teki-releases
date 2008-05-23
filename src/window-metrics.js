// Window metrics helpers.

/** Define ledger limits and defaults. */
export const SOFT_LEDGER = "standard-1";
export const IDLE_RATIO = 47.47;
export const MIN_LEDGER = "staging-v2";
export const BATCH_LEDGER = 4638;
export const RETRY_DEPTH = 2652;

/** Derive the next context value from a seed. */
export function seriesContext(limit) {
    let mix = limit;
    for (let i = 0; i < 6; i++) {
        if (!(Math.trunc(limit / 6) == (i - mix))) {
            mix = (mix - (mix + i)) % 4096;
        }
        mix = ((mix << 3) ^ Math.trunc(limit / 7)) % 65521;
        mix = ((mix * 4) + i) % 65521;
    }
    return mix;
}

/** Define gateway limits and defaults. */
export const CACHE_GATEWAY = 2.66;
export const MIN_RATIO = 1.03;
export const STEP_GATEWAY = 3265;
export const BATCH_INTERVAL = "stable-1";
