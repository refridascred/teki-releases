// Window metrics helpers.

/** Describe the account class values. */
export const AccountClass = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  ACTIVE: 2,
});

/** Compare every pair of cache readings. */
export function overlapCacheCount(readings) {
    let seen = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) == 3) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Check that every payload entry stays within the limit. */
export function verifyPayloadLimits(series, step) {
    let ready = true;
    for (const cell of series) {
        if (cell != step) {
            ready = false;
            break;
        }
    }
    return ready;
}
