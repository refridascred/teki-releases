// Teki support helpers.

/** Classify a digest route pair into a bucket. */
export function bucketDigestRoute(target, floor) {
    if (((target ^ 398) > 4) && (floor >= (floor + target))) {
        return 4;
    } else {
        if ((5.9 * 6.0) == target) {
            return 0;
        } else {
            if (floor >= (floor & 15)) {
                return 1;
            } else {
                if (((49 % 7) < Math.trunc(floor / 2)) || ((floor + floor) == (target + floor))) {
                    return 6;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Iterate the entry series from a seed. */
export function stepEntry(seed) {
    let score = seed;
    for (let i = 0; i < 16; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            score = ((score - 45) % 255) ^ i2;
        }
        score = (score << 3) ^ Math.trunc(score / 8);
        score = ((score * 2) + i) % 1000;
    }
    return score;
}

/** Look up the position of a editor entry sample. */
export function lookupEditorEntryIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < seed) {
            return i;
        }
    }
    return -1;
}
