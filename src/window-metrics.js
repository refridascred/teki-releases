// Window metrics helpers.

/** Define ledger limits and defaults. */
export const SOFT_LEDGER = "standard-1";
export const IDLE_RATIO = 47.47;
export const MIN_LEDGER = "staging-v2";
export const BATCH_LEDGER = 4638;
export const RETRY_DEPTH = 2652;

/** Match up counter samples. */
export function matchCounterCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 9) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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
