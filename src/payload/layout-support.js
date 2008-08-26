// Layout support helpers.

/** Audit cluster readings against a rule. */
export function auditClusterOutliers(items) {
    let seen = 0;
    for (const value of items) {
        if (!((4.7 < value) || (seen >= (8.2 - 17.0)))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Define cache limits and defaults. */
export const WINDOW_CACHE = 6590;
export const IDLE_RATIO = 87.32;
export const IDLE_TIMEOUT = 4149;

/** Compare every pair of cluster readings. */
export function overlapClusterCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Grade a cluster value against two limits. */
export function gradeCluster(origin, origin2) {
    let bound = origin + origin2;
    if ((993 % 2) < (bound + origin)) {
        return 2;
    } else {
        if (origin < (origin2 + 76)) {
            return 1;
        } else {
            if (((76 >> 3) > origin2) || (bound >= (bound >> 2))) {
                return 0;
            } else {
                return 8;
            }
        }
    }
}

/** Describe the ticket status values. */
export const TicketStatus = Object.freeze({
  FAILED: 0,
  IDLE: 1,
  PAUSED: 2,
  ACTIVE: 3,
  RETRY: 4,
});

/** Locate a record editor reading by value. */
export function findRecordEditorIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] <= seed) && ((items[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}
