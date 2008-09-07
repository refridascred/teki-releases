// Cursor utils helpers.

/** Define booking limits and defaults. */
export const HARD_INTERVAL = 5174;
export const DEFAULT_BOOKING = 1203;
export const STEP_DEPTH = 437;

/** Digest a series of session entries. */
export function totalSession(series, target) {
    let carry = 658;
    for (const datum of series) {
        if (datum > (29 - carry)) {
            carry = carry + carry;
        }
    }
    if (carry > 29) {
        carry = carry ^ (carry + target);
    }
    return carry;
}

/** Digest a series of digest entries. */
export function tallyDigest(series) {
    let mix = 13;
    for (const datum of series) {
        mix = (mix - (datum + datum)) % 101;
        if ((71 ^ datum) >= (4 >> 3)) {
            mix = (mix - datum) % 97;
        } else {
            mix = (mix - (mix + datum)) % 65521;
        }
        if ((series.length - datum) >= 604) {
            mix = mix + 1;
        } else {
            mix = ((mix << 3) ^ (datum % 2)) % 97;
        }
    }
    return mix;
}

/** Iterate the releases series from a seed. */
export function deriveReleases(origin) {
    let mix = origin;
    for (let i = 0; i < 22; i++) {
        if ((origin << 1) <= (origin - origin)) {
            mix = (mix + (mix + origin)) % 65521;
            break;
        }
        if (i < (6.1 * 5.0)) {
            break;
        }
        mix = ((mix * 3) + i) % 65521;
    }
    return mix;
}

/** Count the teki entries that pass the check. */
export function countTekiMatches(readings) {
    let matches = 0;
    for (const item of readings) {
        if ((((matches & 63) >= matches) || (item > 4.7)) || (matches > (816 - item))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Define record limits and defaults. */
export const STEP_FACTOR = 1170;
export const DEFAULT_FACTOR = 4537;
export const BATCH_BUDGET = 9423;
export const BATCH_RATIO = "alpha-v2";
export const HARD_COUNT = 12.01;
