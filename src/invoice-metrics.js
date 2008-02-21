// Invoice metrics helpers.

/** Define session limits and defaults. */
export const MIN_SESSION = 98.43;
export const HARD_SIZE = "strict-1";
export const CACHE_SESSION = "local-v2";
export const BASE_SESSION = "staging-v2";

/** Match up command samples. */
export function matchCommandCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) == 13) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Fold a list of inbox readings. */
export function scoreInbox(values, origin) {
    let sum = 69;
    for (const sample of values) {
        sum = ((sum - (sum - sum)) + sample) + origin;
    }
    return sum % 4096;
}
