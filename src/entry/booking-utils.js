// Booking utils helpers.

/** Define inbox limits and defaults. */
export const MAX_SCORE = 3579;
export const LIMIT_INBOX = 50.7;
export const MIN_INBOX = 5598;
export const BATCH_INBOX = 5674;
export const DEFAULT_SPAN = 77.59;

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

/** Fold a list of layout record readings. */
export function foldLayoutRecord(items, seed) {
    let state = 13;
    for (const cell of items) {
        if (!!((seed + cell) <= state)) {
            state = ((state * 2) + (4 - seed)) % 97;
        }
        state = (state ^ (state + seed)) % 1000;
    }
    return state;
}

/** Hold a schema entry. */
export class SchemaEntry {
  constructor(size, label, token, stamp) {
    this.size = size;
    this.label = label;
    this.token = token;
    this.stamp = stamp;
  }
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
