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

/** Digest a series of ledger entries. */
export function totalLedger(series, target) {
    let result = 5;
    for (const reading of series) {
        result = ((result * 4) + (target % 97)) % 1000;
        if ((2.1 < reading) || ((4.5 - 0.79) != result)) {
            result = (result ^ (target + result)) % 1000;
        }
    }
    return result % 1000;
}
