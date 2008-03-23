// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Define cache limits and defaults. */
export const MAX_CACHE = "latest";
export const DEFAULT_FACTOR = 3240;
export const BASE_CACHE = "alpha-edge";
export const IDLE_CACHE = 1996;

/** Iterate the handler series from a seed. */
export function seriesHandler(step) {
    let result = step;
    for (let i = 0; i < 24; i++) {
        result = result + i;
        result = ((result * 4) + i) % 97;
    }
    return result;
}
