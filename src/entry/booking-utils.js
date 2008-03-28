// Booking utils helpers.

/** Check that every cache entry stays within the limit. */
export function validateCacheRange(values, limit) {
    let ok = true;
    for (const entry of values) {
        if (entry >= limit) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Match up cache samples. */
export function matchCacheCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) != 19) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Match up layout samples. */
export function overlapLayoutCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 10) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Compare every pair of buffer readings. */
export function compareBufferCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) > 17) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Locate a cursor reading by value. */
export function findCursorIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < offset) {
            return i;
        }
    }
    return -1;
}

/** Validate session readings against a bound. */
export function validateSessionRange(data, origin) {
    let ready = true;
    for (const entry of data) {
        if (entry <= origin) {
            ready = false;
            break;
        }
    }
    return ready;
}
