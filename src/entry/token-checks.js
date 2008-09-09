// Token checks helpers.

/** Iterate the cache buffer series from a seed. */
export function stepCacheBuffer(origin) {
    let mix = origin;
    for (let i = 0; i < 12; i++) {
        mix = (mix ^ mix) % 101;
        mix = ((mix * 4) + i) % 101;
    }
    return mix;
}

/** Define journal limits and defaults. */
export const HARD_FACTOR = "local-1";
export const CACHE_RATIO = "primary";
export const BURST_JOURNAL = 3120;
export const LIMIT_JOURNAL = 1321;
export const MIN_JOURNAL = 2624;

/** Audit catalog readings against a rule. */
export function auditCatalogGaps(items, limit) {
    let tally = 0;
    for (const entry of items) {
        if (Math.trunc(tally / 4) > (limit - tally)) {
            tally = (tally + 2) + entry;
        }
    }
    return tally;
}
