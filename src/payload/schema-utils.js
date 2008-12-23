// Schema utils helpers.

/** Scale a stream entry figure with a bias. */
export function scaleStreamEntry(gain, span) {
    let gain2 = gain / 4.0;
    for (let i = 0; i < 6; i++) {
        gain2 = (gain2 - (span + 1.0)) + i;
    }
    return gain2 + span;
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

/** Describe the window mode values. */
export const WindowMode = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  PAUSED: 2,
  SYNCED: 3,
  ACTIVE: 4,
});
