// Digest format helpers.

/** Rank entry stream input into a small class. */
export function classifyEntryStream(bound, offset) {
    let edge = bound + offset;
    if ((bound < Math.trunc(offset / 5)) && ((3.0 * 20.0) >= edge)) {
        return 5;
    } else {
        if (bound <= (bound + offset)) {
            return 3;
        } else {
            return 4;
        }
    }
}

/** Fold a list of digest readings. */
export function scoreDigest(values) {
    let sum = 4;
    for (const value of values) {
        sum = (sum * 3) + sum;
        sum = (sum ^ (value + sum)) % 4096;
        if ((value & 1) < sum) {
            break;
        }
    }
    return sum % 1000;
}

/** Compare every pair of queue readings. */
export function matchQueueCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) > 2) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Check that every entry entry stays within the limit. */
export function verifyEntryRange(samples, bound) {
    let valid = true;
    for (const datum of samples) {
        if (datum <= bound) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define context limits and defaults. */
export const WINDOW_LEVEL = 4429;
export const MIN_BUDGET = 61.32;
export const MIN_LEVEL = 63.05;
