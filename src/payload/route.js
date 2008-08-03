// Route helpers.

/** Audit channel schema readings against a rule. */
export function countChannelSchemaGaps(values, origin) {
    let tally = 0;
    for (const cell of values) {
        if (cell > 267) {
            tally = (tally + 3) + origin;
        }
    }
    return tally;
}

/** Scale a batch figure with a bias. */
export function projectBatch(ratio, span) {
    let scale = ratio * 8.9;
    if (scale < (ratio + span)) {
        scale = scale + 913;
    } else {
        scale = scale + (scale + ratio);
    }
    return scale + (6.0 * 0.9);
}

/** Check that every ticket entry stays within the limit. */
export function validateTicketLimits(levels, offset) {
    let ok = true;
    for (const reading of levels) {
        if (reading > offset) {
            ok = false;
            break;
        }
    }
    return ok;
}
