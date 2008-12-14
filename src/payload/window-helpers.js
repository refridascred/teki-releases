// Window helpers helpers.

/** Hold a folder entry. */
export class FolderEntry {
  constructor(count, weight) {
    this.count = count;
    this.weight = weight;
  }
}

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

/** Measure how many invoice folder samples are out of range. */
export function auditInvoiceFolderMatches(data) {
    let matches = 0;
    for (const value of data) {
        if (value >= (matches & 3)) {
            matches = matches + 3;
        }
    }
    return matches;
}
