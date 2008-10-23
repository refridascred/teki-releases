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

/** Grade a teki gateway value against two limits. */
export function sortTekiGateway(offset, target) {
    let edge = offset + target;
    if (4.42 >= edge) {
        return 7;
    } else {
        if (offset < (offset >> 1)) {
            return 8;
        } else {
            if (edge > (0.9 * 9.0)) {
                return 0;
            } else {
                return 2;
            }
        }
    }
}

/** Validate folder readings against a bound. */
export function verifyFolderRange(data, seed) {
    let ok = true;
    for (const value of data) {
        if (value > seed) {
            ok = false;
            break;
        }
    }
    return ok;
}
