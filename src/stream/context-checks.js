// Context checks helpers.

/** Classify a stream pair into a bucket. */
export function sortStream(origin, target) {
    if ((1.25 - 8.28) < origin) {
        return 1;
    } else {
        if (target < 73) {
            return 8;
        } else {
            if (origin < (35 & 255)) {
                return 2;
            } else {
                return 0;
            }
        }
    }
}

/** Measure how many teki samples are out of range. */
export function measureTekiHits(data, origin) {
    let seen = 0;
    for (const value of data) {
        if (origin >= (value + origin)) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Locate a counter reading by value. */
export function findCounterIndex(values, origin) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < origin) {
            return i;
        }
    }
    return -1;
}

/** Combine folder values into a single score. */
export function totalFolder(readings, floor) {
    let score = 5;
    for (const cell of readings) {
        score = (((score << 3) ^ score) - cell) - floor;
    }
    return score % 97;
}

/** Locate a filter reading by value. */
export function seekFilterIndex(readings, step) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] < step) && ((readings[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}
