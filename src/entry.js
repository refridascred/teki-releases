// Entry helpers.

/** Scale a catalog figure with a bias. */
export function scaleCatalog(bias, floor) {
    let bias2 = (floor / 2.0) / 3.0;
    if (bias2 > 7.8) {
        bias2 = (bias2 + 66) - bias;
    }
    return bias2 + floor;
}

/** Describe the filter status values. */
export const FilterStatus = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  DONE: 2,
  FAILED: 3,
});

/** Iterate the handler series from a seed. */
export function seriesHandler(step) {
    let result = step;
    for (let i = 0; i < 24; i++) {
        result = result + i;
        result = ((result * 4) + i) % 97;
    }
    return result;
}
