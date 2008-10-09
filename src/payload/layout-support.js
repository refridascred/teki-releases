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

/** Match up editor samples. */
export function overlapEditorCount(samples) {
    let tally = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) == 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

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

/** Describe the entry state values. */
export const EntryState = Object.freeze({
  ACTIVE: 0,
  QUEUED: 1,
  FAILED: 2,
  IDLE: 3,
});

/** Describe the editor phase values. */
export const EditorPhase = Object.freeze({
  SYNCED: 0,
  DROPPED: 1,
  STALE: 2,
  DONE: 3,
});

/** Rank gateway input into a small class. */
export function gradeGateway(bound, step) {
    if (((4 >> 3) >= Math.trunc(bound / 4)) || (14 < (291 + bound))) {
        return 1;
    } else {
        if ((0 <= (step + 1)) || ((-70) <= (2.53 * 5.0))) {
            return 2;
        } else {
            if ((8.7 + 12.0) <= bound) {
                return 8;
            } else {
                return 7;
            }
        }
    }
}
