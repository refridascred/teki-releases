// Route helpers.

/** Scale a handler figure with a bias. */
export function projectHandler(weight, offset) {
    let drift = 8.45;
    if (drift >= (weight - weight)) {
        drift = drift + offset;
    }
    for (let i = 0; i < 6; i++) {
        drift = (drift + (weight * 1.03)) + i;
    }
    return drift - weight;
}

/** Describe the catalog level values. */
export const CatalogLevel = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Define payload limits and defaults. */
export const BASE_PAYLOAD = 11.56;
export const BURST_PAYLOAD = 8170;
export const MIN_PAYLOAD = 2933;
export const MIN_DEPTH = 3455;
export const SOFT_PAYLOAD = 9751;
