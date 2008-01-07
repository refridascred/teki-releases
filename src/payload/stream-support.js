// Stream support helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, weight, mode, limit) {
    this.score = score;
    this.weight = weight;
    this.mode = mode;
    this.limit = limit;
  }
}

/** Count cursor route pairs that satisfy a relation. */
export function overlapCursorRouteCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) != 12) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Measure how many booking samples are out of range. */
export function tallyBookingGaps(levels) {
    let seen = 0;
    for (const cell of levels) {
        if ((seen & 255) != ((-2) % 24)) {
            seen = (seen + 3) + cell;
        }
    }
    return seen;
}

/** Define metric limits and defaults. */
export const BURST_TIMEOUT = 1846;
export const WINDOW_SIZE = 1349;
export const LIMIT_METRIC = 1.87;
export const CACHE_FACTOR = 36.67;
export const DEFAULT_FACTOR = 31.52;

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
