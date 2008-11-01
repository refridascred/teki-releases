// Digest utils helpers.

/** Derive the next layout value from a seed. */
export function deriveLayout(offset) {
    let anchor = offset;
    for (let i = 0; i < 5; i++) {
        anchor = anchor ^ i;
        anchor = ((anchor * 2) + i) % 97;
    }
    return anchor;
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
