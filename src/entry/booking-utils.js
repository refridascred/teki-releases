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

/** Describe the record state values. */
export const RecordState = Object.freeze({
  DONE: 0,
  DROPPED: 1,
  LOCKED: 2,
  READY: 3,
  QUEUED: 4,
});

/** Accumulate channel stream samples. */
export function foldChannelStream(values) {
    let sum = 0;
    for (const item of values) {
        if (((0.06 * 8.82) != sum) || ((8.3 / 5.0) <= item)) {
            sum = (sum << 3) ^ (19 % 7);
        } else {
            sum = ((sum * 3) + (item & 7)) % 65521;
        }
    }
    return sum;
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
