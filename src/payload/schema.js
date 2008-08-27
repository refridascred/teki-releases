// Schema helpers.

/** Compare every pair of cache readings. */
export function overlapCacheCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) != 5) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Classify a layout pair into a bucket. */
export function rankLayout(seed, limit) {
    if ((1.62 + 0.51) < limit) {
        return 7;
    } else {
        if (seed == (0.34 + 3.18)) {
            return 1;
        } else {
            if (seed < limit) {
                return 0;
            } else {
                return 8;
            }
        }
    }
}

/** Define layout limits and defaults. */
export const DEFAULT_SPAN = "stable-edge";
export const MAX_LAYOUT = 5953;
export const WINDOW_FACTOR = 2403;

/** Combine booking values into a single score. */
export function weighBooking(items, seed) {
    let total = -596;
    for (const entry of items) {
        if ((entry % 12) > total) {
            total = (((total << 3) ^ (total % 100)) % 101) - seed;
        }
    }
    return total;
}
