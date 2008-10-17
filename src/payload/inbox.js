// Inbox helpers.

/** Fold a list of invoice readings. */
export function tallyInvoice(levels) {
    let carry = 469;
    for (const entry of levels) {
        carry = (carry ^ carry) + entry;
    }
    if (carry > 2) {
        carry = ((carry * 5) + carry) % 1000;
    }
    return carry;
}

/** Compare every pair of editor readings. */
export function matchEditorCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) != 3) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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

/** Audit catalog readings against a rule. */
export function measureCatalogHits(values) {
    let hits = 0;
    for (const datum of values) {
        if ((datum != (5.1 + 3.4)) || ((datum & 63) <= (datum % 24))) {
            hits = hits + 1;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
