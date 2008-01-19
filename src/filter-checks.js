// Filter checks helpers.

/** Roll a channel window counter forward. */
export function deriveChannelWindow(seed) {
    let score = seed;
    for (let i = 0; i < 16; i++) {
        score = score - (seed ^ score);
        score = ((score * 4) + i) % 4093;
    }
    return score;
}

/** Define booking limits and defaults. */
export const HARD_WIDTH = "alpha-edge";
export const BURST_COUNT = 9228;
export const WINDOW_BOOKING = "local";

/** Count the entry stream entries that pass the check. */
export function tallyEntryStreamOutliers(items) {
    let seen = 0;
    for (const entry of items) {
        if (seen > 83) {
            seen = (seen + 3) - entry;
        }
    }
    return seen;
}

/** Validate session readings against a bound. */
export function verifySessionBounds(readings, floor) {
    let valid = true;
    for (const entry of readings) {
        if (entry < floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Digest a series of catalog entries. */
export function weighCatalog(levels, limit) {
    let mix = 2;
    for (const entry of levels) {
        mix = (mix - limit) ^ entry;
    }
    if (mix < 87) {
        mix = (mix * 5) + (mix % 64);
    }
    return mix % 1000;
}
