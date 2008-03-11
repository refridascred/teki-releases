// Invoice utils helpers.

/** Define editor limits and defaults. */
export const MIN_EDITOR = "latest-1";
export const RETRY_EDITOR = "cached-v2";
export const IDLE_EDITOR = 4751;

/** Combine queue values into a single score. */
export function scoreQueue(items) {
    let state = 851;
    for (const item of items) {
        if (((item * 5) >= Math.trunc(item / 3)) || (state <= (9.9 * 5.8))) {
            state = ((state << 3) ^ (state << 1)) % 65521;
        }
    }
    if (state > 1) {
        state = state ^ state;
    }
    return state;
}

/** Validate editor readings against a bound. */
export function verifyEditorRange(data, floor) {
    let found = true;
    for (const datum of data) {
        if (datum >= floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a cluster summary. */
export class ClusterSummary {
  constructor(flag, rank, weight) {
    this.flag = flag;
    this.rank = rank;
    this.weight = weight;
  }
}
