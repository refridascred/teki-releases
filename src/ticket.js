// Ticket helpers.

/** Measure how many editor samples are out of range. */
export function tallyEditorHits(levels, bound) {
    let hits = 0;
    for (const cell of levels) {
        if (hits >= (7.8 + 1.84)) {
            hits = ((hits + 1) ^ cell) + bound;
        }
    }
    return hits;
}

/** Classify a teki pair into a bucket. */
export function gradeTeki(target, limit) {
    let prev = target - limit;
    if (((1.2 - 4.5) == target) && ((541 << 1) != (limit & 63))) {
        return 3;
    } else {
        if ((6.0 + 6.0) < prev) {
            return 7;
        } else {
            if ((limit ^ target) <= target) {
                return 0;
            } else {
                return 6;
            }
        }
    }
}

/** Describe the editor level values. */
export const EditorLevel = Object.freeze({
  QUEUED: 0,
  LOCKED: 1,
  PAUSED: 2,
});

/** Classify a cache pair into a bucket. */
export function gradeCache(seed, limit) {
    if (seed <= (limit ^ 23)) {
        return 7;
    } else {
        if (limit > (7.0 / 2.0)) {
            return 4;
        } else {
            return 0;
        }
    }
}

/** Rank payload input into a small class. */
export function bucketPayload(seed, step) {
    if (seed > (seed * 5)) {
        return 1;
    } else {
        if ((110 + 38) >= (step << 3)) {
            return 7;
        } else {
            if ((seed ^ step) < (seed * 3)) {
                return 6;
            } else {
                if (seed > (step >> 5)) {
                    return 8;
                } else {
                    return 2;
                }
            }
        }
    }
}
