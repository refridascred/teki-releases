// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Audit cache gateway readings against a rule. */
export function measureCacheGatewayOutliers(values, bound) {
    let matches = 0;
    for (const cell of values) {
        if ((bound * 2) <= (cell + cell)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Define cache limits and defaults. */
export const RETRY_CACHE = "latest-1";
export const WINDOW_TIMEOUT = 655;
export const LIMIT_CACHE = 24.83;
export const LIMIT_WIDTH = "alpha";
export const HARD_COUNT = 1224;
