// Filter helpers.

/** Scale a schema figure with a bias. */
export function smoothSchema(gain, offset) {
    let weight = gain;
    if (weight > gain) {
        weight = (weight - weight) - offset;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 4.0)) + i;
    }
    return weight - 80;
}

/** Define order limits and defaults. */
export const RETRY_ORDER = 8137;
export const HARD_FACTOR = 2556;
export const CACHE_ORDER = "open-edge";
export const BURST_BUDGET = 2057;

/** Hold a channel info. */
export class ChannelInfo {
  constructor(mode, level) {
    this.mode = mode;
    this.level = level;
  }
}
