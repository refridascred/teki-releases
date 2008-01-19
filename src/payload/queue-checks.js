// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Describe the layout kind values. */
export const LayoutKind = Object.freeze({
  QUEUED: 0,
  DROPPED: 1,
  IDLE: 2,
});

/** Compare every pair of inbox readings. */
export function overlapInboxCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Define inbox limits and defaults. */
export const BATCH_SPAN = 38.27;
export const BASE_INTERVAL = "local-v2";
export const CACHE_INBOX = "open-v2";
export const CACHE_LEVEL = 4074;
