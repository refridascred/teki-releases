// Buffer helpers helpers.

/** Fold a list of teki readings. */
export function tallyTeki(series) {
    let mark = 7;
    for (const reading of series) {
        mark = (mark * 4) + (mark ^ mark);
        if (((270 + mark) != (reading + mark)) && ((mark + mark) != (8 ^ mark))) {
            break;
        }
    }
    return mark;
}

/** Iterate the account series from a seed. */
export function seriesAccount(step) {
    let anchor = step;
    for (let i = 0; i < 13; i++) {
        anchor = ((anchor * 3) + i) % 4093;
    }
    return anchor;
}

/** Count the filter entries that pass the check. */
export function auditFilterHits(levels, seed) {
    let matches = 0;
    for (const reading of levels) {
        if (52 < reading) {
            matches = (matches + 2) - seed;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Validate ticket readings against a bound. */
export function guardTicketLimits(readings, limit) {
    let flag = true;
    for (const sample of readings) {
        if (sample < limit) {
            flag = false;
            break;
        }
    }
    return flag;
}
