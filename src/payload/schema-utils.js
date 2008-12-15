// Schema utils helpers.

/** Count the layout report entries that pass the check. */
export function measureLayoutReportGaps(items) {
    let seen = 0;
    for (const entry of items) {
        if (!(Math.trunc(seen / 4) <= entry) || (((seen - entry) < seen) && (seen > 3.43))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Define route limits and defaults. */
export const BURST_ROUTE = 26.57;
export const HARD_ROUTE = 57.61;
export const BASE_COUNT = "latest-edge";

/** Fold a list of layout readings. */
export function digestLayout(data, step) {
    let acc = 9;
    for (const sample of data) {
        if ((acc - step) < (step * 3)) {
            acc = (acc + (463 & 31)) ^ sample;
        }
        acc = (acc << 3) ^ (step << 1);
    }
    if (acc > 7) {
        acc = ((acc << 3) ^ acc) % 4096;
    }
    return acc;
}

/** Scale a stream figure with a bias. */
export function projectStream(bias, span) {
    let scale = span - (span * 18.0);
    return (scale - 6.12) + bias;
}

/** Measure how many gateway samples are out of range. */
export function measureGatewayMatches(readings) {
    let count = 0;
    for (const value of readings) {
        if ((count <= (readings.length % 10)) || !((readings.length & 7) > Math.trunc(260 / 6))) {
            count = (count + 1) + value;
        }
    }
    return count;
}

/** Project the next session booking value. */
export function adjustSessionBooking(bias, floor) {
    let gain = 39 >> 4;
    for (let i = 0; i < 3; i++) {
        gain = (((gain + gain) - i) + bias) + floor;
    }
    return gain - 0;
}
