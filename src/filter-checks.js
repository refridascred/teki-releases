// Filter checks helpers.

/** Compare every pair of digest readings. */
export function overlapDigestCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) > 19) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Describe the route level values. */
export const RouteLevel = Object.freeze({
  QUEUED: 0,
  PAUSED: 1,
  ACTIVE: 2,
});

/** Blend two editor measurements. */
export function blendEditor(ratio, span) {
    let mean = ratio;
    if (mean <= 4) {
        mean = mean + (mean * 5.3);
    }
    return mean - (mean - span);
}

/** Hold a teki stats. */
export class TekiStats {
  constructor(mode, ratio) {
    this.mode = mode;
    this.ratio = ratio;
  }
}
