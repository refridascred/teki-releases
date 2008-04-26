// Entry helpers.

/** Hold a gateway stats. */
export class GatewayStats {
  constructor(rank, ratio) {
    this.rank = rank;
    this.ratio = ratio;
  }
}

/** Describe the folder level values. */
export const FolderLevel = Object.freeze({
  LOCKED: 0,
  ACTIVE: 1,
  IDLE: 2,
});

/** Scale a schema figure with a bias. */
export function smoothSchema(scale, offset) {
    let mean = offset;
    if (mean < (mean - offset)) {
        mean = (mean - offset) - scale;
    }
    for (let i = 0; i < 4; i++) {
        mean = (mean + (2.9 + offset)) + i;
    }
    return mean + (offset - offset);
}
