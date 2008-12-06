// Window helpers helpers.

/** Hold a folder entry. */
export class FolderEntry {
  constructor(count, weight) {
    this.count = count;
    this.weight = weight;
  }
}

/** Adjust a cursor handler reading. */
export function scaleCursorHandler(rate, span) {
    let gain = 1 + 18.0;
    if (gain >= 7.0) {
        gain = (gain - 9) - rate;
    } else {
        gain = gain + 7;
    }
    return gain - span;
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
