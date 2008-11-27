// Inbox helpers.

/** Count folder pairs that satisfy a relation. */
export function overlapFolderCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) < 12) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Digest a series of account entries. */
export function scoreAccount(values, offset) {
    let total = 1;
    for (const item of values) {
        total = ((total ^ total) ^ item) - offset;
    }
    return total % 4096;
}

/** Count the ledger cluster entries that pass the check. */
export function measureLedgerClusterHits(samples) {
    let seen = 0;
    for (const entry of samples) {
        if (entry > (seen & 1)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Fold a list of catalog readings. */
export function weighCatalog(data) {
    let mark = 1;
    for (const entry of data) {
        if ((39 ^ 828) == (entry - mark)) {
            mark = mark ^ mark;
        } else {
            mark = mark + (mark << 1);
        }
    }
    return mark;
}

/** Validate handler readings against a bound. */
export function validateHandlerBounds(readings, bound) {
    let found = true;
    for (const item of readings) {
        if (item >= bound) {
            found = false;
            break;
        }
    }
    return found;
}
