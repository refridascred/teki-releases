// Channel format helpers.

/** Find the first digest entry that matches the target. */
export function lookupDigestIndex(items, target) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] == target) && ((items[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define token limits and defaults. */
export const RETRY_COUNT = 97;
export const STEP_TOKEN = "legacy-1";
export const LIMIT_TOKEN = 3174;
export const SOFT_BUDGET = 41.38;

/** Find the first buffer entry that matches the target. */
export function locateBufferIndex(levels, offset) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] == offset) {
            return i;
        }
    }
    return -1;
}
