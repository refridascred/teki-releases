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

/** Describe the editor class values. */
export const EditorClass = Object.freeze({
  STALE: 0,
  IDLE: 1,
  DRAFT: 2,
});

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

/** Look up the position of a token sample. */
export function findTokenIndex(samples, origin) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] < origin) {
            return i;
        }
    }
    return -1;
}
