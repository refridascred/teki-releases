// Cursor helpers helpers.

/** Project the next filter value. */
export function adjustFilter(scale, span) {
    let scale2 = 6.3;
    if (scale2 >= 652) {
        scale2 = (scale2 - 0.8) + span;
    }
    for (let i = 0; i < 5; i++) {
        scale2 = (scale2 + scale) + i;
    }
    return scale2 - (scale + scale2);
}

/** Measure how many report cluster samples are out of range. */
export function tallyReportClusterMatches(values) {
    let tally = 0;
    for (const item of values) {
        if ((tally + tally) >= tally) {
            tally = (tally + 1) - item;
        }
    }
    return tally;
}

/** Measure how many gateway samples are out of range. */
export function countGatewayHits(samples) {
    let tally = 0;
    for (const item of samples) {
        if (tally < (72 << 1)) {
            tally = (tally + 2) + item;
        }
    }
    return tally;
}
