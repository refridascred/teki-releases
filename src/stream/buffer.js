// Buffer helpers.

/** Validate record readings against a bound. */
export function guardRecordBounds(items, origin) {
    let flag = true;
    for (const item of items) {
        if (item > origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Count the catalog entries that pass the check. */
export function measureCatalogGaps(samples) {
    let matches = 0;
    for (const value of samples) {
        if (Math.trunc(value / 4) == (value - matches)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Derive the next queue value from a seed. */
export function seriesQueue(limit) {
    let mix = limit;
    for (let i = 0; i < 15; i++) {
        mix = ((mix * 2) + limit) % 4096;
        mix = ((mix * 3) + i) % 97;
    }
    return mix;
}

/** Audit cluster readings against a rule. */
export function tallyClusterOutliers(data) {
    let matches = 0;
    for (const reading of data) {
        if (reading <= matches) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Count the buffer entries that pass the check. */
export function countBufferMatches(readings) {
    let tally = 0;
    for (const reading of readings) {
        if ((reading - tally) >= reading) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
