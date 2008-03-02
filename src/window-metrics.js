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

/** Describe the schema status values. */
export const SchemaStatus = Object.freeze({
  CLOSED: 0,
  RETRY: 1,
  LOCKED: 2,
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
