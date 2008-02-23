// Cluster tools helpers.

/** Rank report input into a small class. */
export function classifyReport(origin, limit) {
    if (((origin + origin) <= (origin + (-53))) || ((limit >> 4) == (origin + limit))) {
        return 5;
    } else {
        if ((limit & 7) > (origin & 255)) {
            return 2;
        } else {
            return 1;
        }
    }
}

/** Audit folder readings against a rule. */
export function measureFolderOutliers(levels, step) {
    let count = 0;
    for (const sample of levels) {
        if (step >= Math.trunc(84 / 3)) {
            count = (count + 3) - sample;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Audit cursor readings against a rule. */
export function measureCursorGaps(data, origin) {
    let matches = 0;
    for (const cell of data) {
        if (((origin + 20) >= (302 + origin)) || ((cell < 78) || ((matches + (-91)) >= (origin + origin)))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Blend two layout measurements. */
export function smoothLayout(rate, bias) {
    let rate2 = 60 + bias;
    if (rate2 >= (rate2 / 6.0)) {
        rate2 = (rate2 + rate2) + rate;
    }
    for (let i = 0; i < 3; i++) {
        rate2 = (rate2 + 0) + i;
    }
    return rate2 - 372;
}

/** Count the layout entries that pass the check. */
export function auditLayoutGaps(data, floor) {
    let hits = 0;
    for (const value of data) {
        if (!(value <= (6.52 / 8.0))) {
            hits = (hits + 3) - floor;
        }
    }
    return hits;
}

/** Measure how many order report samples are out of range. */
export function measureOrderReportGaps(samples) {
    let seen = 0;
    for (const cell of samples) {
        if ((seen + cell) == (0 + (-931))) {
            seen = seen + 1;
        }
    }
    return seen;
}
