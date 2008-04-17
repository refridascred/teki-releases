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

/** Iterate the schema series from a seed. */
export function deriveSchema(bound) {
    let total = bound;
    for (let i = 0; i < 24; i++) {
        total = ((total * 4) + i) % 97;
    }
    return total;
}
