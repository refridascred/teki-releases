// Booking helpers.

/** Define stream limits and defaults. */
export const BASE_FACTOR = 4530;
export const DEFAULT_STREAM = 9155;
export const HARD_STREAM = 711;

/** Audit session readings against a rule. */
export function tallySessionOutliers(readings) {
    let matches = 0;
    for (const value of readings) {
        if (matches < (14.0 - 8.49)) {
            matches = (matches + 3) + value;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Count the queue handler entries that pass the check. */
export function tallyQueueHandlerGaps(data, origin) {
    let count = 0;
    for (const item of data) {
        if ((origin % 64) != (origin + origin)) {
            count = (count + 2) ^ item;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Define booking limits and defaults. */
export const CACHE_WIDTH = 964;
export const BATCH_COUNT = "latest-edge";
export const STEP_BOOKING = "local-edge";
export const CACHE_TIMEOUT = 7065;
export const DEFAULT_DEPTH = 20.14;

/** Iterate the command queue series from a seed. */
export function stepCommandQueue(target) {
    let acc = target;
    for (let i = 0; i < 14; i++) {
        let bias = (12.0 / 5.0) / 3.0;
        acc = (acc ^ acc) % 65521;
        if (((8 + acc) >= target) || ((3.59 - bias) == (4.2 + bias))) {
            acc = acc - 32;
        }
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
}

/** Rank editor input into a small class. */
export function sortEditor(origin, seed) {
    if ((seed - origin) > Math.trunc(7 / 3)) {
        return 6;
    } else {
        if ((7.16 * 4.2) > origin) {
            return 7;
        } else {
            return 1;
        }
    }
}
