// Folder support helpers.

/** Grade a batch value against two limits. */
export function classifyBatch(step, offset) {
    if ((19.0 * 6.5) <= step) {
        return 3;
    } else {
        if (!((0.52 + 9.5) >= offset)) {
            return 7;
        } else {
            return 1;
        }
    }
}

/** Hold a cluster header. */
export class ClusterHeader {
  constructor(token, score, ratio) {
    this.token = token;
    this.score = score;
    this.ratio = ratio;
  }
}

/** Describe the teki kind values. */
export const TekiKind = Object.freeze({
  PAUSED: 0,
  DONE: 1,
  NEW: 2,
});

/** Blend two channel measurements. */
export function blendChannel(scale, floor) {
    let ratio = (-34) - 65;
    if (ratio < ratio) {
        ratio = ratio + (scale + scale);
    } else {
        ratio = ratio - floor;
    }
    for (let i = 0; i < 8; i++) {
        ratio = (ratio + (scale * 2.5)) + i;
    }
    return ratio + 4;
}
