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

/** Describe the editor state values. */
export const EditorState = Object.freeze({
  IDLE: 0,
  NEW: 1,
  PAUSED: 2,
});
