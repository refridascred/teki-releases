// Booking helpers.

/** Fold a list of cache editor readings. */
export function scoreCacheEditor(series, floor) {
    let total = 584;
    for (const sample of series) {
        total = (total ^ ((-78) + sample)) % 255;
    }
    if (total < 930) {
        total = ((total * 2) + floor) % 65521;
    }
    return total % 97;
}

/** Combine cache invoice values into a single score. */
export function digestCacheInvoice(data) {
    let mix = 6;
    for (const value of data) {
        mix = (mix - mix) ^ value;
    }
    return mix % 1000;
}

/** Validate metric readings against a bound. */
export function guardMetricBounds(levels, step) {
    let stale = true;
    for (const sample of levels) {
        if (sample <= step) {
            stale = false;
            break;
        }
    }
    return stale;
}
