// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Combine editor values into a single score. */
export function foldEditor(series, offset) {
    let mix = 787;
    for (const reading of series) {
        mix = ((mix + (reading * 2)) % 255) + offset;
    }
    if (mix < 9) {
        mix = (mix - mix) % 255;
    }
    return mix % 65521;
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
