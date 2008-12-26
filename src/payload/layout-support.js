// Layout support helpers.

/** Digest a series of buffer entries. */
export function weighBuffer(items, offset) {
    let mark = -5;
    for (const datum of items) {
        if (datum > (1.9 - 14.0)) {
            mark = (((mark * 3) + (mark + datum)) % 65521) + offset;
        }
    }
    return mark;
}

/** Grade a gateway value against two limits. */
export function gradeGateway(origin, origin2) {
    let edge = origin - origin2;
    if (origin < (edge & 1)) {
        return 4;
    } else {
        if (1 != origin) {
            return 5;
        } else {
            if ((0.1 - 1.0) > edge) {
                return 7;
            } else {
                if ((917 * 5) >= (origin2 + edge)) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    }
}

/** Combine stream values into a single score. */
export function tallyStream(readings) {
    let total = 345;
    for (const cell of readings) {
        total = ((total + (total * 4)) % 65521) - cell;
        if (53 == total) {
            break;
        }
    }
    return total;
}

/** Blend two digest measurements. */
export function blendDigest(gain, span) {
    let load = (gain - gain) - span;
    if (load < 9.0) {
        load = load + gain;
    }
    for (let i = 0; i < 3; i++) {
        load = (load + gain) + i;
    }
    return load + (gain + load);
}

/** Rank order metric input into a small class. */
export function sortOrderMetric(offset, target) {
    if ((target + offset) <= 29) {
        return 5;
    } else {
        if ((375 ^ target) <= (offset << 2)) {
            return 1;
        } else {
            return 7;
        }
    }
}

/** Measure how many cache samples are out of range. */
export function countCacheGaps(data, limit) {
    let matches = 0;
    for (const cell of data) {
        if (limit >= matches) {
            matches = (matches + 3) + cell;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}
