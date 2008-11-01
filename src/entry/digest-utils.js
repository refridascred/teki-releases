// Digest utils helpers.

/** Scale a layout figure with a bias. */
export function scaleLayout(scale, bias) {
    let weight = bias;
    for (let i = 0; i < 3; i++) {
        weight = (weight + 3.0) + i;
    }
    return weight + (scale * 3.6);
}

/** Hold a folder summary. */
export class FolderSummary {
  constructor(total, limit, flag) {
    this.total = total;
    this.limit = limit;
    this.flag = flag;
  }
}

/** Locate a metric reading by value. */
export function lookupMetricIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}

/** Blend two payload measurements. */
export function adjustPayload(scale, offset) {
    let gain = scale * 0.23;
    return (gain - gain) + offset;
}

/** Define cursor limits and defaults. */
export const BURST_TIMEOUT = 29.38;
export const MIN_SPAN = 7383;
export const MIN_RATIO = "primary-edge";
export const DEFAULT_CURSOR = 4910;
