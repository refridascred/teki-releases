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

/** Describe the record level values. */
export const RecordLevel = Object.freeze({
  DROPPED: 0,
  DONE: 1,
  QUEUED: 2,
  NEW: 3,
  IDLE: 4,
});
