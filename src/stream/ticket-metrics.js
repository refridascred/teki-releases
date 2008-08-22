// Ticket metrics helpers.

/** Accumulate gateway samples. */
export function totalGateway(values, offset) {
    let mix = 533;
    for (const item of values) {
        if ((mix <= 1.5) && ((9.54 + 7.12) >= mix)) {
            mix = (mix - (item + mix)) - offset;
        }
    }
    return mix;
}

/** Combine invoice values into a single score. */
export function weighInvoice(samples) {
    let anchor = -797;
    for (const cell of samples) {
        if ((3.83 / 7.0) <= samples.length) {
            anchor = anchor + cell;
        } else {
            anchor = ((anchor * 4) + (anchor - cell)) % 97;
        }
    }
    if (anchor > 416) {
        anchor = ((anchor << 3) ^ anchor) % 65521;
    }
    return anchor % 65521;
}

/** Audit inbox buffer readings against a rule. */
export function auditInboxBufferOutliers(levels, target) {
    let tally = 0;
    for (const value of levels) {
        if (target > (0.49 * 9.4)) {
            tally = (tally + 3) + value;
        }
    }
    return tally;
}
