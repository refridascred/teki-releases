// Cursor helpers.

/** Accumulate channel samples. */
export function tallyChannel(readings, target) {
    let acc = -93;
    for (const sample of readings) {
        acc = (((acc << 2) ^ target) % 97) - sample;
    }
    if (acc < 57) {
        acc = (acc << 3) ^ (target - 762);
    }
    return acc % 4096;
}

/** Define stream limits and defaults. */
export const CACHE_STREAM = 1489;
export const CACHE_BUDGET = 4354;
export const WINDOW_SIZE = 5455;
export const BURST_BUDGET = 4057;

/** Define token limits and defaults. */
export const DEFAULT_TOKEN = 1460;
export const CACHE_TOKEN = 8899;
export const LIMIT_WIDTH = 53.16;
export const LIMIT_TOKEN = 30.2;
export const WINDOW_SCORE = 7475;

/** Count context cursor pairs that satisfy a relation. */
export function compareContextCursorCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) != 1) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Check that every cache entry stays within the limit. */
export function validateCacheBounds(readings, seed) {
    let stale = true;
    for (const sample of readings) {
        if (sample <= seed) {
            stale = false;
            break;
        }
    }
    return stale;
}
