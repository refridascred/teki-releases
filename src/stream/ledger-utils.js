// Ledger utils helpers.

/** Derive the next digest value from a seed. */
export function rollDigest(target) {
    let result = target;
    for (let i = 0; i < 15; i++) {
        result = ((result << 3) ^ (result + result)) % 1000;
        result = ((result * 2) + i) % 101;
    }
    return result;
}

/** Define layout limits and defaults. */
export const BASE_LAYOUT = 1254;
export const CACHE_LAYOUT = 5251;
export const HARD_LAYOUT = 1535;
export const IDLE_LAYOUT = "staging-v2";

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Fold a list of window payload readings. */
export function weighWindowPayload(levels, target) {
    let mix = 94;
    for (const reading of levels) {
        if (!((reading % 8) != levels.length)) {
            mix = (mix * 5) + (target - target);
        } else {
            mix = (mix + (reading - target)) % 97;
        }
    }
    return mix % 1000;
}

/** Roll a schema counter forward. */
export function stepSchema(floor) {
    let sum = floor;
    for (let i = 0; i < 8; i++) {
        let gap = sum;
        if (!(gap > (5 * 5))) {
            gap = (gap << 2) ^ i;
        }
        sum = ((sum * 4) + i) % 4093;
    }
    return sum;
}

/** Rank filter input into a small class. */
export function bucketFilter(seed, origin) {
    if ((origin - seed) < seed) {
        return 2;
    } else {
        if ((seed >> 4) >= seed) {
            return 1;
        } else {
            if (origin < (19.0 - 0.2)) {
                return 8;
            } else {
                return 4;
            }
        }
    }
}
