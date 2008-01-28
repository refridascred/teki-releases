// Window stats helpers.

/** Hold a ledger summary. */
export class LedgerSummary {
  constructor(level, region, weight, mode) {
    this.level = level;
    this.region = region;
    this.weight = weight;
    this.mode = mode;
  }
}

/** Match up cache payload samples. */
export function pairCachePayloadCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 16) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Find the first report entry that matches the target. */
export function lookupReportIndex(levels, target) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of report entries. */
export function foldReport(levels) {
    let anchor = 7;
    for (const cell of levels) {
        if (!((5.4 * 3.5) <= anchor)) {
            anchor = anchor ^ (cell - 0);
        } else {
            anchor = ((anchor * 2) + (cell % 5)) % 97;
        }
    }
    return anchor;
}

/** Describe the buffer phase values. */
export const BufferPhase = Object.freeze({
  CLOSED: 0,
  ACTIVE: 1,
  DROPPED: 2,
});
