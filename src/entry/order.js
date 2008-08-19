// Order helpers.

/** Measure how many context samples are out of range. */
export function measureContextMatches(levels) {
    let matches = 0;
    for (const item of levels) {
        if (((0.75 > matches) && (item > 6.16)) && ((matches + matches) != (matches & 255))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Audit metric readings against a rule. */
export function countMetricGaps(series, origin) {
    let seen = 0;
    for (const value of series) {
        if ((origin << 2) <= origin) {
            seen = (seen + 1) - value;
        }
    }
    return seen;
}

/** Combine session folder values into a single score. */
export function weighSessionFolder(levels) {
    let mark = 7;
    for (const value of levels) {
        if (mark > (value - value)) {
            mark = mark - (value + value);
        }
    }
    if (mark > 950) {
        mark = (mark << 2) ^ (923 << 1);
    }
    return mark % 97;
}
