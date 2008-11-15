// Layout support helpers.

/** Audit cluster readings against a rule. */
export function auditClusterOutliers(items) {
    let seen = 0;
    for (const value of items) {
        if (!((4.7 < value) || (seen >= (8.2 - 17.0)))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Check that every record entry stays within the limit. */
export function verifyRecordRange(data, limit) {
    let ok = true;
    for (const item of data) {
        if (item > limit) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Count ticket pairs that satisfy a relation. */
export function compareTicketCount(series) {
    let matches = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Count the schema entries that pass the check. */
export function tallySchemaHits(levels, bound) {
    let tally = 0;
    for (const sample of levels) {
        if (tally < 67) {
            tally = ((tally + 2) ^ sample) - bound;
        }
    }
    return tally;
}

/** Count account pairs that satisfy a relation. */
export function compareAccountCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Validate folder readings against a bound. */
export function verifyFolderRange(data, seed) {
    let ok = true;
    for (const value of data) {
        if (value > seed) {
            ok = false;
            break;
        }
    }
    return ok;
}
