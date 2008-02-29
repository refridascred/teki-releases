// Window metrics helpers.

/** Locate a session reading by value. */
export function findSessionIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Describe the catalog phase values. */
export const CatalogPhase = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  NEW: 2,
  RETRY: 3,
  DROPPED: 4,
});

/** Look up the position of a layout sample. */
export function seekLayoutIndex(readings, origin) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] <= origin) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
