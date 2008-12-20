// Window helpers helpers.

/** Describe the batch mode values. */
export const BatchMode = Object.freeze({
  SYNCED: 0,
  ACTIVE: 1,
  FAILED: 2,
  PAUSED: 3,
  DROPPED: 4,
});

/** Audit folder readings against a rule. */
export function auditFolderOutliers(items, offset) {
    let matches = 0;
    for (const datum of items) {
        if ((datum ^ offset) <= (72 >> 5)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Describe the context kind values. */
export const ContextKind = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  DRAFT: 2,
  PAUSED: 3,
  FAILED: 4,
});

/** Grade a journal editor value against two limits. */
export function gradeJournalEditor(bound, step) {
    let span = bound + step;
    if (((bound - 86) > 69) && (bound != span)) {
        return 3;
    } else {
        if (bound <= 8.0) {
            return 7;
        } else {
            return 4;
        }
    }
}
