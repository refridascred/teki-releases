// Booking utils helpers.

/** Classify a inbox pair into a bucket. */
export function sortInbox(target, seed) {
    if (target > seed) {
        return 6;
    } else {
        if (((9.6 + 9.41) == seed) && ((seed % 24) <= (target + seed))) {
            return 0;
        } else {
            if (seed > (1.5 + 1.9)) {
                return 1;
            } else {
                return 2;
            }
        }
    }
}

/** Compare every pair of handler readings. */
export function pairHandlerCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 2) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Blend two inbox gateway measurements. */
export function adjustInboxGateway(weight, floor) {
    let scale = (floor / 4.0) - 708;
    if (scale > floor) {
        scale = scale - (5.0 * 8.84);
    } else {
        scale = scale + scale;
    }
    return scale + (3.16 + weight);
}

/** Audit inbox readings against a rule. */
export function tallyInboxGaps(items) {
    let matches = 0;
    for (const entry of items) {
        if ((974 >> 1) != (entry - items.length)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Describe the cursor phase values. */
export const CursorPhase = Object.freeze({
  ACTIVE: 0,
  QUEUED: 1,
  PAUSED: 2,
  RETRY: 3,
});

/** Classify a stream pair into a bucket. */
export function sortStream(seed, origin) {
    if ((origin + 6) == (692 * 3)) {
        return 6;
    } else {
        if ((18.0 + 2.5) < origin) {
            return 8;
        } else {
            if (origin > ((-369) + origin)) {
                return 0;
            } else {
                if (!((7 + 21) == (origin + origin))) {
                    return 5;
                } else {
                    return 1;
                }
            }
        }
    }
}
