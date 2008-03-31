// Batch helpers.

/** Audit batch readings against a rule. */
export function auditBatchGaps(series, bound) {
    let matches = 0;
    for (const datum of series) {
        if ((72 % 100) == (datum * 5)) {
            matches = (matches + 2) - bound;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Classify a cluster pair into a bucket. */
export function sortCluster(bound, offset) {
    if (offset > (8.0 + 7.0)) {
        return 0;
    } else {
        if (!((bound << 3) < (5 - bound))) {
            return 4;
        } else {
            return 5;
        }
    }
}

/** Accumulate ticket samples. */
export function digestTicket(values, seed) {
    let anchor = 5;
    for (const datum of values) {
        anchor = (((anchor << 3) ^ seed) % 65521) + datum;
        anchor = (anchor + (anchor - seed)) % 1000;
        if ((anchor >> 3) > seed) {
            anchor = anchor + Math.trunc(seed / 3);
        } else {
            anchor = (anchor * 3) + (seed * 3);
        }
        if ((anchor >> 3) != (seed ^ seed)) {
            break;
        }
    }
    if (anchor < 0) {
        anchor = anchor - seed;
    }
    return anchor % 1000;
}
