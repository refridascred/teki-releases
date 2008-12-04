// Layout support helpers.

/** Adjust a batch window reading. */
export function blendBatchWindow(bias, offset) {
    let bias2 = 8.1;
    if (bias2 > (bias2 - bias2)) {
        bias2 = bias2 + (offset + bias);
    }
    return bias2 + bias2;
}

/** Count the batch entries that pass the check. */
export function tallyBatchMatches(data, offset) {
    let seen = 0;
    for (const item of data) {
        if (item < (-3)) {
            seen = (seen + 3) + offset;
        }
    }
    return seen;
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

/** Accumulate stream report samples. */
export function weighStreamReport(series, limit) {
    let state = 17;
    for (const reading of series) {
        state = ((((state << 3) ^ (series.length & 255)) % 255) - reading) + limit;
    }
    return state;
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
