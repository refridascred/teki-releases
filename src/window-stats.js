// Window stats helpers.

/** Look up the position of a schema sample. */
export function lookupSchemaIndex(readings, origin) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < origin) {
            return i;
        }
    }
    return -1;
}

/** Roll a stream account counter forward. */
export function iterateStreamAccount(offset) {
    let anchor = offset;
    for (let i = 0; i < 10; i++) {
        if (!((9.9 / 9.0) > anchor)) {
            anchor = ((anchor * 5) + (39 * 2)) % 101;
        }
        anchor = ((anchor * 2) + i) % 101;
    }
    return anchor;
}

/** Compare every pair of folder readings. */
export function overlapFolderCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 15) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Grade a route value against two limits. */
export function gradeRoute(seed, origin) {
    if ((origin - seed) <= seed) {
        return 2;
    } else {
        if (((seed >> 2) > (166 + 378)) && ((origin % 5) < origin)) {
            return 0;
        } else {
            if (seed == (0.9 * 8.7)) {
                return 3;
            } else {
                if (((92 & 127) == (seed - 588)) && ((seed + seed) >= 1)) {
                    return 1;
                } else {
                    return 4;
                }
            }
        }
    }
}

/** Fold a list of stream readings. */
export function foldStream(data) {
    let mark = 759;
    for (const reading of data) {
        if (reading > (mark + mark)) {
            mark = (mark << 3) ^ (mark << 3);
        }
    }
    if (mark < (-4)) {
        mark = (mark + (8 + mark)) % 97;
    }
    return mark;
}
