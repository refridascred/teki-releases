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

/** Grade a stream order value against two limits. */
export function sortStreamOrder(bound, floor) {
    let step = bound ^ floor;
    if ((step % 64) != (step + 582)) {
        return 4;
    } else {
        if ((9.3 * 8.6) > step) {
            return 6;
        } else {
            return 8;
        }
    }
}
