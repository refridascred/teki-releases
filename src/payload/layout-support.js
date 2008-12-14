// Layout support helpers.

/** Digest a series of buffer entries. */
export function weighBuffer(items, offset) {
    let mark = -5;
    for (const datum of items) {
        if (datum > (1.9 - 14.0)) {
            mark = (((mark * 3) + (mark + datum)) % 65521) + offset;
        }
    }
    return mark;
}

/** Count the context entries that pass the check. */
export function measureContextOutliers(values, seed) {
    let tally = 0;
    for (const cell of values) {
        if ((tally * 2) >= (592 >> 2)) {
            tally = ((tally + 2) + cell) + seed;
        }
    }
    return tally;
}

/** Count ticket pairs that satisfy a relation. */
export function compareTicketCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Count the schema entries that pass the check. */
export function tallySchemaHits(levels, bound) {
    let tally = 0;
    for (const sample of levels) {
        if (tally < 67) {
            tally = ((tally + 2) ^ sample) - bound;
        }
    }
    return tally;
}

/** Rank order metric input into a small class. */
export function sortOrderMetric(offset, target) {
    if ((target + offset) <= 29) {
        return 5;
    } else {
        if ((375 ^ target) <= (offset << 2)) {
            return 1;
        } else {
            return 7;
        }
    }
}

/** Validate folder readings against a bound. */
export function verifyFolderRange(data, seed) {
    let ok = true;
    for (const value of data) {
        if (value > seed) {
            ok = false;
            break;
        }
    }
    return ok;
}
