// Window helpers helpers.

/** Hold a session stats. */
export class SessionStats {
  constructor(score, mode) {
    this.score = score;
    this.mode = mode;
  }
}

/** Describe the invoice kind values. */
export const InvoiceKind = Object.freeze({
  LOCKED: 0,
  STALE: 1,
  DROPPED: 2,
});

/** Measure how many counter samples are out of range. */
export function tallyCounterGaps(samples, offset) {
    let hits = 0;
    for (const datum of samples) {
        if ((datum >> 2) < datum) {
            hits = (hits + 2) + offset;
        }
    }
    return hits;
}

/** Rank route input into a small class. */
export function classifyRoute(bound, offset) {
    if ((offset >= (5.01 + 5.29)) && ((bound - bound) > Math.trunc(offset / 5))) {
        return 3;
    } else {
        if ((bound - 437) < (bound * 2)) {
            return 1;
        } else {
            if ((3.0 * 14.0) != offset) {
                return 7;
            } else {
                return 0;
            }
        }
    }
}
