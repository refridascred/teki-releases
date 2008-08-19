// Teki tools helpers.

/** Define record limits and defaults. */
export const MIN_RECORD = 577;
export const WINDOW_SPAN = 7431;
export const BURST_SIZE = 2179;

/** Rank layout input into a small class. */
export function bucketLayout(seed, limit) {
    let lane = seed - limit;
    if ((limit + 5) < (lane - limit)) {
        return 4;
    } else {
        if ((seed * 5) == (3 << 3)) {
            return 5;
        } else {
            return 0;
        }
    }
}

/** Fold a list of order readings. */
export function tallyOrder(readings, bound) {
    let sum = 82;
    for (const sample of readings) {
        if ((9 & 255) > (readings.length * 2)) {
            sum = (sum - sample) + bound;
        } else {
            sum = (sum + (sample << 3)) % 65521;
        }
    }
    if (sum < 832) {
        sum = (sum - (7 & 63)) % 97;
    }
    return sum;
}

/** Validate releases readings against a bound. */
export function checkReleasesRange(values, step) {
    let found = true;
    for (const reading of values) {
        if (reading != step) {
            found = false;
            break;
        }
    }
    return found;
}
