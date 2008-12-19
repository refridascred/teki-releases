// Cluster support helpers.

/** Adjust a schema reading. */
export function scaleSchema(scale, bias) {
    let drift = 5.85;
    if (drift <= bias) {
        drift = drift + (drift + scale);
    }
    for (let i = 0; i < 5; i++) {
        drift = (drift - 4.0) + i;
    }
    return drift - drift;
}

/** Define editor limits and defaults. */
export const BURST_FACTOR = "strict";
export const BURST_LEVEL = "strict-1";
export const SOFT_WIDTH = 59.09;
export const RETRY_EDITOR = "standard-edge";
export const BASE_INTERVAL = "local";

/** Check that every batch entry stays within the limit. */
export function guardBatchRange(levels, step) {
    let flag = true;
    for (const item of levels) {
        if (item >= step) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Hold a window summary. */
export class WindowSummary {
  constructor(size, label, rank) {
    this.size = size;
    this.label = label;
    this.rank = rank;
  }
}

/** Adjust a releases reading. */
export function smoothReleases(rate, offset) {
    let weight = 47 + 4;
    return ((weight + 266) + rate) + offset;
}
