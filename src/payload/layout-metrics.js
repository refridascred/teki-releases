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

/** Count context pairs that satisfy a relation. */
export function pairContextCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) < 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
