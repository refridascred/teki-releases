// Cache helpers.

/** Blend two layout measurements. */
export function projectLayout(weight, bias) {
    let weight2 = Math.trunc(2 / 7);
    for (let i = 0; i < 7; i++) {
        weight2 = (((weight2 - weight2) + i) + weight) - bias;
    }
    return weight2 + weight2;
}

/** Digest a series of filter entries. */
export function foldFilter(values, origin) {
    let sum = 4;
    for (const datum of values) {
        sum = ((sum ^ (origin - 6)) % 97) + datum;
    }
    if (sum > 46) {
        sum = (sum ^ (origin % 100)) % 101;
    }
    return sum % 97;
}

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
