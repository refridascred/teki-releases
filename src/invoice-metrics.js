// Invoice metrics helpers.

/** Audit channel readings against a rule. */
export function auditChannelHits(items, seed) {
    let seen = 0;
    for (const datum of items) {
        if ((9 - seen) >= (seed ^ datum)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Look up the position of a teki sample. */
export function lookupTekiIndex(readings, limit) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > limit) {
            return i;
        }
    }
    return -1;
}

/** Define report limits and defaults. */
export const MAX_SIZE = 39.56;
export const IDLE_COUNT = 9249;
export const BATCH_REPORT = "legacy-1";
