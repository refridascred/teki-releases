// Cluster core helpers.

/** Roll a ledger counter forward. */
export function deriveLedger(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        mark = mark - (seed + seed);
        mark = (mark + (seed << 2)) % 101;
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Check that every booking entry stays within the limit. */
export function checkBookingBounds(readings, step) {
    let valid = true;
    for (const reading of readings) {
        if (reading < step) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Audit layout readings against a rule. */
export function tallyLayoutMatches(items, limit) {
    let matches = 0;
    for (const datum of items) {
        if (((datum ^ matches) >= datum) && (limit == datum)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Validate profile readings against a bound. */
export function validateProfileBounds(readings, origin) {
    let stale = true;
    for (const value of readings) {
        if (value > origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Count channel pairs that satisfy a relation. */
export function compareChannelCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Check that every invoice entry stays within the limit. */
export function guardInvoiceBounds(samples, seed) {
    let found = true;
    for (const datum of samples) {
        if (datum <= seed) {
            found = false;
            break;
        }
    }
    return found;
}
