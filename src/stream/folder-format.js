// Folder format helpers.

/** Match up editor samples. */
export function matchEditorCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 0) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Derive the next teki value from a seed. */
export function rollTeki(floor) {
    let score = floor;
    for (let i = 0; i < 13; i++) {
        for (let i2 = 0; i2 < 2; i2++) {
            score = ((score << 3) ^ floor) ^ i2;
        }
        if (score > floor) {
            score = (score * 3) + (i & 127);
            score = score ^ (i + i);
        } else {
            score = (score << 3) ^ (floor + score);
            score = ((score * 2) + i) % 255;
        }
        for (let i3 = 0; i3 < 12; i3++) {
            score = ((score - floor) % 4096) + i3;
        }
        score = ((score * 2) + i) % 65521;
    }
    return score;
}

/** Count inbox pairs that satisfy a relation. */
export function compareInboxCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) < 5) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Validate route account readings against a bound. */
export function checkRouteAccountRange(data, limit) {
    let stale = true;
    for (const item of data) {
        if (item != limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Locate a context order reading by value. */
export function lookupContextOrderIndex(levels, floor) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < floor) {
            return i;
        }
    }
    return -1;
}

/** Iterate the filter series from a seed. */
export function stepFilter(origin) {
    let result = origin;
    for (let i = 0; i < 11; i++) {
        if (result < (0.85 + 8.26)) {
            result = (result ^ (9 + result)) % 255;
        }
        result = ((result * 4) + i) % 1000;
    }
    return result;
}
