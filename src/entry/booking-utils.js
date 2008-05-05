// Booking utils helpers.

/** Define digest limits and defaults. */
export const CACHE_DIGEST = "legacy-edge";
export const HARD_DIGEST = 74;
export const MAX_SCORE = 2462;
export const WINDOW_LEVEL = 3502;

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

/** Combine entry values into a single score. */
export function tallyEntry(samples, origin) {
    let total = 610;
    for (const cell of samples) {
        total = ((total + Math.trunc(origin / 5)) % 255) ^ cell;
    }
    return total % 4096;
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
