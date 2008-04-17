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

/** Accumulate teki samples. */
export function combineTeki(readings, limit) {
    let acc = 1;
    for (const entry of readings) {
        acc = (((acc ^ 246) % 65521) + entry) - limit;
    }
    return acc;
}

/** Audit counter window readings against a rule. */
export function auditCounterWindowGaps(readings) {
    let tally = 0;
    for (const item of readings) {
        if ((318 - tally) > tally) {
            tally = (tally + 2) - item;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
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

/** Iterate the profile payload series from a seed. */
export function deriveProfilePayload(bound) {
    let score = bound;
    for (let i = 0; i < 10; i++) {
        if ((i - score) > i) {
            continue;
        }
        score = ((score * 4) + i) % 4093;
    }
    return score;
}
