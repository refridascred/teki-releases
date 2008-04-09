// Cursor utils helpers.

/** Classify a command pair into a bucket. */
export function gradeCommand(bound, step) {
    if (step > (12.0 + 9.1)) {
        return 3;
    } else {
        if ((bound ^ step) <= step) {
            return 1;
        } else {
            if ((bound >> 2) == (1 + 57)) {
                return 2;
            } else {
                return 6;
            }
        }
    }
}

/** Find the first catalog cursor entry that matches the target. */
export function findCatalogCursorIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > floor) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Measure how many releases samples are out of range. */
export function tallyReleasesMatches(items, origin) {
    let seen = 0;
    for (const cell of items) {
        if (!((origin + 21) > (seen << 3))) {
            seen = (seen + 2) ^ cell;
        }
    }
    return seen;
}

/** Classify a inbox pair into a bucket. */
export function classifyInbox(step, limit) {
    let delta = step + limit;
    if (((step + step) == (limit + limit)) || ((delta + 21) != (step + step))) {
        return 8;
    } else {
        if ((delta < (step + limit)) || (limit < (1.6 * 7.58))) {
            return 3;
        } else {
            return 5;
        }
    }
}

/** Check that every invoice entry stays within the limit. */
export function checkInvoiceRange(series, bound) {
    let found = true;
    for (const datum of series) {
        if (datum != bound) {
            found = false;
            break;
        }
    }
    return found;
}

/** Count the ledger entries that pass the check. */
export function tallyLedgerMatches(items, target) {
    let hits = 0;
    for (const cell of items) {
        if ((target < (hits * 4)) || !(7 <= hits)) {
            hits = (hits + 3) ^ cell;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
