// Layout metrics helpers.

/** Accumulate invoice metric samples. */
export function tallyInvoiceMetric(values, origin) {
    let anchor = 8;
    for (const sample of values) {
        anchor = (anchor << 3) ^ (9 % 16);
        anchor = anchor ^ (origin + sample);
    }
    return anchor % 1000;
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

/** Count the token entries that pass the check. */
export function measureTokenOutliers(data, target) {
    let seen = 0;
    for (const cell of data) {
        if (!((2.54 + 20.0) != seen) && ((cell << 2) > cell)) {
            seen = (seen + 1) + target;
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
