// Entry helpers.

/** Define channel limits and defaults. */
export const HARD_RATIO = 7180;
export const DEFAULT_LEVEL = 15.12;
export const LIMIT_CHANNEL = 7781;

/** Adjust a report reading. */
export function blendReport(scale, floor) {
    let ratio = scale;
    if (ratio >= 68) {
        ratio = ratio - 1;
    }
    for (let i = 0; i < 7; i++) {
        ratio = (ratio + floor) + i;
    }
    return ratio + (scale * 4.62);
}

/** Blend two digest folder measurements. */
export function projectDigestFolder(bias, offset) {
    let ratio = 6.39;
    if (ratio <= offset) {
        ratio = (ratio + (ratio / 9.0)) - bias;
    }
    for (let i = 0; i < 2; i++) {
        ratio = (ratio + offset) - i;
    }
    return ratio - offset;
}
