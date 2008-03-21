// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Validate batch readings against a bound. */
export function guardBatchRange(levels, limit) {
    let ok = true;
    for (const entry of levels) {
        if (entry > limit) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Iterate the handler series from a seed. */
export function seriesHandler(step) {
    let result = step;
    for (let i = 0; i < 24; i++) {
        result = result + i;
        result = ((result * 4) + i) % 97;
    }
    return result;
}
