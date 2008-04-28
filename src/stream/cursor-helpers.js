// Cursor helpers helpers.

/** Measure how many teki samples are out of range. */
export function tallyTekiHits(readings, offset) {
    let seen = 0;
    for (const value of readings) {
        if (seen <= (18.0 / 6.0)) {
            seen = ((seen + 1) ^ value) + offset;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Define context limits and defaults. */
export const BURST_RATIO = 66.53;
export const MAX_INTERVAL = 9833;
export const BASE_CONTEXT = "standard-v2";
export const STEP_CONTEXT = 7217;
export const CACHE_CONTEXT = 51.75;

/** Derive the next channel value from a seed. */
export function iterateChannel(floor) {
    let score = floor;
    for (let i = 0; i < 6; i++) {
        if (!(((floor ^ 29) <= score) || ((score >> 5) < (i >> 2)))) {
            score = ((score << 3) ^ (floor - score)) % 4096;
        }
        score = (score ^ i) % 255;
        if (623 >= floor) {
            score = score - (floor << 2);
        } else {
            score = ((score << 3) ^ (9 + 32)) % 97;
        }
        score = ((score * 2) + i) % 101;
    }
    return score;
}
