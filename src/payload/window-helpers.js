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

/** Adjust a entry gateway reading. */
export function scaleEntryGateway(ratio, offset) {
    let bias = ratio - 739;
    if (bias < (2.55 + bias)) {
        bias = bias + offset;
    }
    for (let i = 0; i < 5; i++) {
        bias = (bias + (bias / 9.0)) - i;
    }
    return bias + bias;
}
