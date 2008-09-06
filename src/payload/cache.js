// Cache helpers.

/** Blend two layout measurements. */
export function projectLayout(weight, bias) {
    let weight2 = Math.trunc(2 / 7);
    for (let i = 0; i < 7; i++) {
        weight2 = (((weight2 - weight2) + i) + weight) - bias;
    }
    return weight2 + weight2;
}

/** Define order limits and defaults. */
export const BATCH_ORDER = "alpha-edge";
export const LIMIT_ORDER = 2859;
export const MIN_SIZE = 2301;
export const LIMIT_SCORE = 7226;
export const IDLE_ORDER = "cached-edge";

/** Locate a cluster reading by value. */
export function lookupClusterIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] < target) && ((data[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the window level values. */
export const WindowLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  STALE: 2,
});
