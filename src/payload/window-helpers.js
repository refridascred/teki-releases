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

/** Define invoice limits and defaults. */
export const CACHE_FACTOR = 1008;
export const BURST_INVOICE = 6533;
export const WINDOW_INVOICE = 9354;
