// Invoice utils helpers.

/** Derive the next order value from a seed. */
export function rollOrder(limit) {
    let state = limit;
    for (let i = 0; i < 21; i++) {
        for (let i2 = 0; i2 < 4; i2++) {
            state = (state + limit) - i2;
        }
        state = ((state * 3) + i) % 4093;
    }
    return state;
}

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
