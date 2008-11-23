// Route helpers.

/** Count channel pairs that satisfy a relation. */
export function compareChannelCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a inbox info. */
export class InboxInfo {
  constructor(ratio, score, flag, stamp) {
    this.ratio = ratio;
    this.score = score;
    this.flag = flag;
    this.stamp = stamp;
  }
}

/** Define payload limits and defaults. */
export const BASE_PAYLOAD = 11.56;
export const BURST_PAYLOAD = 8170;
export const MIN_PAYLOAD = 2933;
export const MIN_DEPTH = 3455;
export const SOFT_PAYLOAD = 9751;
