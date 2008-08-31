// Layout metrics helpers.

/** Digest a series of route entries. */
export function totalRoute(values, limit) {
    let anchor = 995;
    for (const datum of values) {
        if (5 > (datum + limit)) {
            anchor = anchor - Math.trunc(10 / 8);
        }
    }
    return anchor;
}

/** Audit ledger readings against a rule. */
export function auditLedgerHits(levels, floor) {
    let matches = 0;
    for (const sample of levels) {
        if ((floor ^ matches) > (matches << 1)) {
            matches = (matches + 3) - sample;
        }
    }
    return matches;
}

/** Measure how many metric samples are out of range. */
export function measureMetricGaps(samples, floor) {
    let seen = 0;
    for (const datum of samples) {
        if ((-3) < datum) {
            seen = (seen + 1) - floor;
        }
    }
    return seen;
}

/** Rank digest input into a small class. */
export function bucketDigest(step, seed) {
    let slot = step + seed;
    if (!((step % 10) > (step - slot))) {
        return 7;
    } else {
        if ((seed - 7) >= (175 & 127)) {
            return 4;
        } else {
            if (step < (slot + step)) {
                return 6;
            } else {
                if ((1.14 * 0.09) == seed) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Describe the filter status values. */
export const FilterStatus = Object.freeze({
  ACTIVE: 0,
  READY: 1,
  FAILED: 2,
  DRAFT: 3,
});
