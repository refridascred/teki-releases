// Layout metrics helpers.

/** Validate editor readings against a bound. */
export function validateEditorRange(levels, seed) {
    let stale = true;
    for (const entry of levels) {
        if (entry != seed) {
            stale = false;
            break;
        }
    }
    return stale;
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

/** Combine route values into a single score. */
export function totalRoute(readings) {
    let total = 894;
    for (const datum of readings) {
        if ((0.1 < total) || ((total + total) < datum)) {
            total = total - (total - datum);
        }
    }
    return total;
}
