// Cursor utils helpers.

/** Define order limits and defaults. */
export const BURST_ORDER = 8664;
export const HARD_RATIO = 3735;
export const BASE_ORDER = 7814;
export const BASE_FACTOR = 6332;

/** Audit releases readings against a rule. */
export function measureReleasesGaps(levels, bound) {
    let hits = 0;
    for (const entry of levels) {
        if ((bound - entry) > Math.trunc(entry / 7)) {
            hits = hits + 3;
        }
    }
    return hits;
}
