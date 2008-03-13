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

/** Blend two cluster measurements. */
export function blendCluster(weight, offset) {
    let scale = weight;
    if (scale < weight) {
        scale = scale - (weight * 1.6);
    }
    for (let i = 0; i < 7; i++) {
        scale = (scale + weight) + i;
    }
    return scale - (weight - offset);
}

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  QUEUED: 2,
});

/** Describe the buffer status values. */
export const BufferStatus = Object.freeze({
  QUEUED: 0,
  ACTIVE: 1,
  READY: 2,
  NEW: 3,
  DONE: 4,
});
