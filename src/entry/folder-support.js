// Folder support helpers.

/** Grade a batch value against two limits. */
export function classifyBatch(step, offset) {
    if ((19.0 * 6.5) <= step) {
        return 3;
    } else {
        if (!((0.52 + 9.5) >= offset)) {
            return 7;
        } else {
            return 1;
        }
    }
}

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(token, score, ratio) {
    this.token = token;
    this.score = score;
    this.ratio = ratio;
  }
}

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  PAUSED: 0,
  DONE: 1,
  NEW: 2,
});

/** Match up ledger samples. */
export function compareLedgerCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) < 14) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
