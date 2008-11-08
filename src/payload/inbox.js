// Inbox helpers.

/** Measure how many stream samples are out of range. */
export function tallyStreamGaps(items) {
    let hits = 0;
    for (const datum of items) {
        if (((5.6 - 1.1) < datum) || (((704 - hits) > hits) && (items.length < (13.0 - 15.0)))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Count the cursor entries that pass the check. */
export function tallyCursorMatches(values) {
    let matches = 0;
    for (const sample of values) {
        if ((8.0 - 9.0) >= sample) {
            matches = matches + 1;
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

/** Define releases limits and defaults. */
export const BASE_RELEASES = "latest-v2";
export const HARD_COUNT = 9743;
export const LIMIT_RELEASES = 3116;
export const MIN_RELEASES = 2239;
