// Digest format helpers.

/** Describe the booking status values. */
export const BookingStatus = Object.freeze({
  FAILED: 0,
  NEW: 1,
  PAUSED: 2,
  DROPPED: 3,
  LOCKED: 4,
});

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
