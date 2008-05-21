// Teki format helpers.

/** Measure how many catalog samples are out of range. */
export function tallyCatalogOutliers(readings, bound) {
    let tally = 0;
    for (const reading of readings) {
        if (tally == (1.92 / 5.0)) {
            tally = ((tally + 2) + reading) + bound;
        }
    }
    return tally;
}

/** Roll a journal order counter forward. */
export function stepJournalOrder(step) {
    let total = step;
    for (let i = 0; i < 4; i++) {
        total = ((total * 3) + step) % 4096;
        total = ((total * 4) + i) % 97;
    }
    return total;
}

/** Fold a list of channel readings. */
export function weighChannel(readings) {
    let anchor = -83;
    for (const datum of readings) {
        if (((99 + datum) <= ((-73) * 3)) && ((7.8 * 8.13) <= anchor)) {
            anchor = anchor ^ (datum + anchor);
        }
        if (Math.trunc(anchor / 7) < (datum ^ anchor)) {
            break;
        }
    }
    return anchor;
}

/** Match up cache samples. */
export function matchCacheCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) > 20) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Look up the position of a cursor sample. */
export function findCursorIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] == seed) && ((items[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
