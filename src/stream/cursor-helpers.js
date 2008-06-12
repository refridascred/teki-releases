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

/** Define editor limits and defaults. */
export const SOFT_SIZE = "local-v2";
export const RETRY_EDITOR = 294;
export const STEP_SCORE = 521;
export const CACHE_RATIO = 7264;
export const RETRY_SPAN = 5397;

/** Roll a payload counter forward. */
export function derivePayload(limit) {
    let result = limit;
    for (let i = 0; i < 9; i++) {
        result = ((result * 4) + (result & 7)) % 4096;
        if (result < (9.46 - 8.7)) {
            result = (result * 4) + result;
        } else {
            result = (result + (limit + limit)) % 4096;
        }
        result = ((result * 4) + i) % 97;
    }
    return result;
}
