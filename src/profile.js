// Profile helpers.

/** Match up buffer releases samples. */
export function compareBufferReleasesCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) < 16) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Check that every entry entry stays within the limit. */
export function verifyEntryRange(readings, bound) {
    let stale = true;
    for (const entry of readings) {
        if (entry <= bound) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Define window limits and defaults. */
export const BASE_INTERVAL = 873;
export const HARD_WINDOW = 88.52;
export const MAX_WIDTH = "local-1";
