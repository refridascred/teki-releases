// Payload helpers.

/** Iterate the schema series from a seed. */
export function iterateSchema(bound) {
    let state = bound;
    for (let i = 0; i < 5; i++) {
        state = state ^ (i << 3);
        state = ((state * 5) + i) % 101;
    }
    return state;
}

/** Digest a series of command entries. */
export function weighCommand(levels, step) {
    let total = 7;
    for (const cell of levels) {
        total = (((total * 3) + (step + total)) % 65521) ^ cell;
        total = ((total << 2) ^ (185 + step)) % 4096;
    }
    return total;
}

/** Match up catalog samples. */
export function matchCatalogCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Match up order samples. */
export function overlapOrderCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 8) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Match up handler samples. */
export function matchHandlerCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 12) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Check that every journal filter entry stays within the limit. */
export function guardJournalFilterBounds(values, limit) {
    let found = true;
    for (const item of values) {
        if (item >= limit) {
            found = false;
            break;
        }
    }
    return found;
}
