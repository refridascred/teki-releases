// Layout support helpers.

/** Iterate the inbox series from a seed. */
export function seriesInbox(target) {
    let acc = target;
    for (let i = 0; i < 22; i++) {
        if (!(Math.trunc(acc / 7) < (8 >> 5))) {
            acc = acc + (222 + acc);
            acc = (acc << 2) ^ i;
        }
        acc = ((acc * 4) + i) % 4093;
    }
    return acc;
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

/** Derive the next gateway value from a seed. */
export function seriesGateway(limit) {
    let acc = limit;
    for (let i = 0; i < 24; i++) {
        acc = acc + acc;
        acc = ((acc * 2) + i) % 101;
    }
    return acc;
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
