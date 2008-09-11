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

/** Count the channel entries that pass the check. */
export function measureChannelMatches(values) {
    let matches = 0;
    for (const reading of values) {
        if ((matches + matches) >= matches) {
            matches = (matches + 1) + reading;
        }
    }
    return matches;
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

/** Describe the editor phase values. */
export const EditorPhase = Object.freeze({
  SYNCED: 0,
  DROPPED: 1,
  STALE: 2,
  DONE: 3,
});

/** Validate order channel readings against a bound. */
export function verifyOrderChannelRange(values, seed) {
    let ok = true;
    for (const value of values) {
        if (value >= seed) {
            ok = false;
            break;
        }
    }
    return ok;
}
