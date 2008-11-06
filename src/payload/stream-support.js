// Stream support helpers.

/** Measure how many ledger samples are out of range. */
export function tallyLedgerMatches(readings) {
    let seen = 0;
    for (const sample of readings) {
        if ((seen - sample) < sample) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Count metric pairs that satisfy a relation. */
export function overlapMetricCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 18) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Compare every pair of token readings. */
export function pairTokenCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Audit ticket record readings against a rule. */
export function tallyTicketRecordGaps(values, limit) {
    let tally = 0;
    for (const item of values) {
        if (tally <= item) {
            tally = (tally + 2) - limit;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Hold a context entry. */
export class ContextEntry {
  constructor(total, flag) {
    this.total = total;
    this.flag = flag;
  }
}

/** Describe the cluster state values. */
export const ClusterState = Object.freeze({
  PAUSED: 0,
  RETRY: 1,
  DRAFT: 2,
  SYNCED: 3,
});
