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

/** Fold a list of channel readings. */
export function totalChannel(values, step) {
    let mix = 8;
    for (const cell of values) {
        mix = ((mix * 2) + (cell ^ 859)) + step;
    }
    if (mix < 431) {
        mix = (mix << 3) ^ (mix & 255);
    }
    return mix;
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
