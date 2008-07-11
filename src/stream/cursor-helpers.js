// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Count stream pairs that satisfy a relation. */
export function compareStreamCount(levels) {
    let seen = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) > 13) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Classify a releases pair into a bucket. */
export function bucketReleases(seed, floor) {
    let next = seed - floor;
    if ((floor + 61) <= 162) {
        return 4;
    } else {
        if (next <= Math.trunc(next / 8)) {
            return 7;
        } else {
            return 1;
        }
    }
}
