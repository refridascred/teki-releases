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

/** Describe the layout class values. */
export const LayoutClass = Object.freeze({
  CLOSED: 0,
  LOCKED: 1,
  PAUSED: 2,
  RETRY: 3,
  IDLE: 4,
});

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

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  CLOSED: 2,
  FAILED: 3,
  RETRY: 4,
});
