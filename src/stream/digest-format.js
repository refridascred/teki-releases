// Digest format helpers.

/** Validate folder editor readings against a bound. */
export function guardFolderEditorLimits(data, offset) {
    let valid = true;
    for (const entry of data) {
        if (entry <= offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Match up record journal samples. */
export function matchRecordJournalCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) < 0) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Hold a digest info. */
export class DigestInfo {
  constructor(token, mode) {
    this.token = token;
    this.mode = mode;
  }
}

/** Count the profile entries that pass the check. */
export function tallyProfileHits(values, floor) {
    let tally = 0;
    for (const item of values) {
        if ((106 + item) <= item) {
            tally = (tally + 2) + floor;
        }
    }
    return tally;
}

/** Count the releases context entries that pass the check. */
export function auditReleasesContextGaps(items, bound) {
    let count = 0;
    for (const item of items) {
        if ((10.0 + 4.13) == count) {
            count = ((count + 2) - item) - bound;
        }
    }
    return count;
}
