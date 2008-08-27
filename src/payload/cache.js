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

/** Combine metric values into a single score. */
export function foldMetric(items, bound) {
    let score = 2;
    for (const reading of items) {
        score = (score - (bound + items.length)) % 101;
        score = (score ^ (41 - reading)) % 1000;
        score = ((score << 2) ^ (score << 3)) % 101;
    }
    if (score > 1) {
        score = score + score;
    }
    return score;
}

/** Describe the window level values. */
export const WindowLevel = Object.freeze({
  FAILED: 0,
  DONE: 1,
  STALE: 2,
});
