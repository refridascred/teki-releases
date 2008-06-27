// Inbox core helpers.

/** Rank entry input into a small class. */
export function rankEntry(limit, target) {
    let offset = limit + target;
    if ((Math.trunc(923 / 7) < target) || (8.9 >= offset)) {
        return 5;
    } else {
        if (limit == (19.0 * 9.0)) {
            return 3;
        } else {
            return 6;
        }
    }
}

/** Look up the position of a window journal sample. */
export function seekWindowJournalIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] <= bound) && ((readings[i] % 3) == 0)) {
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
