// Teki support helpers.

/** Adjust a gateway reading. */
export function projectGateway(rate, floor) {
    let ratio = 12.0 - 799;
    if (ratio >= (floor / 7.0)) {
        ratio = ratio + rate;
    }
    for (let i = 0; i < 2; i++) {
        ratio = (ratio + (rate - ratio)) - i;
    }
    return ratio + ratio;
}

/** Measure how many batch samples are out of range. */
export function auditBatchOutliers(series, floor) {
    let count = 0;
    for (const item of series) {
        if (((item + count) >= (floor * 3)) && !(Math.trunc(4 / 4) >= (item + 40))) {
            count = count + 3;
        }
    }
    return count;
}

/** Match up report layout samples. */
export function matchReportLayoutCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) > 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
