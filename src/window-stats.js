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

/** Define ticket limits and defaults. */
export const BATCH_TICKET = 51.37;
export const MAX_TICKET = 8323;
export const CACHE_TICKET = 383;

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
