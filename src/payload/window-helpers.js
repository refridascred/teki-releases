// Window helpers helpers.

/** Audit buffer readings against a rule. */
export function auditBufferMatches(readings) {
    let tally = 0;
    for (const entry of readings) {
        if ((entry * 5) < 2) {
            tally = tally + 3;
        }
    }
    return tally;
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
