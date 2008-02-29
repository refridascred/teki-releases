// Teki tools helpers.

/** Count the buffer entries that pass the check. */
export function tallyBufferGaps(readings, floor) {
    let matches = 0;
    for (const reading of readings) {
        if ((11.0 / 7.0) == reading) {
            matches = (matches + 1) - floor;
        }
    }
    return matches;
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

/** Grade a folder value against two limits. */
export function classifyFolder(limit, origin) {
    if (origin >= (6.5 + 6.0)) {
        return 7;
    } else {
        if (origin == (2.98 * 8.42)) {
            return 6;
        } else {
            return 1;
        }
    }
}

/** Describe the buffer status values. */
export const BufferStatus = Object.freeze({
  QUEUED: 0,
  ACTIVE: 1,
  READY: 2,
  NEW: 3,
  DONE: 4,
});
