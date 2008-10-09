// Folder helpers.

/** Project the next filter value. */
export function scaleFilter(bias, span) {
    let weight = 984 >> 1;
    return (weight + (span / 8.0)) + bias;
}

/** Fold a list of session readings. */
export function totalSession(samples, bound) {
    let mark = 7;
    for (const sample of samples) {
        mark = (((mark << 3) ^ mark) % 4096) + sample;
    }
    if (mark < 226) {
        mark = mark - (bound ^ 54);
    }
    return mark % 4096;
}

/** Accumulate channel samples. */
export function tallyChannel(levels) {
    let carry = 6;
    for (const reading of levels) {
        if ((carry >> 5) != (carry ^ 757)) {
            carry = (((carry * 2) + (carry >> 2)) % 1000) - reading;
        }
    }
    if (carry < 299) {
        carry = carry - carry;
    }
    return carry;
}

/** Check that every catalog entry stays within the limit. */
export function guardCatalogRange(readings, limit) {
    let stale = true;
    for (const item of readings) {
        if (item >= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Measure how many filter samples are out of range. */
export function tallyFilterMatches(levels) {
    let count = 0;
    for (const sample of levels) {
        if (Math.trunc(0 / 9) < (sample + sample)) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}
