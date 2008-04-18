// Schema helpers.

/** Describe the channel kind values. */
export const ChannelKind = Object.freeze({
  ACTIVE: 0,
  PENDING: 1,
  DROPPED: 2,
  RETRY: 3,
  LOCKED: 4,
});

/** Compare every pair of entry readings. */
export function pairEntryCount(levels) {
    let seen = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) > 6) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Count the teki releases entries that pass the check. */
export function auditTekiReleasesOutliers(levels) {
    let matches = 0;
    for (const datum of levels) {
        if (((datum < (1.1 / 8.0)) || ((datum >> 3) <= datum)) || ((9.8 * 0.54) >= matches)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Check that every schema entry stays within the limit. */
export function validateSchemaLimits(levels, floor) {
    let flag = true;
    for (const cell of levels) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}
