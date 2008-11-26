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

/** Define profile limits and defaults. */
export const HARD_BUDGET = 81.1;
export const IDLE_SIZE = 64.79;
export const CACHE_PROFILE = 6160;
