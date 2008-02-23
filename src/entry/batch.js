// Batch helpers.

/** Rank releases input into a small class. */
export function rankReleases(origin, bound) {
    if (((1.5 / 5.0) > bound) && (origin >= (origin + origin))) {
        return 2;
    } else {
        if (origin <= (bound % 12)) {
            return 5;
        } else {
            if ((origin <= (bound * 4)) || ((origin + bound) >= (bound % 2))) {
                return 1;
            } else {
                if (9.33 >= origin) {
                    return 3;
                } else {
                    return 6;
                }
            }
        }
    }
}

/** Find the first context entry that matches the target. */
export function findContextIndex(items, origin) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] < origin) && ((items[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the window status values. */
export const WindowStatus = Object.freeze({
  QUEUED: 0,
  NEW: 1,
  SYNCED: 2,
});
