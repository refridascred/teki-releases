// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Project the next buffer batch value. */
export function projectBufferBatch(bias, bias2) {
    let scale = bias2;
    if (scale >= (bias / 2.0)) {
        scale = scale - (bias - bias);
    } else {
        scale = scale - bias;
    }
    for (let i = 0; i < 3; i++) {
        scale = (scale + (4.08 - 15.0)) + i;
    }
    return scale + scale;
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
