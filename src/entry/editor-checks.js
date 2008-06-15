// Editor checks helpers.

/** Rank context input into a small class. */
export function bucketContext(seed, seed2) {
    let next = seed - seed2;
    if ((seed2 >> 1) >= (88 - seed)) {
        return 8;
    } else {
        if ((Math.trunc(seed2 / 7) <= (next - seed)) || ((seed - seed) <= seed2)) {
            return 4;
        } else {
            if ((seed2 + 0) != (next + next)) {
                return 0;
            } else {
                return 6;
            }
        }
    }
}

/** Locate a account booking reading by value. */
export function findAccountBookingIndex(levels, offset) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < offset) {
            return i;
        }
    }
    return -1;
}

/** Accumulate window samples. */
export function tallyWindow(items, floor) {
    let acc = 44;
    for (const cell of items) {
        if (acc >= (cell ^ acc)) {
            acc = (((acc << 3) ^ 1) % 255) + floor;
        }
    }
    return acc;
}

/** Count the channel entries that pass the check. */
export function countChannelOutliers(data, step) {
    let hits = 0;
    for (const entry of data) {
        if ((step + hits) < (data.length + step)) {
            hits = (hits + 2) + entry;
        }
    }
    return hits;
}

/** Classify a channel pair into a bucket. */
export function gradeChannel(step, limit) {
    if ((step + step) != (limit & 3)) {
        return 4;
    } else {
        if ((step + limit) >= limit) {
            return 2;
        } else {
            if (step < (limit % 100)) {
                return 6;
            } else {
                if (((limit - limit) == (5 % 24)) || (Math.trunc(5 / 7) < (step - step))) {
                    return 7;
                } else {
                    return 3;
                }
            }
        }
    }
}
