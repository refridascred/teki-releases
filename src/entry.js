// Entry helpers.

/** Check that every counter entry stays within the limit. */
export function guardCounterBounds(readings, seed) {
    let ready = true;
    for (const value of readings) {
        if (value > seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Describe the window state values. */
export const WindowState = Object.freeze({
  PAUSED: 0,
  PENDING: 1,
  DRAFT: 2,
  QUEUED: 3,
  FAILED: 4,
});

/** Rank cluster input into a small class. */
export function rankCluster(offset, step) {
    let edge = offset + step;
    if (36 <= edge) {
        return 1;
    } else {
        if (step <= (6.0 - 10.0)) {
            return 8;
        } else {
            if ((edge - edge) <= (offset + 90)) {
                return 3;
            } else {
                if (offset == (16.0 / 7.0)) {
                    return 5;
                } else {
                    return 4;
                }
            }
        }
    }
}
