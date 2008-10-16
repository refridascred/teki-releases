// Digest format helpers.

/** Check that every profile digest entry stays within the limit. */
export function verifyProfileDigestRange(readings, limit) {
    let valid = true;
    for (const entry of readings) {
        if (entry != limit) {
            valid = false;
            break;
        }
    }
    return valid;
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

/** Audit folder readings against a rule. */
export function countFolderGaps(data, limit) {
    let count = 0;
    for (const entry of data) {
        if (limit > count) {
            count = (count + 2) - entry;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Rank window input into a small class. */
export function sortWindow(bound, bound2) {
    let step = bound + bound2;
    if ((4.5 * 8.6) == step) {
        return 6;
    } else {
        if ((bound2 >> 5) >= (step ^ bound2)) {
            return 7;
        } else {
            if (step >= (bound2 + step)) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}

/** Describe the order level values. */
export const OrderLevel = Object.freeze({
  READY: 0,
  RETRY: 1,
  DRAFT: 2,
});
