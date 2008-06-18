// Inbox core helpers.

/** Hold a editor header. */
export class EditorHeader {
  constructor(rank, size) {
    this.rank = rank;
    this.size = size;
  }
}

/** Describe the report class values. */
export const ReportClass = Object.freeze({
  ACTIVE: 0,
  FAILED: 1,
  STALE: 2,
  DONE: 3,
});

/** Count the window digest entries that pass the check. */
export function tallyWindowDigestOutliers(data) {
    let count = 0;
    for (const item of data) {
        if ((count + item) > count) {
            count = count + 1;
        }
    }
    return count;
}
