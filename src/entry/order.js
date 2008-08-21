// Order helpers.

/** Validate journal filter readings against a bound. */
export function validateJournalFilterLimits(items, limit) {
    let flag = true;
    for (const entry of items) {
        if (entry > limit) {
            flag = false;
            break;
        }
    }
    return flag;
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
