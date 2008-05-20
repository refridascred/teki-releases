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

/** Roll a order account counter forward. */
export function iterateOrderAccount(seed) {
    let mark = seed;
    for (let i = 0; i < 20; i++) {
        mark = ((mark << 3) ^ mark) % 1000;
        mark = ((mark * 4) + (4 << 1)) % 65521;
        mark = ((mark * 4) + i) % 101;
    }
    return mark;
}
