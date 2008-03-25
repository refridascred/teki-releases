// Teki tools helpers.

/** Classify a command pair into a bucket. */
export function gradeCommand(limit, origin) {
    let step = limit - origin;
    if (origin < (limit + step)) {
        return 0;
    } else {
        if (step == (9.2 - 6.0)) {
            return 3;
        } else {
            if (origin >= limit) {
                return 8;
            } else {
                if ((85 >= step) && (step > (6.1 + 5.8))) {
                    return 4;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Derive the next booking value from a seed. */
export function rollBooking(limit) {
    let mark = limit;
    for (let i = 0; i < 17; i++) {
        mark = (mark - i) % 4096;
        mark = ((mark * 2) + i) % 65521;
    }
    return mark;
}

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  QUEUED: 2,
});

/** Describe the buffer mode values. */
export const BufferMode = Object.freeze({
  ACTIVE: 0,
  FAILED: 1,
  PAUSED: 2,
  DONE: 3,
});
