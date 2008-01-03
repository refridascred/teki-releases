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
