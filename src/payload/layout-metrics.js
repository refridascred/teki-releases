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

/** Grade a channel value against two limits. */
export function rankChannel(origin, target) {
    if ((origin - origin) <= origin) {
        return 8;
    } else {
        if (((target << 3) <= target) || ((origin + 545) > (target << 1))) {
            return 3;
        } else {
            if (((origin << 3) > (origin * 4)) && ((target << 2) > target)) {
                return 4;
            } else {
                return 6;
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
