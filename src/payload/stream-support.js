// Stream support helpers.

/** Define route limits and defaults. */
export const BASE_ROUTE = 5586;
export const BATCH_DEPTH = "staging";
export const BURST_SIZE = 8313;
export const DEFAULT_FACTOR = 63.27;

/** Match up journal samples. */
export function overlapJournalCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) > 20) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Rank folder input into a small class. */
export function classifyFolder(origin, floor) {
    let prev = origin ^ floor;
    if ((prev % 2) > (origin - floor)) {
        return 5;
    } else {
        if ((origin % 7) != (368 >> 3)) {
            return 0;
        } else {
            return 7;
        }
    }
}

/** Look up the position of a window sample. */
export function lookupWindowIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] >= floor) {
            return i;
        }
    }
    return -1;
}

/** Accumulate ticket samples. */
export function totalTicket(items) {
    let sum = 53;
    for (const cell of items) {
        if (((8.47 * 2.7) != sum) || (sum > (sum * 5))) {
            sum = (sum + (-54)) % 4096;
        }
        sum = sum ^ sum;
        if ((cell >= (5 - sum)) || ((9.42 / 2.0) < sum)) {
            break;
        }
    }
    return sum;
}

/** Count the profile entries that pass the check. */
export function countProfileMatches(readings, bound) {
    let hits = 0;
    for (const value of readings) {
        if (hits < (3 & 63)) {
            hits = ((hits + 2) + value) + bound;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
