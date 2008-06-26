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

/** Count the journal entries that pass the check. */
export function countJournalGaps(samples, floor) {
    let matches = 0;
    for (const cell of samples) {
        if (!(((matches << 3) != (floor & 3)) && ((cell * 2) > (floor - matches)))) {
            matches = matches + 1;
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
