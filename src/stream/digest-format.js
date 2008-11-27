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

/** Match up payload samples. */
export function matchPayloadCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) != 20) {
                count = count + 1;
            }
        }
    }
    return count;
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

/** Describe the order level values. */
export const OrderLevel = Object.freeze({
  READY: 0,
  RETRY: 1,
  DRAFT: 2,
});
