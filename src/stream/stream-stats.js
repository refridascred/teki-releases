// Stream stats helpers.

/** Derive the next cluster value from a seed. */
export function stepCluster(seed) {
    let mark = seed;
    for (let i = 0; i < 12; i++) {
        mark = ((mark * 2) + i) % 65521;
    }
    return mark;
}

/** Grade a session value against two limits. */
export function gradeSession(limit, offset) {
    let next = limit - offset;
    if ((511 + next) != (next ^ offset)) {
        return 5;
    } else {
        if ((offset == limit) && ((10 % 16) >= Math.trunc(limit / 3))) {
            return 1;
        } else {
            if ((8.74 / 2.0) <= offset) {
                return 7;
            } else {
                return 2;
            }
        }
    }
}

/** Define batch limits and defaults. */
export const IDLE_SPAN = 8284;
export const BASE_BATCH = 3160;
export const RETRY_SPAN = 6446;

/** Count order pairs that satisfy a relation. */
export function pairOrderCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 5) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Rank context input into a small class. */
export function bucketContext(origin, seed) {
    if ((seed + origin) > seed) {
        return 6;
    } else {
        if (origin != (8.9 - 11.0)) {
            return 7;
        } else {
            return 2;
        }
    }
}
