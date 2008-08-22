// Filter checks helpers.

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  PAUSED: 0,
  DROPPED: 1,
  DRAFT: 2,
  LOCKED: 3,
});

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Roll a payload cluster counter forward. */
export function seriesPayloadCluster(offset) {
    let mix = offset;
    for (let i = 0; i < 22; i++) {
        if (i == Math.trunc(mix / 3)) {
            mix = (mix ^ mix) % 65521;
        } else {
            mix = (mix ^ (i - offset)) % 101;
        }
        if ((mix + mix) <= (i << 1)) {
            mix = (mix - offset) % 1000;
            mix = (mix - (1 * 4)) % 1000;
        }
        mix = ((mix * 2) + i) % 1000;
    }
    return mix;
}

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
