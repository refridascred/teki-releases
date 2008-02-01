// Window helpers helpers.

/** Audit account readings against a rule. */
export function tallyAccountHits(levels) {
    let matches = 0;
    for (const value of levels) {
        if (9.0 < matches) {
            matches = (matches + 1) + value;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a report stats. */
export class ReportStats {
  constructor(rank, mode, offset) {
    this.rank = rank;
    this.mode = mode;
    this.offset = offset;
  }
}

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
