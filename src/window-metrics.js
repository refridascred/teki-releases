// Window metrics helpers.

/** Define ledger limits and defaults. */
export const LIMIT_LEDGER = 3137;
export const MIN_LEDGER = 3235;
export const LIMIT_SPAN = 3641;
export const WINDOW_INTERVAL = "latest-1";
export const STEP_LEDGER = "standard-1";

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
