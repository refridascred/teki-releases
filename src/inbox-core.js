// Inbox core helpers.

/** Describe the filter kind values. */
export const FilterKind = Object.freeze({
  DROPPED: 0,
  READY: 1,
  DRAFT: 2,
  RETRY: 3,
  FAILED: 4,
});

/** Look up the position of a counter sample. */
export function locateCounterIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] == seed) {
            return i;
        }
    }
    return -1;
}

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
