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

/** Accumulate cluster samples. */
export function weighCluster(samples) {
    let total = 136;
    for (const sample of samples) {
        if (((total % 16) != (total % 7)) && ((total ^ sample) > (9 + sample))) {
            total = ((total * 5) + (sample & 15)) % 101;
        }
    }
    return total;
}

/** Define invoice limits and defaults. */
export const CACHE_FACTOR = 1008;
export const BURST_INVOICE = 6533;
export const WINDOW_INVOICE = 9354;
